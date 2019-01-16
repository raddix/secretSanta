const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const getCandidate = require('./getCandidate');

var fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

var records = {};

app.get('/', function (req, res) {
    var data = fs.readFileSync('records.json');
    if(data!='') {
        records = JSON.parse(data);
    }
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    var current = records[ip];
    if(current!=undefined) {
        res.render('alreadySeen',current);
    }
    else {
        res.render('index');
    }
});

app.post('/', function (req, res) {

    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;

    var name = req.body.item;
    var candidate = getCandidate.getPartnerName(name);

    var currentData = {santa : name, kid : candidate};

    records[ip] = currentData;
    var data = JSON.stringify(records,null,2);
    fs.writeFile('records.json',data,finished);

    function finished(err){
        if(err) {
            console.log(err);
        }
    }

    res.render('showResult',{cand:candidate});
});

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});