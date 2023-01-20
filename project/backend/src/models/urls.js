const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    originalUrl: { type: String, required: true },
    shortId: { type: String, required: true, unique: true },
    accessCount: { type: Number, default: 0 }
});

const Url = mongoose.model('Url', urlSchema);
module.exports = Url;
