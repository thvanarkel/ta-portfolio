import $ from 'jquery';
import interact from 'interactjs'
import barba from '@barba/core'

const card = interact('.content-card')

  card.draggable({
		onmove: dragMoveListener
	})
	.on('tap', function(event) {
		var x = event.pageX;
		var y = event.pageY;
		var $target = $(event.target);

		if ($target.hasClass('minimise')) {
			$target.parent('.content-card').addClass('card-hidden');
		} else {
			// Barba.Pjax.goTo(event.target.parentElement.getAttribute('link'));
			// window.location.href = event.target.parentElement.getAttribute('link');
			barba.go(event.target.parentElement.getAttribute('link'));
			console.log("click")
		}
		event.preventDefault();
	})
	.on('dragstart', function(event) {
		if (previousElement) {
			event.target.style.zIndex = parseInt(previousElement.style.zIndex) + 1;
		} else {
			event.target.style.zIndex = 110;
		}
		// lockScroll();
	})
	.on('dragend', function(event) {
		previousElement = event.target;
		// unlockScroll();
	});

function dragMoveListener(e) {
	if (document.selection) {
		document.selection.empty()
	} else {
		window.getSelection().removeAllRanges()
	}
	var target = e.target,
		// keep the dragged position in the data-x/data-y attributes
		x = (parseFloat(target.getAttribute('data-x')) || 0) + e.dx,
		y = (parseFloat(target.getAttribute('data-y')) || 0) + e.dy;

	// translate the element
	target.style.webkitTransform =
		target.style.transform =
		'translate(' + x + 'px, ' + y + 'px)';

	// update the posiion attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
}
