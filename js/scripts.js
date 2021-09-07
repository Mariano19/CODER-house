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