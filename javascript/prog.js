var counter = 1;
$(document).ready(function() {

  var erroEle = $('.error-message'),
    focusInput = $('.questions').find('.active');

  $('.navigation a').click(function() {
    nextMaster('navi');

    var thisInput = $('#' + $(this).attr('data-ref'));
    $('.active').removeClass('active');
    thisInput.focus().addClass('active')
    thisInput.closest('li').animate({
      marginTop: '0px',
      opacity: 1
    }, 200);
    thisInput.closest('li').prevAll('li').animate({
        marginTop: '-150px',
        opacity: 0
      }, 200)
      

    thisInput.closest('li').nextAll('li').animate({
        marginTop: '150px',
        opacity: 0
      }, 200)
      
    errorMessage(erroEle, '', 'hidden', 0);

  });

  if (focusInput.val() != '') {
    $('#next-page').css('opacity', 1);
    
  }

  $(document).keypress(function(event) {
    if (event.which == 13) {
      nextMaster('keypress');
      event.preventDefault();
    }

    $('#next-page').click(function() {
      
      var focusInput = $('.questions').find('.active');
      if (focusInput.attr('name')=="ss")
      $('#next-page').css('opacity', 0);
      nextMaster('nextpage');

    })

  });

  function nextMaster(type) {
    var focusInput = $('.questions').find('.active');
  
    if (focusInput.val() != '') {
      if ((focusInput.attr('name') == 'name')&& focusInput.val().length<2)  {
        errorMessage(erroEle, "isn't your " + focusInput.attr('name') + " bit small. ", 'visible', 1);
      } else if (focusInput.attr('name') == 'email' && !validateEmail(focusInput.val())) {
        errorMessage(erroEle, "It doesn't look like a " + focusInput.attr('name'), 'visible', 1);
      } else if (focusInput.attr('name') == 'phone' && !validatePhone(focusInput.val())) {
        errorMessage(erroEle, "It doesn't look like a " + focusInput.attr('name'), 'visible', 1);
      } else {

        if (type != 'navi') 
        showLi(focusInput);

       
       
        $('#next-page').css('opacity', 0);
        errorMessage(erroEle, '', 'hidden', 0);
      }
    } else if (type == 'keypress') {
      errorMessage(erroEle, 'please enter your ' + focusInput.attr('name'), 'visible', 1);
    }

  }

  $("input[type='text']").keyup(function(event) {
    var focusInput = $(this);
    
    
    if (focusInput.val().length > 1) {
      if ((focusInput.attr('name') == 'email' && !validateEmail(focusInput.val())) ||
        (focusInput.attr('name') == 'phone' && !validatePhone(focusInput.val()))||
        (focusInput.attr('name') == 'propertytype' && focusInput.val()=="type") ) {
        $('#next-page').css('opacity', 0);
      } else {
        $('#next-page').css('opacity', 1);
      }

    } else {
      
      $('#next-page').css('opacity', 0);
    }
  });

  $("#city").change(function(event) {
    var focusInput = $(this);
    $("#cityup").val(focusInput.val());
    if (focusInput.val().length > 1) {
      $('#next-page').css('opacity', 1);
      showLi(focusInput);
      
    }
  });
  document.getElementById("ptype").addEventListener("change",function(){


    if(document.getElementById("ptype").value=="Residential"){
        document.getElementById("pfhselector").style.display="inline-block";
        document.getElementById("pbhkselector").style.display="inline-block";
        document.getElementById("pcommercialselector").style.display="none";
    }else{
        document.getElementById("pfhselector").style.display="none";
        document.getElementById("pbhkselector").style.display="none";
        document.getElementById("pcommercialselector").style.display="inline-block";
    }
    
    
    });

    $("#pcommercialselector").change(function(event) {
      var focusInput = $(this);
      
      $("#pcommercialselector").val(focusInput.val());
      if (focusInput.val().length > 1) {
        $('#next-page').css('opacity', 1);
        showLi(focusInput);
        
      }
    });
    
    $("#pbhkselector").change(function(event) {
      var focusInput = $(this);
      
      $("#pbhkselector").val(focusInput.val());
      if (focusInput.val().length > 1) {
        $('#next-page').css('opacity', 1);
        showLi(focusInput);
        
      }
    });



  $('#signup').click(function() {
    $('#lot').css({'display':'block'});
    $('.navigation').fadeOut(400).css({
      'display': 'none'
    });
    $('#sign-form').fadeOut(400).css({
      'display': 'none'
    });
    $(this).fadeOut(400).css({
      'display': 'none'
    });
    $('#wf').animate({
      opacity: 1,
      marginTop: '1em'
    }, 500).css({
      'display': 'block'


    });
  });

  $('#show-pwd').mousedown(function() {
    $(this).toggleClass('view').toggleClass('hide');
    $('#password').css('opacity', 0);
    $('#viewpswd').css('opacity', 1);
  }).mouseup(function() {
    $(this).toggleClass('view').toggleClass('hide');
    $('#password').css('opacity', 1);
    $('#viewpswd').css('opacity', 0);
  });

});

function showLi(focusInput) {

  focusInput.closest('li').animate({
    marginTop: '-150px',
    opacity: 0
  }, 200);

  console.log(focusInput.closest('li'));

  if (focusInput.attr('id') == 'viewpswd') {
    $("[data-ref='" + focusInput.attr('id') + "']")
      .addClass('done').html('password');

  }else if (focusInput.attr('id') == 'pbhkselector'||focusInput.attr('id') == 'pcommercialselector') {
    var id='pcommercialselector';
    $("[data-ref='" + id + "']")
      .addClass('done').html('Property Info');
   
  } else if (focusInput.attr('id') == 'img' ){
    
    $("[data-ref='" + focusInput.attr('id') + "']")
      .addClass('done').html('images');
    
  } 
  else {
    $("[data-ref='" + focusInput.attr('id') + "']").addClass('done').html(focusInput.val());
  }

  focusInput.removeClass('active');
  counter++;

  var nextli = focusInput.closest('li').next('li');

  nextli.animate({
    marginTop: '0px',
    opacity: 1
  }, 200);

  nextli.find('input').focus().addClass('active');

}

function errorMessage(textmeg, appendString, visib, opaci) {
  textmeg.css({
    visibility: visib
  }).animate({
    opacity: opaci
  }).html(appendString)
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePhone(phone) {
  var re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  return re.test(phone);
}