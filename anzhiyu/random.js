var posts=["2017/01/23/新文章3/","2025/04/01/新建博文test/","2025/04/01/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };