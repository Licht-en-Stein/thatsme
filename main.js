$(document).ready( function() {
	console.log('Document is loaded.');
$('.about').hide();
$('.city').hide();
$('.media').hide();
$('.form').hide();
//$('#content').hide();

$('.nav-about').on('click', function(e) {
        $('.about').show('slow');
        $('.city').hide('slow');
        $('.media').hide('slow');
        $('.form').hide('slow');

    });

$('.nav-city').on('click', function(e) {
        $('.about').hide('slow');
        $('.city').show('slow');
        $('.media').hide('slow');
        $('.form').hide('slow');

    });

$('.nav-songs').on('click', function(e) {
        $('.about').hide('slow');
        $('.city').hide('slow');
        $('.media').show('slow');
        $('.form').hide('slow');

    }); 

$('.nav-contact').on('click', function(e) {
        $('.about').hide('slow');
        $('.city').hide('slow');
        $('.media').hide('slow');
        $('.form').show('slow');
    }); 




$(document).keyup(function(e) {
        if (e.which === 37) {
            //alert(', keyCode: ' + event.keyCode);
            x = $(this)
            //.closest('li').prev().find('a').focus();
};

    });



});

