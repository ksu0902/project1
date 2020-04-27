<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head> 
<meta charset="utf-8">
<link href="../member/css/login.css" rel="stylesheet" type="text/css" media="all">
</head>

<body>
<div id="wrap">
  <div id="header">
    <? include "../common/header.html"; ?>
  </div>  <!-- end of header -->

  <div id="content">
  </div> <!-- end of col1 -->

	<div id="col2"> <!--로그인 폼--->
        <form  name="member_form" method="post" action="login.php"> 
		<div id="title">
		
		<h2>log-in</h2>
		</div>
       
		<div id="login_form">
			 <div id="login2">
				<div id="id_input_button">
					<div id="id_pw_title">
						
					</div>
					<div id="id_pw_input">
						<ul>
						<li>
                       <input type="text" name="id" class="login_input" placeholder="id">
						</li>
						<li>
						
                          <input type="password" name="pass" class="login_input" placeholder="password" >
						
						</li>
						</ul>						
					</div>
					<div id="login_button">
						<input type="submit" value="로그인">
					</div>
				</div>
				<div class="clear"></div>
                <div class="find">
                <ul>
                    <li><a href="">비밀번호 찾기</a></li>
                    <li><a href="">/</a></li>
                    <li><a href="">회원가입 하기</a></li>
                </ul>

                </div>
			 </div>			 
		</div> <!-- end of form_login -->

	    </form>
	</div> <!-- end of col2 -->
  </div> <!-- end of content -->
 <!-- end of wrap -->

</body>
</html>