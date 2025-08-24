import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  role: 'citizen' | 'volunteer' | 'coordinator' | 'admin';
  communityId: string;
  skills: string[];
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  availability: {
    status: 'available' | 'busy' | 'emergency';
    lastUpdated: Date;
  };
  emergencyContacts: {
    name: string;
    phone: string;
    relationship: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['citizen', 'volunteer', 'coordinator', 'admin'],
    default: 'citizen'
  },
  communityId: { type: String, required: true },
  skills: [{ type: String }],
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    address: { type: String, required: true }
  },
  availability: {
    status: { 
      type: String, 
      enum: ['available', 'busy', 'emergency'],
      default: 'available'
    },
    lastUpdated: { type: Date, default: Date.now }
  },
  emergencyContacts: [{
    name: { type: String, required: true },
    phone: { type: String, required: true },
    relationship: { type: String, required: true }
  }]
}, {
  timestamps: true
});

export default mongoose.model<IUser>('User', UserSchema);