const arriver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            document.querySelectorAll(".ceoname")[0].classList.add('appearInTop');
            for(i = 1;i <= 3;i++)
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
            document.querySelectorAll(".zinger")[0].classList.add('fadeInTop');
                 
            }
        }
    )
    })

middler.observe(document.querySelector(".hrone"));


const laster = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            document.querySelectorAll(".intone")[0].classList.add('fadeInTop');
            document.querySelectorAll(".inttwo")[0].classList.add('fadeInTop');
        }
})
    })

laster.observe(document.querySelector(".hrtwo"));