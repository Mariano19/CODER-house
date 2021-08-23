var slider = tns({
    container: '.my-slider',
    /*fixedWidth: 800,            
    /*slideBy: 'page',*/
    /*autoWidth: true,*/
    autoplay: true,
    controls: false,
    nav: false,
    speed: 4000,                            
    responsive: {      
        1200: {
            fixedWidth: 200,                      
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