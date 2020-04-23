let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName(`landing-splash-image`);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = `none`;
  }
  slides[slideIndex-1].style.display = `block`;
}


let mainNavDot = document.querySelectorAll(`.navbar-nav li a`);
let mainSection = document.querySelectorAll(`.chapter`);


window.addEventListener(`scroll`, event => {
  let amtScrolled = window.scrollY;

  
    mainNavDot.forEach(link => {
      let section = document.querySelector(link.hash); 
      if (section.getBoundingClientRect().top < window.innerHeight / 2 && section.getBoundingClientRect().top > 0)
        {
        link.classList.add(`active`);
        } 
      else {
        link.classList.remove(`active`);
      }
    });
});

window.scrollTo({ left:0, top:0, behavior:'smooth' }) 
  

// load feedback for on top

let $docAdress = "./feedback-form.html";
let $oldContent = document.querySelector(`.story`);
let $contentBackup = Object.assign({}, $oldContent.innerHTML);
let $submitButton;

const loadFeedbackForm = (url) => {
  
  $contentBackup = Object.assign({}, $oldContent.innerHTML);

  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      let parser = new DOMParser();
      let newPage = parser.parseFromString(html, `text/html`);

      let $newContent = newPage.querySelector(`#content`);

      $submitButton = $newContent.querySelector(`.submit-button`);
      console.log(`Button is spawned and recognized`);
      console.log($submitButton);

      $submitButton.addEventListener(`click`, event => {
        console.log(`reload is invoked`);
        window.location = window.location.self;
      });

      console.log($newContent);
      console.log($oldContent);

      $oldContent.innerHTML = $oldContent.innerHTML + $newContent.innerHTML;

    })
}

let $feedbackButton = document.querySelector(`.send-feedback`);
$feedbackButton.addEventListener(`click`, event => {

  //scrollTo(0,0);
  document.body.style.overflowY = `hidden`;
  loadFeedbackForm(`feedback-form.html`);

});



