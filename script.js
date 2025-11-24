document.addEventListener('DOMContentLoaded', () => {
   const body = document.body;
   const Mike1 = document.getElementById('Mike1-section');

   const sections = [
       { element: Mike1, className: 'Mike1' },
   ];

   function updateBackground() {
       const scrollPosition = window.scrollY + window.innerHeight / 2; // Check midpoint of viewport

       for (let i = sections.length - 1; i >= 0; i--) {
           const section = sections[i];
           if (scrollPosition >= section.element.offsetTop) {
               body.className = '';
               body.classList.add(section.className);
               break;
           }
       }
   }

   updateBackground();

   window.addEventListener('scroll', updateBackground);
});