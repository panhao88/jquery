$(function() {
    //请求
    $.ajax({
        url: 'http://mlsadm.mlscd.cn/api/serviceTopic?id=58',
        type: 'GET',
        success: function(result) {
            // console.log('数据', result)
            var swiperList = result.data.banner_list
                // console.log('轮播图数据', swiperList)

            // console.log(result.data.article_list, '新闻')



            for (var i = 0; i < swiperList.length; i++) {
                $('#swiper2').append('<div class="swiper-slide"><img class="imgs" style="width:100vw;height:100%"/> </div>')
                $('.imgs').attr('src', swiperList[i].thumb)
            }
            $(document).attr('title', result.data.seo_title)

            //轮播图
            var mySwiper = new Swiper('#swiper1', {
                autoplay: 3000, //可选选项，自动滑动
                loop: true,
                speed: 1000,
            })


            var article_list = result.data.article_list
                // console.log(article_list, '新闻')

            var article = ''
            $.each(article_list, function(index, item) {
                console.log(item.create_time.split(' ')[0].split('-')[0])
                article += '<li class="trend_box_item flex ">' +
                    '<div class="trend_r" >' +
                    '<span>' + item.title + '</span>' +
                    '<p class="timer_font">' + '【行业新闻】' + item.description +
                    '</p>' +
                    '</div>' +
                    '<div class="flex_between company_banner ">' +
                    '	<img class="company_banner_img" src="' + item.thumb + '" alt="">' +
                    '<div class="flex_between company_text">' +
                    '<div class="company_text_left flex_around">' +
                    '<h2 class="text_name">' + item.title + '</h2>' +
                    '<p class="text_center">' +
                    '【行业新闻】' + item.description +
                    '</p>' +
                    '</div>' +
                    '<div class="company_text_rigth time flex_center">' +
                    '<h2 style="margin-top:10px">' + item.create_time.split(' ')[0].split('-')[0] + '</h2>' +
                    '<h3 style="margin-top:-10px;margin-left:10px">' + item.create_time.split(' ')[0].split('-')[1] + '月' + '</h3>' +
                    '	<h5 style="margin-top:-10px;margin-left:10px">' + item.create_time.split(' ')[0].split('-')[2] + '</h5>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</li>'
            })
            $('#trend').append(article)







        },
        error: function(jqXHR) {
            console.log('请求失败', jqXHR)
        }
    })
})

//第二个轮播图
$(function() {
    var mySwiper = new Swiper('#swiper2-1', {
            // loop:true,
            speed: 500,
            //轮播图滑动事件 控制标签页
            onSlideChangeStart: function(mySwiper) {
                $('.font2').removeClass('bor1')
                var clickStyle = "#clickStyle" + (mySwiper.activeIndex + 1)
                $(clickStyle).addClass('bor1')
            }
        })
        //点击事件 控制轮播图当前所在的页数
    $('#clickStyle1').on("click", function() {
        $('.font2').removeClass('bor1')
        $('#clickStyle1').addClass('bor1')
        mySwiper.slideTo(0, 1000, false);
    })

    $('#clickStyle2').on("click", function() {
        $('.font2').removeClass('bor1')
        $('#clickStyle2').addClass('bor1')
        mySwiper.slideTo(1, 1000, false);

    })

    $('#clickStyle3').on("click", function() {
        $('.font2').removeClass('bor1')
        $('#clickStyle3').addClass('bor1')
        mySwiper.slideTo(2, 1000, false);
    })

    $('#clickStyle4').on("click", function() {
        $('.font2').removeClass('bor1')
        $('#clickStyle4').addClass('bor1')
        mySwiper.slideTo(3, 1000, false);
    })

    $('#clickStyle5').on("click", function() {
        $('.font2').removeClass('bor1')
        $('#clickStyle5').addClass('bor1')
        mySwiper.slideTo(4, 1000, false);
    })


    // 鼠标移入事件
    $('.hover1').mouseover(function() {
        $('#img1').css("display", 'none')
        $('#img2').css('display', 'block')
    })
    $('.hover1').mouseout(function() {
        $('#img1').css("display", 'block')
        $('#img2').css('display', 'none')
    })
    $('.hover2').mouseover(function() {
        $('#img3').css("display", 'none')
        $('#img4').css('display', 'block')
    })
    $('.hover2').mouseout(function() {
        $('#img3').css("display", 'block')
        $('#img4').css('display', 'none')
    })

    $('.hover3').mouseover(function() {
        $('#img5').css("display", 'none')
        $('#img6').css('display', 'block')
    })
    $('.hover3').mouseout(function() {
        $('#img5').css("display", 'block')
        $('#img6').css('display', 'none')
    })
    $('.hover4').mouseover(function() {
        $('#img7').css("display", 'none')
        $('#img8').css('display', 'block')
    })
    $('.hover4').mouseout(function() {
        $('#img7').css("display", 'block')
        $('#img8').css('display', 'none')
    })




})