$(function () {
  //hamburger menu
  var list = $("nav ul");
  var button = $(".bhagaskara_menu");

  button.on("click", function () {
      list.slideToggle();
      button.slideToggle();
    })
  
  
  //Menu 
  var nav = $("nav");
  var menu = $(".menu");


   var scrollingStartDistance = $(".menu").offset().top;

    $(document).scroll(function () {
        var scrollTop = $(document).scrollTop();
        
        $(".menu").toggleClass("sticky", scrollTop > scrollingStartDistance);
    });
    //Slider
  var next = $(".arr_r");
  var prev = $(".arr_l");
  var team_gallery = $(".team_gallery");
  var photo = $(".team_gallery").find("li");
  var window = $(".window");
  var photoWidth = photo.width();
  var offset = 0;
  console.log(team_gallery.position().left);
  team_gallery.css({
    width: "3000px"
  , });
  
  next.on("click", function () {
    if (offset === 230) {
      offset = 0;
      team_gallery.css({
        "left": 0
      });
    } else {
      offset += photoWidth;
      team_gallery.css({
        "left": -offset + 'px'
      });
    }
  });
  
  next.on("click", function () {
   if($(window).width()>800){
    if (offset === 400) {
      offset = 0;
      team_gallery.css({
        "left": 0
      });
    } else {
      offset += photoWidth;
      team_gallery.css({
        "left": -offset + 'px'
      });
    }
   }
  });
  prev.on("click", function () {
    if (offset === 0) {
      offset = 230;
      team_gallery.css({
        "left": '-230px'
      });
    } else {
      offset -= photoWidth;
      team_gallery.css({
        "left": -offset + 'px'
      });
    }
  });
  
    prev.on("click", function () {
    if($(window).width()>800){
      if (offset === 0) {
      offset = 400;
      team_gallery.css({
        "left": '-400px'
      });
    } else {
      offset -= photoWidth;
      team_gallery.css({
        "left": -offset + 'px'
      });
    }
    }
  });

  
  $("baby_circle_menu").on("click", ".circle", function(){
    this.class().show();
  })
  
  
  
  var li = $('.circle_menu li');
    var divs = $('.baby_circle')
    
    for(var i = 0; i < li.length; i++){
        $(li[i]).addClass("li"+ [i]);
        $(divs[i]).addClass("li"+ [i]);
    }
    
//Zadanie 3
  /*  
    li.on('click', function(){
         console.log('Działa');
  });
  */
//Zadanie 4 
      li.hide();
    divs.on("click", function(){
  
        $("ul li." + $(this).attr("class")).fadeToggle(300);// div o klasie + li atrybut klasa
    });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


  //Portfolio
  var picture = $(".gallery li");
  var buttonAll = $(".portfolio_menu li").first();
  var buttonWeb = $(".portfolio_menu li").eq(1);
  var buttonApps = $(".portfolio_menu li").eq(2);
  var buttonIcons = $(".portfolio_menu li").eq(3);
  buttonAll.on("click", function () {
    picture.show();
  })
  buttonWeb.on("click", function () {
    picture.hide();
    picture.eq(2).show();
    picture.eq(5).show();
  })
  buttonApps.on("click", function () {
    picture.hide();
    picture.eq(1).show();
    picture.eq(4).show();
  })
  buttonIcons.on("click", function () {
    picture.hide();
    picture.eq(2).show();
    picture.eq(0).show();
  })
})