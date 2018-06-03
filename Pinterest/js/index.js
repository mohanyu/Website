window.onload = function () {
    /*
    实现瀑布流布局：
        ①子盒子相对于父盒子的高度
        ②源源不断的加载进来图片
*/
    waterFull('main','box');
    window.onscroll = function () {
        // console.log(1);
        //对比scrolltop的高度是否大于当前屏幕底部的最小盒子高度
        // setTimeout(function () {
            // clearTimeout();
            if(checkWillLoadImage()){
                // console.log(1);
                //2.1 造数据
                var dataArr = [
                    {'src': "001.jpg"},
                    {'src': "002.jpg"},
                    {'src': "003.jpg"},
                    {'src': "004.jpg"},
                    {'src': "005.jpg"},
                    {'src': "006.jpg"},
                    {'src': "007.jpg"},
                    {'src': "008.jpg"},
                    {'src': "009.jpg"},
                    {'src': "010.jpg"},
                    {'src': "011.jpg"},
                    {'src': "012.jpg"},
                    {'src': "013.jpg"},
                    {'src': "014.jpg"},
                    {'src': "015.jpg"},
                    {'src': "016.jpg"},
                    {'src': "017.jpg"},
                    {'src': "018.jpg"},
                    {'src': "019.jpg"},
                    {'src': "020.jpg"},
                    {'src': "021.jpg"},
                    {'src': "022.jpg"}
                ];
                //2.2 创建元素
                for(var i=0; i<dataArr.length;i++){
                    var newBox = document.createElement('div');
                    newBox.className = 'box';
                    $('main').appendChild(newBox);

                    var newPic = document.createElement('div');
                    newPic.className = 'pic';
                    newBox.appendChild(newPic);

                    var newImg = document.createElement('img');
                    // newImg.src = 'www.mohanyu.org/img/001.jpg';  同域名
                    newImg.src = '../Pinterest/img/' + dataArr[i].src;
                    newPic.appendChild(newImg);


                }
                //2.3 重新布局
                waterFull('main','box');
            }

        // }, 1000);
    }
};
/*实现瀑布流布局*/
function waterFull(parent, child) {
    //1 父盒子居中
//    1.1 获取所有盒子
    var allBox = $(parent).getElementsByClassName(child);
    // console.log(allBox);
    //  1.2获取一个盒子的宽度值
    var boxWidth = allBox[0].offsetWidth;
    // console.log(boxWidth);
    //  1.3获取屏幕宽度
    var screenW = document.documentElement.clientWidth;
    // console.log(screenW);
//      1.4 屏幕宽/盒子宽度 = 一行的盒子个数
    var cols = parseInt(screenW/boxWidth);
    // console.log(cols);
    //  1.5 父盒子居中
    $(parent).style.width = cols * boxWidth + 'px';
    $(parent).style.margin = '0 auto';

    // 2 子盒子的定位
//    2.1 定义数组高度
    var heightArr = [], boxHeight = 0, minBoxHeight = 0, minBoxIndex = 0;
    // 2.2 遍历子盒子
    for(var i = 0; i < allBox.length;i++){
        boxHeight = allBox[i].offsetHeight;
        if(i < cols){  //第一行
            heightArr.push(boxHeight);
        }else{         //剩余行
            // 1. 取出最矮的盒子高度
            minBoxHeight = Math.min.apply(this,heightArr);
            // console.log(heightArr);
            // console.log(minBoxHeight);
            // 2. 求出最矮盒子的索引
            minBoxIndex = getMinBoxIndex(heightArr, minBoxHeight);
            console.log(minBoxIndex);
            // 3. 子盒子定位
                    //position:absolute
            allBox[i].style.position = 'absolute';
                    // left: n个盒子 * 165px
            allBox[i].style.left = minBoxIndex * boxWidth + 'px';
                    // top: 最小盒子高度
            allBox[i].style.top = minBoxHeight + 'px';
            // 4. 更新数组的高度
                    //遍历一遍数组就找出最矮的盒子的高度，将新的盒子添加在他下面
            heightArr[minBoxIndex] += boxHeight;

        }

    }
};

function $(id) {
    return typeof id === "string" ? document.getElementById(id):null;

};

/* 获取数组中最矮盒子高度的索引*/
function getMinBoxIndex(arr, val) {
    for(var i = 0;i < arr.length;i++){
        if(arr[i] === val){
            return i
        }
    }

}

/* 判断是否具备加载图片的条件*/
function checkWillLoadImage() {
    //对比scrolltop的高度是否大于当前屏幕底部的最小盒子高度

    // 1 获取最后一个盒子
    var allBox = document.getElementsByClassName('box');
    var lastBox = allBox[allBox.length - 1];
    // 2 求出最后一个盒子自身高度的一半 + offsetTop(距离屏幕顶部）
    var lastBoxDis = lastBox.offsetHeight * 0.5 + lastBox.offsetTop;
    // 3 求出屏幕的高度
    var screenW = document.body.clientHeight || document.documentElement.clientHeight;
    // 4 求出页面偏离浏览器的距离
    var scrollTop = scroll().top;
    return  lastBoxDis <= screenW + scrollTop;

}