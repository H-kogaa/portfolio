let slides = document.getElementsByClassName('slide');

$(slides[0]).fadeIn();

let currentNum = 0;

const slideShow = () => {
    if(currentNum === (slides.length-1)) {
        $(slides[currentNum]).fadeOut();
        currentNum = 0;
    } else {
        currentNum += 1;
    $(slides[currentNum-1]).fadeOut();
    }
    $(slides[currentNum]).fadeIn();
}

setInterval(slideShow,1500);

/* 左からフェードイン
ーーーーーーーーーーーーーーーーーーーーーーー*/
$(function() {
    $(window).scroll(function() {
      $('#about').css({
        'opacity': '0',
        'transform': 'translateX(-50px)'
      });
      
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
  
      $('#about').each(function() {
        var elemPos = $(this).offset().top;
  
        if (scroll > elemPos - windowHeight + 100) {
          $(this).css({
            'opacity': '1',
            'transform': 'translateX(0)'
          });
        }
      });
    });
  });

  $(function() {
    $(window).scroll(function() {
      $('#skill').css({
        'opacity': '0',
        'transform': 'translateX(-50px)'
      });
      
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
  
      $('#skill').each(function() {
        var elemPos = $(this).offset().top;
  
        if (scroll > elemPos - windowHeight + 100) {
          $(this).css({
            'opacity': '1',
            'transform': 'translateX(0)'
          });
        }
      });
    });
  });

  $('#isara').fadeIn(3000);
  $('#pig-cafe').fadeIn(3000);
