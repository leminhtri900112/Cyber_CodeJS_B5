function id(id) {
  return document.getElementById(id);
}

var username = id("inputUserName");
var income = id("inputIncome");
var person = id("inputNumberPerson");
var form = id("formTienThue");
var divResult = id("divResultTienThue");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validation();
  if (validation()) {
    calculation();
  }
});

function validation() {
  var valueUsername = username.value.trim();
  var valueIncome = income.value.trim();
  var valuePerson = person.value.trim();
  var numberIncome = valueIncome * 1;
  var numberPerson = valuePerson * 1;

  // Kiểm tra tính  hợp lệ
  if (valueUsername === "" || valueIncome === "" || valuePerson === "") {
    alert("Vui lòng điền thông tin");
    return false;
  } else if (isNaN(numberIncome) || isNaN(numberPerson)) {
    alert("Vui lòng trường là tiêu thụ là số");
    return false;
  } else {
    return true;
  }
}

function calculation() {
  const taxStep1 = 5 / 100;
  const taxStep2 = 10 / 100;
  const taxStep3 = 15 / 100;
  const taxStep4 = 20 / 100;
  const taxStep5 = 25 / 100;
  const taxStep6 = 30 / 100;
  const taxStep7 = 35 / 100;
  var valueUsername = username.value.trim();
  var valueIncome = income.value.trim();
  var valuePerson = person.value.trim();
  var numberIncome = valueIncome * 1;
  var numberPerson = valuePerson * 1;
  var incomeTax = numberIncome - 4 - numberPerson * 1.6;
  var totalTax = 0;
  if (incomeTax <= 60) {
    totalTax = incomeTax * taxStep1;
  } else if (incomeTax > 60 && incomeTax <= 120) {
    totalTax = incomeTax * taxStep2;
  } else if (incomeTax > 120 && incomeTax <= 210) {
    totalTax = incomeTax * taxStep3;
  } else if (incomeTax > 210 && incomeTax <= 384) {
    totalTax = incomeTax * taxStep4;
  } else if (incomeTax > 384 && incomeTax <= 624) {
    totalTax = incomeTax * taxStep5;
  } else if (incomeTax > 624 && incomeTax <= 960) {
    totalTax = incomeTax * taxStep6;
  } else if (incomeTax > 960) {
    totalTax = incomeTax * taxStep7;
  }
  render(valueUsername, totalTax);
}

function render(username, moneyTax) {
  divResult.innerHTML =
    username +
    " cần thanh toán thu nhập cá nhân là: " +
    moneyTax.toLocaleString() +
    " triệu VND";
  divResult.style.backgroundColor = "green";
  divResult.style.color = "white";
}
