const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fadeInRight");
        }
    })
})

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[1].classList.add("fadeInLeft");
        }
    })
})

observer.observe(document.querySelector(".fade-container-1"))

observer2.observe(document.querySelector(".fade-container-2"))