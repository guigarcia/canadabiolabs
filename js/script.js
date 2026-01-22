window.onload = function () {
  //hide the preloader
  document.querySelector('.loader').style.display = 'none';
};
// let headerHeight = $('.header').outerHeight();

// $(document.body).css('padding-top', headerHeight + 'px');

$('#form').submit(function (event) {
  
  event.preventDefault(); // Prevent direct form submission
  $('#alert').css('display', 'block');

  if (clientValidation()) {
    $('#alert').removeClass('alert-danger');
    $('#loader').css('display', 'flex');


    $.ajax({
        url: '/mail.php',
        type: 'post',
        data: $('#form').serialize(),
        dataType: 'json',
        success: function (_response) {
            console.log('response:  ',_response);
          // Success handling
          var error = _response.error;
          var success = _response.success;
          if (error) {

            $('#loader').css('display', 'none');
            $('#alert').html(error);
            $('#alert').addClass('alert-danger');
          } else {
            $('#loader').css('display', 'none');
            $('#form').css('display', 'none');
            $('#successSent').html(success);
            $('#successSent').css('display', 'block');
          }
        },
        error: function (jqXhr, json, errorThrown) {
          // Error handling
          var error = jqXhr.responseText;
          
          $('#loader').css('display', 'none');
          $('#alert').html(error);
        },
      });
  } else {
    $('#loader').css('display', 'none');
    $('#alert').html(`
      <h3 class="feedback-msg-subtitle">
        Por favor, preencha todos os campos obrigatórios
      </h3>`);
    $('#alert').addClass('alert-danger');
  }
});



function clientValidation() {
  let validation = true;
  // COUNTRY
  if (!$('#country').val()) {
    $('#country').css('border', '1px solid #FF005C');
    validation = false;
  } else {
    $('#country').css('border', '1px solid #d3ddeb');
    validation = true;
  }
  // EMAIL
  if (!$('#email').val()) {
    $('#email').css('border', '1px solid #FF005C');
    validation = false;
  } else {
    $('#email').css('border', '1px solid #d3ddeb');
    validation = true;
  }

  // CHECKBOXES
  if (!$('#agree').is(':checked')) {
    $('.checkbox-agree').css('border', '1px solid transparent');
    validation = true;
  } else {
    $('.checkbox-agree').css('border', '1px solid #FF005C');
    validation = false;
  }

  // MESSAGE

  if (!$('#comments').val()) {
    $('#comments').css('border', '1px solid #FF005C');
    validation = false;
  } else {
    $('#comments').css('border', '1px solid #d3ddeb');
    validation = true;
  }

  if (
    !$('#country').val() ||
    !$('#email').val() ||
    !$('#agree').is(':checked') ||
    !$('#comments').val()
  )
    validation = false;
  else validation = true;

  return validation;
}

$('#country').on('input', function (e) {
  if ($(this).val()) {
    $(this).css('border', '1px solid #d3ddeb');
  } else {
    $(this).css('border', '1px solid #FF005C');
  }
});

$('#email').on('input', function (e) {
  if ($(this).val()) {
    $(this).css('border', '1px solid #d3ddeb');
  } else {
    $(this).css('border', '1px solid #FF005C');
  }
});

$('#comments').on('input', function (e) {
  $('#msg-length').html($('#comments').val().length);
  if ($(this).val()) {
    $(this).css('border', '1px solid #d3ddeb');
  } else {
    $(this).css('border', '1px solid #FF005C');
  }
});

// CHECKBOXES
$('#agree').on('input', function (e) {
  if ($(this).is(':checked')) {
    $('.checkbox-agree').css('border', '1px solid transparent');
  } else {
    $('.checkbox-agree').css('border', '1px solid #FF005C');
  }
});

//  GO UP *************************************************
var stepTime = 5;
var docBody = document.body;
var focElem = document.documentElement;

var scrollAnimationStep = function (initPos, stepAmount) {
  var newPos = initPos - stepAmount > 0 ? initPos - stepAmount : 0;

  docBody.scrollTop = focElem.scrollTop = newPos;

  newPos &&
    setTimeout(function () {
      scrollAnimationStep(newPos, stepAmount);
    }, stepTime);
};

var scrollTopAnimated = function (speed) {
  var topOffset = docBody.scrollTop || focElem.scrollTop;
  var stepAmount = topOffset;

  speed && (stepAmount = (topOffset * stepTime) / speed);

  scrollAnimationStep(topOffset, stepAmount);
};

let goUp = document.getElementById('go-up');
window.onscroll = function (e) {
  if (window.scrollY > 200) {
    goUp.classList.add('active');
  } else if (window.scrollY < 50) {
    goUp.classList.remove('active');
  }
  //console.log(window.scrollY); // Value of scroll Y in px
};

// STICKY HEADER  *************************************************

// $(window).scroll(function (e) {
//   let scroll = $(window).scrollTop();

//   let currentPos = scroll;
//   console.log(scroll);
//   if (scroll > 150) {
//     $('.header').addClass('sticky');

//     $('.header').css('position', 'fixed');
//     // $('.header').css('transform', 'translateY(0)');

//     $('.header').css('top', '0');
//     $('.header').css('left', '0');
//     $('.header').css('right', '0');
//   } else if (scroll == 0) {
//     $('.header').removeClass('sticky');

//     $('.header').css('position', 'absolute');
//   }
// });

$('#menuBtn').click(function () {
  $('#menuBtn').toggleClass('active');
  $('.backdrop').toggleClass('active');
  $('body').toggleClass('active');
  $('#searchTrigger').toggleClass('active');
  $('.header').toggleClass('active');
  $('.backdrop').css('z-index', '2');
});

