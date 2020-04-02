$(document).ready(function(){

    $('.main_btna').on('click',function(event){
        event.preventDefault();
        console.log('fffff');
        $('.overlay').fadeIn();
        $('.modal').slideDown();

    });

    $('.close').on('click',function(){
        $('.overlay').fadeOut();
        $('.modal').slideUp();
    })

    $('.overlay').on('click',function(){
        $(this).fadeOut();
        $('.modal').slideUp();
    })
});