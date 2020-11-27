$(function () {
  LoadAsset();
  $(".hide-load").hide();
  $(".expander").on("mouseover", HoverInExpand).on("mouseout", HoverOutExpand);
  $(".banner").on("mouseover", HoverInBanner).on("mouseout", HoverOutBanner);
  $(".character-profile")
    .on("mouseover", HoverInProfile)
    .on("mouseout", HoverOutProfile);
});
function HoverInProfile() {
  let target = $(this);
  target.addClass("current");
}
function HoverOutProfile() {
  let target = $(this);
  target.removeClass("current");
}
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
  target.find(".banner-background img").stop(true).transition({ opacity: 0.5 });
}
function HoverInExpand() {
  $(this).find(".expanding").show();
}
function HoverOutExpand() {
  $(this).find(".expanding").hide();
}
function LoadAsset() {
  $(".character-banner").load("assets/elements/character-banner.html");
  $(".world-banner").load("assets/elements/world-banner.html");
}
