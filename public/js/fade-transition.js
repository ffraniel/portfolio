var links=document.querySelectorAll(".folio-item a");links.forEach(e=>{e.addEventListener("click",o=>{o.preventDefault(),document.body.classList.add("fade-out-again"),setTimeout(()=>{document.location=e.href},250)})}),window.onload=(()=>{document.body.classList.remove("fade-out")});