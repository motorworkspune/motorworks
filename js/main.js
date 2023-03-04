(function ($) {
    "use strict";

    // motorWorksSpinner
    var motorWorksSpinner = function () {
        setTimeout(function () {
            if ($('#motorWorksSpinner').length > 0) {
                $('#motorWorksSpinner').removeClass('show');
            }
        }, 1);
    };
    motorWorksSpinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    let modalBtn = document.getElementById("modal-btn")
    let modal = document.querySelector(".modal")
    let closeBtn = document.querySelector(".close-btn")
    modalBtn.onclick = function () {
        modal.style.display = "block"
    }
    closeBtn.onclick = function () {
        modal.style.display = "none"
    }
    window.onclick = function (e) {
        if (e.target == modal) {
            modal.style.display = "none"
        }
    }

    if(window.location.pathname.includes('index.html')){
            $('#contacts').removeClass('active');
            $('#about').removeClass('active');
            $('#service').removeClass('active');
            $('#index').addClass('active');
    } else if(window.location.pathname.includes('service.html')){
            $('#contacts').removeClass('active');
            $('#index').removeClass('active');
            $('#about').removeClass('active');
            $('#service').addClass('active');
    }else if(window.location.pathname.includes('about.html')){
            $('#contacts').removeClass('active');
            $('#index').removeClass('active');
            $('#service').removeClass('active');
            $('#about').addClass('active');
    }else{
            $('#index').removeClass('active');
            $('#about').removeClass('active');
            $('#service').removeClass('active');
            $('#contacts').addClass('active');
            break;
    }

})(jQuery);

