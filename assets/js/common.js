setTimeout(function(){
    $(function(){
        var bandSpan = $('.project-band .project-more-wrap .span-arrow span');
        var bannerHieght = $('.project-band .project-more-wrap .span-arrow');
        var bannerLefts=0;
        var spanLastLeft = 0;
        spanLastLeft = spanLastLefts();
        bannerHieght.css('height', bandSpan.height())
    
        bandSpan.each(function(i, itme){
            $(itme).css('left', bannerLefts);
            bannerLefts += Math.floor(bandSpan.width());
        })
    
        var bannerTimer = function(){
            bandSpan.each(function(i, itme){
                var bannerLeftLast = $(this).position().left;
                $(itme).css('left', bannerLeftLast + 1);
                if(bannerLeftLast == spanLastLeft || bannerLeftLast == spanLastLeft + 500 ){
                    $(this).css('left', `-${Math.floor(bandSpan.width())}px`)
                }
            })
        }
        var interval = setInterval(bannerTimer , 10);
        $('.project-band').hover(
            function(e){
                interval = setInterval(bannerTimer, 5)
            },
            function(e){
                clearInterval(interval);
            }
        )
        setInterval(bannerTimer, 10)
    })
}, 100)



var spanLastLefts = function(){
    var bannerLefts = 0;
    $('.project-band .project-more-wrap .span-arrow span').each(function(i, itme){
        $(itme).css('left', bannerLefts);
        bannerLefts += Math.floor($('.project-band .project-more-wrap .span-arrow span').width());
    })
    return Math.round(bannerLefts - $('.project-band .project-more-wrap .span-arrow span').width()) + 1;
}

