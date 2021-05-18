import barba from '@barba/core';
import barbaCss from '@barba/css';


console.log('transitions')

barba.use(barbaCss);

barba.init({
	// schema: {
	// 	prefix: 'data-site'
	// },
	timeout: 5000,
	transitions: [{
		name: "fade",
		leave() {},
		enter() {}
	}]
});
