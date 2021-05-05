window.onload = ()=>{
    let stars = document.getElementById("stars");
    let moon = document.getElementById("moon");
    let mountains_behind = document.getElementById("mountains_behind");
    let text = document.getElementById("text");
    let mountains_front = document.getElementById("mountains_front");
    let header = document.querySelector('header');

    window.addEventListener('scroll', ()=>{
        let value = window.scrollY;
        stars.style.left = value *0.25 + 'px';
        moon.style.top = value *1 + 'px';
        mountains_behind.style.top = value *0.5+ 'px';
        mountains_front.style.top = value *0 + 'px';
        text.style.marginRight = value *4+ 'px';
        header.style.top = value *.80 + 'px';
    })
}