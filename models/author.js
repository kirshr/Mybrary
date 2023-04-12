const mongoose = require('mongoose');

// Author Schema: A schema is essentially a table on a normal SQL database
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Author', authorSchema);
