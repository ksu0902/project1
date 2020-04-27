  $(document).ready(function() {
  	var screenSize = $(window).width();
	var screenHeight = $(window).height();
  	var current=false;
  	
		$("#content").css('margin-top',screenHeight);
		
  	if( screenSize > 768){
        $("#imgBG").show();
      }
    if(screenSize <= 768){
        $("#imgBG").show();
      }
  	
   $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screenSize = $(window).width(); 
      screenHeight = $(window).height();
		  
		$("#content").css('margin-top',screenHeight);
		 
      if( screenSize > 768 && current==false){
      	
        $("#imgBG").show();
        current=true;
      }
      if(screenSize <= 768){
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
              
              $("#headerArea h1 a").css({
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
                 background: "none",
                 borderBottom: "none"
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