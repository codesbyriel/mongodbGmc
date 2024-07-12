const express = require("express");
const { engine } = require("express-handlebars");


const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { blogModel } = require("./model/blog.model");//impo rting blog.model.js


const {blog_routes} = require('./routes/blog.route.js');
const {about_routes} = require('./routes/about.route.js');


const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));

app.use(express.urlencoded());



const middleware = function(req, res, next){
    console.log(req)

    next()
}




app.get('/', function(req,res){
    res.render("index")
});

app.get('/contact', function(req, res){
    res.render('contact', {
        layout: "contact"  
    })
});


app.use('/blogs', blog_routes);
app.use('/about', about_routes);


app.listen(5000, function(){
    console.log('This server is running on PORT 5000')
})

//connection
const CONNECTION_URL = 'mongodb+srv://blogs:mongodb@gabriel.3z0wwkz.mongodb.net/?retryWrites=true&w=majority&appName=GABRIELL'

mongoose.connect(CONNECTION_URL)
.then(() => {
    console.log('MONGODB CONNECTED SUCCESSFULLY')
})
.catch((error) => {
    console.log(error)
})