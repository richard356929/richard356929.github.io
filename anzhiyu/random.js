var posts=["2025/04/06/Chrome浏览器多开，账号独立运行/","2025/04/02/1-Docker是什么？/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };