var links = document.querySelectorAll('nav a');

const fadeOut = 

links.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();
        document.body.classList.add("fade-out-again");
        setTimeout(()=>{
            document.location = link.href;
        }, 250)
    })
})

var links2 = document.querySelectorAll('.folio-grid a');

links2.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();
        document.body.classList.add("fade-out-again");
        setTimeout(()=>{
            document.location = link.href;
        }, 250)
    });
})
window.onload = ()=>{
    document.body.classList.remove("fade-out");
}