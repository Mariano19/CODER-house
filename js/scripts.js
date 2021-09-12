var slider = tns({
    container: '.clientes__slider',
    /*fixedWidth: 800,            
    /*slideBy: 'page',*/
    /*autoWidth: true,*/
    autoplay: true,
    controls: false,
    nav: false,
    speed: 4000,                            
    responsive: {      
        1200: {
            fixedWidth: 180,                      
            gutter: 100,
            edgePadding: 100,
            items: 6,
        },
        900: {
            items: 5,
            fixedWidth: 150,
            gutter: 50,
        },

        300: {
            items: 3,
            fixedWidth: 150,
            edgePadding: 20,
            gutter: 50,
            
        },
    },
});


/*PRELOADER*/
window.onload = function(){
    var contenedor = document.getElementById('preloder');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0'; 
}

/*WTSAPP BTN*/
$(document).scroll(function() {
    var i = $(this).scrollTop();
    if (i > 100) {
      $('#WAButton').fadeIn();
    } else {
      $('#WAButton').fadeOut();
    }
});

$(function () {
    $('#WAButton').floatingWhatsApp({
        phone: '+5491131734465', //WhatsApp Business phone number
        headerTitle: 'Chatea con nosotros por whatsapp!', //Popup Title
        popupMessage: 'Hola, como podemos ayudarte?', //Popup Message
        showPopup: true, //Enables popup display
        buttonImage: '<img src="./img/icons/whatsapp.svg" />', //Button Image
        //headerColor: 'crimson', //Custom header color
        //backgroundColor: 'crimson', //Custom background button color
        position: "right", //Position: left | right
        size:"80",
        zIndex:2,



    });
});