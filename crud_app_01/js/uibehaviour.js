//BEHAVIOUR OF THE UI // JQUERY


$(document).ready(function(){

    //Opens popup div for editing
    $(".send-order-btn").click(function(){      
        $(".sent-dialog").css("visibility", "visible");
    });
    //Close dialog
    $(".dismiss-dialog").click(function(){      
        $(".sent-dialog").css("visibility", "hidden");
    });

});

