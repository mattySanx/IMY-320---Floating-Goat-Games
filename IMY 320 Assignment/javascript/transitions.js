$(function() {
  //********** start up *******************
  setTimeout(function(){
        $("#transition-block").animate({height: "toggle"}, "slow");
        $("#transition-block>img").animate({height: "toggle"}, "fast");
    }, 5000);

  //********** page transitions ***********
  $("#NavHome").click(function() {
    $("#transition-block").animate({
      height: "toggle"
    }, 500, function() {
      showHome();
      $("#transition-block").animate({
        height: "toggle"
      }, 500);
    });
  });

  $("#NavAbout").click(function() {
    $("#transition-block").animate({
      height: "toggle"
    }, 500, function() {
      showAbout();
      $("#transition-block").animate({
        height: "toggle"
      }, 500);
    });
  });

  $("#NavGallery").click(function() {
    $("#transition-block").animate({
      height: "toggle"
    }, 500, function() {
      showGallery();
      $("#transition-block").animate({
        height: "toggle"
      }, 500);
    });
  });

  $("#NavTeam").click(function() {
    $("#transition-block").animate({
      height: "toggle"
    }, 500, function() {
      showTeam();
      $("#transition-block").animate({
        height: "toggle"
      }, 500);
    });
  });

  //************** easter eggs ****************
  $("#eggOne").mouseenter(function() {
    $("body").css('background-image', 'url(../images/missile2.jpg)');
  }).mouseleave(function() {
    $("body").css('background-image', 'url(../images/missile.jpg)');
  });

  $("#eggTwo").mouseenter(function() {
    $("body").css('background-image', 'url(images/smallBoy2.jpg)');
  }).mouseleave(function() {
    $("body").css('background-image', 'url(images/smallBoy.jpg)');
  });

  $(".eggThree").mouseenter(function() {
    $("body").css('background-image', 'url(images/fronPageBackgroundOne.jpg)');
  }).mouseleave(function() {
    $("body").css('background-image', 'url(images/fronPageBackground.jpg)');
  });

  $(".egg").lettering();
  $(".eggThree").lettering();
  //render2();

  arrayFonts = ["\'serif\'", "\'san-serif\'", "\'256_bytesregular\'"];
  arrayFontsTitle = ["\'256_bytesregular\'", "\'velvendamegablack\'", "\'serif\'"];

  setInterval(function() {
    $(".egg>span").each(function() {
      $(this).css('font-family', arrayFonts[Math.floor(Math.random() * (3 - 0 + 1)) + 0]);
    });
  }, 500);

  setInterval(function() {
    $(".eggThree>span").each(function() {
      $(this).css('font-family', arrayFontsTitle[Math.floor(Math.random() * (3 - 0 + 1)) + 0]);
    });
  }, 500);

  //***************** team page *********************
  aSelect = false;
  mSelect = false;
  rSelect = false;
  dSelect = false;

  //binding
  bindAnneta();
  bindMatt();
  bindRish();
  bindDave();

  $("#anneta").click(function() {
    $("body").css('background-image', 'url(../images/imy320pic1.jpg)');
    $(this).css('cursor', 'auto');
    mSelect = false;
    dSelect = false;
    rSelect = false;
    aSelect = true;

    $("#matthew").unbind('mouseenter mouseleave');
    $("#rish").unbind('mouseenter mouseleave');
    $("#dave").unbind('mouseenter mouseleave');

    $(this).text(function(i, origText) {
      return origText.substring(1, origText.length - 1);
    });
    $(this).animate({}, 0, function(){ aSelect = true; });
    $("#matthew").delay(10).animate({"left": "-=500"}, 500);
    $("#rish").delay(250).animate({"left": "-=500"}, 500);
    $("#dave").delay(500).animate({"left": "-=500"}, 500);
    $(this).next().delay(750).fadeIn("slow");
    triggerBack();
  });

  $("#matthew").click(function() {
    $("body").css('background-image', 'url(../images/matt.jpg)');
    $(this).css('cursor', 'auto');
    mSelect = true;
    dSelect = false;
    rSelect = false;
    aSelect = false;

    $("#anneta").unbind('mouseenter mouseleave');
    $("#rish").unbind('mouseenter mouseleave');
    $("#dave").unbind('mouseenter mouseleave');

    $(this).text(function(i, origText) {
      return origText.substring(1, origText.length - 1);
    });
    $("#anneta").animate({"left": "-=500"}, 500);
    $("#rish").delay(250).animate({"left": "-=500"}, 500);
    $("#dave").delay(500).animate({"left": "-=500"}, 500);
    $(this).next().delay(750).fadeIn("slow");
    triggerBack();
  });

  $("#rish").click(function() {
    $("body").css('background-image', 'url(../images/rish.jpg)');
    $(this).css('cursor', 'auto');
    mSelect = false;
    dSelect = false;
    rSelect = true;
    aSelect = false;

    $("#anneta").unbind('mouseenter mouseleave');
    $("#matthew").unbind('mouseenter mouseleave');
    $("#dave").unbind('mouseenter mouseleave');

    $(this).text(function(i, origText) {
      return origText.substring(1, origText.length - 1);
    });
    $("#anneta").animate({"left": "-=500"}, 500);
    $("#matthew").delay(250).animate({"left": "-=500"}, 500);
    $("#dave").delay(500).animate({"left": "-=500"}, 500);
    $(this).next().delay(750).fadeIn("slow");
    triggerBack();
  });

  $("#dave").click(function() {
    $("body").css('background-image', 'url(../images/dave.jpg)');
    $(this).css('cursor', 'auto');
    mSelect = false;
    dSelect = true;
    rSelect = false;
    aSelect = false;

    $("#anneta").unbind('mouseenter mouseleave');
    $("#matthew").unbind('mouseenter mouseleave');
    $("#rish").unbind('mouseenter mouseleave');

    $(this).text(function(i, origText) {
      return origText.substring(1, origText.length - 1);
    });
    $("#anneta").animate({"left": "-=500"}, 500);
    $("#matthew").delay(250).animate({"left": "-=500"}, 500);
    $("#rish").delay(500).animate({"left": "-=500"}, 500);
    $(this).next().delay(750).fadeIn("slow");
    triggerBack();
  });

  $("#hBack").click(function() {
    $("body").css('background-image', 'url(../images/koreanCOld.jpg)');
    if(aSelect) {
      $("#anneta").css('cursor', 'pointer');
      $("#matthew").delay(1000).animate({"left": "+=500"}, 500);
      $("#rish").delay(750).animate({"left": "+=500"}, 500);
      $("#dave").delay(500).animate({"left": "+=500"}, 500);
      $("#anneta").next().fadeOut("slow");
      triggerBack();
      aSelect = false;
      bindMatt();
      bindRish();
      bindDave();
    }

    if(mSelect) {
      $("#matthew").css('cursor', 'pointer');
      $("#anneta").delay(1000).animate({"left": "+=500"}, 500);
      $("#rish").delay(750).animate({"left": "+=500"}, 500);
      $("#dave").delay(500).animate({"left": "+=500"}, 500);
      $("#matthew").next().fadeOut("slow");
      triggerBack();
      mSelect = false;
      bindAnneta();
      bindRish();
      bindDave();
    }

    if(rSelect) {
      $("#rish").css('cursor', 'pointer');
      $("#anneta").delay(1000).animate({"left": "+=500"}, 500);
      $("#matthew").delay(750).animate({"left": "+=500"}, 500);
      $("#dave").delay(500).animate({"left": "+=500"}, 500);
      $("#rish").next().fadeOut("slow");
      triggerBack();
      rSelect = false;
      bindAnneta();
      bindMatt();
      bindDave();
    }

    if(dSelect) {
      $("#dave").css('cursor', 'pointer');
      $("#anneta").delay(1000).animate({"left": "+=500"}, 500);
      $("#matthew").delay(750).animate({"left": "+=500"}, 500);
      $("#rish").delay(500).animate({"left": "+=500"}, 500);
      $("#dave").next().fadeOut("slow");
      triggerBack();
      dSelect = false;
      bindAnneta();
      bindMatt();
      bindRish();
    }
  });

});

