import interact from 'interactjs';
import barba from '@barba/core';

const position = { x: 0, y: 0 }

interact('.card').draggable({
  listeners: {
    start (e) {
      console.log(e.type, e.target)
    },
    move (e) {
      var target = e.target;
      let x = (parseFloat(target.getAttribute('data-x')) || 0) + e.dx;
      let y = (parseFloat(target.getAttribute('data-y')) || 0) + e.dy;

      target.style.webkitTransform =
        target.style.transform =
          'translate(' + x + 'px, ' + y + 'px)';

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`

      // update the posiion attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    },
  }
})

interact('.card').on('tap', (e) => {
  console.log("tap")
  // console.log(e.target)
  console.log(event.type, event.target)
  console.log()
  barba.go(e.target.closest('.card').getAttribute('link'))
})
