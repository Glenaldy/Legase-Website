$(function () {
  $(window).on("mousemove", moveBackground);
  let stateObject = 1;
  $(".objectImage").on("mouseover", objectOverBig);
  $(".objectImage").on("mouseout", objectOutNormal);
  $(".objectImage").on("click", spinObject);
  $(".objectImage").on("click", launchObject);
  $(".objectImage").on("click");
  enterAnimation($(".slideInAnimation"));
  function enterAnimation(target) {
    const array = $(target).children().toArray();
    const arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
      $(array[i]).transit(
        { opacity: 1, x: 0, delay: i * 500 },
        2000,
        "easeInOutQuint"
      );
    }
  }
  function launchObject() {
    stateObject = 0;
    $(".objectContainer#standingTitan")
      .children()
      .transition(
        { y: -2000, scale: 3, "z-index": "1000" },
        2000,
        "easeInOutCubic"
      );
    $(".objectContainer#standingTitan").transition(
      {
        outline: "5000px solid black",
        "outline-offset": "-200px",
        delay: 300,
      },
      1000,
      "easeInOutCubic"
    );
    stateObject = 1;
  }
  function spinObject() {
    stateObject = 0;
    $(".objectContainer#flyingMonaxias")
      .children()
      .transition(
        { rotate: "+=720deg", scale: 50, "z-index": "1000" },
        3000,
        "easeInOutCubic"
      );
    $(".objectContainer#flyingMonaxias").transition(
      {
        outline: "5000px solid black",
        "outline-offset": "-200px",
        delay: 200,
      },
      1000,
      "easeInOutCubic"
    );
    stateObject = 1;
  }
  function objectOverBig(i) {
    if ((i = 1)) {
      $(this)
        .stop(true)
        .transition({ scale: 1.1, opacity: 1 }, 500, "easeOutCubic");
      $(".MONAXIASLOGO")
        .stop(true)
        .transition({ opacity: 1 }, 500, "easeOutCubic");
    }
  }
  function objectOutNormal(i) {
    if ((stateObject = 1)) {
      /*$(this)
        .children()
        .find(".triggeredShow")
        .stop(true)
        .transition({ opacity: 0 }, 200, "easeOutCubic");*/
      $(this)
        .stop(true)
        .transition({ scale: 1, opacity: 0.8 }, 200, "easeOutCubic");
      $(".MONAXIASLOGO")
        .stop(true)
        .transition({ opacity: 0 }, 200, "easeOutCubic");
      $(".mapHighlight")
        .stop(true)
        .transition({ scale: 1, opacity: 0 }, 200, "easeOutCubic");
    }
    console.log($(this));
  }
  function moveBackground(i) {
    const windowX = $(".content").width();
    const windowY = $(".content").height();
    let mouseX = i.clientX;
    let mouseY = i.clientY;
    let valueXMonaxias = (windowX - mouseX) * 0.1 * 0.3 + "%";
    let valueYMonaxias = 50 - (windowY - mouseY) * 0.1 * 0.1 + "%";
    $("#monaxiasCloud").css({
      left: valueXMonaxias,
      top: valueYMonaxias,
    });
    let valueXTitan = 50 + (windowX - mouseX) * 0.0005 + "%";
    let valueYTitan = -5 - (windowY - mouseY) * 0.1 * 0.08 + "%";
    $("#titanSpace").css({
      left: valueXTitan,
      bottom: valueYTitan,
    });
    //console.log("X is " + valueXTitan + " @@@@ Y is " + valueYTitan);
  }
  $("nav").on("mouseover", navOpen);
  $("nav").on("mouseout", navClose);
  function navOpen() {
    $(this).stop(true, true).transition({ x: 0 }, 500, "easeInOutQuint");
  }
  function navClose() {
    $(this).stop(true, true).transition({ x: 250 }, 200, "easeInOutQuint");
  }
  $(".triggerFlame").on("mouseover", triggerFLameIn);
  $(".triggerFlame").on("mouseout", triggerFlameOut);
  function triggerFLameIn() {
    $(this)
      .parent()
      .find(".triggeredFlame")
      .stop(true)
      .transition({ opacity: 1 }, 500, "easeOutCubic");
  }
  function triggerFlameOut() {
    $(this)
      .parent()
      .find(".triggeredFlame")
      .stop(true)
      .transition({ opacity: 0 }, 500, "easeOutCubic");
  }

  $(".characterTop").transit(
    { opacity: 1, y: 0, delay: 500 },
    2000,
    "easeInOutQuint"
  );
  $(".chooseCharacter").on("click", changeCharacter);
  function changeCharacter() {
    const array = $(this).parent().children().toArray();
    for (let i = 0; i < array.length; i++) {
      $(array[i]).removeClass("selectedChara");
    }
    $(this).addClass("selectedChara");
    /*change current chara*/
    $(".characterBottom").each(function () {
      $(this).removeClass("currentChara");
      if ($(".selectedChara").attr("id") === $(this).attr("id")) {
        $(this).addClass("currentChara");
      }
    });
  }
});
