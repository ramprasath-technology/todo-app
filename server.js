const express = require('express');

const app = new express();

app.get('/', (req, res) => {
    res.send('app started');
});

app.listen(3000, () => {
   console.log('Express server started'); 
});
