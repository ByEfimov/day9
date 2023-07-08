function slider1() {
  var $slider = $(".images");

  if ($slider.length) {
    var currentSlide;
    var sliderCounter = document.createElement("div");
    sliderCounter.classList.add("number");

    var updateSliderCounter = function (slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      $(sliderCounter).text("0" + currentSlide);
    };

    $slider.on("init", function (event, slick) {
      $slider.append(sliderCounter);
      updateSliderCounter(slick);
    });

    $slider.on("afterChange", function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });

    $slider.slick({
      autoplay: true,
      autoplaySpeed: 5000,
      variableWidth: true,
    });
  }
}

function slider2() {
  $(".image2").slick({
    arrows: false,
    asNavFor: ".image1",
  });

  var $slider = $(".image1");

  if ($slider.length) {
    var currentSlide;
    var sliderCounter = document.createElement("div");
    sliderCounter.classList.add("number1");

    var updateSliderCounter = function (slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      $(sliderCounter).text("0" + currentSlide);
    };

    $slider.on("init", function (event, slick) {
      $slider.append(sliderCounter);
      updateSliderCounter(slick);
    });

    $slider.on("afterChange", function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });

    $slider.slick({
      asNavFor: ".image2",
      autoplay: true,
      autoplaySpeed: 5000,
      variableWidth: true,
    });
  }
}

slider1();
slider2();

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  document.querySelector(".images").style.transform =
    "translateY(" + scrollTop * 0.1 + "px)";
  document.querySelector(".bg22").style.transform =
    "translateY(" + scrollTop * 0.1 + "px)";
});
