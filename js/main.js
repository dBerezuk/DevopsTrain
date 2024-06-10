const smoothLinks = document.querySelectorAll('.menu__item-link,.footer__menu-link,.top__link'),
    menu = document.querySelector('.menu'),
    menuBtn = document.querySelector('.header__mobile-btn'),
    faq = document.querySelectorAll('.courses__accordion-items');

for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        let id = smoothLink.getAttribute('href');

        if (id[0] == '#') {
            e.preventDefault();
        }

        if (menu.classList.contains('menu--active')) {
            menuBtn.classList.remove('header__mobile-btn--active');
            menu.classList.remove('menu--active');
        }

        if (id == '#faq') {
            let className = '.courses__subtitle-faq';
            faq.forEach(function (e) {
                e.setAttribute('style', 'display: block');
            });
            document.querySelectorAll(className).forEach(function (e) {
                e.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        } else {
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
};

$(document).ready(function () {
    $('.header__mobile-btn').on('click', function () {
        $(this).toggleClass('header__mobile-btn--active');
        $('.menu').toggleClass('menu--active');
    });

    $('.courses__tabs-btn').on('click', function () {
        let idBox = $(this).attr('data-content');
        $('.courses__tabs-btn').removeClass('courses__tabs-btn--active');

        $(this).addClass('courses__tabs-btn--active');
        $('.courses__tabs-content').removeClass('courses__tabs-content--active').hide();
        $('#' + idBox).addClass('courses__tabs-content--active').fadeIn();
    });

    $('.courses__tabs-contentbtn').on('click', function () {
        if ($(this).hasClass('courses__tabs-contentbtn--active') == false) {
            $(this).addClass('courses__tabs-contentbtn--active');
        } else {
            $(this).removeClass('courses__tabs-contentbtn--active');
        }
        $(this).next().slideToggle();
    });

    $('.courses__tabs-btnview').on('click', function () {
        $(this).toggleClass('courses__tabs-btnview--active');
        if ($(this).prev().height() === $(this).prev().children('.courses__tabs-infocontent').height()) {
            $(this).prev().css('max-height', '333px');
        } else {
            $(this).prev().css('max-height', $(this).prev().children('.courses__tabs-infocontent').height());
        }
    });

    $('.courses__faq-btn').on('click', function () {
        $(this).toggleClass('courses__faq-btn--active');
        $(this).next().slideToggle(300);
    });

    $('.courses__accordion-itemtop').on('click', function () {
        $(this).children('.courses__accordion-icon').toggleClass('courses__accordion-icon--active');
        $(this).next().slideToggle(300);
    });

    $('.benefits__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 2,
        slidesPerRow: 4,
        infinite: false,
        prevArrow: '<button class="slick-prev slider-arrow" type="button"><svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29 9C29.5523 9 30 8.55228 30 8C30 7.44772 29.5523 7 29 7L29 9ZM0.292893 7.29289C-0.0976314 7.68341 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65686 0.92893L0.292893 7.29289ZM29 7L1 7L1 9L29 9L29 7Z" fill="#898989"/></svg></button>',
        nextArrow: '<button class="slick-next slider-arrow" type="button"><svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM1 9H29V7H1V9Z" fill="#898989"/></svg></button>',
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesPerRow: 3,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesPerRow: 1,
                    rows: 4,
                }
            },
        ],
    })

    $('.team__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<button class="slick-prev slider-arrow" type="button"><svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29 9C29.5523 9 30 8.55228 30 8C30 7.44772 29.5523 7 29 7L29 9ZM0.292893 7.29289C-0.0976314 7.68341 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65686 0.92893L0.292893 7.29289ZM29 7L1 7L1 9L29 9L29 7Z" fill="#898989"/></svg></button>',
        nextArrow: '<button class="slick-next slider-arrow" type="button"><svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM1 9H29V7H1V9Z" fill="#898989"/></svg></button>',
        responsive: [
            {
                breakpoint: 869,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ],
    });

    $('.reviews__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        prevArrow: '<button class="slick-prev slider-arrow" type="button"><svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29 9C29.5523 9 30 8.55228 30 8C30 7.44772 29.5523 7 29 7L29 9ZM0.292893 7.29289C-0.0976314 7.68341 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65686 0.92893L0.292893 7.29289ZM29 7L1 7L1 9L29 9L29 7Z" fill="#898989"/></svg></button>',
        nextArrow: '<button class="slick-next slider-arrow" type="button"><svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM1 9H29V7H1V9Z" fill="#898989"/></svg></button>',
        responsive: [
            {
                breakpoint: 869,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.blog__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 2,
        slidesPerRow: 3,
        infinite: false,
        adaptiveHeight: true,
        prevArrow: '<button class="slick-prev slider-arrow" type="button"><svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29 9C29.5523 9 30 8.55228 30 8C30 7.44772 29.5523 7 29 7L29 9ZM0.292893 7.29289C-0.0976314 7.68341 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65686 0.92893L0.292893 7.29289ZM29 7L1 7L1 9L29 9L29 7Z" fill="#898989"/></svg></button>',
        nextArrow: '<button class="slick-next slider-arrow" type="button"><svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM1 9H29V7H1V9Z" fill="#898989"/></svg></button>',
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 579,
                settings: {
                    rows: 2,
                    slidesPerRow: 1,
                }
            }
        ]
    });

    $('.courses__tabs-linkbtn').on('click', function () {
        $('#email-modal').addClass('email-modal--active');
        $('#email-modal__content-tabsforminputcourse').attr("value", $(this).closest('.courses__tabs-content').attr('id'))
    });

    $('.email-modal__content-btnclose,#email-modal__btn-close,#help-modal__btn-close').on('click', function () {
        $('.email-modal').removeClass('email-modal--active');
    });

    $(document).mouseup(function (e) {
        var modal = $(".email-modal__content");
        if (!modal.is(e.target) && modal.has(e.target).length === 0) {
            $('.email-modal').removeClass('email-modal--active');
        }
    });

    $('.help').on('click', function () {
        $('#help-modal').addClass('email-modal--active');
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    $('#email-modal__content-form-recording').on('submit', function () {
        let email = $('#email-modal__content-tabsforminput');
        let course = $('#email-modal__content-tabsforminputcourse').val();
        if (validateEmail(email.val())) {
            email.removeClass('email-modal__content-forminput--error');
            //ajax email
            $.ajax({
                url: "https://api.k8school.lifeisfile.com/subscriptions",
                method: "POST",
                data: { "email": email.val(), "course": course },
                dataType: "text",
                success: function (data) {
                    $('#email-modal').removeClass('email-modal--active');
                    $('#email-modal__sms').addClass('email-modal--active');
                }
            });
        } else {
            email.addClass('email-modal__content-forminput--error');
        }
    });

    $('#email-modal__content-form-help').on('submit', function () {
        let email = $('#email-modal__content-form-helpinputemail');
        let text = $('#email-modal__content-form-helptextareatext');
        if (validateEmail(email.val())) {
            email.removeClass('email-modal__content-forminput--error');
        } else {
            email.addClass('email-modal__content-forminput--error');
        }
        if (text.val().length > 0) {
            text.removeClass('email-modal__content-forminput--error');
        } else {
            text.addClass('email-modal__content-forminput--error');
        }

        if (validateEmail(email.val()) && text.val().length > 0) {
            //ajax
            $.ajax({
                url: "https://jsonplaceholder.typicode.com/posts",
                method: "POST",
                data: { "email": email.val(), "details": text.val() },
                dataType: "text",
                success: function (data) {
                    $('#help-modal').removeClass('email-modal--active');
                    $('#help-modal__sms').addClass('email-modal--active');
                }
            });
        }
    });

    let getUrlParameter = function getUrlParameter(sParam) {
        let sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    };

    let courseParamUrl = getUrlParameter('course');
    let courseBtnParamAttr = $('.courses__tabs-btn[data-content="' + courseParamUrl + '"]');

    if (courseParamUrl && courseBtnParamAttr.length > 0) {
        let courseParamUrlContent = $('#' + courseParamUrl);

        $('.courses__tabs-btn').removeClass('courses__tabs-btn--active');
        courseBtnParamAttr.addClass('courses__tabs-btn--active');

        $('.courses__tabs-content').removeClass('courses__tabs-content--active').hide();
        courseParamUrlContent.addClass('courses__tabs-content--active').fadeIn();

        $('.courses__tabs-content').children('.courses__tabs-contentbtn--active').next().hide();
        $('.courses__tabs-contentbtn').removeClass('courses__tabs-contentbtn--active');

        courseParamUrlContent.children('.courses__tabs-contentbtn').addClass('courses__tabs-contentbtn--active');
        courseParamUrlContent.children('.courses__tabs-content-box').fadeIn();
    }
});