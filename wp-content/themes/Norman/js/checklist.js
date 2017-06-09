
jQuery(document).ready(function(){
    jQuery("td.free").click(function(){
        jQuery("td.free").css("backgroundColor", "yellow");
    });
});






jQuery(document).ready(function(){
    jQuery('.appointments-confirmation-button').on('click' , function () {
        jQuery('.appointments-confirmation-button').css( "background-color", "red" );
    });

});