


const fullNamePattern = /^[a-zA-Z\s]+$/;
const numberPattern = /^\d+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const licensePlatesPattern = /^[0-9]{2}[A-Z]-[0-9]{4,6}$/;
var listService =[
    "Hệ thống máy","Hệ thống thắng","Cao su gạt mưa","Thay vỏ xe","Canh chỉnh góc lái","Sửa chữa chung"
]
function checkNameCustomer(){
    var customerName = document.getElementById("customer-name");
    if (!fullNamePattern.test(customerName.value)){
        if (customerName.value != ''){
            alert("Tên nhập chưa đúng"); 
            customerName.style.borderColor = "red";
        }
        setValue("customer-name-load-",".",4);
        return false;
    }
    return true;
}
function checkIdCustomer(){
    var customerId = document.getElementById("customer-id");
    if (!numberPattern.test(customerId.value)){
        if (customerId.value != ''){
            alert("CCCD nhập chưa đúng!");
            customerId.style.borderColor = "red";
        }
        setValue("customer-id-load-",".",4);
        return false;
    }
    return true;
}
function checkEmail(){
    var email = document.getElementById("email");
    if (!emailPattern.test(email.value)){
        if (email.value != ''){
            alert("Email nhập chưa đúng!");
            email.style.borderColor ="red";
        }
        setValue("email-load-",".",4);
        return false;
    }
    return true;
}
function checkPhone(){
    var phone = document.getElementById("phone");
    if (!numberPattern.test(phone.value)){
        if (phone.value != ''){
            alert("Số điện thoại nhập chưa đúng!");
            phone.style.borderColor ="red";
        }
        setValue("phone-load-",".",4);
        return false;
    }
    return true;
}
function checkLicensePlates(){
    var plate = document.getElementById("license-plates");
    if (!licensePlatesPattern.test(plate.value)){
        if (plate.value != ''){
            alert("Biển số xe nhập chưa đúng!");
            plate.style.borderColor ="red";
        }
        setValue("plate-load-",".",3);
        return false;
    }
    return true;
}
function checkMileage(){
    var  mileage = document.getElementById("mileage");
    if (!numberPattern.test(mileage.value)){
        if (mileage.value != ''){
            alert("Quãng đường nhập chưa đúng!");
            mileage.style.borderColor ="red";
        }
        setValue("mileage-load-",".",3);
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
    var mileage = document.getElementById("mileage");
    var showroom = document.getElementById("showroom");
    var date = document.getElementById("date");
    var time = document.getElementById("time");
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
        setValue("id-phone-load-",idPhone.value,4);
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
        "BMW": ["Chọn dòng xe","Series I", "Series M", "Series W"],
        "Mercedes": ["Chọn dòng xe","Series GL", "Class", "Sedan"],
        "Toyota": ["Chọn dòng xe","Sedan", "SUV", "Truck"]
    };
    var nameCars = {
        "Series I" : ["Chọn tên xe","I4","I5","I7","IX"],
        "Series M" : ["Chọn tên xe","M2","M4","M8","XM"],
        "Series W" : ["Chọn tên xe","X3","X4","X5","X6","X7"],
        "Series GL" : ["Chọn tên xe","GLC","GLE","GLI","GLS"],
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
                if (line == "Chọn dòng xe"){
                    option.disabled = true;
                    option.selected = true;
                    option.value = -1;
                }
                else
                    option.value = line;
                lineCarSelect.appendChild(option);
            });
        }
        setValue("name-company-load-",companySelect.value,3);
        setValue("line-car-load-",".",3);
        setValue("name-car-load-",".",3);
        document.getElementById("line-car").value = 0;
        document.getElementById("name-car").value = 0;
        document.getElementById("name-car").innerHTML = "";
    };
    lineCarSelect.onchange = function() {
        var lineCar = this.value;
        nameCarSelect.innerHTML = "";
        nameCarSelect.style.display = "inline-block";
        if (lineCar != 0) {
            nameCars[lineCar].forEach(function(line) {
                var option = document.createElement("option");
                option.text = line;
                if (line == "Chọn tên xe"){
                    option.value = -1;
                    option.disabled = true;
                    option.selected = true;
                }
                else
                    option.value = line;
                nameCarSelect.appendChild(option);
            });
        }
        setValue("line-car-load-",lineCarSelect.value,3);
        setValue("name-car-load-",".",3);
        document.getElementById("name-car").value = 0;
    }
    nameCarSelect.onchange = function(){
        setValue("name-car-load-",nameCarSelect.value,3);
    }
    mileage.onchange = function(){
        if (checkMileage()){
            mileage.style.borderColor = "#C0C0C0";
            setValue("mileage-load-",mileage.value,3);
        }
    }
    showroom.onchange = function(){
        setValue("showroom-load-",showroom.value,2);
    }
    date.onchange = function(){
        setValue("date-load-",date.value,2);
    }
    time.onchange = function(){
        setValue("time-load-",time.value,2);
    }
    var maintenance1 = document.getElementById("maintenance-1");
    maintenance1.onchange = function(){
        
    }
};

function update(i){
    var check = document.getElementById("maintenance-"+i.toString());
    if (check.value == "on"){
        check.value = "off";
        document.getElementById("icon-"+i.toString()).style = "color: green;font-size:24px;margin-left: 12px;";
        document.getElementById("maintenance-load-"+i.toString()).innerText = listService[i-1];
        document.getElementById("icon-"+i.toString()).innerHTML = "&#10003";
    }
    else{
        check.value = "on";
        document.getElementById("icon-"+i.toString()).innerHTML = "";
        document.getElementById("maintenance-load-"+i.toString()).innerText = "";
    }
}
function updateAgree(){
    var check = document.getElementById("agree");
    if (check.value == "on"){
        check.value = "off";
    }
    else{
        check.value = "on";
    }
}
function submitMaintain(){
    let input = ["Mã vùng","Hãng xe","Dòng xe","Tên xe","Showroom","Ngày bảo dưỡng","Khung giờ bảo dưỡng"];
    let text = ["Họ và tên","CCCD","Email","Số điện thoại","","","Biển số xe","Quãng đường đi"];
    let inputList = document.getElementsByName('input');
    let checkboxList = document.getElementsByName('checkbox');
    let textList  = document.getElementsByName('text');
    for(let i = 0; i < textList.length; i++) {
        if (textList[i].value == 0 && i != 4 && i != 5){
            alert(text[i] + " chưa được nhập!");
            return false;
        }
    }
    for(let i = 0; i < inputList.length; i++) {
        if (inputList[i].value == 0){
            alert(input[i] + " chưa được chọn!");
            return false;
        }
    }
    var num = 0;
    for(let i = 1; i < checkboxList.length; i++) {
        if (checkboxList[i].value == "off"){
            num = 1;
        }
    }
    if (num == 0){
        alert("Chưa có dịch vụ nào được chọn!");
        return false;
    }
    if (checkboxList[0].value == "on" ){
        alert("Bạn chưa đồng ý với điều khoản!");
        return false;
    }
    if (!checkNameCustomer()){
        return false;
    }
    if (!checkIdCustomer())
        return false;
    if (!checkEmail())
        return false;
    if (!checkPhone())
        return false;
    if (!checkLicensePlates())
        return false;
    if (!checkMileage())
        return false;
    alert("Đơn bảo dưỡng đã được cập nhật!");
    document.getElementById('myForm').submit();
    
    return true;
}
