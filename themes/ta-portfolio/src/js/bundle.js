import './components/transition';
import './components/card'


// function ready(callback){
//     // in case the document is already rendered
//     if (document.readyState!='loading') callback();
//     // modern browsers
//     else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
//     // IE <= 8
//     else document.attachEvent('onreadystatechange', function(){
//         if (document.readyState=='complete') callback();
//     });
// }
//
// ready(function(){
//     // do something
//
//     // [...authorlists.children].forEach(child => {
//     //   console.log(child);
//     // });
// });


const authors = document.querySelectorAll('.authors');
authors.forEach(p => {
  p.innerHTML = p.innerHTML.replace("van Arkel", "<span class=\"highlight\">van Arkel</span>");
});

document.body.classList.add("theme--default");

const darkmodeToggle = document.querySelector('#darkmode-toggle');

darkmodeToggle.addEventListener('click', event => {
  if (document.body.classList.contains("theme--default")) {
    localStorage.setItem('theme', 'theme--dark');
    document.body.classList.replace("theme--default", "theme--dark");

  } else if (document.body.classList.contains("theme--dark")) {
    localStorage.setItem('theme', 'theme--default');
    document.body.classList.replace("theme--dark", "theme--default");
  }
});

if (localStorage.getItem('theme') == 'theme--dark') {
  document.body.classList.replace("theme--default", "theme--dark");
}
