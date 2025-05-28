import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'Username is required'],
        unique: true,
        trim: true,
        minlength: [3,'Username must be at least 3 characters long'],
    },
    email: {
        type: String,
        required: [true,'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true,'Password is required'],
        minlength: [8,'Password must be at least 8 characters long'],
        select: false
    },
    role: {
        type: String,
        enum: ['viewer','user','admin'],
        default: 'viewer'
    },
    lastLogin: {
        type: Date,
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
    failedLoginAttempts: {
        type: Number,
        default: 0
    },
    accountLocked: {
        type: Boolean,
        default: false
    },
    accountLockedUntil: Date,
},{
    timestamps: true
});

userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
})

userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.registerLoginAttempt = async function(success){
    if(success){
        this.failedLoginAttempts = 0;
        this.accountLocked = false;
        this.accountLockedUntil = null;
        this.lastLogin = Date.now();
    } else {
        this.failedLoginAttempts += 1;
        if(this.failedLoginAttempts >= 5){
            this.accountLocked = true;
            this.accountLockedUntil = new Date(Date.now()+ 15*60*1000);
        }
    }

    await this.save();
    return this.accountLocked;
}

userSchema.methods.isAccountLocked = function(){
    if(!this.accountLocked) return false;
    if(Date.now() > this.accountLockedUntil){
        this.accountLocked = false;
        this.accountLockedUntil = null;
        this.failedLoginAttempts = 0;
        return false;
    }
    return true;
}

export default mongoose.model('User', userSchema);