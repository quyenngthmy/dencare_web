
var counter = document.querySelector("#counter-box");
if (counter) {
    var a = 0;
    $(window).scroll(function () {
        var oTop = $('#counter-box').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $(".counter").each(function () {
                var $this = $(this),
                    countTo = $this.attr("data-number");
                $({
                    countNum: $this.text()
                }).animate(
                    {
                        countNum: countTo
                    },
    
                    {
                        duration: 2500,
                        easing: "swing",
                        step: function () {
                            //$this.text(Math.ceil(this.countNum));
                            $this.text(
                                Math.ceil(this.countNum).toLocaleString("de")
                            );
                        },
                        complete: function () {
                            $this.text(
                                Math.ceil(this.countNum).toLocaleString("de")
                            );
                            //alert('finished');
                        }
                    }
                );
            });
            a = 1;
        }
    });
}


var introSection = document.querySelector(".intro-section");
if (introSection) {
    var isCount = true;
    window.addEventListener("scroll", (e) => {
      var windowHeight = window.innerHeight;
      var elementTop = introSection.getBoundingClientRect().top;
      var elementVisible = 50;
      if (elementTop < windowHeight - elementVisible && isCount == true) {
  
          $(document).ready(function() {
              $('.count').each(function() {
                  $(this).prop('Counter',0).animate({
                      Counter: $(this).text()
                  }, {
                      duration: 2000,
                      easing: 'swing',
                      step: function(now) {
                          $(this).text(commaSeparateNumber(Math.ceil(now)));
                      }
                  });
              });
              
              function commaSeparateNumber(val)
              {
                  while (/(\d+)(\d{3})/.test(val.toString())){
                    val = val.toString().replace(/(\d+)(\d{3})/, '$1'+'.'+'$2');
                  }
                  return val;
                }
          })
        isCount = false;
      }
  
    });
}