import mongoose, { Document } from "mongoose";
import bcrypt from "bcryptjs";
import { Schema } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    avatar: string;
    role: 'user' | 'admin' | 'super_admin' | 'dev';
    resetPasswordToken?: string;
    resetPasswordExpires?: Date;
    lastLogin?: Date;
    loginAttempts: number;
    lockUntil?: Date;
    integrations: {}
    comparePassword(candidatePassword: string): Promise<boolean>;
    createdAt: Date;
}

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email',
        ],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [8, 'Password must be at least 8 characters'],
      select: false,
    },
    avatar: {
      type: String,
      default: '',
    },
    role: {
        type: String,
        enum: ["user", "admin", "super_admin", "dev"],
        default: "user"
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    lastLogin: Date,
    loginAttempts: {
      type: Number,
      default: 0,
    },
    lockUntil: Date,
    integrations: {},
    createdAt: {
        type: Date,

    }
}, {
    timestamps: true
});

// Hash password before saving
UserSchema.pre('save', async function(next){
    if (!this.isModified('password')) {
        return next()
    }

    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// compare password method
UserSchema.methods.comparePassword = async function(
    candidatePassword: string,
) {
    return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model<IUser>('User', UserSchema);