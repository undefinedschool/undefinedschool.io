const expandButtons=document.querySelectorAll(".expand");expandButtons.forEach(e=>e.addEventListener("click",()=>{const n=e.parentNode.nextElementSibling.classList,t=e.children[0].classList,l=e.previousElementSibling.children[0].classList;t.toggle("fa-plus"),t.toggle("fa-minus"),l.toggle("cyan-100"),n.toggle("hidden")}));