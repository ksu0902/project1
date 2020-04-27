

var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // When readystate changes
 
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.

    var newContent = '';
    newContent += '<h2 class="hidden">본문영역</h2>'
    newContent += '<h3>제품소개</h3>'
    newContent += '<div class="product_list">';
    newContent += '<ul>';        
    
    
    
    for (var i = 0; i < responseObject.productlist.length; i++) { 
      
      newContent += '<li><dl><a href="productdetail.html">';
      newContent += '<dt><img src="' +responseObject.productlist[i].productimage+'"';
      newContent += ' alt="' + responseObject.productlist[i].name + '"></dt>'
      newContent += '<dd>' + responseObject.productlist[i].name + '</dd>';
      newContent += '<dd>' + responseObject.productlist[i].division + '</dd>';
      newContent += '<dd>' + responseObject.productlist[i].effect + '</dd>';
      newContent += '</a></dl></li>';
      
        
    }
    
 newContent += '</ul>';
      newContent += '</div>';
    document.getElementById('content').innerHTML = newContent;

  //}
};

xhr.open('GET', 'data/data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다

