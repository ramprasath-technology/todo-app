const express = require('express');
const { Todo } = require('../models/todo');
const bodyParser = require('body-parser');

const app = new express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('app started');
});

app.post('/todos',(req,res) => {
    var todo = new Todo({
        text: req.body.text,
    });

    todo.save().then( (doc) => {
        res.send(doc);
    }, (error) => {
        res.send(error);
    });  
});

app.get('/todos',(req, res) => {
    Todo.find().then((todos) => {
        res.send(todos);
    }, (error) => {
        res.send(error);
    });
});

app.listen(3000, () => {
   console.log('Express server started'); 
});
