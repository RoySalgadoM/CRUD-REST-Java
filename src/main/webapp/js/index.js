

const registerCustomer = ()=>{
    let customer = new Object();
    customer.customerNumber = document.getElementById("customerNumber").value;
    customer.customerName = document.getElementById("customerName").value;
    customer.contactFirstName = document.getElementById("contactFirstName").value;
    customer.contactLastName = document.getElementById("contactLastName").value;
    customer.phone = document.getElementById("phone").value;
    customer.addressLine1 = document.getElementById("addressLine1").value;
    customer.addressLine2 = document.getElementById("addressLine2").value;
    customer.city = document.getElementById("city").value;
    customer.state = document.getElementById("state").value;
    customer.postalCode = document.getElementById("postalCode").value;
    customer.country = document.getElementById("country").value;
    customer.salesRepEmployeeNumber = document.getElementById("salesRepEmployeeNumber").value;
    customer.creditLimit = document.getElementById("creditLimit").value;

    $.ajax({
        type: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        url: 'http://localhost:8080/RESTServices_war_exploded/customer/save',
        data: customer,

}).done(function(res) {
        if(res==null){
            Swal.fire({
                icon: 'error',
                title: 'The client could not be registered',
                text: 'There may be duplicate data in the database'
            })
        }else{
            Swal.fire({
                title: 'The client has been registered',
                confirmButtonText: 'Go to the customer table',
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "http://localhost:8081/client_java_war_exploded/index.jsp"
                }
            })
        }
    });
}

const modifyCustomer = ()=>{
    let customer = new Object();
    customer.customerNumber = document.getElementById("customerNumber").value;
    customer.customerName = document.getElementById("customerName").value;
    customer.contactFirstName = document.getElementById("contactFirstName").value;
    customer.contactLastName = document.getElementById("contactLastName").value;
    customer.phone = document.getElementById("phone").value;
    customer.addressLine1 = document.getElementById("addressLine1").value;
    customer.addressLine2 = document.getElementById("addressLine2").value;
    customer.city = document.getElementById("city").value;
    customer.state = document.getElementById("state").value;
    customer.postalCode = document.getElementById("postalCode").value;
    customer.country = document.getElementById("country").value;
    customer.salesRepEmployeeNumber = document.getElementById("salesRepEmployeeNumber").value;
    customer.creditLimit = document.getElementById("creditLimit").value;
    $.ajax({
        type: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        url: `http://localhost:8080/RESTServices_war_exploded/customer/save/${customer.customerNumber}`,
        data: customer,

    }).done(function(res) {
        if(res==null){
            Swal.fire({
                icon: 'error',
                title: 'The client could not be modified',
                text: 'the client has not been modified'
            })
        }else{
            Swal.fire({
                title: 'The client has been modified',
                confirmButtonText: 'Reload the customer table',
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "http://localhost:8081/client_java_war_exploded/index.jsp"
                }
            })
        }
    });
}


const getCustomerById=(customerNumber)=>{
    $.ajax({
        method: "GET",
        url: `http://localhost:8080/RESTServices_war_exploded/customer/${customerNumber}`
    }).done(function(res){
        document.getElementById("customerNumber").value = res.customerNumber
        document.getElementById("customerName").value = res.customerName
        document.getElementById("contactFirstName").value=res.contactFirstName
        document.getElementById("contactLastName").value=res.contactLastName
        document.getElementById("phone").value=res.phone
        document.getElementById("addressLine1").value=res.addressLine1
        document.getElementById("addressLine2").value=res.addressLine2
        document.getElementById("city").value=res.city
        document.getElementById("state").value=res.state
        document.getElementById("postalCode").value=res.postalCode
        document.getElementById("country").value=res.country
        document.getElementById("salesRepEmployeeNumber").value=res.salesRepEmployeeNumber
        document.getElementById("creditLimit").value=res.creditLimit
    });
}
const getAllCustomers = ()=>{
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/RESTServices_war_exploded/customer"
    }).done(function(res){
        let content = "";
        let table = document.getElementById("table")
        let tbody = document.getElementById("tbody")

        for(let i = 0; i < res.length; i++){
            content += `
                <tr>
                    <td>
                        <button type="button" onclick="getCustomerById(${ res[i].customerNumber })" data-toggle="modal" data-target=".modal-customer" class="btn btn-primary"><i class="fas fa-edit"></i></button>
                    </td>
                    <td>
                        <button onclick="deleteCustomer(${ res[i].customerNumber })" class="btn btn-danger"><i class="fas fa-trash"></i></button>
                    </td>
                    <td>${ res[i].customerNumber }</td>
                    <td>${ res[i].customerName }</td>
                    <td>${ res[i].contactFirstName }</td>
                    <td>${ res[i].contactLastName }</td>
                    <td>${ res[i].phone }</td>
                    <td>${ res[i].addressLine1 }</td>
                    <td>${ res[i].addressLine2 }</td>
                    <td>${ res[i].city }</td>
                    <td>${ res[i].state }</td>
                    <td>${ res[i].postalCode }</td>
                    <td>${ res[i].country }</td>
                    <td>${ res[i].salesRepEmployeeNumber }</td>
                    <td>${ res[i].creditLimit }</td>
                </tr>
            `;
        }
        $("#table > tbody").html(content);
    });
}

