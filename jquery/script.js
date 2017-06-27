$(function () {
    $('.desaparecer').on('click', function () {
        $('.div').hide('slow');
    });
});
$(function () {
    $('.aparecer').on('click', function () {
        $('.div').show('fast');
    });
});
$(function () {
    $('.esmorecer').on('click', function () {
        $('.div').fadeTo('slow',0.1);
        //$('.div').fadeOut();
    });
});
$(function () {
    $('.desesmorecer').on('click', function () {
        $('.div').fadeIn('slow');
        //$('.div').fadeOut();
    });
});
$(function () {
    $('.slide').on('click', function () {
        $('.div').slideUp('slow');
        //slideDown
    });
});
$(function () {
    $('.hellobar').on('click', function () {
        $(this).slideUp('slow');
    });
});
$(function () {
    $('.animate').on('click', function () {
        $(this).animate({'margin-left':100, 'margin-top':200}, 2000);
    });
});
$(function(){
   $('#form').bind('submit', function(e){
       e.preventDefault();
       
       var txt = $(this).serialize();
       console.log(txt);
       
       $.ajax({
           type:'GET',
           url:'ajax.php',
           data:txt,
           success:function(resultado){
               $('.div').html("Resultado: "+ resultado)
           },
           error:function(){
               
           }
       });
   }); 
});

