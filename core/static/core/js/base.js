var $btnTop = $('#btnTop');
var $home = $('#topSection');
var $navtogglebutton = $('#navtogglebutton');
var $navbar = $('#navbar-id');
var startpoint = $home.scrollTop() + $home.height();

// When the user clicks on the button, scroll to the top of the document
$btnTop.on('click', function() { 
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// $('#btnTop').find('svg').attr('fill', 'black')

// $(document).on({
//     mouseenter: function () {
//         $(this).closest('#btnTop').find('svg path').css({'fill': '#0BACFF'});
//     },
//     mouseleave: function () {
//         $(this).closest('#btnTop').find('svg path').css({'fill': '#939393'});
//     }
// }, ".test-container a");

$navtogglebutton.on('click', function(){ $navbar.toggleClass('bg-light'); });

$(window).on('scroll', function() { 
    if($(window).scrollTop() > startpoint) { $btnTop.show(); } 
    else { $btnTop.hide(); } }
);