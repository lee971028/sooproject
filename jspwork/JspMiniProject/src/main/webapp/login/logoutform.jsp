<%@page import="data.dao.MemberDao"%>
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
</head>
<body>
<div style="margin-left: 100px; margin-top: 50px;">
    <img alt="" src="image2/s6.JPG" align="left" hspace="20">
    
    <%
      //세션으로부터 아이디 얻는다
      String myid=(String)session.getAttribute("myid");
    
    //db에서 아이디에 해당하는 이름얻기
    MemberDao dao=new MemberDao();
    String name=dao.getName(myid);
    
    %>
    
    <br><br>
    <b><%=name %>님</b><br><br>
    <button type="button" class="btn btn-danger"
    style="width: 120px;" onclick="location.href='login/logoutaction.jsp'">로그아웃</button>
</div>
</body>
</html>