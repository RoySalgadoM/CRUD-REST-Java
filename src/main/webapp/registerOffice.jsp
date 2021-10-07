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
    <h1 class="text-center">Office registration</h1>
    <hr>
    <form id="formOffice">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label>Office code</label>
                <input type="text" class="form-control" id="officeCode" required>
            </div>
            <div class="form-group col-md-6">
                <label>City</label>
                <input type="text" class="form-control" id="city"required>
            </div>
            <div class="form-group col-md-6">
                <label>Phone</label>
                <input type="text" class="form-control" id="phone"required>
            </div>
            <div class="form-group col-md-6">
                <label>Address Line 1</label>
                <input type="text" class="form-control" id="addressLine1"required>
            </div>
            <div class="form-group col-md-6">
                <label>Address Line 2</label>
                <input type="text" class="form-control" id="addressLine2"required>
            </div>
            <div class="form-group col-md-6">
                <label>State</label>
                <input type="text" class="form-control" id="state"required>
            </div>
            <div class="form-group col-md-6">
                <label>Country</label>
                <input type="text" class="form-control" id="country"required>
            </div>
            <div class="form-group col-md-6">
                <label>Postal Code</label>
                <input type="number" class="form-control" id="postalCode"required>
            </div>
            <div class="form-group col-md-6">
                <label>Territory</label>
                <input type="text" class="form-control" id="territory"required>
            </div>
        </div>

        <button type="button" onclick="registerOffice()" class="btn btn-success btn-block">Register</button>
    </form>
</div>
<script src="<%=context%>/js/index.js"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
</body>
</html>