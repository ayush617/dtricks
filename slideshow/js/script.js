  	$(document).ready(function(){
  		$(".slide").slick({
          centerMode: true,
          centerPadding: '60px',
          variableWidth: false,
          slidesToShow: 4,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]

  		});

    });
