console.log("Made with 🎈 in Delft, the Netherlands");

var previousElement;

var breakpoints = {
  "xs": 576,
  "sm": 768,
  "md": 992,
  "lg": 1200,
  "xl": 1450,
  "inf": 999999999999
};

var layouted = false;


jQuery(document).ready(function($) {

  function createCookie(cookieName,cookieValue) {
    // var date = new Date();
    // date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
    document.cookie = cookieName + "=" + cookieValue;
  }
  function accessCookie(cookieName) {
    var name = cookieName + "=";
    var allCookieArray = document.cookie.split(';');
    for(var i=0; i<allCookieArray.length; i++)
    {
      var temp = allCookieArray[i].trim();
      if (temp.indexOf(name)==0)
      return temp.substring(name.length,temp.length);
    }
    return "";
  }
  if (accessCookie("cookiesAccepted") != "") {
    $('.cookie-warning').css("display", "none");
  }
  $('.cookie-accept').on('click tap',  function(e) {
    e.preventDefault();
    createCookie("cookiesAccepted", "true");
    $('.cookie-warning').addClass("accepted");
  });

  function getNextHighest(obj, value) {
    var diff = Infinity;
    return Object.keys(obj).reduce(function(acc, key) {
      var d = obj[key] - value;
      if (d > 0 && d < diff) {
  	  diff = d;
  	  acc = [key];
  	} else if (d == diff) {
  	  acc.push(key)
  	}
  	return acc;
    }, [])
  }

  console.log(getNextHighest(breakpoints, 1500))


  var lastBreakpoint = "inf";
  $( window ).resize(function() {
    var width = $(window).width();
    if (width > breakpoints["sm"] && !layouted) {
      console.log("relayout");
      layCards(); // TODO: only do this once!
      layouted = true;
    } else if (width < breakpoints["sm"]) {
      $('.content-card').css("transform","");
      layouted = false;
    }
    var current = getNextHighest(breakpoints, width)[0];
    if (lastBreakpoint !== current) {
      console.log("breakpoint changed")
      blocksEnd = 0;
      lastBreakpoint = current;
    }
    updateLayout();
  });

  var blocksEnd = 0;

  var autoHeight = function() {
    $(".auto-space").each(function(i, obj) {
      var height = 0;
      height += $(obj).innerHeight() - $(obj).height();
      $(obj).children().each(function () {
        height += $(this).outerHeight(true);
        height += $(this).outerHeight(true) - $(this).outerHeight();
      })
      var blocks = Math.floor(height / 45) + 1;
      $(obj).css("grid-row-end", `span ${blocks}`);
    });

    $(".auto-footer").each(function() {
      if ($(window).width() < breakpoints["sm"]) {
        return;
      }
      var blocks = 0;
      if (blocksEnd == 0) {
        $(".auto-footer").toggleClass("hidden");
        blocksEnd = Math.floor($(".site-container").outerHeight() / 45);
        $(".auto-footer").toggleClass("hidden");
      }
      var span = $(this).css("grid-row")
      span = span.match(/[0-9]+/g)
      $(this).css("grid-row", `${blocksEnd+1} / span ${span[(span.length-1)]}`);
    })
  }

  var createGalleries = function() {
    $('.wp-block-gallery').each(function() {
      $gallery = $(this);
      $gallery.find(".blocks-gallery-item").each(function(i, obj) {
        $(obj).find("figure").css("width", `calc(100% - ${i * 45}px)`)
        $(obj).css("left", `${i*30}px`)
      })
      if ($gallery.hasClass("inline") || $gallery.hasClass("inline-sm")) {

        $gallery.find(".blocks-gallery-item").each(function(i, obj) {
          captionheight = $(obj).find("figcaption").outerHeight();
          $(obj).find("img").css("top", `${(-i * (captionheight - 25)) + 50}px`);
        })
        var images = $gallery.find(".blocks-gallery-item").find("img")
        var imageHeight = images.outerHeight();
        var delta = images.last().offset().top - images.first().offset().top;
        $gallery.find(".blocks-gallery-item").each(function(i, obj) {
          $(obj).find("figcaption").css("transform", `translateY(${ imageHeight + delta + 25 }px)`)
        })
        $gallery.css("margin-bottom", imageHeight + delta)
      }

    });
  }

  var updateLayout = function() {
    createGalleries();
    if ($(window).width() < breakpoints["lg"]) {
      $(".site-contact").addClass("auto-footer")
    } else {
      $(".site-contact").removeClass("auto-footer");
      $(".site-contact").css("grid-row", "");
    }
    if ($(window).width() < breakpoints["sm"]) {
      $(".wp-block-gallery").addClass("inline-sm");
      $(".wp-block-image").addClass("inline-sm")
    } else {
      $(".wp-block-gallery").removeClass("inline-sm");
      $(".wp-block-image").removeClass("inline-sm")
    }
    autoHeight();
    console.log($(".site-container").offset().top)
  }
  updateLayout();

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

  // $('.close-button').on('click tap',  function(e) {
  //   $('.about-me').toggleClass("collapsed").trigger("transition_start");
  // });
  //
  // $('.about-me').on("transitionend", function() {
  //   if ($(window).width() < breakpoints["sm"]) {
  //     if (!$('.card-stack').hasClass("hidden") && !$('.about-me').hasClass("collapsed")) {
  //       $('.card-stack').addClass("hidden");
  //     }
  //   }
  // });

  // $('.about-me').on("transition_start", function() {
  //   if ($(window).width() < breakpoints["sm"]) {
  //     if ($('.card-stack').hasClass("hidden")) {
  //       $('.card-stack').removeClass("hidden");
  //     }
  //   }
  // });

  // $('.dark-mode-toggle').on('click tap',  function(e) {
  //   e.preventDefault();
  //   // $target = $('.dark-mode-toggle');
  //   // $('body').toggleClass('dark-mode');
  //   // $icon = $target.find('span');
  //   // if ($('body').hasClass('dark-mode')) {
  //   //   $icon.removeClass('oi-moon');
  //   //   $icon.addClass('oi-sun');
  //   // } else {
  //   //   $icon.removeClass('oi-sun');
  //   //   $icon.addClass('oi-moon');
  //   // }
  //   // return false;
  //   $('.about-me').toggleClass("collapsed");
  // } );

  // $('.open-button').on('click tap',  function(e) {
  //   if ($(e.target).hasClass('opened')) {
  //     Barba.Pjax.goTo('/');
  //   } else {
  //     $('.about-me').toggleClass("collapsed");
  //   }
  // });

  // $('.close-button').on('click tap',  function(e) {
  //   $('.about-me').toggleClass("collapsed");
  // })

  // $('.about-me-toggle').on('click tap',  function(e) {
  //   e.preventDefault();
  //   $target = $(e.target);
  //   if ($target.attr('state') == "off") {
  //     $target.attr('state', "on");
  //     hideAllCards();
  //     $target.text('projects');
  //   } else if ($target.attr('state') == "on") {
  //     $target.attr('state', "off");
  //     showAllCards();
  //     if ($(".site-container").attr("data-namespace").indexOf("index") != -1) $target.text('about me');
  //   }
  // } );



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

  $('.content-card').on('click tap',  function(e) {
    e.preventDefault();
  });

  $('body').on('click tap', '.card-link', function(e) {
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

  if ($(window).width() > breakpoints["sm"]) {
    layCards();
  }

  $('.project-summary').on('click tap', function(e) {
    $('.project-summary').toggleClass("show")
  });



  function registerButtons() {
    $('.button').on('click tap',  function(e) {
      e.preventDefault();
      console.log(this)
      $(this).toggleClass("toggled");

      if ($(this).hasClass("projects")) {
        if ($(this).hasClass("toggled")) {
          showAllCards();
        } else {
          hideAllCards();
        }
      } else if ($(this).hasClass("publications")) {
        if ($(this).hasClass("toggled")) {
          if (!$(".publications-card").hasClass('project-hidden')) {
            $(".publications-card").removeClass('card-hidden');
          }
        } else {
          $(".publications-card").addClass('card-hidden');
        }
      }
    } );
  }

  registerButtons();

  $(window).load(function() {
      // autoHeight();

  })

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






  var Index = Barba.BaseView.extend({
    namespace: "index",
    onEnter: function() {
      // The new Container is ready and attached to the DOM.
      // layCards();

      hideAllCards();
      // splitTitles('.display-title');
      $('#nav').load(document.URL +  ' #nav');
      $.each($('.project-hidden'), function() {
        $(this).addClass('card-hidden');
      });
    },
    onEnterCompleted: function() {
      // The Transition has just finished.
      // splitTitles('.project-title');
      autoHeight();
    },
    onLeave: function() {
      // A new Transition toward a new page has just started.
      // splitTitles('.project-title');
      $('.open-button').addClass('opened');
      blocksEnd = 0;
    },
    onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
    }
  });

  var Project = Barba.BaseView.extend({
    namespace: "single-project",
    onEnter: function() {
      console.log("Will show project")
      // The new Container is ready and attached to the DOM.
      createGalleries();
      hideAllCards();
      $('.button.projects').removeClass("toggled");
      window.scrollTo(0,0);
    },
    onEnterCompleted: function() {
      // The Transition has just finished.
      // splitTitles('.display-title');
      autoHeight();
    },
    onLeave: function() {
      // A new Transition toward a new page has just started.
      // splitTitles('.display-title');
      $('.open-button').removeClass('opened');
      blocksEnd = 0;
    },
    onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
    }
  });

  var Publication = Barba.BaseView.extend({
    namespace: "single-publication",
    onEnter: function() {
      console.log("Will show publication")
      // The new Container is ready and attached to the DOM.
      $('.open-button').addClass("opened");
      createGalleries();
      hideAllCards();
      window.scrollTo(0,0)
    },
    onEnterCompleted: function() {
      // The Transition has just finished.
      // splitTitles('.display-title');
      autoHeight();
    },
    onLeave: function() {
      // A new Transition toward a new page has just started.
      // splitTitles('.display-title');
      $('.open-button').removeClass('opened');
      blocksEnd = 0;
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
      if (typeof __gaTracker === "function") __gaTracker('send', 'pageview', location.pathname);
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
