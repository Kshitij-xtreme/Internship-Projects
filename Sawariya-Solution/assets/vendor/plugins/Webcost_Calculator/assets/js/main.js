// jQuery(document).ready(function(){
// 	jQuery('.site_develop_input').on('change', function() { 
// 	  var current_step = jQuery(this).closest("fieldset");
// 	  var next_step = $(this).closest("fieldset").next();
// 	  if (jQuery(this).is(':checked')) {
// 	    	current_step.hide();	
// 	     	next_step.show();
// 	  } else {
	    	
// 	  }
// 	})
// })


jQuery(document).ready(function(){

//Website
var site_clicked_leng = 0;
$('.site_develop_input').on('change', function() {  //alert('testing12345566789');
  $(this).parent().find('.site_develop_input').prop("checked", true);
  var fieldset_len = $("fieldset").length;  
  ++site_clicked_leng;  
  var current_step = $(this).closest("fieldset");
  var next_step = $(this).closest("fieldset").next();
  if ($(this).is(':checked')) {    
      if(site_clicked_leng < 7){
          current_step.hide();  
          next_step.show();

        } else {

                //$(".wsc_submit_site_develop_form").submit();
                $( "#site_develop_form_submit" ).trigger( "click" );
                  
        }
  } 
})  
// $('.wsc-close-sctn .wsc-close').on('click',function(){
//   $('.wsc-pop-outer').fadeOut('slow');
// })  

//For Details show and Hide of Result page
$(".wsc_summary_btn").click(function(){
  $(".wsc_summaryContent_inner").slideToggle("500");
}); 
//For Price form show and Hide of Result page
$(".wsc_price_estimate_btn").click(function(){
  $(".wsc_price_estimate_section").slideToggle("500");
}); 

//Application
var app_clicked_leng = 0;
$('.app_develop_input').on('change', function() { 
  $(this).parent().find('.app_develop_input').prop("checked", true);
  var fieldset_len = $("fieldset").length;  
  ++app_clicked_leng;
  //alert(clicked_leng);
  var current_step = $(this).closest("fieldset");
  var next_step = $(this).closest("fieldset").next();
  if ($(this).is(':checked')) {
    
      if(app_clicked_leng < 7){
          current_step.hide();  
          next_step.show();
        } else {
          $( "#app_develop_form_submit" ).trigger( "click" );
        }
  } 
})
});