$(function(){
    let nav = $("nav")
    $(window).scroll(function(){
      let scrolTop =  $(window).scrollTop();
      if(scrolTop > 500){
        nav.addClass('navfixed')
      }
      else{
        nav.removeClass('navfixed')
      }
    })
    //preloader

    let preloader = $('.preloader')
 $(window).on('load',function(){
    preloader.hide()
 })
})