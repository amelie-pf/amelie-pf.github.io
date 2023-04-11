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
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

