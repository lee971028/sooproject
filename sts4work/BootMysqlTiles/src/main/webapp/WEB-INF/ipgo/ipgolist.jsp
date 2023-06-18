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
<div class="alert alert-success" style="width: 800px;">
  <b>총 ${totalCount}개의 상품이 있습니다</b>
</div>

<table class="table table-bordered" style="width: 800px;">
		<caption>
		<span style="float: right;">
			<button type="button" class="btn btn-default"
			onclick="location.href='ipgoform'">상품추가</button>
		</span></caption>
		
		<c:forEach var="dto" items="${list}">
		  <tr>
		     <td width="400" rowspan="4">
		      <c:if test="${dto.photoname!='no' }">
			      

					 <img alt="" src="../photo/${dto.image}" style="max-width: 150px;"
					onerror="this.style.display='none';"></a> 
		      </c:if>
		      <c:if test="${dto.photoname=='no' }">
		      <img alt="" src="../image/noimage.PNG"
		      style="max-width: 300px;">
		      </c:if>
		    </td> 
		    <td>
		      <b>상품영: ${dto.sangpum}</b>
		    </td>
		  </tr>
		  
		  <tr>
		    <td><b>단가: 
		    <fmt:formatNumber value="${dto.price}" type="currency"/>
		    </b></td>
		  </tr>
		  
		  <tr>
		    <td><b>입고일: 
		    <fmt:formatDate value="${dto.ipgoday}" pattern="yyyy년 MM월 dd일"/>
		    </b></td>
		  </tr>
		  
		  <tr>
		    <td>
		    <button type="button" class="btn btn-info btn-sm"
		    onclick="location.href='updateform?num=${dto.num}'">수정</button>
		     <button type="button" class="btn btn-info btn-sm"
		    onclick="location.href='delete?num=${dto.num}'">삭제</button>
		    </td>
		  </tr>
		  
		</c:forEach></table>
		
		
</table>

</body>
</html>