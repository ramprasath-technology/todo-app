const { mongoose } = require('../database/mongoose-connection');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    },
    completed:{
        type: Boolean,
        completed: false
    },
    completedAt:{
        type: Number,
        default: null
    }
});

module.exports = {
    Todo
}