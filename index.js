const hiddenElements = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            document.querySelectorAll(".hidden")[0].classList.add('fadeInLeft');
            document.querySelectorAll(".hidden")[1].classList.add('fadeInLeft');
            document.querySelectorAll(".hidden")[2].classList.add('fadeInLeft');
        }
        else{
            document.querySelectorAll(".hidden")[0].classList.remove('fadeInLeft');
            document.querySelectorAll(".hidden")[1].classList.remove('fadeInLeft');
            document.querySelectorAll(".hidden")[2].classList.remove('fadeInLeft');
        }
    })
})

hiddenElements.observe(document.querySelector("h1"));