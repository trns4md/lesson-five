var firstName = document.getElementById ("first-name"),
    lastName = document.getElementById ("last-name"),
    addButton = document.getElementById("add-button"),
    displayDiv = document.getElementById("customer-list"),
    customerList =[],
    nextCustomerId = 0;

    var Customer = function Customer (firstName, lastName){
        this.firstname = firstName;
        this.lastName = lastName;
        this.id = nextcustomerId++;
    }

    this.tostring = function tostring(){
        return this.firstName + "" + this.lastName
    }

    
    var displayCustomer = function displayCustomer(){
        displayDiv.innerHTML ="";

    for (var i = 0; i< customerList.length; i++){
        var curCustomer = customerList [i];

    }
    }
    addButton.addEventListener("click", function(){
        var newCustomer = new Customer(firstName.value, lastName.value);
        customerList.push(newCustomer);
        displayCustomers();
    });