function triggerBack(){
  $("#hTeam").slideToggle(250);
  $("#hBack").delay(250).slideToggle();
}

function bindAnneta() {
  $("#anneta").hover(function() {
    $("body").css('background-image', 'url(../images/imy320pic1.jpg)');
    if(!aSelect && !mSelect && !rSelect && !dSelect) {
      $(this).text(function(i, origText) {
        return "<" + origText + ">";
      });
    }
  }, function() {
    if(!aSelect && !mSelect && !rSelect && !dSelect) {
      $("body").css('background-image', 'url(../images/koreanCOld.jpg)');
      $(this).text(function(i, origText) {
        return origText.substring(1, origText.length - 1);
      });
    }
  });
}

function bindMatt() {
  $("#matthew").hover(function() {
    $("body").css('background-image', 'url(../images/matt.jpg)');
    if(!aSelect && !mSelect && !rSelect && !dSelect) {
      $(this).text(function(i, origText) {
        return "<" + origText + ">";
      });
    }
  }, function() {
    if(!aSelect && !mSelect && !rSelect && !dSelect) {
      $("body").css('background-image', 'url(../images/koreanCOld.jpg)');
      $(this).text(function(i, origText) {
        return origText.substring(1, origText.length - 1);
      });
    }
  });
}

function bindRish() {
  $("#rish").hover(function() {
    $("body").css('background-image', 'url(../images/rish.jpg)');
    if(!aSelect && !mSelect && !rSelect && !dSelect) {
      $(this).text(function(i, origText) {
        return "<" + origText + ">";
      });
    }
  }, function() {
    if(!aSelect && !mSelect && !rSelect && !dSelect) {
      $("body").css('background-image', 'url(../images/koreanCOld.jpg)');
      $(this).text(function(i, origText) {
        return origText.substring(1, origText.length - 1);
      });
    }
  });
}

