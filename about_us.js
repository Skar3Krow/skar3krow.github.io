const hiddenElements = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            for(i=0;i<=document.querySelectorAll(".img-main").length;i++){
                document.querySelectorAll(".hidden")[i].classList.add(''); 
            }
        }
        else{
            for(i=0;i<=document.querySelectorAll(".img-main").length;i++){
                document.querySelectorAll(".hidden")[i].classList.remove(''); 
            }
        }
    })
})

hiddenElements.observe(document.querySelector(""));