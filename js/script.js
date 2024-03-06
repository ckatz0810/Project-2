//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {

    $("#cat-img").hide();
    $("#happy-dog").hide();
    $("#secret-text").hide();
    


    $("#doggo-img").click(function(){
        $("#doggo-img").hide();
        $("#cat-img").show();

    });

    $("#cat-img").click(function(){
        // $("#doggo-img").show();
        $("#cat-img").hide();
        $("#happy-dog").show();

    });

    $("#happy-dog").click(function(){
        $("#doggo-img").show();
        $("#cat-img").hide();
        $("#happy-dog").hide();

    });

    $("#toggle-text").click(function(){
        $("#secret-text").toggle();

    });

    $("#change-bg-color").click(function(){
        $("#home-screen").css("background-color","khaki");

        // change the font color of the text.
        $("#change-bg-color").css("color","white");

    });

    $("#secret-text").click(function(){
        $(".main-img").addClass("animate-img");
        
        setTimeout(function(){
            $(".main-img").removeClass("animate-img");
        },2000);

    });
   
    


/*$(".slides").hide()

$("#tab1").click(function(){
    $("#slide1").slideDown();
});

$("#tab2").click(function(){
    $("#slide2").slideDown();
});

$("#tab3").click(function(){
    $("#slide3").slideDown();
});*/

$("#statsdiv").hide()

$("#statsbutton").click(function(){
    $("#statsdiv").show();
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



});