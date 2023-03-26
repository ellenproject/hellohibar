//navbar下拉改變背景色
$(window).scroll(function(){
    if( $(this).scrollTop() > 100){
        $('.navbar').css({"background-color": "#FFF", "position": "fixed"});
    }else{
        $('.navbar').css({"background-color": "transparent", "position": "relative"});
    }
})

//banner換圖片
$(function(){
    $('.kv-banner-imgList').slick({
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 100,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
    });
})

//跑馬燈marquee
$('.kv-marquee-top').marquee({
    direction: 'left',
    duration: 50000,
    gap: 50,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true,
});
$('.kv-marquee-bottom').marquee({
    direction: 'right',
    duration: 50000,
    gap: 50,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true,
});

//洗髮蛋種類與說明
$('.shampoo .shampoo-item').each(function(){
    $(this).find('.typeList li').eq(0).addClass('current')
    $(this).find('.introList .introItem').eq(0).addClass('current');
});
$('.typeList li').on('click', function(){
    let this_img = $(this).attr('data-img');
    $(this).addClass('current');
    $(this).siblings().removeClass('current');
    $(this).parents('ul').next('.introList').find('.introItem').removeClass('current');
    $(this).parents('ul').next('.introList').find('.introItem[data-txt ="'+this_img+'"]').addClass('current');
})
//洗髮蛋泡泡360度環繞
$(function(){
    if(window.jQuery){
        var Velocity = $.Velocity;
    }

    $('.bubble01').velocity({
        translateX: [ '190%', '-190%' ], //往左，往右
        translateY: [ '-25px', 0 ],
        rotate: [ -5, 0 ],
        scale: [ 1.1, 1.05 ],
        zIndex: [ 2,0, 'swoopIn' ],
    }).velocity('reverse', {
        loop: true,
        duration: 1500,
        delay: 50
    });
    $('.bubble02').velocity({
        translateX: [ '-80%', '350%' ], 
        translateY: [ '-25px', 0 ],
        rotate: [ -5, 0 ],
        scale: [ 1.1, 1.05 ],
        zIndex: [ 0,2, 'swoopIn' ],
    }).velocity('reverse', {
        loop: true,
        duration: 1500,
        delay: 50
    });
    $('.bubble03').velocity({
        translateX: [ '-150%', '300%' ],
        translateY: [ '-25px', 0 ],
        rotate: [ -5, 0 ],
        scale: [ 1.1, 1.05 ],
        zIndex: [ 0,2, 'swoopIn' ],
    }).velocity('reverse', {
        loop: true,
        duration: 1500,
        delay: 150
    });
    $('.bubble04').velocity({
        translateX: [ '300%', '-100%' ],
        translateY: [ '-25px', 0 ],
        rotate: [ -5, 0 ],
        scale: [ 1.1, 1.05 ],
        zIndex: [ 2,0, 'swoopIn' ],
    }).velocity('reverse', {
        loop: true,
        duration: 1500,
        delay: 50
    });
    $('.bubble05').velocity({
        translateX: [ '300%', '-80%' ],
        translateY: [ '-25px', 0 ],
        rotate: [ -5, 0 ],
        scale: [ 1.1, 1.05 ],
        zIndex: [ 2,0, 'swoopIn' ],
    }).velocity('reverse', {
        loop: true,
        duration: 1500,
        delay: 150
    });
    $('.bubble06').velocity({
        translateX: [ '250%', '-300%' ],
        translateY: [ '-25px', 0 ],
        rotate: [ -5, 0 ],
        scale: [ 1.1, 1.05 ],
        zIndex: [ 2,0, 'swoopIn' ],
    }).velocity('reverse', {
        loop: true,
        duration: 1500,
    });
})

//洗髮蛋泡沫泡泡按順序出現
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "power1.in"});

var animationDoms = gsap.utils.toArray('.shampoo-item');
ScrollTrigger.matchMedia({
    '(min-width: 1181px)': function(){
        animationDoms.forEach(function(animationDom, index){
            let gsapTimeLine = gsap.timeline({
                scrollTrigger: {
                    anticipatePin: 1,
                    id: 'animationDom', //for markers
                    invalidateOnRefresh: true,
                    pin: true,
                    end: function() { return "+=" + animationDom.clientHeight*1.5 },
                    // start: '-120px top',
                    start: '-240px top',
                    scrub: 0.6,
                    trigger: animationDom,
                    toggleActions: 'restart pause resume pause',
                }
            });
            gsapTimeLine.fromTo($(animationDom).find('.egg'), { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", delay: 0.5 }, 'firstLable');
            gsapTimeLine.fromTo($(animationDom).find('.bubbleBox'), { opacity: 0 }, { opacity: 1, delay: 0.8 }, 'firstLable');
            gsapTimeLine.fromTo($(animationDom).find('.foam'), { opacity: 0 }, { opacity: 1, }, 'firstLable-1');
        })
    }
})

//洗髮蛋slick
$(function(){
    $('.eggsTxtList').slick({
        centerMode: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'ease-in-out',
        asNavFor: '.eggsList',
    });
    $('.eggsList').slick({
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrow: true,
        prevArrow: $('.eggs .arrowPrev'),
        nextArrow: $('.eggs .arrowNext'),
        dots: true,
        appendDots: $('.eggs .appendDots'),
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: '.eggsTxtList',
        responsive: [
            {
                breakpoint: 1181,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769, 
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 481, 
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.eggsList .eggsItem').on('click', function(e){
        e.preventDefault();
        $('.eggsList .eggsItem').find('a').removeClass('current');
        $(this).find('a').addClass('current');
        var filter = $(this).data('filter');
        $('.eggsList').slick('slickGoTo', filter);
    });
})

//ig slick
$(function(){
    $('.shareList').slick({
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true,
        prevArrow: $('.share .arrowPrev'),
        nextArrow: $('.share .arrowNext'),
        dots: true,
        appendDots: $('.share .appendDots'),
        // autoplay: true,
        autoplaySpeed: 3000,
        // asNavFor: '.eggsTxtList',
        responsive: [
            {
                breakpoint: 1181,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769, 
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 481, 
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
})