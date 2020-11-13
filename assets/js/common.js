$(function () {
  $(".hide-load").hide();
  $(".hover-show").css({ opacity: "0" });
  $(".expander").on("mouseover", HoverInExpand).on("mouseout", HoverOutExpand);
  $(".banner").on("mouseover", HoverInBanner).on("mouseout", HoverOutBanner);

  function HoverInBanner() {
    let target = $(this);
    target.find(".hover-show").stop(true).transition({ opacity: 1 });
    target.find(".hover-hide").stop(true).transition({ opacity: 0 });
    target.find(".banner-title").css({ "text-decoration": "underline" });
    target.find(".banner-background img").stop(true).transition({ opacity: 1 });
  }

  function HoverOutBanner() {
    let target = $(this);
    target.find(".hover-hide").stop(true).transition({ opacity: 1 });
    target.find(".hover-show").stop(true).transition({ opacity: 0 });
    target.find(".banner-title").css({ "text-decoration": "none" });
    target
      .find(".banner-background img")
      .stop(true)
      .transition({ opacity: 0.5 });
  }
});
function HoverInExpand() {
  $(this).find(".expanding").show();
}
function HoverOutExpand() {
  $(this).find(".expanding").hide();
}
