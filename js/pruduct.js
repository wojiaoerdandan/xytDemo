$(function(){
    //tab选项卡
    $(".slideTxtBox").slide();


//     window.onload = function () {
//         /*获取导航对象*/
//        var wrap = document.getElementById("tabIndexF")
//        ceiling(wrap) /*调用吸顶函数  */
//    };
})
/* 
* 封装吸顶函数，需结合css实现。
* 也可以直接用js改变样式，可以自行修改。
*/
// function ceiling(obj) {
//     var ot = obj.offsetTop;
//     document.onscroll = function () {
//         var st = document.body.scrollTop || document.documentElement.scrollTop;
//         /*
//         * 在这里我给obj添加一个自定义属性。className可能会影响原有的class
//         * 三元运算使代码更简洁
//         */
//         obj.setAttribute("class",st >= ot?"tabIndexF":"");
//         obj.setAttribute("data-fixed",st >= ot?"fixed":"");
//         $(".tabCont").css({"margin-top":st >= ot?"126px":"0"})
//     }
// }