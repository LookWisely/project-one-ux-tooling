let mainNavDot = document.querySelectorAll(`.navbar-nav li a`);
let mainSection = document.querySelectorAll(`.chapter`);


window.addEventListener(`scroll`, event => {
    let amtScrolled = window.scrollY;
  
    mainNavDot.forEach(link => {
      let section = document.querySelector(link.hash);
    //   scrollIntoView({ behavior:'smooth' })
      // if (section.offsetTop <= amtScrolled &&
      //   section.offsetTop + section.offsetHeight > amtScrolled) 
      if (section.getBoundingClientRect().top < window.innerHeight / 2 && section.getBoundingClientRect().top > 0)
        {
        link.classList.add(`active`);
        } 
      else {
        link.classList.remove(`active`);
      }
    });
  });
