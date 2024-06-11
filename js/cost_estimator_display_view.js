(function ($) {
     $(window).on('load', function () {
 
    $("#edit-nid-entityreference-filter").val("All");
   
   $("#edit-submit-cost-estimator-block").attr("disabled", "true");
       
    $("#views-exposed-form-cost-estimator-block-block-1 select").change(function() {
     var levalue = $("#edit-field-career-level-target-id").val();
     var devalue = $("#edit-nid-entityreference-filter").val();

     if (!(levalue == "All") && !(devalue == "All")) {
     $("#edit-submit-cost-estimator-block").removeAttr("disabled");
          } else {
     $("#edit-submit-cost-estimator-block").attr("disabled", "true");
          }
   
    });
    
      $("#views-exposed-form-cost-estimator-block-page-1 select").change(function() {
     var levalue = $("#edit-field-career-level-target-id").val();
     var devalue = $("#edit-nid-entityreference-filter").val();
 
      
      if (!(levalue == "All") && !(devalue == "All")) {
      $("#edit-submit-cost-estimator-block").removeAttr("disabled");
           } else {
      $("#edit-submit-cost-estimator-block").attr("disabled", "true");
           }
    
 }); 
    
      });
         
 }) (jQuery);