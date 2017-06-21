const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', function(req, res){
    res.render('index');
});

app.get(':operator:first:second', function(req, res) {
    var result;
    var math = function(operator, first, second){
        if (req.params.operator === "add"){
            result = parseInt(req.params.first) + parseInt(req.params.second);
            res.send(result);
        }
        else if (req.params.operator === "subtract"){
            result = parseInt(req.params.first) - parseInt(req.params.second);
            res.send(result);
        }
        else if (req.params.operator === "multiply"){
            result = req.params.first * req.params.second;
            res.send(result);
        }
        else if (req.params.operator === "divide"){
            result = req.params.first / req.params.second;
            res.send(result);
        }
    }
    console.log(req.params.operator);
});


    














app.listen(3000);