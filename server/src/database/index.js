import mongoose from 'mongoose';

class Database {
    constructor() {
        this.mongo();
    }

    mongo() {
        this.connection = mongoose.connect(
            process.env.MONGO_URL,
            { useNewUrlParser: true, useFindAndModify: true }
        );
    }
}

export default new Database();