$('#searchTrigger').click(function () {
  $('.search').addClass('active');
  bodyMainBackdropActive();
  $('.backdrop').css('z-index', '101');
  $('.search-form').focus();
  hideHeader();
});

$('.backdrop').click(function () {
  $('.search').removeClass('active');
  $('.header').removeClass('active');
  $('#searchTrigger').removeClass('active');
  $('#menuBtn').removeClass('active');
  $('.nav__menu').removeClass('active');
  $('.backdrop').css('z-index', '-2');
  bodyMainBackdropRemove();
  showHeader();

  if ($('.important-info').hasClass('active')) {
    $('.important-info').removeClass('active');
    $('#importantBtn').html('Mostrar Mais');
  }
});

function hideHeader() {
  $('.header').css('position', 'absolute');
  $('.header').css('transform', 'translateY(-100%)');
  $(document.body).css('padding-top', 0);

  $('.header').css('top', '0');
  $('.header').css('left', '0');
  $('.header').css('right', '0');
  $('.header').css('opacity', '0');
}
function showHeader() {
  $('.header').css('position', 'absolute');
  $('.header').css('transform', 'translateY(0)');
  $(document.body).css('padding-top', headerHeight + 'px');

  $('.header').css('top', '0');
  $('.header').css('left', '0');
  $('.header').css('right', '0');
  $('.header').css('opacity', '1');
}

function bodyMainBackdropActive() {
  $('.backdrop').addClass('active');
  $('main').addClass('blur');
  $('body').addClass('active');
}

function bodyMainBackdropRemove() {
  $('.backdrop').removeClass('active');
  $('main').removeClass('blur');
  $('body').removeClass('active');
}

$('#listStyle').click(function () {
  if (!$('.categories__list').hasClass('list-style')) {
    $('.categories__list').css('opacity', '0');
    $('.loader').css('display', 'flex');
    setTimeout(function () {
      $('.categories__list').addClass('list-style');
    }, 200);
    setTimeout(function () {
      $('.loader').css('display', 'none');
      $('.categories__list').css('opacity', '1');
    }, 500);
  }
});

$('#gridStyle').click(function () {
  if ($('.categories__list').hasClass('list-style')) {
    $('.categories__list').css('opacity', '0');
    $('.loader').css('display', 'flex');
    setTimeout(function () {
      $('.categories__list').removeClass('list-style');
    }, 200);
    setTimeout(function () {
      $('.loader').css('display', 'none');
      $('.categories__list').css('opacity', '1');
    }, 500);
  }
});

let activeSlider = 1;
let sliderLength = $('.slider-item').length;
let slideSpeed = 5000;
let autoSlideOnOf = true;
let timeout;
$('#sliderNext').click(function () {
  clearTimeout(timeout);
  nextSlide();
});

if ($('.slider').hasClass('alt')) slideSpeed = 1500; // change slider speed for other pages

function nextSlide() {
  activeSlider++;
  if (activeSlider > sliderLength) activeSlider = 1;
  // slider items
  $('.slider-item').each(function () {
    $(this).removeClass('active');

    if ($(this).data('slider') === activeSlider) {
      $(this).addClass('active');
    }
  });
  // slider bullets
  $('.slider-number li').each(function () {
    $(this).removeClass('active');
    console.log($(this));
    if ($(this).data('slider') === activeSlider) {
      $(this).addClass('active');
    }
  });

  if (autoSlideOnOf) {
    // reset progress line
    $('.slider-duration').removeClass('active');
    setTimeout(function () {
      $('.slider-duration').addClass('active');
    }, 1);
    autoSlide(slideSpeed);
  }
}
if (autoSlideOnOf) {
  clearTimeout(timeout);
  autoSlide(slideSpeed);
  $('.slider-duration').addClass('active');
}

function autoSlide(speed) {
  timeout = setTimeout(nextSlide, speed);
}

$('#sliderPrev').click(function () {
  clearTimeout(timeout);
  activeSlider--;
  if (activeSlider < 1) activeSlider = sliderLength;
  $('.slider-item').each(function () {
    $(this).removeClass('active');

    if ($(this).data('slider') === activeSlider) {
      $(this).addClass('active');
    }
  });

  // slider bullets
  $('.slider-number li').each(function () {
    $(this).removeClass('active');
    console.log($(this));
    if ($(this).data('slider') === activeSlider) {
      $(this).addClass('active');
    }
  });
  if (autoSlideOnOf) {
    // reset progress line
    $('.slider-duration').removeClass('active');
    setTimeout(function () {
      $('.slider-duration').addClass('active');
    }, 1);
    autoSlide(slideSpeed);
  }
});

// slider bullets
$('.slider-number li').each(function () {
  // on click
  $(this).click(function () {
    clearTimeout(timeout);
    activeSlider = $(this).data('slider') - 1;
    nextSlide();
  });
});

$('#importantBtn').click(function (e) {
  e.preventDefault();
  $('.backdrop').css('z-index', '10');

  $('.important-info').toggleClass('active');
  $('.backdrop').toggleClass('active');
  $('body').toggleClass('active');
  if ($('.important-info').hasClass('active')) $(this).html('Mostrar Menos');
  else $(this).html('Mostrar Mais');
});

$('.product-page__img').each(function () {
  $(this).click(function () {
    $('.product-page__modal img').attr('src', $(this).attr('src'));
    $('.product-page__modal').addClass('active');
  });
});
$('.product-page__modal').click(function () {
  $(this).removeClass('active');
});
// ─── BLOQUEIO DE CLIQUE DIREITO REMOVIDO PARA MELHOR UX ───
// ['contextmenu','copy','cut','paste','selectstart','dragstart']
//   .forEach(evt =>
//     document.addEventListener(evt, e => {
//       e.preventDefault();
//       e.stopPropagation();
//     }, { capture: true })
//   );