const deleteCustomer=(customerNumber)=>{
    $.ajax({
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        url: `http://localhost:8080/RESTServices_war_exploded/customer/delete/${customerNumber}`
    }).done(function(res){
        if(res==null){
            Swal.fire({
                icon: 'error',
                title: 'The client could not be removed!',
                text: 'Check the database'
            })
        }else{
            Swal.fire({
                title: 'The client has been removed!',
                confirmButtonText: 'Reload the customer table',
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "http://localhost:8081/client_java_war_exploded/index.jsp"
                }
            })

        }
    });
}
// ----------------------------------------------------------------------------------------
const getAllOffices = ()=>{
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/RESTServices_war_exploded/offices"
    }).done(function(res){
        let content = "";
        let table = document.getElementById("table")
        let tbody = document.getElementById("tbody")
        for(let i = 0; i < res.length; i++){
            content += `
                <tr>
                    <td>
                        <button type="button" onclick="getOfficeById(${ res[i].officeCode })" data-toggle="modal" data-target=".modal-customer" class="btn btn-primary"><i class="fas fa-edit"></i></button>
                    </td>
                    <td>
                        <button onclick="deleteOffice(${ res[i].officeCode })" class="btn btn-danger"><i class="fas fa-trash"></i></button>
                    </td>
                    <td>${ res[i].officeCode }</td>
                    <td>${ res[i].city }</td>
                    <td>${ res[i].phone }</td>
                    <td>${ res[i].addressLine1 }</td>
                    <td>${ res[i].addressLine2 }</td>
                    <td>${ res[i].state }</td>
                    <td>${ res[i].country }</td>
                    <td>${ res[i].postalCode }</td>
                    <td>${ res[i].territory }</td>
                </tr>
            `;
        }
        $("#table > tbody").html(content);
    });
}

const registerOffice = ()=>{
    let office = new Object();
    office.officeCode = document.getElementById("officeCode").value;
    office.city = document.getElementById("city").value;
    office.phone = document.getElementById("phone").value;
    office.addressLine1 = document.getElementById("addressLine1").value;
    office.addressLine2 = document.getElementById("addressLine2").value;
    office.state = document.getElementById("state").value;
    office.country = document.getElementById("country").value;
    office.postalCode = document.getElementById("postalCode").value;
    office.territory = document.getElementById("territory").value;
    $.ajax({
        type: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        url: 'http://localhost:8080/RESTServices_war_exploded/offices/save',
        data: office,

    }).done(function(res) {
        if(res==null){
            Swal.fire({
                icon: 'error',
                title: 'The office could not be registered',
                text: 'There may be duplicate data in the database'
            })
        }else{
            Swal.fire({
                title: 'The office has been registered',
                confirmButtonText: 'Go to the office table',
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "http://localhost:8081/client_java_war_exploded/officesIndex.jsp"
                }
            })
        }
    });
}

