$(function () {
  $(".hide-load").hide();
  $(".expander").on("mouseover", HoverInExpand).on("mouseout", HoverOutExpand);
});
function HoverInExpand() {
  $(this).find(".expanding").show();
}
function HoverOutExpand() {
  $(this).find(".expanding").hide();
}
