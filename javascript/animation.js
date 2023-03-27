
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
