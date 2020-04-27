$(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screenSize = $(window).width(); 
      screenHeight = $(window).height();
		  
		  $("#content").css('margin-top',screenHeight);
		 

      if(screenSize <= 768){
        
          $("#sdimg1").css('background-image': 'url(../images/images/collection1x768.svg)');
         };
    
    
    }); 