var button_audio = new Audio("http://www.monoame.com/awi_class/ballsound/click14.wav");

$(".i5").click(function() {
    $(".phone").css("width", "");
    $(".screen").css("height", "");
    $(".phonename").text($(this).text());
    button_audio.play();
});

$(".i6").click(function() {
    $(".phone").css("width", "168px");
    $(".screen").css("height", "265px");
    $(".phonename").text($(this).text());
    button_audio.play();
});

$(".i6s").click(function() {
    $(".phone").css("width", "195px");
    $(".screen").css("height", "315px");
    $(".phonename").text($(this).text());
    button_audio.play();
});

$(".i7").click(function() {
    $(".phone").css("width", "168px");
    $(".screen").css("height", "270px");
    $(".phonename").text($(this).text());
    button_audio.play();
});
//---------------------------------------
var screen_audio = new Audio("http://www.monoame.com/awi_class/ballsound/click18.wav");

var page = 0;
$(".screen").click(function() {
    page += 1;
    if (page == 3) {
        page = 0;
    }
    $(".pages").css("right", page * 100 + "%");
    screen_audio.play();
});
//---------------------------------------
var home_audio = new Audio("http://www.monoame.com/awi_class/ballsound/click23.wav");

$(".button").click(function() {
    page = 0;
    $(".pages").css("right", page * 100 + "%");
    home_audio.play();
});
//---------------------------------------
var turnnum = 0;
$(".turn").click(function() {
    turnnum += 1;
    if (turnnum % 2 == 0) {
        $(".phone").css("transform", "rotate(360deg)");
    } else {
        $(".phone").css("transform", "none");
    }

});
//---------------------------------------
var wiggle_audio = new Audio("http://www.monoame.com/awi_class/ballsound/phonevi.mp3");

$(".wiggle").click(function() {
    wiggletime = 0;
    wiggle_audio.play();
});

var wiggletime = 22;
setInterval(function() {
    if (wiggletime <= 21) {
        wiggletime += 1;
        console.log(wiggletime);
        if (wiggletime % 2 == 0) {
            $(".phone").css("left", "-20px");
        } else {
            $(".phone").css("left", "20px");
        }
    }
    if (wiggletime == 22) {
        $(".phone").css("left", "");
    }
}, 90);