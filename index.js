$(".p-footer").text("© " + new Date().getFullYear() + " DreamWalker");

var viewportWidth = $(window).width();
var line1 = $(".line-1");
var line2 = $(".line-2");
var coloredDivs = $(".color-change");
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
    line1.removeClass("positive-45");
    line2.removeClass("negative-45");

});


$(".animated-toggler").click(function(){
if(line1.hasClass("positive-45")){
    line1.removeClass("positive-45");
  }else{
    line1.addClass("positive-45");
  }
  if(line2.hasClass("negative-45")){
    line2.removeClass("negative-45");
  }else{
    line2.addClass("negative-45");
  }

})
$(".brightness").click(function(){

  if($(this).hasClass("bright")){
    $(this).removeClass("bright");
$(this).attr('title', 'Brighten the color');
      $.each(coloredDivs, function() {
        if(($(this).hasClass("bright"))){
          $(this).removeClass("bright");
        }
      });

  }else{
    $(this).addClass("bright");
    $(this).attr('title', 'Dim the color');
    $.each(coloredDivs, function() {
      if(!($(this).hasClass("bright"))){
        $(this).addClass("bright");
      }
    });

  }
});
$(".night-mode").click(function(){
  if($(this).hasClass("far")){
    $(this).attr('title', 'Turn off Dark mode');
    $(".brightness").addClass("disabled");
    $(this).removeClass("far");
    $(this).addClass("fas");
    $.each(coloredDivs, function() {
      $(this).addClass("dark");
    });
  }else{
    $(this).removeClass("fas");
    $(this).attr('title', 'Turn on Dark mode');
    $(".brightness").removeClass("disabled");
    $(this).addClass("far");
    $.each(coloredDivs, function() {
      $(this).removeClass("dark");
    });

  }
});
$(".carousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 5 ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -5 ){
            $(this).carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});


var $animatedElements = $(".animated-elements");
var $window = $(window);
$window.on("scroll resize", check_if_in_view);

$window.trigger("scroll");

function check_if_in_view() {
  // Returns height of browser viewport
  var $windowHeight = $(window).height();

  //The vertical scroll position is the same as the number of pixels that are hidden from view above the scrollable area.
  // If the scroll bar is at the very top, or if the element is not scrollable, this number will be 0.
  var $windowTopPosition = $(window).scrollTop();

  var $windowBottomPosition = $windowHeight + $windowTopPosition;

  $.each($animatedElements, function() {
    var $element = $(this);
    //Returns the height of the element, including top and bottom padding, border, and optionally margin, in pixels.
    var elementHeight = $element.outerHeight();

    //The .offset() method allows us to retrieve the current position of an element (specifically its border box, which excludes margins) relative to the document
    var elementTopPosition = $element.offset().top;

    var elementBottomPosition = elementHeight + elementTopPosition;

    //check to see if this current container is within viewport
    if(viewportWidth <= 850){
      if ((elementBottomPosition >= $windowTopPosition) && ($windowBottomPosition >= elementBottomPosition - (elementHeight/2))) {
        $element.addClass("in-view");
      } else if (($windowBottomPosition < elementTopPosition) || ($windowTopPosition > elementBottomPosition)) {
        $element.removeClass("in-view");
      }
    }else{
      if ((elementBottomPosition >= $windowTopPosition) && ($windowBottomPosition >= elementBottomPosition)) {
        $element.addClass("in-view");
      } else if (($windowBottomPosition < elementTopPosition) || ($windowTopPosition > elementBottomPosition)) {
        $element.removeClass("in-view");
      }
    }


  });
}
