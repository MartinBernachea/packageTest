
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
  
    $('.validate-form').on('submit',function(){

        var iOrigin = $('.validate-input input[name="origin"]');
        var iDestination = $('.validate-input input[name="destination"]');
      
        var check = true;

        if($(iOrigin).val().trim() == ''){
            showValidate(iOrigin);
            check=false;
        }

        if($(iDestination).val().trim() == ''){
            showValidate(iDestination);
            check=false;
        }

        return check;
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);