const express = require('express');
const { Todo } = require('../models/todo');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

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

app.get('/todos/:id', (req, res) => {
    Todo.findById(id).then( (todo) => {
        res.send(todo);
    }, (error) => {
        res.send(error);
    });
});

app.listen(port, () => {
   console.log('Express server started'); 
});
