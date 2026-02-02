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
        let newScore = trustScore;
        let tScore = document.getElementById("scoreResult");
        let risk = "Low Risk";    
        
        if (amount > 5000) {
            newScore -= 30;
            risk = "High risk"
        }else if (amount > 2000) {
            newScore -= 15;
            risk = "Medium risk"
        }else {
            newScore -= 5;
            risk = "Low risk"
        }   
              
        tScore.innerHTML = `Trust Score: ${newScore} | ${risk}`

    });
}


/* ***************************************************
                  Payment Mogule
******************************************************/


const payForm = document.getElementById("paymentForm");

if(payForm){
    payForm.addEventListener("submit", function(e){
        e.preventDefault;

        let payCustomer = document.getElementById("payCustomer").value;
        let payAmount = document.getElementById("payAmount").value;

        if(payCustomer === "" || payAmount === ""){
            alert("Please fill required fields")
        }else if (payAmount < "0"){
            alert("Please fill valid Amount")
        }

    // ***********Update Trust Score ************
    
    })
}





















