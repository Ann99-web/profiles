$(document).ready(function () {
  // start sessionStorage cookie
  if (localStorage.getItem("story")) {
    $('.modal-cookie').fadeOut();
  } else {
    $('.modal-cookie').fadeIn();
  }

  $('.modal-cookie-button').click(function () {
    localStorage.setItem("story", "true");
    $('.modal-cookie').fadeOut();
  });
  // end sessionStorage cookie

  let modalMenu = false,
    modalSign = false;

  if (localStorage.getItem("story-auth")) {
    $('.header-user').text('Log-out');
    $('.hero__nav').removeClass('show');
    $('.hero__nav').addClass('hide');
    $('.hero-subtitle').css('margin-bottom', '0');
    $(".modal-sign").addClass('hide');
    $("body").css('overflow', 'visible');
    modalSign = false;
  } else {
    $('.hero__nav').removeClass('hide');
    $('.hero__nav').addClass('show');
  }

  $(".header-menu").on('click', () => {
    if (!modalMenu) {
      $(".modal-menu").css('display', 'block');
      $(".modal-menu").animate({ right: '0' });
      $(".header-menu-img").attr('src', 'img/close.svg')
      modalMenu = true;
    } else {
      $(".modal-menu").animate({ right: '-100%' });
      $(".modal-menu").css('display', 'none');
      $(".header-menu-img").attr('src', 'img/menu.svg')
      modalMenu = false;
    }
  })

  $('ul.modal-sign-nav').on('click', 'li:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.modal-sign-block').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

  $(".hero-btn__signup").on('click', () => {
    if (!modalSign) {
      $(".modal-sign").removeClass('hide');
      $(".modal-sign").addClass('show');
      $(".modal-login").removeClass('active');
      $(".modal-sign-log").removeClass('active');
      $(".modal-signUp").addClass('active')
      $(".modal-sign-up").addClass('active')
      $("body").css('overflow', 'hidden');
      modalSign = true;
    }
  })
  $(".hero-btn__login").on('click', () => {
    if (!modalSign) {
      $(".modal-sign").removeClass('hide');
      $(".modal-sign").addClass('show');
      $(".modal-signUp").removeClass('active')
      $(".modal-sign-up").removeClass('active')
      $(".modal-login").addClass('active');
      $(".modal-sign-log").addClass('active');
      $("body").css('overflow', 'hidden');
      modalSign = true;
    }
  })
  
  $(".modal-sign-close").on('click', () => {
    if (modalSign) {
      $(".modal-sign").removeClass('show');
      modalSign = false;
      $("body").css('overflow', 'visible');
    }
  })

  $(".modal-sign-up-form").validate({
    rules: {
      email: "required",
      password: {
        required: true,
        minlength: 6
      },
      cfmPassword: {
        required: true,
        equalTo: "#signup-pass"
      },
    },
    messages: {
      email: "Please enter your Name",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 6 characters long"
      },
      cfmPassword: {
        required: "Please confirm a password",
      },
    },
    errorPlacement: function (error, element) {
      if (element.is(":radio")) {
        error.appendTo(element.parents('.form-group'));
      }
      else {
        error.insertAfter(element);
      }
    },
    submitHandler: function () {
      $(".modal-sign-up-success").fadeIn().delay(2000).fadeOut();
      $(".modal-sign").removeClass('show');
      $(".modal-sign").addClass('hide');
      modalSign = false;
      $("body").css('overflow', 'visible');
    }
  });

  // $('.modal-sign-up-form').on('submit', function (e) {
  //   e.preventDefault();
  //   var fd = new FormData(this);
  //   $.ajax({
  //     url: 'php/send.php',
  //     type: 'POST',
  //     contentType: false,
  //     processData: false,
  //     data: fd,
  //     success: function (msg) {
  //       if (msg == 'ok') {
  //         $(".modal-sign-up-success").fadeIn().delay(2000).fadeOut();
  //         $(".modal-sign").addClass('hide');
  //         modalSign = false;
  //         $("body").css('overflow', 'visible');
  //       } else {
  //       }
  //     }
  //   });
  //   $("input[type=email]").val('');
  //   $("input[type=password]").val('');
  // });

  $('.modal-sign-log-form').on('submit', function (e) {
    e.preventDefault();
    if ($("#signlog-email").val() != 'admin@gmail.com') {
      $("#signlog-email").val('Error');
    }
    else if ($("#signlog-pass").val() != 'admin') {
      $("#signlog-pass").val('Error');
    } else {
      $.ajax({
        success: function (msg) {
          localStorage.setItem("story-auth", "true");
          $(".modal-sign-log-success").fadeIn().delay(2000).fadeOut();
          $('.header-user').text('Log-out')
          $('.hero__nav').removeClass('show');
          $('.hero__nav').addClass('hide');
          $('.hero-subtitle').css('margin-bottom', '0')
          $(".modal-sign").removeClass('show');
          $(".modal-sign").addClass('hide');
          modalSign = false;
          $("body").css('overflow', 'visible');
        }
      });
      $("input[type=email]").val('');
      $("input[type=password]").val('');
    }
  });

  $('.js-clear-story').on('click', function () {
    localStorage.removeItem('story-auth');
    location.reload(true);
  });

});