import mongoose from 'mongoose';

const RepositorySchema = new mongoose.Schema({
    repoId: {
        type: Number,
        required: id
    },
    languages: {
        type: [String],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model('Repository', RepositorySchema);