const arriver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            for(i = 0;i <= 3;i++)
            {
                document.querySelectorAll(".ceoname")[i].classList.add('fadeInTop');
            }
                 
            }
        }
    )
    })

arriver.observe(document.querySelector(".mh1"));


const middler = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            document.querySelectorAll(".ceoname")[4].classList.add('fadeInTop');
                 
            }
        }
    )
    })

middler.observe(document.querySelector(".hrone"));


const laster = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            document.querySelectorAll(".intone")[0].classList.add('fadeInTop');
            document.querySelectorAll(".intone")[1].classList.add('fadeInTop');
        }
})
    })

laster.observe(document.querySelector(".hrtwo"));