const modifyOffice = ()=>{
    let office = new Object();
    office.officeCode = document.getElementById("officeCode").value;
    office.city = document.getElementById("city").value;
    office.phone = document.getElementById("phone").value;
    office.addressLine1 = document.getElementById("addressLine1").value;
    office.addressLine2 = document.getElementById("addressLine2").value;
    office.state = document.getElementById("state").value;
    office.country = document.getElementById("country").value;
    office.postalCode = document.getElementById("postalCode").value;
    office.territory = document.getElementById("territory").value;
    $.ajax({
        type: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        url: `http://localhost:8080/RESTServices_war_exploded/offices/save/${office.officeCode}`,
        data: office,

    }).done(function(res) {
        if(res==null){
            Swal.fire({
                icon: 'error',
                title: 'The office could not be modified',
                text: 'the office has not been modified'
            })
        }else{
            Swal.fire({
                title: 'The office has been modified',
                confirmButtonText: 'Reload the office table',
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "http://localhost:8081/client_java_war_exploded/officesIndex.jsp"
                }
            })
        }
    });
}

const getOfficeById=(officeCode)=>{
    $.ajax({
        method: "GET",
        url: `http://localhost:8080/RESTServices_war_exploded/offices/${officeCode}`
    }).done(function(res){
        document.getElementById("officeCode").value = res.officeCode
        document.getElementById("city").value = res.city
        document.getElementById("phone").value=res.phone
        document.getElementById("addressLine1").value=res.addressLine1
        document.getElementById("addressLine2").value=res.addressLine2
        document.getElementById("state").value=res.state
        document.getElementById("country").value=res.country
        document.getElementById("postalCode").value=res.postalCode
        document.getElementById("territory").value=res.territory
    });
}
const deleteOffice=(officeCode)=>{
    $.ajax({
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        url: `http://localhost:8080/RESTServices_war_exploded/offices/delete/${officeCode}`
    }).done(function(res){
        if(res==null){
            Swal.fire({
                icon: 'error',
                title: 'The office could not be removed!',
                text: 'Check the database'
            })
        }else{
            Swal.fire({
                title: 'The office has been removed!',
                confirmButtonText: 'Reload the office table',
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "http://localhost:8081/client_java_war_exploded/officesIndex.jsp"
                }
            })

        }
    });
}

// ----------------------------------------------------------------------------------------
const getAllProducts = ()=>{
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/RESTServices_war_exploded/products"
    }).done(function(res){
        let content = "";
        let table = document.getElementById("table")
        let tbody = document.getElementById("tbody")
        for(let i = 0; i < res.length; i++){
            content += `
                <tr>
                    <td>
                        <button type="button" onclick="getProductById('${ res[i].productCode }')" data-toggle="modal" data-target=".modal-customer" class="btn btn-primary"><i class="fas fa-edit"></i></button>
                    </td>
                    <td>
                        <button onclick="deleteProduct('${ res[i].productCode }')" class="btn btn-danger"><i class="fas fa-trash"></i></button>
                    </td>
                    <td>${ res[i].productCode }</td>
                    <td>${ res[i].productName }</td>
                    <td>${ res[i].productLine }</td>
                    <td>${ res[i].productScale }</td>
                    <td>${ res[i].productVendor }</td>
                    <td>${ res[i].productDescription }</td>
                    <td>${ res[i].quantityInStock }</td>
                    <td>${ res[i].buyPrice }</td>
                    <td>${ res[i].msrp }</td>
                </tr>
            `;
        }
        $("#table > tbody").html(content);
    });
}

const registerProduct = ()=>{
    let product = new Object();
    product.productCode = document.getElementById("productCode").value;
    product.productName = document.getElementById("productName").value;
    product.productLine = document.getElementById("productLine").value;
    product.productScale = document.getElementById("productScale").value;
    product.productVendor = document.getElementById("productVendor").value;
    product.productDescription = document.getElementById("productDescription").value;
    product.quantityInStock = document.getElementById("quantityInStock").value;
    product.buyPrice = document.getElementById("buyPrice").value;
    product.msrp = document.getElementById("msrp").value;
    $.ajax({
        type: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        url: 'http://localhost:8080/RESTServices_war_exploded/products/save',
        data: product,

    }).done(function(res) {
        if(res==null){
            Swal.fire({
                icon: 'error',
                title: 'The product could not be registered',
                text: 'There may be duplicate data in the database'
            })
        }else{
            Swal.fire({
                title: 'The product has been registered',
                confirmButtonText: 'Go to the product table',
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "http://localhost:8081/client_java_war_exploded/productsIndex.jsp"
                }
            })
        }
    });
}

