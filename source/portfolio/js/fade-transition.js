var homeNav = document.querySelector("#homeNav");
var portfolioNav = document.querySelector("#portfolioNav");

portfolioNav.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.add("fade-out-again");
  setTimeout(() => {
    document.location = portfolioNav.href;
  }, 250);
});
homeNav.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("fade-out-again");
    setTimeout(() => {
      document.location = homeNav.href;
    }, 250);
  });

var links = document.querySelectorAll('.folio-item a');
links.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        document.body.classList.add("fade-out-again");
        setTimeout(() => {
          document.location = link.href;
        }, 250);
    })
})


window.onload = () => {
  document.body.classList.remove("fade-out");
};
