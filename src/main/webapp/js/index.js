

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
                text: 'the client has been modified'
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