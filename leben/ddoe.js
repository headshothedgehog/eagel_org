function createHtml(index) {
    let fileName = ddoe[index]['fileName']
    let desc = ddoe[index]['desc']
    let image = null
    if (Object.keys(ddoe[index]).includes('image')) {
        image = ddoe[index]['image']
    }
    console.log(image)
}

createHtml(3)

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slide = document.getElementById("slide");
    let captionText = document.getElementById("caption");
    let numberText = document.getElementsByClassName("numbertext")[0];
    let slideImg = document.getElementById("slideimg");
    if (n > Object.keys(ddoe).length) { slideIndex = 1 }
    if (n < 1) { slideIndex = Object.keys(ddoe).length }
    numberText.innerHTML = "" + slideIndex + "/" + (Object.keys(ddoe).length)
    slideImg.setAttribute("src", "/src/ddoe3/" + ddoe[slideIndex]['fileName'])
    captionText.innerHTML = ddoe[slideIndex]['desc']
    if (Object.keys(ddoe[slideIndex]).includes('image')) {
        image = ddoe[slideIndex]['image']
        captionText.innerHTML += "<br/><br/><img style='max-width: 50%' src='/src/ddoe3/" + image + "'/>"
    }
    /*let i;
    let slides = document.getElementsByClassName("mySlides");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    captionText.innerHTML = dots[slideIndex - 1].alt;*/
}

function galleryInit() {
    slideIndex = Object.keys(ddoe).length;
    showSlides(Object.keys(ddoe).length)
}

var slideIndex