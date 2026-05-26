

  $(document).ready(function () {
    // Initialize Main Image Slider
    $(".main-image-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      autoplay: false,
      infinite: false,
      asNavFor: ".thumbnail-slider",
    });
  
    // Initialize Thumbnail Slider
    $(".thumbnail-slider").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: ".main-image-slider",
      dots: false,
      focusOnSelect: true,
      infinite: false,
      vertical:true,
    verticalSwiping:true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]
    });
  
    // Add initial active class to the first thumbnail
    $(".thumbnail-slider .slick-slide").eq(0).addClass("active");
  
    // // Change Main Slider Image and Active Thumbnail on Hover
    // $(".thumbnail-slider .slick-slide").on("mouseenter", function () {
    //   const index = $(this).attr("data-slick-index");
    //   $(".main-image-slider").slick("slickGoTo", index);
    //   $(".thumbnail-slider .slick-slide").removeClass("active");
    //   $(this).addClass("active");
    // });
  
    // Synchronize active class when the main slider changes
    $(".main-image-slider").on("afterChange", function (event, slick, currentSlide) {
      $(".thumbnail-slider .slick-slide").removeClass("active");
      $(".thumbnail-slider .slick-slide")
        .filter(`[data-slick-index="${currentSlide}"]`)
        .addClass("active");
    });
  
    // Click event to open modal and initialize pop slider with delay
    $(".main-image-slider img").click(function () {
      const currentIndex = $(".main-image-slider").slick("slickCurrentSlide");
  
      // Show the modal
      $(".maintenanceModal").css("display", "flex");
  
      // Delay the initialization of the pop slider by 1 second
      setTimeout(function () {
        // Initialize Pop Image Slider
        $(".pop-image-slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          fade: true,
          autoplay: false,
          infinite: false,
          asNavFor: ".main-image-slider",
        });
  
        // Navigate popup slider to the same image
        $(".pop-image-slider").slick("slickGoTo", currentIndex);
      }, 100);
    });
  
    // Close modal
    $(".maintenanceModalClose").click(function () {
      $(".maintenanceModal").css("display", "none");
  
      // Optional: Destroy the pop slider when modal is closed
      if ($(".pop-image-slider").hasClass("slick-initialized")) {
        $(".pop-image-slider").slick("unslick");
      }
    });
  });
  
  $(document).on("mouseenter", ".thumbNailVideo", function () {
    const index = $(this).attr("data-slick-index");
    $(".main-image-slider").slick("slickGoTo", index);
    $(".thumbNailVideo").removeClass("active");
    $(this).addClass("active");
  });
  
  $(".thumbNailVideo").click(function () {
    const currentIndex = $(".main-image-slider").slick("slickCurrentSlide");
  
    // Show the modal
    $(".maintenanceModal").css("display", "flex");
  
    setTimeout(function () {
      // Check if .pop-image-slider is already initialized
      if (!$(".pop-image-slider").hasClass("slick-initialized")) {
        $(".pop-image-slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          fade: true,
          autoplay: false,
          infinite: false,
          asNavFor: ".main-image-slider",
        });
      }
  
      // Navigate popup slider to the same image
      $(".pop-image-slider").slick("slickGoTo", currentIndex);
    }, 100);
  });
  
  let socialIconeDiv = document.getElementsByClassName("socialIconeDiv")[0];
  const shareBtn = document.getElementsByClassName("shareBtn")[0];
  shareBtn.addEventListener('click', (e) => {
    socialIconeDiv.classList.toggle("showSocialIcon");
    e.stopPropagation()
  });

  document.addEventListener('click', (e)=> {
    if(e.target.closest('.socialIconeDiv')) return
    socialIconeDiv  .classList.remove("showSocialIcon");

  })
  
  console.log("test", socialIconeDiv)
