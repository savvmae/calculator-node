const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/:operator/:first/:second', function(req, res) {
    var result;
    var operator = req.params.operator;
    var first = parseInt(req.params.first);
    var second = parseInt(req.params.second);

    if (operator === "add"){
        result = first + second;
        res.send(result.toString());
    }
    else if (operator === "subtract"){
        result = first - second;
        res.send(result.toString());
    }
    else if (operator === "multiply"){
        result = first * second;
        res.send(result.toString());
    }
    else if (operator === "divide"){
        result = first / second;
        res.send(result.toString());
    }
    else {
        res.send("try again, foo");
    }
});


    














app.listen(3000);