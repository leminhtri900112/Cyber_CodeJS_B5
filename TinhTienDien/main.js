function id(id) {
  return document.getElementById(id);
}

var username = id("inputName");
var consume = id("inputConsume");
var form = id("form");
var divResult = id("divResult");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validation();
  if (validation()) {
    calculation();
  }
});

function validation() {
  var valueUsername = username.value.trim();
  var valueConsume = consume.value.trim();
  var numerberConsume = valueConsume * 1;

  // Kiểm tra tính  hợp lệ
  if (valueUsername === "" || valueConsume === "") {
    alert("Vui lòng điền thông tin");
    return false;
  } else if (isNaN(numerberConsume)) {
    alert("Vui lòng trường là tiêu thụ là số");
    return false;
  } else {
    return true;
  }
}

function calculation() {
  const _50kwh = 500;
  const _50kwh_ke = 650;
  const _100kwh_ke = 850;
  const _150kwh_ke = 1100;
  const _kwh_remain = 1300;
  var valueUsername = username.value.trim();
  var valueConsume = consume.value.trim();
  var numberConsume = valueConsume * 1;
  var moneyConsume = 0;
  if (numberConsume <= 50) {
    moneyConsume = numberConsume * _50kwh;
  } else if (numberConsume > 50 && numberConsume <= 100) {
    moneyConsume = 50 * _50kwh + (numberConsume - 50) * _50kwh_ke;
  } else if (numberConsume > 100 && numberConsume <= 200) {
    moneyConsume =
      50 * _50kwh + 50 * _50kwh_ke + (numberConsume - 100) * _100kwh_ke;
  } else if (numberConsume > 200 && numberConsume <= 350) {
    moneyConsume =
      50 * _50kwh +
      50 * _50kwh_ke +
      100 * _100kwh_ke +
      (numberConsume - 200) * _150kwh_ke;
  } else if (numberConsume > 350) {
    moneyConsume =
      50 * _50kwh +
      50 * _50kwh_ke +
      100 * _100kwh_ke +
      150 * _150kwh_ke +
      (numberConsume - 350) * _kwh_remain;
  }
  render(valueUsername, moneyConsume);
}

function render(message, money) {
  divResult.innerHTML =
    message + " cần thanh toán: " + money.toLocaleString() + " VND";
  divResult.style.backgroundColor = "green";
  divResult.style.color = "white";
}
