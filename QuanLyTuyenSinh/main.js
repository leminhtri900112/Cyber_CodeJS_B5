function id(id) {
  return document.getElementById(id);
}

var standard = id("inputStandardMark");
var mark1 = id("inputMark_1");
var mark2 = id("inputMark_2");
var mark3 = id("inputMark_3");
var area = id("optionArea");
var object = id("optionObject");
var form = id("form");
var divResult = id("divResult");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  calculate();
});

function calculate() {
  var valueStandard = standard.value * 1;
  var valueMark1 = mark1.value * 1;
  var valueMark2 = mark2.value * 1;
  var valueMark3 = mark3.value * 1;
  var valueArea = areaOption(area.selectedIndex);
  var valueObject = objectOption(object.selectedIndex);

  // Kiểm tra tính  hợp lệ
  if (
    isNaN(valueStandard) ||
    isNaN(valueMark1) ||
    isNaN(valueMark2) ||
    isNaN(valueMark3)
  ) {
    alert("vui lòng nhập trường là số");
  } else {
    var totalMark =
      valueMark1 + valueMark2 + valueMark3 + valueArea + valueObject;
    if (valueMark1 === 0 || valueMark2 === 0 || valueMark3 === 0) {
      fail("Bạn không trúng tuyển vì có điểm 0");
    } else if (totalMark < valueStandard) {
      fail("Bạn không đủ điểm chuẩn");
    } else {
      success("Bạn đã trúng tuyển", totalMark);
    }
  }
}
function areaOption(option) {
  if (option === 0) {
    return 0;
  } else if (option == 1) {
    return 2;
  } else if (option == 2) {
    return 1;
  } else if (option == 3) {
    return 0.5;
  }
}

function objectOption(option) {
  if (option === 0) {
    return 0;
  } else if (option == 1) {
    return 2.5;
  } else if (option == 2) {
    return 1.5;
  } else if (option == 3) {
    return 1;
  }
}

function success(message, averageMark) {
  divResult.innerHTML = message + " - Điểm trung bình: " + averageMark;
  divResult.style.backgroundColor = "green";
  divResult.style.color = "white";
}

function fail(message) {
  divResult.innerHTML = message;
  divResult.style.backgroundColor = "red";
  divResult.style.color = "white";
}
