$(document).ready(function() {

    $('#volunteer, #elder').on('click', function() {
        $('#fullscreen-image').css('background-image', 'url("Resources/background.png")');
        $('#register, #identity').addClass('hidden');
        
        if ($(this).attr('id') === 'volunteer') {
            $('#volunteerMsgBox').removeClass('hidden').addClass('large');
            $('#elderMsgBox').addClass('hidden');
            $(this).hide();
            $('#elder').hide();
        } 
        else {
            $('#volunteerMsgBox').addClass('hidden');
            $('#elderMsgBox').removeClass('hidden').addClass('large');
            $(this).hide();
            $('#volunteer').hide();
        }
        
        $('body').append('<div class="translucent-overlay"></div>');
    });

    $('#close').on('click', function() {
        closeMessageBox();
    });    
     
    $('.closeMessageBox').not('#close').on('click', function() {
        closeMessageBoxBTN();
    });
    // close window
    function closeMessageBox() { 
        $('#volunteerMsgBox').addClass('hidden');
        $('#elderMsgBox').addClass('hidden');
        $('#renewPassword').addClass('hidden');
        $('#messageBox').fadeOut();        
        $('.translucent-overlay').remove();
    }
    // submit button
    function closeMessageBoxBTN() {
        $('#volunteerMsgBox').addClass('hidden');
        $('#elderMsgBox').addClass('hidden');
        $('#renewPassword').addClass('hidden');
        var inputs = $('#messageBox input');
        var allInputsWritten = true;
        inputs.each(function() {
            if ($(this).val() === '') {
                allInputsWritten = false;
                return false; 
            }
        });
    
        if (allInputsWritten) {
            $('.translucent-overlay').remove();
        }
    }
    
    var currentYear = new Date().getFullYear();
    var startYear = currentYear - 112; 
    var endYear = currentYear + 112;

    for (var year = startYear; year <= endYear; year++) {
        $('.yearSelect').append($('<option>', {
            value: year,
            text: year
        }));
    }
    var months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    $.each(months, function(index, month) {
        var monthValue = index + 1;
        $('.monthSelect').append($('<option>', {
            value: monthValue,
            text: month
        }));
    });
    var daysInMonth = 31; 
    for (var day = 1; day <= daysInMonth; day++) {
        $('.daySelect').append($('<option>', {
            value: day,
            text: day
        }));
    }

    $('#renewPassword').click(function() {
        $('body').append('<div class="translucent-overlay"></div>');
        $('#messageBox').fadeIn().addClass('large');
    });
    
});
  
