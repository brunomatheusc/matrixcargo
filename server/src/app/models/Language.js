import mongoose from 'mongoose';

const LanguageSchema = new mongoose.Schema({
    language: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model('Language', LanguageSchema);