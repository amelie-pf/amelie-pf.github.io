/*code für nav bar mit burger menue */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


/*slide in animation*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
        
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenCardsElements = document.querySelectorAll('.hidden-cards');
hiddenCardsElements.forEach((el) => observer.observe(el));

const hiddenProjectImgElements = document.querySelectorAll('.hidden-project-img');
hiddenProjectImgElements.forEach((el) => observer.observe(el));

const hiddenProjectTxtElements = document.querySelectorAll('.hidden-top');
hiddenProjectTxtElements.forEach((el) => observer.observe(el));

const hiddenHeadingElements = document.querySelectorAll('.hidden-heading');
hiddenHeadingElements.forEach((el) => observer.observe(el));


function goBack()
  {
  window.history.back()
  }



/* enlarge pictures*/

// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

