<%@page import="java.text.NumberFormat"%>
<%@page import="data.dao.MemberDao"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.List"%>
<%@page import="data.dao.ShopDao"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Insert title here</title>
<link
        href="https://fonts.googleapis.com/css2?family=Anton&family=Edu+VIC+WA+NT+Beginner:wght@600&family=Gamja+Flower&family=Single+Day&family=Jua&family=Nanum+Pen+Script&display=swap"
        rel="stylesheet">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://code.jquery.com/jquery-3.6.3.js"></script>
<style type="text/css">
   div.sangpum img.photo{
   width: 60PX;
   height: 80PX;
   border: 2PX solid gray;
   }
   
   div.sangpum{cursor: pointer;}
   
   span.del{cursor: pointer;}
</style>
<script type="text/javascript">
  $(function(){
	  
	  //전체상품선택하면 선택해제
	  $("#allcheck").click(function(){
		  
		  var chk=$(this).is(":checked");
		  
		  $(".idx").prop("checked",chk);
	  });
	  
	  
	  //상품선택시 디테일페이지로
	  $("div.sangpum").click(function(){
		  
		  var shopnum=$(this).attr("shopnum");
		  
		  location.href="index.jsp?main=shop/detailpage.jsp?shopnum="+shopnum;
	  });
	  
	  
	  //휴지통모양 개별삭제
	  $("span.del").click(function(){
		  var idx=$(this).attr("idx");
		  
		  var a=confirm("삭제하려면 [확인]을 눌러주세요");
		  
		  if(a){
			  //alert(idx);
			  del(idx);
			  location.reload(); //현재페이지새로고침
			  
		  }
	  })
	  
	  
	  //선택한 상품 삭제버튼
	  $("#btncartdel").click(function(){
		  
		  
		  //체크한개수
		  var cnt=$(".idx:checked").length;
		 // alert(cnt);
		 
		 if(cnt==0){
			 alert("먼저 삭제할 상품을 선택해 주세요");
			 return;
		 }
		 
		 $(".idx:checked").each(function(i,element){
			 
			 var idx=$(this).attr("idx");
			 //alert(idx);  선택한 상품의 idx만 나오나 확인
			 
			 //선택한 장바구니 모두 삭제
			 del(idx);
			 
			 
		 });
		 
		 location.reload();
		 
	  });
	  
	  
	  
  });
  
  
  //사용자 함수 ajax
  function del(idx)
  {
	  $.ajax({
		  type:"get",
		  url:"shop/cartdelete.jsp",
		  dataType:"html",
		  data:{"idx":idx},
		  success:function(){
			  
		  }
		  
		  
	  })
  }
  
  

</script>
</head>
<%
  //로그인한 아이디얻기
  String id=(String)session.getAttribute("myid");

  //ShopDao
  ShopDao dao=new ShopDao();
  
  //MemerDao
  MemberDao mdao=new MemberDao();
  String name=mdao.getName(id);
  
  //장바구니 목록
  List<HashMap<String,String>> list=dao.getCartList(id);
%>
<body>
  
    <h4 class="alert alert-info" style="width: 1000px;"><%=id %>(<%=name %>)님의 장바구니</h4>
    
    
    <table class="table table-striped" style="width: 1000px;">
       <tr>
          <th style="width: 30px;">
            <input type="checkbox" id="allcheck">
          </th>
          <th style="width: 200px;">상품정보</th>
          <th style="width: 200px; ">상품금액</th>
       </tr>
      
       <%
       
       int allmoney=0;
       NumberFormat nf=NumberFormat.getInstance();
       
       
          for(int i=0;i<list.size();i++)
          {
        	  HashMap<String,String> map=list.get(i);
        	    //사진얻기
        	    String photo=map.get("photo");
        	    
        	    int cnt=Integer.parseInt(map.get("cnt"));
        	    
        	   %>
        	   
        	   <tr>
        	     <td>
        	       <input type="checkbox" name="idx" class="idx" idx="<%=map.get("idx") %>">
        	     </td>
        	     
        	     <td>
        	        <div  shopnum="<%=map.get("shopnum") %>" class="sangpum">
        	           <img alt="" src="shopsave/<%=photo%>" class="photo" align="left" hspace="20">
        	           
        	           <h5><b>상품명:  <%=map.get("sangpum") %></b></h5>
        	           <h5><b>갯수:  <%=cnt %>개</b></h5>
        	           <h5><b>날짜:  <%=map.get("cartday") %></b></h5>
        	        </div>
        	     </td>
        	     
        	     
        	     <td align="left" >
        	        <%
        	          int price=Integer.parseInt(map.get("price"));
        	         allmoney+=price;
        	           price*=cnt;
        	        %>
        	        
        	        <h4><%= nf.format(price)%>원
        	        
        	          <span class="del glyphicon glyphicon-trash" idx="<%=map.get("idx")%>"
        	          style="padding-left: 50px; color: red;"></span>
        	        </h4>
        	     </td>
        	     
        	   </tr>
        	   
          <%}
       %>
       
       
       <tr>
         <td colspan="3">
            <button type="button" class="btn btn-danger btn-lg"
            style="margin-left: 100px;" id="btncartdel">선택상품삭제</button>
            
            <span style="font-size: 2em; float: right; padding-right: 100px;">총주문금액
            <b style="color: green;"><%=nf.format(allmoney) %>원</b>
            </span>
         </td>
       </tr>
       
       
    </table>
</body>
</html>