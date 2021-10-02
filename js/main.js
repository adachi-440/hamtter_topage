$('#hamburger').on('click',function(){
    $('.hamburger-menu').toggleClass('close');
    $('.nav-sp').slideToggle();
  });
  
  $(".sp-link a").on("click", function() {  
        $(".nav-sp").slideToggle();
        $('.hamburger-menu').toggleClass('close');       

    });
    



    

    