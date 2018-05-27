$(function () {
    'use strict';

    var sidebar = $('#sidebar'),//选择侧栏
        mask = $('.mask'),      //选择侧栏的上级菜单
        sidebar_trigger = $('#sidebar_trigger'),/*侧栏*/
        backButton = $('.back-to-top');/*顶部*/


/*    function show_sidebar() {
        // console.log("clicked");
        mask.fadeIn();
        // sidebar.animate({"right":0});
        sidebar.css("right",0);
    }
    function hide_sidebar() {

        mask.fadeOut();
        sidebar.css("right",-sidebar.width());
    }
    //点击侧栏按钮时，展示侧栏
    sidebar_trigger.on('click',show_sidebar);  //原先的

    mask.on('click',hide_sidebar);*/


    //这部分是自己写的，上面的没动
    // 分析
    //    检查侧栏是否处于打开状态，如果是false则打开如果是true则关闭，的同时把toggle设置为false



    var toggle = false;//代表侧栏是否处于打开状态

    function show_sidebar() {
        if(toggle === false){
            mask.fadeIn();
            sidebar.css("right",0);
            toggle = true
        }
    }

    function hide_sidebar() {
        if (toggle === true) {
            mask.fadeOut();
            sidebar.css("right", -sidebar.width());
            toggle = false
        }
    }

    function qiehuan() {
        if(toggle === false){
            show_sidebar()
        }else{
            hide_sidebar()
        }

    }

    //点击侧栏按钮时，展示侧栏
    sidebar_trigger.on('click',qiehuan);  //原先的

    mask.on('click',hide_sidebar);

    // document.addEventListener.on('mousewheel',hide_sidebar);



    //返回顶部
    backButton.on("click",function () {
        // console.log('top!top!top!');
        setTimeout(function () {
            $('html,body').animate({
                scrollTop: 0
            },800)
        },800)


    });

    //监听鼠标滚轮事件，鼠标滚轮触发三个函数 ： 隐藏侧边栏、显示/隐藏 返回顶部按钮
    $(window).on('scroll',function () {
        hide_sidebar();
        if($(window).scrollTop() > $(window).height())
            backButton.fadeIn();
        else
            backButton.fadeOut();

    });

    $(window).trigger('scroll');  ///*让程序自己trigger（触发），scroll这个参数，达到fadeout的目的，这一点很重要*/

/*    需求：
        给第一页的  ’ 更多’  添加动画，使得用户点击它之后更平滑的过渡到指定的页面位置*/
    var moreA = $('.more a');



    moreA.on('click',function () {
        // alert(1)
        setTimeout(function () {
            $('html,body').animate({
                scrollTop: 700
            },800)
        },500)

    })






});

