<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<% String context = request.getContextPath();%>
<!DOCTYPE html>
<html>
<head>
    <title>Office registration</title>
    <link rel="stylesheet" href="<%=context%>/css/bootstrap.min.css">
</head>
<body class="bg-dark" style="color: white;">
<div class="container">
    <h1 class="text-center">Product lines registration</h1>
    <hr>
    <form id="formOffice">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label>Product line</label>
                <input type="text" class="form-control" id="productLine" required>
            </div>
            <div class="form-group col-md-6">
                <label>Text description</label>
                <input type="text" class="form-control" id="textDescription"required>
            </div>
            <div class="form-group col-md-6">
                <label>Html description</label>
                <input type="text" class="form-control" id="htmlDescription"required>
            </div>
            <div class="form-group col-md-6">
                <label>Image</label>
                <input type="number" class="form-control" id="image"required>
            </div>
        </div>

        <button type="button" onclick="registerProductLine()" class="btn btn-success btn-block">Register</button>
    </form>
</div>
<script src="<%=context%>/js/index.js"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
</body>
</html>