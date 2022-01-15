function id(id) {
  return document.getElementById(id);
}

var code = id("inputCode");
var client = id("optionClient");
var connect = id("inputConnect");
var chanel = id("inputChanel");
var idConnect = id("idConnect");
var form = id("formTienCap");
var divResult = id("divResultTienCap");

client.addEventListener("change", function () {
  if (client.selectedIndex === 0) {
    idConnect.style.display = "none";
  } else if (client.selectedIndex === 1) {
    idConnect.style.display = "block";
  }
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  validation();
  if (validation()) {
    calculate();
  }
});

function validation() {
  var valueCode = code.value.trim();
  var valueClient = client.selectedIndex;
  var valueConnect = connect.value.trim();
  var valueChanel = chanel.value.trim();
  if (valueClient === 0) {
    if (valueCode === "" || valueClient === "" || valueChanel === "") {
      alert("Vui lòng nhập đầy đủ trường dữ liệu");
      return false;
    } else return true;
  } else if (valueClient === 1) {
    if (
      valueCode === "" ||
      valueClient === "" ||
      valueConnect === "" ||
      valueChanel === ""
    ) {
      alert("Vui lòng nhập đầy đủ trường dữ liệu");
      return false;
    } else return true;
  }
}

function calculate() {
  var valueCode = code.value.trim();
  var valueConnect = connect.value.trim();
  var valueChanel = chanel.value.trim();
  var numberCode = valueCode * 1;
  var numberClient = client.selectedIndex * 1;
  var numberConnect = valueConnect * 1;
  var numberChanel = valueChanel * 1;
  var fee = 0;
  if (numberClient === 0) {
    idConnect.style.display = "none";
    fee = house(4.5, 20.5, 7.5, numberChanel);
  } else if (numberClient === 1) {
    idConnect.style.display = "block";
    fee = enterprise(15, 75, numberConnect, 5, 50, numberChanel);
  }
  render(numberCode, fee);
}

function house(handleFee, serviceFee, chanelFeel, numberChannel) {
  return handleFee + serviceFee + chanelFeel * numberChannel;
}

function enterprise(
  handleFee,
  serviceFee10,
  numberConnect,
  serviceFeeExtra,
  chanelFeel,
  numberChannel
) {
  var totalFeel = 0;
  if (numberConnect <= 10) {
    totalFeel = handleFee + serviceFee10 + chanelFeel * numberChannel;
  } else if (numberConnect > 10) {
    totalFeel =
      handleFee +
      serviceFee10 +
      (numberConnect - 10) * serviceFeeExtra +
      chanelFeel * numberChannel;
  }
  return totalFeel;
}

function render(message, money) {
  divResult.innerHTML =
    message + " cần thanh toán: " + money.toLocaleString() + " $";
  divResult.style.backgroundColor = "green";
  divResult.style.color = "white";
}
