import * as tf from '@tensorflow/tfjs-node';
import axios from 'axios';

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
  precipitation: number;
}

interface RiskPrediction {
  riskScore: number;
  impactRadius: number;
  estimatedDuration: number;
  recommendedActions: string[];
  confidence: number;
}

class AIService {
  private riskModel: tf.LayersModel | null = null;
  private weatherApiKey: string;

  constructor() {
    this.weatherApiKey = process.env.WEATHER_API_KEY || '';
  }

  async initializeAI(): Promise<void> {
    try {
      // Create a simple neural network for risk assessment
      this.riskModel = tf.sequential({
        layers: [
          tf.layers.dense({ inputShape: [8], units: 16, activation: 'relu' }),
          tf.layers.dropout({ rate: 0.2 }),
          tf.layers.dense({ units: 8, activation: 'relu' }),
          tf.layers.dense({ units: 1, activation: 'sigmoid' })
        ]
      });

      this.riskModel.compile({
        optimizer: 'adam',
        loss: 'binaryCrossentropy',
        metrics: ['accuracy']
      });

      console.log('AI models initialized successfully');
    } catch (error) {
      console.error('Failed to initialize AI models:', error);
    }
  }

  async getWeatherData(lat: number, lon: number): Promise<WeatherData | null> {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.weatherApiKey}&units=metric`
      );

      const data = response.data;
      return {
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        pressure: data.main.pressure,
        precipitation: data.rain?.['1h'] || 0
      };
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
      return null;
    }
  }

  async predictRisk(
    emergencyType: string,
    location: { latitude: number; longitude: number },
    severity: string,
    populationDensity: number = 1000
  ): Promise<RiskPrediction> {
    try {
      const weather = await this.getWeatherData(location.latitude, location.longitude);
      
      // Create feature vector
      const features = [
        this.encodeEmergencyType(emergencyType),
        this.encodeSeverity(severity),
        weather?.temperature || 20,
        weather?.humidity || 50,
        weather?.windSpeed || 5,
        weather?.pressure || 1013,
        weather?.precipitation || 0,
        populationDensity / 10000 // normalize
      ];

      if (this.riskModel) {
        const prediction = this.riskModel.predict(tf.tensor2d([features])) as tf.Tensor;
        const riskScore = (await prediction.data())[0] * 100;
        
        return {
          riskScore: Math.round(riskScore),
          impactRadius: this.calculateImpactRadius(riskScore, emergencyType),
          estimatedDuration: this.estimateDuration(emergencyType, riskScore),
          recommendedActions: this.getRecommendedActions(emergencyType, riskScore),
          confidence: 0.75 + (Math.random() * 0.2) // Simulated confidence
        };
      }
    } catch (error) {
      console.error('Risk prediction failed:', error);
    }

    // Fallback prediction
    return this.getFallbackPrediction(emergencyType, severity);
  }

  private encodeEmergencyType(type: string): number {
    const types = {
      'natural_disaster': 0.9,
      'infrastructure': 0.6,
      'health': 0.7,
      'security': 0.5,
      'other': 0.3
    };
    return types[type as keyof typeof types] || 0.3;
  }

  private encodeSeverity(severity: string): number {
    const severities = {
      'low': 0.25,
      'medium': 0.5,
      'high': 0.75,
      'critical': 1.0
    };
    return severities[severity as keyof typeof severities] || 0.5;
  }

  private calculateImpactRadius(riskScore: number, type: string): number {
    const baseRadius = {
      'natural_disaster': 5000,
      'infrastructure': 2000,
      'health': 1000,
      'security': 500,
      'other': 1000
    };
    
    const base = baseRadius[type as keyof typeof baseRadius] || 1000;
    return Math.round(base * (riskScore / 100));
  }

  private estimateDuration(type: string, riskScore: number): number {
    const baseDuration = {
      'natural_disaster': 48,
      'infrastructure': 12,
      'health': 24,
      'security': 6,
      'other': 8
    };
    
    const base = baseDuration[type as keyof typeof baseDuration] || 8;
    return Math.round(base * (riskScore / 50));
  }

  private getRecommendedActions(type: string, riskScore: number): string[] {
    const actions = {
      'natural_disaster': [
        'Evacuate affected areas',
        'Set up emergency shelters',
        'Deploy search and rescue teams',
        'Coordinate with emergency services'
      ],
      'infrastructure': [
        'Isolate affected systems',
        'Deploy repair crews',
        'Set up alternative services',
        'Monitor system status'
      ],
      'health': [
        'Implement quarantine measures',
        'Deploy medical teams',
        'Set up testing centers',
        'Coordinate with health authorities'
      ],
      'security': [
        'Secure the area',
        'Deploy security personnel',
        'Coordinate with law enforcement',
        'Monitor situation'
      ],
      'other': [
        'Assess the situation',
        'Deploy appropriate resources',
        'Monitor developments',
        'Coordinate response'
      ]
    };

    const typeActions = actions[type as keyof typeof actions] || actions.other;
    
    if (riskScore > 75) {
      return typeActions;
    } else if (riskScore > 50) {
      return typeActions.slice(0, 3);
    } else {
      return typeActions.slice(0, 2);
    }
  }

  private getFallbackPrediction(type: string, severity: string): RiskPrediction {
    const severityMultiplier = {
      'low': 0.3,
      'medium': 0.5,
      'high': 0.7,
      'critical': 0.9
    };

    const multiplier = severityMultiplier[severity as keyof typeof severityMultiplier] || 0.5;
    const baseRisk = 50;

    return {
      riskScore: Math.round(baseRisk * multiplier * 100),
      impactRadius: this.calculateImpactRadius(baseRisk * multiplier * 100, type),
      estimatedDuration: this.estimateDuration(type, baseRisk * multiplier * 100),
      recommendedActions: this.getRecommendedActions(type, baseRisk * multiplier * 100),
      confidence: 0.6
    };
  }
}

const aiService = new AIService();

export const initializeAI = () => aiService.initializeAI();
export const predictRisk = (type: string, location: any, severity: string, population?: number) => 
  aiService.predictRisk(type, location, severity, population);
export default aiService;