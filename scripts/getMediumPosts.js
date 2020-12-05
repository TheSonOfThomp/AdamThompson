const fs = require('fs');
const { get } = require('axios');
const { JSDOM } = require("jsdom");
const { posts } = require('../data/medium-posts.json');

(async () => {
  const allPostsPromises = posts.map(async (post) => {
    if (!!post.isCrawled) {
      return post
    } else {
      let resp;
      try {
        resp = await get(post.url)
      } catch (error) {
        throw new Error('Error fetching post', post)
      }
      const dom = new JSDOM(resp.data)
      return {
        "url": post.url,
        "title": dom.window.document.querySelector('title').innerHTML.replace(/( \- Adam.+)/, ''),
        "description": dom.window.document.querySelector('meta[name="description"]')
          ? dom.window.document.querySelector('meta[name="description"]').getAttribute('content')
          : null,
        "imageUrl": dom.window.document.querySelector('meta[property="og:image"]') 
          ? dom.window.document.querySelector('meta[property="og:image"]').getAttribute('content') 
          : null,
        "datePublished": dom.window.document.querySelector('meta[property="article:published_time"]')
          ? dom.window.document.querySelector('meta[property="article:published_time"]').getAttribute('content')
          : null,
        "isCrawled": true
      }
    }
  })
  try {
    const allPosts = {
      "posts": await Promise.all(allPostsPromises)
    }
    fs.writeFile('./src/data/medium-posts.json', JSON.stringify(allPosts, null, 2), () => {console.log('Fetched Posts')})
  } catch (error) {
    throw new Error('Error resolving final promises')
  }
})()
