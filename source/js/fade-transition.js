var links = document.querySelectorAll('.folio-item a');
links.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();
        document.body.classList.add("fade-out-again");
        setTimeout(()=>{
            document.location = link.href;
        }, 250)
    })
})

window.onload = ()=>{
    document.body.classList.remove("fade-out");
}