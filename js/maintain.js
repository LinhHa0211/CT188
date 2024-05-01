
const fullNamePattern = /^[a-zA-Z\s]+$/;
const numberPattern = /^\d+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const licensePlatesPattern = /^[0-9]{2}[A-Z]-[0-9]{6}$/;
function checkNameCustomer(){
    var customerName = document.getElementById("customer-name");
    if (!fullNamePattern.test(customerName.value)){
        customerName.style.borderColor = "red";
        if (customerName.value == '')
            alert("Tên chưa được nhập!");
        else    
            alert("Tên nhập chưa đúng");
        setValue("customer-name-load-",".");
        return false;
    }
    return true;
}
function checkIdCustomer(){
    var customerId = document.getElementById("customer-id");
    if (!numberPattern.test(customerId.value)){
        if (customerId.value == '')
            alert("CCCD chưa được nhập!");
        else
            alert("CCCD nhập chưa đúng!");
        customerId.style.borderColor ="red";
        setValue("customer-id-load-",".");
        return false;
    }
    return true;
}
function checkEmail(){
    var email = document.getElementById("email");
    if (!emailPattern.test(email.value)){
        if (email.value == '')
            alert("Email chưa được nhập!");
        else
            alert("Email nhập chưa đúng!");
        email.style.borderColor ="red";
        setValue("email-load-",".");
        return false;
    }
    return true;
}
function checkPhone(){
    var phone = document.getElementById("phone");
    if (!numberPattern.test(phone.value)){
        if (phone.value == '')
            alert("Số điện thoại chưa được nhập!");
        else
            alert("Số điện thoại nhập chưa đúng!");
        phone.style.borderColor ="red";
        setValue("phone-load-",".");
        return false;
    }
    return true;
}
function checkIdPhone(){
    var idPhone = document.getElementById("id-phone");
    if  (idPhone.value == 0){
        alert("Mã vùng quốc gia chưa được chọn!");
        setValue("id-phone-load-",".",3);
        return false;
    }
    return true;
}
function checkLicensePlates(){
    var plate = document.getElementById("license-plates");
    if (!licensePlatesPattern.test(plate.value)){
        if (plate.value == '')
            alert("Biển số xe chưa được nhập!");
        else
            alert("Biển số xe nhập chưa đúng!");
        plate.style.borderColor ="red";
        setValue("plate-load-",".");
        return false;
    }
    return true;
}
function checkNameCompany(){
    var nameCompany = document.getElementById("name-company");
    if  (nameCompany.value == 0){
        alert("Hãng xe chưa được chọn!");
        setValue("name-company-load-",".",3);
        setValue("line-car-load-",".",3);
        setValue("name-car-load-",".",3);
        document.getElementById("line-car").value = 0;
        document.getElementById("name-car").value = 0;
        return false;
    }
    return true;
}
function checkLineCar(){
    var lineCar = document.getElementById("line-car");
    if (lineCar.value == 0){
        alert("Dòng xe chưa được chọn!");
        setValue("line-car-load-",".",3);
        setValue("name-car-load-",".",3);
        document.getElementById("name-car").value = 0;
        return false;
    }
    return true;
}
function checkNameCar(){
    var nameCar = document.getElementById("name-car");
    if (nameCar.value == 0){
        alert("Tên xe chưa được chọn!");
        setValue("name-car-load-",".",3);
        document.getElementById("name-car").value = 0;
        return false;
    }
    return true;
}
function setValue(id,text,n){
    for (var i = 1 ; i <= n; i++)
        document.getElementById(id+i.toString()).innerText = text;
}
window.onload = function() {
    var customerName = document.getElementById("customer-name");
    var customerId = document.getElementById("customer-id");
    var idPhone = document.getElementById("id-phone");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var plate = document.getElementById("license-plates");
    customerName.onchange = function(){
        if (checkNameCustomer()){
            customerName.style.borderColor = "#C0C0C0";
            setValue("customer-name-load-",customerName.value,4);
        }
    }
    customerId.onchange = function(){
        if (checkIdCustomer()){
            customerId.style.borderColor = "#C0C0C0";
            setValue("customer-id-load-",customerId.value,4);
        }
    }
    email.onchange = function(){
        if (checkEmail()){
            email.style.borderColor = "#C0C0C0";
            setValue("email-load-",email.value,4);
        }
    }
    idPhone.onchange = function(){
        if (checkIdPhone()){
            idPhone.style.borderColor = "#C0C0C0";
            setValue("id-phone-load-",idPhone.value,4);
        }
    }
    phone.onchange = function(){
        if (checkPhone()){
            phone.style.borderColor = "#C0C0C0";
            setValue("phone-load-",phone.value,4);
        }
    }
    plate.onchange = function(){
        if (checkLicensePlates()){
            plate.style.borderColor = "#C0C0C0";
            setValue("plate-load-",plate.value,3);
        }
    }
    var companySelect = document.getElementById("name-company");
    var lineCarSelect = document.getElementById("line-car");
    var nameCarSelect = document.getElementById("name-car");
    var carLines = {
        "BMW": ["Chọn dòng xe","I", "M", "W"],
        "Mercedes": ["Chọn dòng xe","GL", "Class", "EQS"],
        "Toyota": ["Chọn dòng xe","Sedan", "SUV", "Truck"]
    };
    var nameCars = {
        "I" : ["Chọn tên xe","I4","I5","I7","IX"],
        "M" : ["Chọn tên xe","M2","M4","M8","XM"],
        "W" : ["Chọn tên xe","X3","X4","X5","X6","X7"],
        "GL" : ["Chọn tên xe","GLC","GLE","GLI","GLS"],
        "Class" : ["Chọn tên xe","Class C","Class E","Class S","Class GT63"],
        "EQS" : ["Chọn tên xe","450","580","AMG","EQS"],
        "Sedan" : ["Chọn tên xe","Mirai","Corolla","Prius","Camry","Crown"],
        "SUV" : ["Chọn tên xe","Sequoia","RAV4","Grand Highlander","4Runner"],
        "Truck" : ["Chọn tên xe","Tacoma","Tundra"]
    }
    companySelect.onchange = function() {
        var companyId = this.value;
        lineCarSelect.innerHTML = "";
        lineCarSelect.style.display = "inline-block";
        if (companyId != 0) {
            carLines[companyId].forEach(function(line) {
                var option = document.createElement("option");
                option.text = line;
                if (line == "Chọn dòng xe")
                    option.value = 0;
                else
                    option.value = line;
                lineCarSelect.appendChild(option);
            });
        }
        if (checkNameCompany()){
            companySelect.style.borderColor = "#C0C0C0";
            setValue("name-company-load-",companySelect.value,1);
            setValue("line-car-load-",".",1);
            setValue("name-car-load-",".",1);
            document.getElementById("line-car").value = 0;
            document.getElementById("name-car").value = 0;
        }
    };
    lineCarSelect.onchange = function() {
        var lineCar = this.value;
        nameCarSelect.innerHTML = "";
        nameCarSelect.style.display = "inline-block";
        if (lineCar != 0) {
            nameCars[lineCar].forEach(function(line) {
                var option = document.createElement("option");
                option.text = line;
                if (line == "Chọn tên xe")
                    option.value = 0;
                else
                    option.value = line;
                option.value = line;
                nameCarSelect.appendChild(option);
            });
        }
        else {

        }
        if (checkLineCar()){
            lineCarSelect.style.borderColor = "#C0C0C0";
            setValue("line-car-load-",lineCarSelect.value,1);
            setValue("name-car-load-",".",1);
            document.getElementById("name-car").value = 0;
        }
    }
    nameCarSelect.onchange = function(){
        if (checkNameCar()){
            nameCarSelect.style.borderColor = "#C0C0C0";
            setValue("name-car-load-",nameCarSelect.value,3);
        }
    }

};
function check1(id){
    let customerName = document.getElementById("customer-name");
    let customerId = document.getElementById("customer-id");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let idPhone = document.getElementById("id-phone");
    
    
    if (!numberPattern.test(customerId.value)) {
        alert("Nhap CCCD sai");
        return;
    }
    if (!emailPattern.test(email.value)){
        alert("Nhap email sai");
        return;
    }
    if (!numberPattern.test(phone.value)){
        alert("Nhap so dien thoai sai");
        return;
    }
   id.href="#tabs-2";
}

