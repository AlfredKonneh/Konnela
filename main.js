
const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach((collapsible) => {
  const collapsibleToggler = collapsible.querySelector('.collapsible__toggler');
  collapsibleToggler.addEventListener('click', () => {
    collapsible.classList.toggle('collapsible--expanded');
  });
});

const year =document.querySelector('.year');
const date = new Date();
const currentYear = date.getFullYear();
year.textContent=currentYear; 

// smooth scrolling
const links = document.querySelectorAll('a:link');

links.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault();
    const href = link.getAttribute('href');

    if(href ==='#')
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    if(href !=="#" && href.startsWith('#'));
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth"
    })
  })
})