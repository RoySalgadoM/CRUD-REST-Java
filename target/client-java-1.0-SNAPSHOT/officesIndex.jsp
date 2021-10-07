<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<% String context = request.getContextPath();%>
<html>
<head>
    <title>Offices</title>
    <link rel="stylesheet" href="<%=context%>/css/bootstrap.min.css">
    <link rel="stylesheet" href="<%=context%>/css/all.min.css">
</head>
<body class="bg-dark" onload="getAllOffices()">

<div class="container-fluid">
    <h1 class="text-center" style="color: white;">Registered offices</h1>
    <div class="row">
        <div class="col-12">
            <a href="<%=context%>/registerOffice.jsp" class="btn btn-primary btn-block">Register an office</a>
        </div>
    </div>
    <table id="table" class="table table-responsive table-hover table-dark">
        <thead>
        <tr>
            <th scope="col" class="text-center">Modify</th>
            <th scope="col" class="text-center">Delete</th>
            <th scope="col">Office code</th>
            <th scope="col">City</th>
            <th scope="col">Phone</th>
            <th scope="col">Address Line 1</th>
            <th scope="col">Address Line 2</th>
            <th scope="col">State</th>
            <th scope="col">Country</th>
            <th scope="col">Postal Code</th>
            <th scope="col">Territory</th>
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
                                <label>Office code</label>
                                <input type="number" class="form-control" id="officeCode" required>
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

                        <button type="button" onclick="modifyOffice()" class="btn btn-success btn-block">Modify</button>
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