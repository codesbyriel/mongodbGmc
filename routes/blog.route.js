const express = require('express');
const{ get_blog_page, create_blog, get_all_blogs, get_blog, edit_blog} = require('../controller/blog.controller.js')



//routes instance
const routes = express.Router()

routes.get('/', get_blog_page);
routes.post('/create-post', create_blog);
routes.get('/fecth_blogs', get_all_blogs);
routes.get('/fecth_blog/:id', get_blog);
// routes.put('/fetch_blog/:id', edit_blog)

module.exports = {
    blog_routes: routes
}