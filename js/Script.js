$(function() {
  $('.carousel').carousel({
    interval: 3300
  });

   //Tự động active hình thumb trong main-carousel
   $('#main-carousel-container').on('slide.bs.carousel', function (e) {
    // Lấy vị trí slide mới
    var index = e.to;

    // Bỏ chọn active trên tất cả hình thumb
    $("#main-carousel .thumb .coll").removeClass("active");
    //Tìm hình thumb tại vị trí mới, active nó
    $("#main-carousel .thumb .coll").eq(index).addClass("active");

})
});
