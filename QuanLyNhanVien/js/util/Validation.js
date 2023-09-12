function kiemTraRong(value, idError, mess) {
  if (value.trim() === "") {
    document.querySelector(idError).innerHTML = mess;
    document.querySelector(idError).style.display = "block";
    return false;
  } else {
    document.querySelector(idError).innerHTML = "";
    return true;
  }
}

function checkEmptyNum(value, idError, mess) {
  if (value === 0) {
    document.querySelector(idError).innerHTML = mess;
    document.querySelector(idError).style.display = "block";
    return false;
  } else {
    document.querySelector(idError).innerHTML = "";
    return true;
  }
}

function kiemTraEmail(value, idError, mess) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  var isEmail = re.test(value);
  if (isEmail) {
    document.querySelector(idError).innerHTML = "";
    return true;
  } else {
    document.querySelector(idError).innerHTML = mess;
    document.querySelector(idError).style.display = "block";
    return false;
  }
}

function kiemTraChuoi(value, idErr, message) {
  const re =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/g;

  var isString = re.test(value);
  if (isString) {
    document.querySelector(idErr).innerHTML = "";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "block";
    return false;
  }
}

function kiemTraMatKhau(value, idErr, message) {
  const re =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

  var isPassword = re.test(value);
  if (isPassword) {
    document.querySelector(idErr).innerHTML = "";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "block";
    return false;
  }
}

function kiemTraDoDai(value, min, max, idErr, message) {
  var length = value.length;
  if (length >= min && length <= max) {
    document.querySelector(idErr).innerHTML = "";
    document.querySelector(idErr).style.display = "none";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "block";
    return false;
  }
}

function kiemTraMinMax(value, min, max, idErr, message) {
    // var length = value.length;
    if (value >= Number(min) && length <= Number(max)) {
      document.querySelector(idErr).innerHTML = "";
      document.querySelector(idErr).style.display = "none";
      return true;
    } else {
      document.querySelector(idErr).innerHTML = message;
      document.querySelector(idErr).style.display = "block";
      return false;
    }
  }

function kiemTraTrung(id, dsnv, idErr, message) {
  // findIndex: tìm vị trí index, khi mà thỏa điều kiện tìm thấy thì trả về vị trí index, còn khi ko thỏa điều kiện/ko tìm thấy thì trả về về -1
  var viTri = dsnv.findIndex(function (nv) {
    return nv.taiKhoan == id;
  });
  console.log("vị trí", viTri);

  if (viTri != -1) {
    //  tìm thấy
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "block";
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    document.querySelector(idErr).style.display = "none";
    return true;
  }
}

function kiemTraSo(value, idErr, message) {
  const re = /^[0-9]+$/;

  var isString = re.test(value);
  console.log("isString: ", isString);
  if (isString) {
    document.querySelector(idErr).innerHTML = "";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "block";
    return false;
  }
}

function kiemTraLuaChon(value, idErr, mess) {
  if (value === "Chọn chức vụ") {
    document.querySelector(idErr).innerHTML = mess;
    document.querySelector(idErr).style.display = "block";
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    return true;
  }
}