const modifyProduct = ()=>{
    let product = new Object();
    product.productCode = document.getElementById("productCode").value;
    product.productName = document.getElementById("productName").value;
    product.productLine = document.getElementById("productLine").value;
    product.productScale = document.getElementById("productScale").value;
    product.productVendor = document.getElementById("productVendor").value;
    product.productDescription = document.getElementById("productDescription").value;
    product.quantityInStock = document.getElementById("quantityInStock").value;
    product.buyPrice = document.getElementById("buyPrice").value;
    product.msrp = document.getElementById("msrp").value;
    $.ajax({
        type: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        url: `http://localhost:8080/RESTServices_war_exploded/products/save/${product.productCode}`,
        data: product,

    }).done(function(res) {
        if(res==null){
            Swal.fire({
                icon: 'error',
                title: 'The product could not be modified',
                text: 'the product has not been modified'
            })
        }else{
            Swal.fire({
                title: 'The product has been modified',
                confirmButtonText: 'Reload the product table',
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "http://localhost:8081/client_java_war_exploded/productsIndex.jsp"
                }
            })
        }
    });
}

const getProductById=(productCode)=>{
    $.ajax({
        method: "GET",
        url: `http://localhost:8080/RESTServices_war_exploded/products/${productCode}`
    }).done(function(res){
        document.getElementById("productCode").value = res.productCode
        document.getElementById("productName").value = res.productName
        document.getElementById("productLine").value=res.productLine
        document.getElementById("productScale").value=res.productScale
        document.getElementById("productVendor").value=res.productVendor
        document.getElementById("productDescription").value=res.productDescription
        document.getElementById("quantityInStock").value=res.quantityInStock
        document.getElementById("buyPrice").value=res.buyPrice
        document.getElementById("msrp").value=res.msrp
    });
}
const deleteProduct=(productCode)=>{
    $.ajax({
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        url: `http://localhost:8080/RESTServices_war_exploded/products/delete/${productCode}`
    }).done(function(res){
        if(res==null){
            Swal.fire({
                icon: 'error',
                title: 'The product could not be removed!',
                text: 'Check the database'
            })
        }else{
            Swal.fire({
                title: 'The product has been removed!',
                confirmButtonText: 'Reload the product table',
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "http://localhost:8081/client_java_war_exploded/productsIndex.jsp"
                }
            })

        }
    });
}


// ----------------------------------------------------------------------------------------
const getAllProductsLines = ()=>{
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/RESTServices_war_exploded/productLines"
    }).done(function(res){
        let content = "";
        let table = document.getElementById("table")
        let tbody = document.getElementById("tbody")

        for(let i = 0; i < res.length; i++){
            if(res[i].htmlDescription==undefined && res[i].base64Image==undefined){
                content += `
                <tr>
                    <td>
                        <button type="button" onclick="getProductLineById('${ res[i].productLine }')" data-toggle="modal" data-target=".modal-customer" class="btn btn-primary"><i class="fas fa-edit"></i></button>
                    </td>
                    <td>
                        <button onclick="deleteProductLine('${ res[i].productLine }')" class="btn btn-danger"><i class="fas fa-trash"></i></button>
                    </td>
                    <td>${ res[i].productLine }</td>
                    <td>${ res[i].textDescription }</td>
                    <td>Without description</td>
                    <td>
                        Sin imagen
                    </td>
                </tr>
            `;
            }else if(res[i].htmlDescription==undefined){
                content += `
                <tr>
                    <td>
                        <button type="button" onclick="getProductLineById('${ res[i].productLine }')" data-toggle="modal" data-target=".modal-customer" class="btn btn-primary"><i class="fas fa-edit"></i></button>
                    </td>
                    <td>
                        <button onclick="deleteProductLine('${ res[i].productLine }')" class="btn btn-danger"><i class="fas fa-trash"></i></button>
                    </td>
                    <td>${ res[i].productLine }</td>
                    <td>${ res[i].textDescription }</td>
                    <td>Without description</td>
                    <td>
                        ${res[i].base64Image}
                    </td>
                </tr>
            `;
            }else if(res[i].base64Image==undefined){
                content += `
                <tr>
                    <td>
                        <button type="button" onclick="getProductLineById('${ res[i].productLine }')" data-toggle="modal" data-target=".modal-customer" class="btn btn-primary"><i class="fas fa-edit"></i></button>
                    </td>
                    <td>
                        <button onclick="deleteProductLine('${ res[i].productLine }')" class="btn btn-danger"><i class="fas fa-trash"></i></button>
                    </td>
                    <td>${ res[i].productLine }</td>
                    <td>${ res[i].textDescription }</td>
                    <td>${ res[i].htmlDescription }</td>
                    <td>
                        Sin imagen
                    </td>
                </tr>
            `;
            }else if(res[i].htmlDescription!=undefined && res[i].base64Image!=undefined){
                content += `
                <tr>
                    <td>
                        <button type="button" onclick="getProductLineById('${ res[i].productLine }')" data-toggle="modal" data-target=".modal-customer" class="btn btn-primary"><i class="fas fa-edit"></i></button>
                    </td>
                    <td>
                        <button onclick="deleteProductLine('${ res[i].productLine }')" class="btn btn-danger"><i class="fas fa-trash"></i></button>
                    </td>
                    <td>${ res[i].productLine }</td>
                    <td>${ res[i].textDescription }</td>
                    <td>${ res[i].htmlDescription }</td>
                    <td>
                        ${res[i].base64Image}
                    </td>
                </tr>
            `;
            }


        }
        $("#table > tbody").html(content);
    });
}

