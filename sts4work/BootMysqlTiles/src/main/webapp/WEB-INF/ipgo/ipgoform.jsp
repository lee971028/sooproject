<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
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
<form action="insert" method="post" enctype="multipart/form-data">
  <table class="table table-bordered" style="width: 500px;">
    <caption><b>상품정보 입력</b></caption>
      <tr>
        <th bgcolor="#ddd"">상품명</th>
          <td>
            <input type="text" name="sangpum" class="form-control"
            style="width: 200px;" required="required">
          </td>
      </tr>
      
      <tr>
        <th bgcolor="#ddd"">단가</th>
          <td>
            <input type="text" name="price" class="form-control"
            style="width: 200px;" required="required">
          </td>
      </tr>
      <tr>
        <th bgcolor="#ddd"">사진</th>
          <td>
            <input type="file" name="upload" class="form-control"
            style="width: 200px;" multiple="multiple">
          </td>
      </tr>
      
      
      <tr>
      	<td colspan="2" align="center">
           <button type="submit" class="btn btn-info"
           style="width: 100px;" >저장</button>
            <button type="button" class="btn btn-info"
           style="width: 100px;" onclick="location.href='list'">목록</button>
       </td>
         
      </tr>
  </table>
</form>

</body>
</html>