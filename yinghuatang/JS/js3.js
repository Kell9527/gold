/**
 * Created by Administrator on 2017/4/5.
 */
window.onload=function () {

    upupup();
};


function upupup() {
    var ul = document.getElementById("gold_title");
    var li = ul.getElementsByTagName("li");
    var box1 = document.getElementById("frame_box1");
    li[0].onclick = function () {
        box1.src = "http://api.q.fx678.com/tradingview/index.html?symbol=AUT%2BD&amp;interval=5&amp;st=0.913009468206716"
        li[1].className = "";
        li[0].className = "active";
    }
    li[1].onclick = function () {
        box1.src = "http://api.q.fx678.com/tradingview/index.html?symbol=AGT%2BD&amp;interval=5&amp;st=0.44466970039062614"
        li[0].className = "";
        li[1].className = "active";
    }
}