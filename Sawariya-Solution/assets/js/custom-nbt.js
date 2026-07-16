jQuery("document").ready(function($){
        var nav = $('#masthead, .head-banner-outer');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) { 
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });

  $('#produttestnew').owlCarousel({
                loop: true,
                margin: 30, 
                responsiveClass: true,
                responsive: {
                     0: {
                    items: 1, 
                    nav: true
                  }, 
                  480 : {
        items: 1,
                    nav: true
    }, 767 : { 
   items: 3,
                    nav: true 
    },        1200:{
           items: 3,
                    nav: true
        }
                  
                  
                  
                  
                }
              })


  $('#owltestnew').owlCarousel({
                loop: true,
                margin: 30, 
                responsiveClass: true,
                responsive: {
                     0: {
                    items: 1, 
                    nav: true
                  }, 
                  480 : {
        items: 1,
                    nav: true
    }, 767 : { 
   items: 1,
                    nav: true
    },        1200:{
           items: 1,
                    nav: true
        }
                  
                  
                  
                  
                }
              })
  $('#owltest').owlCarousel({
                loop: true,
                margin: 30, 
                responsiveClass: true,
                responsive: {
                     0: {
                    items: 1, 
                    nav: true
                  }, 
                  480 : {
        items: 1,
                    nav: true
    }, 767 : { 
   items: 2,
                    nav: true
    },        1200:{
           items: 3,
                    nav: true
        }
                  
                  
                  
                  
                }
              })


      $('#owlhire').owlCarousel({
    loop:true,
    margin:30,
    items:3,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})




  /*$('.owl-carousel').owlCarousel({
                loop: true,
                margin: 0,
                responsiveClass: true,
                responsive: {
                     0: {
                    items: 1,
                    nav: true
                  }
                }
              })
*/

/* $('#myelement-fo').click(function () {
    var duration = 100;
    
        $(".toggle-form").toggle("slow"); 
    });
    
     $('#close-fo').click(function () {
         //$(".toggle-form").removeClass("intrsso");
        $(".toggle-form").toggle("slow");
    });
*/

   $("#myelement-fo").click(function () {
        $(".toggle-form").toggle("slow");
      });
   $("#close-fo").click(function () {
        $(".toggle-form").toggle("slow");
      });


});


////////////////////////////////////////////
var piesiteFired = 0;
jQuery(document).ready(function() {
    var $win = $(window),
        $win_height = $(window).height(),
        // - A multiple of viewport height - The higher this number the sooner triggered.
        windowPercentage = $(window).height() * 0.9;
    $win.on("scroll", scrollReveal);
    function scrollReveal() {
        var scrolled = $win.scrollTop();
        
        ///////////////////////////////////////
        // Bar Charts scroll activate, looking for .trigger class to fire.
        $(".trigger").each(function() {
            var $this = $(this),
                offsetTop = $this.offset().top;
            if (
                scrolled + windowPercentage > offsetTop ||
                $win_height > offsetTop
            ) {
                $(this).each(function(key, bar) {
                    var percentage = $(this).data("percentage");
                    $(this).css("height", percentage + "%"); 
                    
                    ///////////////////////////////////////
                    //        Animated numbers
                    $(this).prop("Counter", 0).animate(
                        {
                            Counter: $(this).data("percentage")
                        },
                        {
                            duration: 2000,
                            easing: "swing",
                            step: function(now) {
                                $(this).text(Math.ceil(now));
                            }
                        }
                    );
                    //        Animated numbers
                    ///////////////////////////////////////
                });

            } else {
                ///////////////////////////////////////
                // To keep them triggered, lose this block.
                $(this).each(function(key, bar) {
                    $(this).css("height", 0);
                });
            }    
            
        });

 
        
        ///////////////////////////////////////
        // Pie Charts - scroll activate
        $(".piesite").each(function() {
            var $this = $(this),
                offsetTop = $this.offset().top;
            if (
                scrolled + windowPercentage > offsetTop ||
                $win_height > offsetTop
            ) {
                if (piesiteFired == 0) {
                    timerSeconds = 3;
                    timerFinish = new Date().getTime() + timerSeconds * 1000;
                    $(".piesite").each(function(a) {
                        pie = $("#pie_" + a).data("pie");
                        timer = setInterval(
                            "stoppie(" + a + ", " + pie + ")",
                            0
                        );
                    });
                    piesiteFired = 1;
                }
            } else {
                // To keep them triggered, lose this block.
                $(".piesite").each(function() {
                    piesiteFired = 0;
                });
            }
        });
    }
    scrollReveal();
});



///////////////////////////////////////
//        The Pie Charts
///////////////////////////////////////

// The following code is originally from the excellent pen:
// https://codepen.io/StephenScaff/pen/VYaQGB by Stephen Scaff

var timer;
var timerFinish;
var timerSeconds;

function drawTimer(c, a) {
    $("#pie_" + c).html(
        '<div class="percent"></div><div id="slice"' +
            (a > 50 ? ' class="gt50"' : "") +
            '><div class="pie"></div>' +
            (a > 50 ? '<div class="pie fill"></div>' : "") +
            "</div>"
    );
    var b = 360 / 100 * a;
    $("#pie_" + c + " #slice .pie").css({
        "-moz-transform": "rotate(" + b + "deg)",
        "-webkit-transform": "rotate(" + b + "deg)",
        "-o-transform": "rotate(" + b + "deg)",
        transform: "rotate(" + b + "deg)"
    });
    a = Math.floor(a * 100) / 100;
    arr = a.toString().split(".");
    intPart = arr[0];
    $("#pie_" + c + " .percent").html(
        '<span class="int">' +
            intPart +
            "</span>" +
            '<span class="symbol">%</span>'
    );
}
function stoppie(d, b) {
    var c = (timerFinish - new Date().getTime()) / 1000;
    var a = 100 - c / timerSeconds * 100;
    a = Math.floor(a * 100) / 100;
    if (a <= b) {
        drawTimer(d, a);
    } else {
        b = $("#pie_" + d).data("pie");
        arr = b.toString().split(".");
        $("#pie_" + d + " .percent .int").html(arr[0]);
    }
}

