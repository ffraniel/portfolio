var links=document.querySelectorAll("nav a");const fadeOut=links.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),document.body.classList.add("fade-out-again"),setTimeout(()=>{document.location=e.href},250)})});var links2=document.querySelectorAll(".folio-grid a");links2.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),document.body.classList.add("fade-out-again"),setTimeout(()=>{document.location=e.href},250)})}),window.onload=(()=>{document.body.classList.remove("fade-out")});