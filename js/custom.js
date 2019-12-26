console.log("Made with 🎈 in Delft, the Netherlands");

var previousElement;



jQuery(document).ready(function($) {
    $.fn.infiniteScrollUp=function(){

      var self=this,kids=self.children()
      setInterval(function(){
      		kids.slice(kids.length).hide()
          kids.filter(':hidden').eq(0).slideDown()
          kids.eq(0).slideUp(800, "linear",function(){
              $(this).appendTo(self)
              kids=self.children()
          })
      },1)
  		return this;
  };


  $(function(){

    $.each( $('.scroller'), function() {
      $(this).infiniteScrollUp()
    });

  });

  $('.close-button').click( function(e) {
    $('.about-me').toggleClass("collapsed");
  });

  $('.dark-mode-toggle').click( function(e) {
    e.preventDefault();
    // $target = $('.dark-mode-toggle');
    // $('body').toggleClass('dark-mode');
    // $icon = $target.find('span');
    // if ($('body').hasClass('dark-mode')) {
    //   $icon.removeClass('oi-moon');
    //   $icon.addClass('oi-sun');
    // } else {
    //   $icon.removeClass('oi-sun');
    //   $icon.addClass('oi-moon');
    // }
    // return false;
    $('.about-me').toggleClass("collapsed");
  } );

  $('.open-button').click( function(e) {
    console.log("test");
    if ($(e.target).hasClass('opened')) {
      Barba.Pjax.goTo('/');
    } else {
      $('.about-me').toggleClass("collapsed");
    }
  });

  $('.close-button').click( function(e) {
    $('.about-me').toggleClass("collapsed");
  })

  $('.about-me-toggle').click( function(e) {
    e.preventDefault();
    $target = $(e.target);
    if ($target.attr('state') == "off") {
      $target.attr('state', "on");
      hideAllCards();
      $target.text('projects');
    } else if ($target.attr('state') == "on") {
      $target.attr('state', "off");
      showAllCards();
      if ($(".site-container").attr("data-namespace").indexOf("index") != -1) $target.text('about me');
    }
  } );

  var createGalleries = function() {
    $.each( $('.wp-block-gallery'), function() {
      $e = $(this);
      if ($e.hasClass('fullscreen')) {
        $e.wrap("<div class='gallery fullscreen'></div>");
      } else {
        $e.wrap("<div class='gallery'></div>");
      }
      // $e.addClass('cursor-link');
      if (!$e.attr('index')) $e.attr('index', '0');
      $('<p class="slider-index">1/2</p>').insertBefore($e);
      $e.parents('.gallery').find('p').text(1 + "/" + $e.find('li').length);
      $e.click(function(e) {
        $target = $(e.target).parents('ul');
        let index = parseInt($target.attr('index'));
        $i = $target.find('li').eq(index);
        $i.css('z-index', '0');
        index = index + 1;
        if (index == $target.find('li').length) index = 0;
        $target.attr('index', index);
        $nI = $target.find('li').eq(index);
        if($target.parent().hasClass('fullscreen')) {
          $nI.css('z-index', '6');
        } else {
          $nI.css('z-index', '1');
        }
        $target.parents('.gallery').find('p').text((index + 1) + "/" + $target.find('li').length);
      });
    });
  }

  var createVideos = function() {
    $.each( $('.wp-block-embed-vimeo'), function() {
      $e = $(this);
      svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 11 21\"><title>Asset 1</title><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Layer_1-2\" data-name=\"Layer 1\"><rect width=\"1\" height=\"21\"/><rect x=\"1\" y=\"19\" width=\"1\" height=\"1\"/><rect x=\"2\" y=\"18\" width=\"1\" height=\"1\"/><rect x=\"3\" y=\"17\" width=\"1\" height=\"1\"/><rect x=\"4\" y=\"16\" width=\"1\" height=\"1\"/><rect x=\"5\" y=\"15\" width=\"1\" height=\"1\"/><rect x=\"6\" y=\"14\" width=\"1\" height=\"1\"/><rect x=\"7\" y=\"13\" width=\"1\" height=\"1\"/><rect x=\"1\"y=\"1\" width=\"1\" height=\"1\"/><rect x=\"2\" y=\"2\" width=\"1\" height=\"1\"/><rect x=\"3\" y=\"3\" width=\"1\" height=\"1\"/><rect x=\"4\" y=\"4\" width=\"1\" height=\"1\"/><rect x=\"5\" y=\"5\" width=\"1\" height=\"1\"/><rect x=\"6\" y=\"6\" width=\"1\" height=\"1\"/><rect x=\"7\" y=\"7\" width=\"1\" height=\"1\"/><rect x=\"8\" y=\"8\" width=\"1\" height=\"1\"/><rect x=\"8\" y=\"12\" width=\"1\" height=\"1\"/><rect x=\"9\" y=\"11\" width=\"1\" height=\"1\"/><rect x=\"9\" y=\"9\" width=\"1\" height=\"1\"/><rect x=\"10\" y=\"10\" width=\"1\" height=\"1\"/></g></g></svg>"
      $e.prepend("<a class='player-link'>" + svg + "<div class='player-placeholder'></div></a>");
      $i = $e.find('iframe');
      src = $i.attr('src');
      src = src.substring(0, src.indexOf('?'));
      src = src + "?title=0&byline=0&portrait=0&sidedock=0";
      $i.attr('src', src);
      $( '#iframe' ).attr( 'src', function ( i, val ) { return val; });

      var iframe = document.querySelector('iframe');

      var player = new Vimeo.Player(iframe);

      $link = $e.find('a');
      $link.click(function(e) {
        $e.toggleClass('playing');
        if ($e.hasClass('playing')) {
          player.play();
        } else {
          player.pause();
        }
      });
    });

  }




  $('body').on('click', '.wp-block-gallery', function() {
    // do something
});

  var lockScroll = function() {
      $html = $('html');
      $body = $('body');
      var initWidth = $body.outerWidth();
      var initHeight = $body.outerHeight();

      var scrollPosition = [
          self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
          self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
      ];
      $html.data('scroll-position', scrollPosition);
      $html.data('previous-overflow', $html.css('overflow'));
      $html.css('overflow', 'hidden');
      window.scrollTo(scrollPosition[0], scrollPosition[1]);

      var marginR = $body.outerWidth()-initWidth;
      var marginB = $body.outerHeight()-initHeight;
      $body.css({'margin-right': marginR,'margin-bottom': marginB});
  }

  var unlockScroll = function(){
      $html = $('html');
      $body = $('body');
      $html.css('overflow', $html.data('previous-overflow'));
      // window.scrollTo(scrollPosition[0], scrollPosition[1]);

      $body.css({'margin-right': 0, 'margin-bottom': 0});
  }

  interact('.content-card')
    .draggable({
      onmove: dragMoveListener
    })
    .on('tap', function (event) {
      var x = event.pageX;
      var y = event.pageY;
      var $target = $(event.target);

      if ($target.hasClass('minimise')) {
        $target.parent('.content-card').addClass('card-hidden');
      } else {
        Barba.Pjax.goTo(event.target.parentElement.getAttribute('link'));
      }


      event.preventDefault();
    })
    .on('dragstart', function(event) {
      if(previousElement) {
        event.target.style.zIndex = parseInt(previousElement.style.zIndex) + 1;
      } else {
        event.target.style.zIndex = 110;
      }
      lockScroll();
    })
    .on('dragend', function(event) {
      previousElement = event.target;
      unlockScroll();
    });

  function dragMoveListener(event) {
    var target = event.target,
      // keep the dragged position in the data-x/data-y attributes
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
      target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  function hasClass( target, className ) {
      return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
  }

  function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
  }

  function layCards() {
    var cards = document.querySelectorAll('.content-card');
    cards.forEach(function(e, i) {
      if (hasClass(e, 'about-card')) {
        return;
      }

      var lowerX, upperX, lowerY, upperY;

      if (i % 4 == 0) {
        lowerX = 0;
        upperX = 0.25 * (window.innerWidth - e.getBoundingClientRect().width);
        lowerY = 30;
        upperY = 0.25 * (window.innerHeight - e.getBoundingClientRect().height - 30);
      } else if (i % 4 == 1) {
        lowerX = 0.5 * (window.innerWidth - e.getBoundingClientRect().width);
        upperX = (window.innerWidth - e.getBoundingClientRect().width);
        lowerY = 30;
        upperY = 0.25 * (window.innerHeight - e.getBoundingClientRect().height - 30);
      } else if (i % 4 == 2) {
        lowerX = 0.5 * (window.innerWidth - e.getBoundingClientRect().width);
        upperX = (window.innerWidth - e.getBoundingClientRect().width);
        lowerY = 0.5 * (window.innerHeight - e.getBoundingClientRect().height - 30);
        upperY = (window.innerHeight - e.getBoundingClientRect().height - 30);
      } else if (i % 4 == 3) {
        lowerX = 0;
        upperX = 0.25 * (window.innerWidth - e.getBoundingClientRect().width);
        lowerY = 0.5 * (window.innerHeight - e.getBoundingClientRect().height - 30);
        upperY = (window.innerHeight - e.getBoundingClientRect().height - 30);
      }

      // x = ((Math.random() * (window.innerWidth - e.getBoundingClientRect().width)));
      // y = ((Math.random() * (window.innerHeight - e.getBoundingClientRect().height - 30))) + 30;

      x = randomInt(lowerX, upperX);
      y = randomInt(lowerY, upperY);
      e.style.webkitTransform =
        e.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

      e.setAttribute('data-x', x);
      e.setAttribute('data-y', y);
    })
  }

  function showAllCards() {
    $.each( $('.content-card'), function() {
      if (!$(this).hasClass('project-hidden')) {
        $(this).removeClass('card-hidden');
      }
    });
  }

  function hideAllCards() {
    $.each( $('.content-card'), function() {
      $(this).addClass('card-hidden');
    });
  }

  $('.content-card').click( function(e) {
    e.preventDefault();
  });

  $('body').on('click', '.card-link', function(e) {
    var id = $(e.target).attr('current-post');
    var slug = $(e.target).attr('slug');
    if ($(e.target).hasClass('skill')) {
      $.each( $('.project-card'), function() {
        if (!$(this).attr('id').includes(id)) {
          var skills = $(this).attr("skills");
          if (skills.includes(slug)) {
            $(this).removeClass('card-hidden');
          }
        }
      });
    }
    if ($(e.target).hasClass('tool')) {
      $.each( $('.project-card'), function() {
        if (!$(this).attr('id').includes(id)) {
          var tools = $(this).attr("tools");
          if (tools.includes(slug)) {
            $(this).removeClass('card-hidden');
          }
        }
      });
    }
  });


  layCards();

  // var splitTitles = function(t) {
  //   $(t).each(function() {
  //     $this = $(this);
  //     $this.each(function(i, title) {
  //       var width = 0;
  //       var originalHeight = $(title).height();
  //       var spacer = $('<div class="spacer" style="float:right;height:1px;"/>').prependTo(title);
  //       while (originalHeight == $(title).height()) {
  //         spacer.width(++width);
  //       }
  //       spacer.width(--width);
  //     });
  //     var html = $this.html().split("</div>");
  //     var spanInserted = html[1].split(" ").join(" </span><span>");
  //     var wrapped = ("<span>").concat(spanInserted, "</span>");
  //     var contents = html[0] + "</div>" + wrapped;
  //     $this.html(contents);
  //     var refPos = $this.find('span').first().position().top;
  //     var newPos;
  //     $this.find('span').each(function(index) {
  //       newPos = $(this).position().top
  //       if (index == 0) {
  //         return;
  //       }
  //       if (newPos == refPos) {
  //         $(this).prepend($(this).prev().text() + " ");
  //         $(this).prev().remove();
  //       }
  //       refPos = newPos;
  //     });
  //   });
  //
  // }




  // var transEffect = Barba.BaseTransition.extend({
  //   start: function() {
  //     this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
  //   },
  //   fadeInNewcontent: function(nc) {
  //     nc.hide();
  //     var _this = this;
  //     $(this.oldContainer).fadeOut(500).promise().done(() => {
  //       $(document).scrollTop(0);
  //       nc.css('visibility', 'visible');
  //       nc.fadeIn(500, function() {
  //         _this.done();
  //       })
  //     });
  //   }
  // });
  // Barba.Pjax.getTransition = function() {
  //   return transEffect;
  // }




  var Project = Barba.BaseView.extend({
    namespace: "single-project",
    onEnter: function() {
      // The new Container is ready and attached to the DOM.
      $('.open-button').addClass("opened");
      // splitTitles('.display-title');
      createGalleries();
      createVideos();
      hideAllCards();
      $('.about-me-toggle').text("projects").attr("state", "on");
    },
    onEnterCompleted: function() {
      // The Transition has just finished.
      // splitTitles('.display-title');
    },
    onLeave: function() {
      // A new Transition toward a new page has just started.
      // splitTitles('.display-title');
      $('.open-button').removeClass('opened');
    },
    onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
    }
  });

  var Index = Barba.BaseView.extend({
    namespace: "index",
    onEnter: function() {
      // The new Container is ready and attached to the DOM.
      // layCards();
      showAllCards();
      // splitTitles('.display-title');
      $('#nav').load(document.URL +  ' #nav');
      $.each($('.project-hidden'), function() {
        $(this).addClass('card-hidden');
      });
      $('.about-me-toggle').text("about me").attr("state", "off");
    },
    onEnterCompleted: function() {
      // The Transition has just finished.
      // splitTitles('.project-title');
      $('.close-button').click( function(e) {
        $('.about-me').toggleClass("collapsed");
      });
    },
    onLeave: function() {
      // A new Transition toward a new page has just started.
      // splitTitles('.project-title');
      $('.open-button').addClass('opened');
    },
    onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
    }
  });

  var Publication = Barba.BaseView.extend({
    namespace: "single-publication",
    onEnter: function() {
      // The new Container is ready and attached to the DOM.
      $('.open-button').addClass("opened");
      createGalleries();
      createVideos();
      hideAllCards();
      $('.about-me-toggle').text("projects").attr("state", "on");
    },
    onEnterCompleted: function() {
      // The Transition has just finished.
      // splitTitles('.display-title');
    },
    onLeave: function() {
      // A new Transition toward a new page has just started.
      // splitTitles('.display-title');
      $('.open-button').removeClass('opened');
    },
    onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
    }
  });

  // Don't forget to init the view!
  Index.init();
  Project.init();
  Publication.init();
  // splitTitles('.display-title');
  Barba.Pjax.Dom.wrapperId = "wrapper";
  Barba.Pjax.Dom.containerClass = "site-container";
  Barba.Pjax.start();

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  Barba.Dispatcher.on('initStateChange', function() {
    // modify to your needs
    Barba.Dispatcher.on('initStateChange', function() {
      __gaTracker('send', 'pageview', location.pathname);
    });
  });

  var convertRange = (function(value, r1, r2) {
    return (value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0];
  });

  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  // var prevOffset = 0;
  // $(window).on('load resize scroll', function() {
  //   $('.js-image').each(function(i) {
  //     if ($(this).isInViewport(i)) {
  //
  //       var $image = $(this).find('img, figure');
  //       var currentOffset = $(this).offset().top - $(document).scrollTop();
  //       var lowerBound = -$(this).outerHeight();
  //       var upperBound = $(window).outerHeight();
  //       if ($image) {
  //         var translate = convertRange(currentOffset, [lowerBound, upperBound], [0.15 * $(this).outerHeight(), -0.15 * $(this).outerHeight()]);
  //         var dX = -(($image.outerWidth() - $(this).outerWidth()) / 2);
  //         var dY = translate - (($image.outerHeight() - $(this).outerHeight()) / 2);
  //         $image.css('transform', 'translate3D(0px, ' + dY + 'px, 0)');
  //       }
  //       if ($(this).hasClass('js-dynamic')) {
  //         var translate = convertRange(currentOffset, [lowerBound, upperBound], [-500, 0]);
  //         $(this).css('transform', 'translate3D(0px, ' + translate + 'px, 0px)');
  //       }
  //     }
  //   });
  // });

  // $(document).on('mousemove', function(e) {
  //
  //   const cursor = $('.cursor');
  //   const target = $(e.target);
  //   // update position of cursor
  //   cursor.css('left', e.clientX - 10).css('top', e.clientY - 10);
  //
  //   const isLinkTag = target.is('a') || target.parents('a').length || target.hasClass('cursor-link') || target.parents('.cursor-link').length || target.hasClass('minimise') || target.parents('.gallery').length || target.hasClass('gallery');
  //   const isHovered = cursor.hasClass('is-active');
  //
  //   var link = target.closest('.cursor-link');
  //   var linkTitle;
  //
  //   if (target.hasClass('minimise')) {
  //     linkTitle = "X";
  //   } else if (link.length) {
  //     linkTitle = link.attr('cursor-text');
  //   } else {
  //     linkTitle = "";
  //   }
  //
  //   cursor.find('p').text(linkTitle);
  //   if(linkTitle.length > 0) {
  //     cursor.addClass('has-text');
  //   } else {
  //     cursor.removeClass('has-text');
  //   }
  //
  //   // toggle the cursor class if necessary
  //   if (isLinkTag && !isHovered) {
  //     cursor.addClass('is-active');
  //   } else if (!isLinkTag && isHovered) {
  //     cursor.removeClass('is-active has-text');
  //     cursor.find('.cursor-circle').css("transform", "");
  //     cursor.find('.cursor-text').css("font-size", "");
  //     cursor.find('p').text("");
  //   }
  // });
  //
  // $(document).mouseleave(function(e) {
  //
  //   const cursor = $('#cursor');
  //   cursor.hide()
  //
  // });
  //
  // $(document).mouseenter(function(e) {
  //
  //   const cursor = $('#cursor');
  //   cursor.show()
  //
  // });



});
