import barba from '@barba/core';
import anime from 'animejs/lib/anime.es.js';

barba.init({
    debug: true,

    transitions: [{
        //sync: true,
        leave: (data) => {
          lockscreen();
          return new Promise(resolve => {
                anime({
                    targets: data.current.container,
                    translateY: [100, 1000],
                    easing: 'spring(1, 80, 10, 0)',
                    complete: () => {
                        resolve();
                    }
                });
            });
        },
        enter: (data) => {
            anime({
                targets: data.next.container,
                translateY: [1000, 100],
                easing: 'spring(1, 80, 10, 0)',
            });
        },
    },{
      name: 'to-home',
      to: { namespace: ['home'] },
      leave: (data) => {
        return new Promise(resolve => {
              anime({
                  targets: data.current.container,
                  translateY: [100, 1000],
                  easing: 'spring(1, 80, 10, 0)',
                  complete: () => {
                      resolve();
                  }
              });
          });
      }
    }]
});
