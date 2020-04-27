  $(document).ready(function() {
  	var screenSize = $(window).width();
	var screenHeight = $(window).height();
  	var current=false;
  	
		$("#content").css('margin-top',screenHeight);
		
  	if( screenSize > 768){
        $("#videoBG").show();
        $("#imgBG").hide();
      }
    if(screenSize <= 768){
        $("#videoBG").hide();
        $("#videoBG").attr('src','');
        $("#imgBG").show();
      }
  	
   $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screenSize = $(window).width(); 
      screenHeight = $(window).height();
		  
		  $("#content").css('margin-top',screenHeight);
		 
      if( screenSize > 768 && current==false){
      	
        $("#videoBG").show();
        $("#videoBG").attr('src','video/chanel.mp4');
        $("#imgBG").hide();
        current=true;
      }
      if(screenSize <= 768){
        $("#videoBG").hide();
        $("#videoBG").attr('src','');
        $("#imgBG").show();
        current=false;
      }
    
    }); 
		
		

      
      
      
      
      
      
		$('.down').click(function(){
			  screenHeight = $(window).height();
			  $('html,body').animate({'scrollTop':screenHeight}, 1000)
		});
		
		
      
      
      $(window).scroll(function(){ // 텍스트 오퍼시티
          
          console.log($(document).scrollTop())
          
          
          if($(document).scrollTop()>1500){
              
              $(".txt").css({
                  opacity:1
              })
              
          }
      })
      
      $(window).scroll(function(){ //헤더부분 없애고 다시 보이게 
          
          console.log($(document).scrollTop())
          
          
          if($(document).scrollTop()>1040){
              
              $("#headerArea").css({
                 background: "rgba(255,255,255,.9)",
                 borderBottom: "2px solid #000",
              })
              
          }else{
              $("#headerArea").css({
                 background: "rgba(255,255,255,.5)",
                 borderBottom: "none"
              })
          }
      })
    
      $(window).scroll(function(){ // 향수병 오른쪽에서 왼쪽
          
          console.log($(document).scrollTop())
          
          
          if($(document).scrollTop()>3569){
              
              $(".perfumetitle_right > img").css({
                  opacity:1,
                  marginLeft: "10%"
              })
              
          }
      })
      
      
       $(window).scroll(function(){ // 향수병 왼쪽 텍스트
          
          console.log($(document).scrollTop())
          
          
          if($(document).scrollTop()>3690){
              
              $(".perfumetitle_left p").css({
                  opacity:1,
                 
              })
              
          }
      })
      
      
      
       $(window).scroll(function(){ // 향수병 왼쪽 스펜
          
          console.log($(document).scrollTop())
          
          
          if($(document).scrollTop()>3750){
              
              $(".perfumetitle_left span").css({
                 opacity:1,
                 marginLeft: "200px"
              })
              
          }
      })
      
      $(".menuBtn").toggle(function(){
            $("#gnb").slideDown('slow');
        }, function(){
            $("#gnb").slideUp('fast');
        });
        var current = 0;
        $(window).resize(function(){ 
            var screenSize = $(window).width(); 
            if(screenSize > 768){
                $("#gnb").show();
                 current = 1;
            }
            if(current == 1 && screenSize < 768){
                $("#gnb").hide();
                 current = 0;
            }
        }); 
      
 
      
  });