const registerProductLine = ()=>{
    let product = new Object();
    product.productLine = document.getElementById("productLine").value;
    product.textDescription = document.getElementById("textDescription").value;
    product.htmlDescription = document.getElementById("htmlDescription").value;
    product.image = document.getElementById("image").value;
    $.ajax({
        type: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        url: 'http://localhost:8080/RESTServices_war_exploded/productLines/save',
        data: product,

    }).done(function(res) {
        if(res==null){
            Swal.fire({
                icon: 'error',
                title: 'The product could not be registered',
                text: 'There may be duplicate data in the database'
            })
        }else{
            Swal.fire({
                title: 'The product has been registered',
                confirmButtonText: 'Go to the product table',
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "http://localhost:8081/client_java_war_exploded/productsLinesIndex.jsp"
                }
            })
        }
    });
}

const modifyProductLine = ()=>{
    let product = new Object();
    product.productLine = document.getElementById("productLine").value;
    product.textDescription = document.getElementById("textDescription").value;
    product.htmlDescription = document.getElementById("htmlDescription").value;
    product.image = document.getElementById("image").value;
    $.ajax({
        type: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        url: `http://localhost:8080/RESTServices_war_exploded/productLines/save/${product.productLine}`,
        data: product,

    }).done(function(res) {
        if(res==null){
            Swal.fire({
                icon: 'error',
                title: 'The product could not be modified',
                text: 'the product has not been modified'
            })
        }else{
            Swal.fire({
                title: 'The product has been modified',
                confirmButtonText: 'Reload the product table',
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "http://localhost:8081/client_java_war_exploded/productsLinesIndex.jsp"
                }
            })
        }
    });
}

const getProductLineById=(productCode)=>{
    $.ajax({
        method: "GET",
        url: `http://localhost:8080/RESTServices_war_exploded/productLines/${productCode}`
    }).done(function(res){
        document.getElementById("productLine").value = res.productLine
        document.getElementById("textDescription").value = res.textDescription
        if(res.htmlDescription==undefined){
            document.getElementById("htmlDescription").value=''
        }else{
            document.getElementById("htmlDescription").value=res.htmlDescription
        }
        if(res.base64Image==undefined){
            document.getElementById("image").value=''
        }else{
            document.getElementById("image").value=res.base64Image
        }

    });
}
const deleteProductLine=(productCode)=>{
    $.ajax({
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        url: `http://localhost:8080/RESTServices_war_exploded/productLines/delete/${productCode}`
    }).done(function(res){
        if(res==null){
            Swal.fire({
                icon: 'error',
                title: 'The product could not be removed!',
                text: 'Check the database'
            })
        }else{
            Swal.fire({
                title: 'The product has been removed!',
                confirmButtonText: 'Reload the product table',
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "http://localhost:8081/client_java_war_exploded/productsLinesIndex.jsp"
                }
            })

        }
    });
}