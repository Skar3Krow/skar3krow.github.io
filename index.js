const hiddenElements = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            for(i=0;i<=document.querySelectorAll(".hidden").length;i++){
                document.querySelectorAll(".hidden")[i].classList.add('fadeInLeft'); 
            }
        }
        else{
            for(i=0;i<=document.querySelectorAll(".hidden").length;i++){
                document.querySelectorAll(".hidden")[i].classList.remove('fadeInLeft'); 
            }
        }
    })
})

hiddenElements.observe(document.querySelector(".abtus"));