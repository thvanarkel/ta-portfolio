import barba from '@barba/core';
import anime from 'animejs/lib/anime.es.js';

function lockscreen()
{
  var body = document.getElementById("body");
  body.className += " lock-screen";
  body.addEventListener('touchmove', handleTouchMove, false);
}
function unlock()
{
  var body = document.getElementById("body");
 body.classList.remove("lock-screen");
 body.removeEventListener('touchmove', handleTouchMove);
}

// barba.init({
//     debug: true,
//
//     transitions: [{
//         //sync: true,
//         leave: (data) => {
//           return new Promise(resolve => {
//             unlock();
//             anime({
//                 targets: data.current.container,
//                 translateY: [100, 1000],
//                 easing: 'spring(1, 80, 10, 0)',
//                 complete: () => {
//                     resolve();
//                 }
//             });
//           });
//         },
//         enter: (data) => {
//             lockscreen();
//             anime({
//                 targets: data.next.container,
//                 translateY: [1000, 100],
//                 easing: 'spring(1, 80, 10, 0)',
//             });
//         },
//         beforeOnce: (data) => {
//           console.log("once!")
//
//           data.next.container.style.transform = "translateY(100px)"
//           // anime({
//           //     targets: data.next.container,
//           //     translateY: [1000, 100],
//           //     easing: 'spring(1, 80, 10, 0)',
//           // });
//         },
//         once: (data) => {
//
//         },
//         afterOnce: (data) => {
//           //lockscreen();
//         }
//     },{
//       name: 'to-home',
//       to: { namespace: ['home'] },
//       leave: (data) => {
//         return new Promise(resolve => {
//               anime({
//                   targets: data.current.container,
//                   translateY: [100, 1000],
//                   easing: 'spring(1, 80, 10, 0)',
//                   complete: () => {
//                       resolve();
//                   }
//               });
//           });
//       }
//     }]
// });
//
// barba.hooks.enter((data) => {
//   console.log(data.next.namespace);
// });
