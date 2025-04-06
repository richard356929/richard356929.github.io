var posts=["2025/04/06/hexo博客push到github报权限错误/","2025/04/06/Chrome浏览器多开，账号独立运行/","2025/04/02/1-Docker是什么？/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };