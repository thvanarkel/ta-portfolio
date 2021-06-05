import barba from '@barba/core';
import anime from 'animejs/lib/anime.es.js';

barba.init({
    debug: true,
    transitions: [{
        leave: (data) => {
            return new Promise(resolve => {
                anime({
                    targets: data.current.container,
                    opacity: 0,
                    easing: 'linear',
                    duration: 500,
                    complete: () => {
                        resolve();
                    }
                });
            });
        },
        enter: (data) => {
            anime({
                targets: data.next.container,
                easing: 'linear',
                duration: 500,
                opacity: [0, 1],
            });
        },
    }]
});
