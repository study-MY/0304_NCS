$(function () {
  //   slide
  let now = 1;
  console.log(now);

  const slideCount = $(".slide-container > li").length;
  console.log(slideCount);

  setInterval(function slideChange() {
    now = now + 1;
    $(".slide-container").css("left", (-now % 3) * 100 + "%");
  }, 3000);

  //tab
  $(".tab a").on("click", function (event) {
    event.preventDefault;
    $(".tab").removeClass("active");
    $(this).parents(".tab").addClass("active");
  });

  // modal
  $(".list-bbs > li:first-child").on("click", function () {
    $(".modal_bg").show();
  });
  $(".btn-close").on("click", function () {
    $(".modal_bg").hide();
  });
});
