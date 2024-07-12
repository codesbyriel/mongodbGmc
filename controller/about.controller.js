const get_about_page = function(req, res){
    res.render('about', {
        layout: 'about'
    })
};

module.exports = {
    get_about_page
}
