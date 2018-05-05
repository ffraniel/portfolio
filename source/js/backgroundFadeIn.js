document.addEventListener('scroll', ()=>{
    var yOffset = window.pageYOffset;
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    var heightLessInnerHeight = height - window.innerHeight;
    var percentage = yOffset / heightLessInnerHeight;
    document.querySelector('.fade-bg').style.opacity = percentage;
  })
  
  