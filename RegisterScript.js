$(document).ready(function() {
   
    // Button click volunteer event handler
    $('#volunteer').on('click', function() {
        $('#fullscreen-image').css('background-image', 'url("Resources/background.png")') // Change background 
        $('#register').addClass('hidden');
        $('#identity').addClass('hidden');
        // Show message box
        $('#volunteerMsgBox').removeClass('hidden');
        $('#elderMsgBox').addClass('hidden');
        $('#volunteerMsgBox').addClass('large'); 
        $('body').append('<div class="translucent-overlay"></div>');
        // Hide the button
        $(this).hide();
        $('#elder').hide();
    });
    // Button click elder event handler
    $('#elder').on('click', function() {
        $('#fullscreen-image').css('background-image', 'url("Resources/background.png")') // Change background 
        $('#register').addClass('hidden');
        $('#identity').addClass('hidden');
        // Show message box
        $('#elderMsgBox').removeClass('hidden'); 
        $('#volunteerMsgBox').addClass('hidden'); 
        $('#elderMsgBox').addClass('large'); 
        $('body').append('<div class="translucent-overlay"></div>');
        // Hide the button
        $(this).hide();
        $('#volunteer').hide();
    });

    // Close message box and remove the overlay
    $('.closeMessageBox').on('click', function() {
      $('#volunteerMsgBox').addClass('hidden');
      $('#elderMsgBox').addClass('hidden');
      $('.translucent-overlay').remove();
    });

});
  
