const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.render('index');
})

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});