function bindDave() {
  $("#dave").hover(function() {
    $("body").css('background-image', 'url(../images/dave.jpg)');
    if(!aSelect && !mSelect && !rSelect && !dSelect) {
      $(this).text(function(i, origText) {
        return "<" + origText + ">";
      });
    }
  }, function() {
    if(!aSelect && !mSelect && !rSelect && !dSelect) {
      $("body").css('background-image', 'url(../images/koreanCOld.jpg)');
      $(this).text(function(i, origText) {
        return origText.substring(1, origText.length - 1);
      });
    }
  });
}

var unselectedColor = '#848484';

function showTeam() {
  document.body.style.backgroundImage = "url('images/koreanCOld.jpg')";
  document.getElementById('Home').style.visibility = 'hidden';
  document.getElementById('NavHome').style.color = unselectedColor;
  // document.getElementById('NavHome').style.fontSize = '30px';
  document.getElementById('Gallery').style.visibility = 'hidden';
  document.getElementById('NavGallery').style.color = unselectedColor;
  // document.getElementById('NavGallery').style.fontSize = '30px';
  document.getElementById('About').style.visibility = 'hidden';
  document.getElementById('NavAbout').style.color = unselectedColor;
  // document.getElementById('NavAbout').style.fontSize = '30px';
  document.getElementById('Team').style.visibility = 'visible';
  document.getElementById('NavTeam').style.color = '#ffffff';
  // document.getElementById('NavTeam').style.fontSize = '36px';
  document.getElementById('Reviews').style.visibility = 'hidden';
}

function showHome() {
  document.body.style.backgroundImage = "url('images/fronPageBackground.jpg')";
  document.getElementById('Team').style.visibility = 'hidden';
  document.getElementById('NavTeam').style.color = unselectedColor;
  // document.getElementById('NavTeam').style.fontSize = '30px';
  document.getElementById('Home').style.visibility = 'visible';
  document.getElementById('NavHome').style.color = '#ffffff';
  // document.getElementById('NavHome').style.fontSize = '36px';
  document.getElementById('Gallery').style.visibility = 'hidden';
  document.getElementById('NavGallery').style.color = unselectedColor;
  // document.getElementById('NavGallery').style.fontSize = '30px';
  document.getElementById('About').style.visibility = 'hidden';
  document.getElementById('NavAbout').style.color = unselectedColor;
  // document.getElementById('NavAbout').style.fontSize = '30px';
  document.getElementById('Reviews').style.visibility = 'hidden';
}

function showAbout() {
  document.body.style.backgroundImage = "url('images/missile.jpg')";
  document.getElementById('Team').style.visibility = 'hidden';
  document.getElementById('NavTeam').style.color = unselectedColor;
  // document.getElementById('NavTeam').style.fontSize = '30px';
  document.getElementById('Home').style.visibility = 'hidden';
  document.getElementById('NavHome').style.color = unselectedColor;
  // document.getElementById('NavHome').style.fontSize = '30px';
  document.getElementById('Gallery').style.visibility = 'hidden';
  document.getElementById('NavGallery').style.color = unselectedColor;
  // document.getElementById('NavGallery').style.fontSize = '30px';
  document.getElementById('About').style.visibility = 'visible';
  document.getElementById('NavAbout').style.color = '#ffffff';
  // document.getElementById('NavAbout').style.fontSize = '36px';
  document.getElementById('Reviews').style.visibility = 'hidden';
}

function showGallery() {
  document.body.style.backgroundImage = "url('images/smallBoy.jpg')";
  document.getElementById('Team').style.visibility = 'hidden';
  document.getElementById('NavTeam').style.color = unselectedColor;
  // document.getElementById('NavTeam').style.fontSize = '30px';
  document.getElementById('Home').style.visibility = 'hidden';
  document.getElementById('NavHome').style.color = unselectedColor;
  // document.getElementById('NavHome').style.fontSize = '30px';
  document.getElementById('Gallery').style.visibility = 'visible';
  document.getElementById('NavGallery').style.color = '#ffffff';
  // document.getElementById('NavGallery').style.fontSize = '36px';
  document.getElementById('About').style.visibility = 'hidden';
  document.getElementById('NavAbout').style.color = unselectedColor;
  // document.getElementById('NavAbout').style.fontSize = '30px';
  document.getElementById('Reviews').style.visibility = 'hidden';
}

function showReviews() {
  document.body.style.backgroundImage = "url('images/fronPageBackground.jpg')";
  document.getElementById('Team').style.visibility = 'hidden';
  document.getElementById('NavTeam').style.color = unselectedColor;
  document.getElementById('Home').style.visibility = 'hidden';
  document.getElementById('NavHome').style.color = unselectedColor;
  document.getElementById('Gallery').style.visibility = 'hidden';
  document.getElementById('NavGallery').style.color = unselectedColor;
  document.getElementById('About').style.visibility = 'hidden';
  document.getElementById('NavAbout').style.color = unselectedColor;
  document.getElementById('Reviews').style.visibility = 'visible';
}
