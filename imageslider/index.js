let flag = 1;
function controller(x){
    flag = flag+x
    slideshow(flag)
}
slideshow(flag)
function slideshow(num){
    let slides = document.getElementsByClassName('slide')
    // console.log(slides);
    if (num<0) {
        flag = slides.length-1
        num = slides.length-1

    }
    if (num==slides.length) {
        num = 0
        flag=0
    }
    for(let y of slides){
        y.style.display = 'none'
    }

    slides[num].style.display = 'block'

    
}