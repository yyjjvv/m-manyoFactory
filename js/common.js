$(function () {
    //Navigation Open & Close
    $(".hdr_menu").on("click", function () {
        $("#header").addClass("on");
        $("body").css({ overflow: "hidden" });
    });
    $(".gnb .btn_close").on("click", function () {
        $("#header").removeClass("on");
        $("body").css({ overflow: "auto" });
        $(".btn_more").text("+");
        $(".lnb_area").stop().slideUp();
        $(".menu_prdt").css({ "font-weight": 400 });
    });
    $(".menu_prdt").on("click", function () {
        if ($(".lnb_area").is(":hidden")) {
            $(".btn_more").text("-");
            $(this).css({ "font-weight": 700 });
            $(".lnb_area").stop().slideDown();
        } else if ($(".lnb_area").is(":visible")) {
            $(".btn_more").text("+");
            $(".lnb_area").stop().slideUp();
            $(this).css({ "font-weight": 400 });
        }

    });

    //Visual Slider
    var swiper1 = new Swiper(".mySwiper1", {
        loop: true,
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    //MD's Pick Slide
    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        spaceBetween: 15,
        slidesPerGroup: 2,
        grabCursor: true,
        loop: false,
        loopFillGroupWithBlank: true,
    });

    //New Slide
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 1.2,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    //Brand Image Height
    $(window).on("resize", function () {
        let brandH = $(".brand_img>li").height();
        $(".brand .brand_cont").height(brandH);
    });

    //Brand Image Change
    let brandList = $(".brand_list>li");
    let brandImg = $(".brand_img>li");
    brandList.eq(0).addClass("on");
    brandImg.eq(0).addClass("on");
    brandList.click(function () {
        brandList.removeClass("on");
        brandImg.removeClass("on");
        $(this).addClass("on");
        let or = $(this).index();
        brandImg.eq(or).addClass("on");
    });

    //Footer Nav
    $(".brand_site").click(function () {
        if ($(".ftr_lnb").hasClass("on") == false) {
            $(".ftr_lnb").addClass("on");
            $(".brand_site i").css({ transform: "rotate(180deg)" });
        } else {
            $(".ftr_lnb").removeClass("on");
            $(".brand_site i").css({ transform: "rotate(0deg)" });
        };
    });
});