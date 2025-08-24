import mongoose, { Document, Schema } from 'mongoose';

export interface IEmergency extends Document {
  title: string;
  description: string;
  type: 'natural_disaster' | 'infrastructure' | 'health' | 'security' | 'other';
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'active' | 'monitoring' | 'resolved';
  location: {
    latitude: number;
    longitude: number;
    address: string;
    radius: number; // affected area in meters
  };
  communityId: string;
  reportedBy: string; // User ID
  assignedTo: string[]; // Array of User IDs
  resources: {
    resourceId: string;
    quantity: number;
    status: 'requested' | 'allocated' | 'deployed';
  }[];
  timeline: {
    timestamp: Date;
    action: string;
    userId: string;
    details: string;
  }[];
  aiPredictions: {
    riskScore: number;
    impactRadius: number;
    estimatedDuration: number; // in hours
    recommendedActions: string[];
    confidence: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

const EmergencySchema = new Schema<IEmergency>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: {
    type: String,
    enum: ['natural_disaster', 'infrastructure', 'health', 'security', 'other'],
    required: true
  },
  severity: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'monitoring', 'resolved'],
    default: 'active'
  },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    address: { type: String, required: true },
    radius: { type: Number, default: 1000 }
  },
  communityId: { type: String, required: true },
  reportedBy: { type: String, required: true },
  assignedTo: [{ type: String }],
  resources: [{
    resourceId: { type: String, required: true },
    quantity: { type: Number, required: true },
    status: {
      type: String,
      enum: ['requested', 'allocated', 'deployed'],
      default: 'requested'
    }
  }],
  timeline: [{
    timestamp: { type: Date, default: Date.now },
    action: { type: String, required: true },
    userId: { type: String, required: true },
    details: { type: String }
  }],
  aiPredictions: {
    riskScore: { type: Number, min: 0, max: 100 },
    impactRadius: { type: Number },
    estimatedDuration: { type: Number },
    recommendedActions: [{ type: String }],
    confidence: { type: Number, min: 0, max: 1 }
  }
}, {
  timestamps: true
});

export default mongoose.model<IEmergency>('Emergency', EmergencySchema);