// let btop = document.querySelector(".btop");

// btop.addEventListener("click", ()=> {
//     window.scrollTo({top: 0, behavior: 'smooth'});
// });
// window.addEventListener("scroll", ()=>{
//     let scrollbottom = this.window.scrollY;
//     if(scrollbottom > 50){
//         btop.style.display = "block";
//     }else{
//         btop.style.display = "none";
//     }
// })
let btop = document.querySelector(".btop");

btop.addEventListener("click", ()=> {
    window.scrollTo ({top: 0, behavior: 'smooth'})
});

window.addEventListener("scroll", ()=> {
    let sbottom = this.window.scrollY;
    if( sbottom > 50){
        btop.style.display = "block";
    }else{
        btop.style.display = "none";
    }
})