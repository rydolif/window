$(function() {

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('nav').toggleClass('nav--active');
    $('header').toggleClass('header--menu');
  });

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

// //------------------------------------form-------------------------------------------
//   $('input[type="tel"]').mask('+0 (000) 000-00-00');

//   jQuery.validator.addMethod("phoneno", function(phone_number, element) {
//      return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
//   }, "Введите Ваш телефон");

//   $(".form").each(function(index, el) {
//     $(el).addClass('form-' + index);

//     $('.form-' + index).validate({
//       rules: {
//         phone: {
//           required: true,
//           phoneno: true
//         },
//         name: 'required',
//       },
//       messages: {
//         name: "Введите Ваше имя",
//         phone: "Введите Ваш телефон",
//       },
//       submitHandler: function(form) {
//         var t = {
//           name: jQuery('.form-' + index).find("input[name=name]").val(),
//           phone: jQuery('.form-' + index).find("input[name=phone]").val(),
//           subject: jQuery('.form-' + index).find("input[name=subject]").val()
//         };
//         ajaxSend('.form-' + index, t);
//       }
//     });

//   });

//   // function ajaxSend(formName, data) {
//   //   jQuery.ajax({
//   //     type: "POST",
//   //     url: "sendmail.php",
//   //     data: data,
//   //     success: function() {
//   //       $(".modal").popup("hide");
//   //       $("#thanks").popup("show");
//   //       setTimeout(function() {
//   //         $(formName).trigger('reset');
//   //       }, 2000);
//   //     }
//   //   });
//   // }


//   function ajaxSend(formName, data) {
//     jQuery.ajax({
//       type: "POST",
//       url: "/wp-content/themes/eurocara/sendmail.php",
//       data: data,
//       success: function() {
//         $(".modal").popup("hide");
//         $("#thanks").popup("show");
//         setTimeout(function() {
//           $(formName).trigger('reset');
//         }, 2000);
//       }
//     });
//   }

//   function Send(formName, data) {
//     $.ajax({
//         url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/172905/test.pdf',
//         method: 'GET',
//         xhrFields: {
//             responseType: 'blob'
//         },
//         success: function (data) {
//             var a = document.createElement('a');
//             var url = window.URL.createObjectURL(data);
//             a.href = url;
//             a.download = 'myfile.pdf';
//             a.click();
//             window.URL.revokeObjectURL(url);
//         }
//     });
//   };


//------------------------------------form-------------------------------------------
  $('input[type="tel"]').mask('+0 (000) 000-00-00');

  jQuery.validator.addMethod("phoneno", function(phone_number, element) {
     return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
  }, "Введите Ваш телефон");

  $(".form").each(function(index, el) {
    $(el).addClass('form-' + index);

    $('.form-' + index).validate({
      rules: {
        phone: {
          required: true,
          phoneno: true
        },
        name: 'required',
      },
      messages: {
        name: "Введите Ваше имя",
        phone: "Введите Ваш телефон",
      },
      submitHandler: function(form) {
        var t = {
          name: jQuery('.form-' + index).find("input[name=name]").val(),
          phone: jQuery('.form-' + index).find("input[name=phone]").val(),
          subject: jQuery('.form-' + index).find("input[name=subject]").val()
        };
        ajaxSend('.form-' + index, t);
        Send('.form-' + index, t);
      }
    });

  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }

  function Send(formName, data) {
    $.ajax({
        url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/172905/test.pdf',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'myfile.pdf';
            a.click();
            window.URL.revokeObjectURL(url);
        }
    });
  };


//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header--active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header--active');
      }
  });

//-------------------------скорость якоря---------------------------------------
  $(".header__list").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 60}, 'slow', 'swing');

  });


  
});

//----------------------------------------preloader----------------------------------

  $(window).on('load', function(){
    $('.preloader').delay(1000).fadeOut('slow');
  });
