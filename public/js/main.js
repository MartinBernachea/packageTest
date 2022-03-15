
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
  
    $('.validate-form').on('submit',function(){

        var nameOrigin = $('.validate-input input[name="nameo"]');
        var addressOrigin = $('.validate-input input[name="addresso"]');
        var provinceOrigin = $('.validate-input input[name="provo"]');
        var cityOrigin = $('.validate-input input[name="cityo"]');
        var nameDestination = $('.validate-input input[name="named"]');
        var addressDestination = $('.validate-input input[name="addressd"]');
        var provinceDestination = $('.validate-input input[name="provd"]');
        var cityDestination = $('.validate-input input[name="cityd"]');
        var lengthp = $('.validate-input input[name="lengthp"]');
        var widthp = $('.validate-input input[name="widthp"]');
        var heightp = $('.validate-input input[name="heightp"]');
        var weightp = $('.validate-input input[name="weightp"]');
       
        var check = true;

        if($(nameOrigin).val().trim() == ''){
            showValidate(nameOrigin);
            check=false;
        }

        if($(addressOrigin).val().trim() == ''){
            showValidate(addressOrigin);
            check=false;
        }

        if($(provinceOrigin).val().trim() == ''){
            showValidate(provinceOrigin);
            check=false;
        }

        if($(cityOrigin).val().trim() == ''){
            showValidate(cityOrigin);
            check=false;
        }

        if($(nameDestination).val().trim() == ''){
            showValidate(nameDestination);
            check=false;
        }

        if($(addressDestination).val().trim() == ''){
            showValidate(addressDestination);
            check=false;
        }

        if($(provinceDestination).val().trim() == ''){
            showValidate(provinceDestination);
            check=false;
        }

        if($(cityDestination).val().trim() == ''){
            showValidate(cityDestination);
            check=false;
        }


        if($(lengthp).val().trim() == ''){
            showValidate(lengthp);
            check=false;
        }

        if($(widthp).val().trim() == ''){
            showValidate(widthp);
            check=false;
        }

        if($(heightp).val().trim() == ''){
            showValidate(heightp);
            check=false;
        }

        if($(weightp).val().trim() == ''){
            showValidate(weightp);
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