<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<% String context = request.getContextPath();%>
<html>
<head>
    <title>Products lines</title>
    <link rel="stylesheet" href="<%=context%>/css/bootstrap.min.css">
    <link rel="stylesheet" href="<%=context%>/css/all.min.css">
</head>
<body class="bg-dark" onload="getAllProductsLines()">

<div class="container-fluid">
    <h1 class="text-center" style="color: white;">Registered products lines</h1>
    <div class="row">
        <div class="col-12">
            <a href="<%=context%>/registerProductsLines.jsp" class="btn btn-primary btn-block">Register a product line</a>
        </div>
    </div>
    <table id="table" class="table table-responsive table-hover table-dark">
        <thead>
        <tr>
            <th scope="col" class="text-center">Modify</th>
            <th scope="col" class="text-center">Delete</th>
            <th scope="col">Product line</th>
            <th scope="col">Text description</th>
            <th scope="col">Html description</th>
            <th scope="col">Image</th>
        </tr>
        </thead>
        <tbody id="tbody"></tbody>
    </table>
    <div class="modal fade modal-customer"  style="color: white;" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content" style="background-color: #343a40;">
                <div class="container-fluid">
                    <h1 class="text-center">Office registration</h1>
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
                                <input type="file" class="form-control-file" id="image"required>
                            </div>
                        </div>

                        <button type="button" onclick="registerOffice()" class="btn btn-success btn-block">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

</div>
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
<script src="<%=context%>/js/index.js"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>
</html>
