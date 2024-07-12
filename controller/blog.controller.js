const { blogModel } = require('../model/blog.model.js')


const get_blog_page = function(req, res){
    res.render('blogs', {
        layout: 'blogs'
    })
}


const create_blog = async function(req,res){
    console.log(req.body)
    


    const title_body = req.body.title;
    const content_body = req.body.content;
    const tags_body = req.body.tags;
    
    if (title_body === "" || content_body === "" || tags_body.length === 0){
        
        res.send('Please input all fields'); //RETURN
        
    }
    
    const blog_created = await blogModel.create({
        title: title_body,
        content: content_body,
        tags: tags_body
    });
    
    console.log(blog_created);

    res.redirect('/blogs')
}


const get_all_blogs = async (req, res) => {
    const blog = await blogModel.find();

    res.send({'blogModel': blog })
}

const get_blog = async (req, res) => {
    const id = req.params.id;

    const blog = await blogModel.findById(id);

    res.send(blog)
}

module.exports = {
    get_blog_page,
    create_blog,
    get_all_blogs,
    get_blog,
}