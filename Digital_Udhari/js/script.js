const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();

        let user = document.getElementById("username").value;
        let pass = document.getElementById("password").value;

        if(user === "" || pass === ""){
            alert("Please fill required field")
        }else{
            window.location.href = "dashboard.html";
        }

    })
}


// Customer Module
let customer = [];

const customerForm = document.getElementById("customerForm")

if(customerForm){
    customerForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("cname").value;
        let mobile = document.getElementById("mobile").value;

        if (name === "" || mobile === "") {
            alert("Please fill all fields");
            return;
        }
         
        customer.push({name, mobile });
        showCustomer();

        customerForm.reset();
    });
}

function showCustomer() {
    let table = document.getElementById("customerTable");
    if(!table) return;

    table.innerHtml = "";
    customer.forEach(c => {
        table.innerHTML += `<tr>
            <td>${c.name}</td>
            <td>${c.mobile}</td>
            </tr>`;
       
    });
}




// Udhari + Trust Score Module

const udhariForm = document.getElementById("udhariForm");

if(udhariForm) {
    udhariForm.addEventListener("submit", function (e){
        e.preventDefault();

        let customer = document.getElementById("customerSelect").value;
        let amount= document.getElementById("amount").value;

        if(customer === "" || amount === ""){
            alert("Please fill all fields");
            return;
        }

        // basic trust score logic
        let trustScore = 100;

        if (amount > 5000) trustScore -= 30;
        else if (amount > 2000) trustScore -= 15;
        else trustScore -= 5;

        let risk = "Low Risk";
        if (trustScore < 50) risk = "High Risk";
        else if (trustScore < 80) risk = "Medium Risk";

        document.getElementById("scoreResult").innerHtml = `Trust Score: ${trustScore} | ${risk}`;

    });
}



