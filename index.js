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

document.getElementById("submit").addEventListener("click", ()=>{
    console.log("rev")
    fetch('http://localhost:8080/api/sub', {method: "POST", mode: 'cors', body: {email: document.getElementById("mail").value}}).then((response) => response.json()).then((data) => {
        console.log(data);
    });
})


hiddenElements.observe(document.querySelector(".abtus"));
