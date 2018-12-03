//parent()父元素.siblings()兄弟.children 子元素 animate 动作

// 滚动事件，发生滚动固定导航
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop(); //滚轮距上距离
    if (scrollTop > 1) {
      $(".navbar").css({
        backgroundColor: '#000',
      });

    } else {
      $(".navbar").css({
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
  
      });

    }
  })
  // 项目经验
$(".hover-bg").mouseenter(function(){
    // $(this).children(".hover-text").animate({ opacity: "1" });

})
$(".hover-bg").mouseleave(function(){
    // $(this).children(".hover-text").animate({ opacity: "0" });
})



