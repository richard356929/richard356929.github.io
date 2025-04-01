var posts=["2025/04/01/新建博文test/","2025/04/01/hello-world/","2025/04/01/新文章3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };