$(function(){
    $('#dowebok').fullpage({    sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        afterLoad:function(link,index){
        console.log(index);
        $('.section').removeClass('current');
        //eq是从0开始计数，所以需要减一
            setTimeout(function () {

                $('.section').eq(index-1).addClass('current');

            },100);
        }

    });
});