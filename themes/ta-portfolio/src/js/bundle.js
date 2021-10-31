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
  p.innerHTML = p.textContent.replace("van Arkel", "<span class=\"highlight\">van Arkel</span>");
});
