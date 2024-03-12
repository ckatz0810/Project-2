//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {

   


$(".slides").hide()



$("#tab1").click(function(){
    $("#slide1").slideToggle();
    $(".harassmentdiv").hide()
    $(".doxingdiv").hide()
    $(".trollingdiv").hide()
    $(".exclusiondiv").hide()
    $(".flamingdiv").hide()
    $(".impersonationdiv").hide()
    $("#statsdiv").hide()
    $("#endit").removeClass("growStuff")
});

$("#tab2").click(function(){
    $("#slide2").slideToggle();
    $("#statsdiv").hide()
    $(".harassmentdiv").hide("slow")
    $(".doxingdiv").hide("slow")
    $(".trollingdiv").hide("slow")
    $(".exclusiondiv").hide("slow")
    $(".flamingdiv").hide("slow")
    $(".impersonationdiv").hide("slow")
    $("#endit").removeClass("growStuff");
});

$("#tab3").click(function(){
    $("#slide3").slideToggle();
    $("#statsdiv").hide()
    $(".harassmentdiv").hide()
    $(".doxingdiv").hide()
    $(".trollingdiv").hide()
    $(".exclusiondiv").hide()
    $(".flamingdiv").hide()
    $(".impersonationdiv").hide()
    $("#endit").removeClass("growStuff")
});

$("#statsdiv").hide()

$("#statsbutton").click(function(){
    $("#statsdiv").toggle("slow");
    $("#slide2").slideUp("fast");
    $("#slide3").slideUp("fast");
});

$(".harassmentdiv").hide()
$(".trollingdiv").hide()
$(".flamingdiv").hide()
$(".doxingdiv").hide()
$(".exclusiondiv").hide()
$(".impersonationdiv").hide()

$("#harassment").click(function(){
    $("#slide1").slideUp("fast");
    $("#slide3").slideUp("fast");
    $(".harassmentdiv").toggle("slow");
    $(".trollingdiv").hide()
    $(".flamingdiv").hide()
    $(".doxingdiv").hide()
    $(".exclusiondiv").hide()
    $(".impersonationdiv").hide()
});

$("#impersonation").click(function(){
    $("#slide1").slideUp("fast");
    $("#slide3").slideUp("fast");
    $(".impersonationdiv").toggle("slow");
    $(".harassmentdiv").hide()
    $(".trollingdiv").hide()
    $(".flamingdiv").hide()
    $(".doxingdiv").hide()
    $(".exclusiondiv").hide()

});

$("#doxing").click(function(){
    $("#slide1").slideUp("fast");
    $("#slide3").slideUp("fast");
    $(".doxingdiv").toggle("slow");
    $(".harassmentdiv").hide();
    $(".trollingdiv").hide();
    $(".flamingdiv").hide();
    $(".exclusiondiv").hide();
    $(".impersonationdiv").hide();
});

$("#flaming").click(function(){
    $("#slide1").slideUp("fast");
    $("#slide3").slideUp("fast");
    $(".flamingdiv").toggle("slow");
    $(".harassmentdiv").hide()
    $(".trollingdiv").hide()
    $(".doxingdiv").hide()
    $(".exclusiondiv").hide()
    $(".impersonationdiv").hide()
});

$("#exclusion").click(function(){
    $("#slide1").slideUp("fast");
    $("#slide3").slideUp("fast");
    $(".exclusiondiv").toggle("slow");
    $(".harassmentdiv").hide()
    $(".trollingdiv").hide()
    $(".flamingdiv").hide()
    $(".doxingdiv").hide()
    $(".impersonationdiv").hide()
});

$("#trolling").click(function(){
    $("#slide1").slideUp("fast");
    $("#slide3").slideUp("fast");
    $(".trollingdiv").toggle("slow");
    $(".harassmentdiv").hide()
    $(".flamingdiv").hide()
    $(".doxingdiv").hide()
    $(".exclusiondiv").hide()
    $(".impersonationdiv").hide()
});



$("#statsbutton").click(function(){
    $("#tab1").addClass("slideStuff")

});








    $("#xicon").click(function(){
        $("#xicon").hide();
    });

    $("#instagramicon").click(function(){
        $("#instagramicon").hide();
    });

    $("#facebookicon").click(function(){
        $("#facebookicon").hide();
    });

    $("#tweet1").click(function(){
        $("#tweet1").hide();
    });

    $("#tweet2").click(function(){
        $("#tweet2").hide();
    });

    $("#text1").click(function(){
        $("#text1").hide();
    });

    $("#text2").click(function(){
        $("#text2").hide();
    });

    $("#text3").click(function(){
        $("#text3").hide();
    });

    $("#text4").click(function(){
        $("#text4").hide();
    });

    $("#instadm1").click(function(){
        $("#instadm1").hide();
    });

    $("#instacomment1").click(function(){
        $("#instacomment1").hide();
    });

    $("#instadm2").click(function(){
        $("#instadm2").hide();
    });

    $("#text6").click(function(){
        $("#text6").hide();
    });

    $("#tweet3").click(function(){
        $("#tweet3").hide();
    });


});

$("#pagetitle").click(function(){
    $("#endit").addClass("growStuff");
    $("#slide1").slideUp("fast");
    $("#slide3").slideUp("fast");
    $("#slide2").slideUp("fast");
    $(".harassmentdiv").hide()
    $(".flamingdiv").hide()
    $(".doxingdiv").hide()
    $(".exclusiondiv").hide()
    $(".impersonationdiv").hide()
    $("#statsdiv").hide()
});

