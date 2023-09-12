var dataJson = localStorage.getItem("DSNV");

if (dataJson !== null) {
  dsnv.nhanVien = JSON.parse(dataJson).map(function (item) {
    return new NhanVien(
      item.taiKhoan,
      item.hoTen,
      item.email,
      item.matKhau,
      item.ngayLam,
      item.luongCoBan,
      item.chucVu,
      item.gioLam
    );
  });

  renderTable(dsnv.nhanVien);
}

function themNhanVien() {
  var nv = layThongTinNhanVien();

  // Kiểm tra tài khoản
  valid =
    kiemTraRong(
      nv.taiKhoan,
      "#tbTKNV",
      "Tài khoản nhân viên không được để trống"
    ) &&
    kiemTraTrung(
      nv.taiKhoan,
      dsnv.nhanVien,
      "#tbTKNV",
      "Tài khoản đã tồn tại"
    ) &&
    kiemTraDoDai(nv.taiKhoan, 4, 6, "#tbTKNV", "Độ dài từ 4 - 6 ký tự");

  // Kiểm tra ngày làm
  valid &= kiemTraRong(nv.ngayLam, "#tbNgay", "Ngày làm không được để trống");

  // Kiểm tra tên
  valid &=
    kiemTraRong(nv.hoTen, "#tbTen", "Tên nhân viên không được để trống") &&
    kiemTraChuoi(nv.hoTen, "#tbTen", "Tên nhân viên phải là chữ");

  // Kiểm tra email
  valid &=
    kiemTraRong(nv.email, "#tbEmail", "Email không được để trống") &&
    kiemTraEmail(nv.email, "#tbEmail", "Email không hợp lệ");

  // Kiểm tra mật khẩu
  valid &=
    kiemTraRong(nv.matKhau, "#tbMatKhau", "Mật khẩu không được để trống") &&
    kiemTraMatKhau(
      nv.matKhau,
      "#tbMatKhau",
      "Mật khẩu phải có 6 đến 10 ký tự, trong đó có ít nhất một chữ thường, một chữ hoa, một chữ số và một ký tự đặc biệt"
    );

  // Kiểm tra chức vụ
  valid &=
    kiemTraRong(nv.chucVu, "#tbChucVu", "Chức vụ không được để trống") &&
    kiemTraLuaChon(
      nv.chucVu,
      "#tbChucVu",
      "Vui lòng chọn chức vụ"
    );

  // Kiểm tra lương cơ bản
  valid &=
    checkEmptyNum(
      nv.luongCoBan,
      "#tbLuongCB",
      "Lương cơ bản không được để trống"
    ) &&
    kiemTraSo(nv.luongCoBan, "#tbLuongCB", "Lương cơ bản phải là số") &&
    kiemTraMinMax(
      nv.luongCoBan,
      1000000,
      20000000,
      "#tbLuongCB",
      "Mức lương cơ bản từ 1.000.000 - 20.000.000"
    );

  // Kiểm giờ làm
  valid &=
    checkEmptyNum(nv.gioLam, "#tbGiolam", "Giờ làm không được để trống") &&
    kiemTraSo(nv.gioLam, "#tbGiolam", "Giờ làm phải là số") &&
    kiemTraMinMax(nv.gioLam, 80, 200, "#tbGiolam", "Giờ làm từ 80 - 200");

  if (valid) {
    dsnv._themNhanVien(nv);

    var data = JSON.stringify(dsnv.nhanVien);
    // console.log(data);

    localStorage.setItem("DSNV", data);

    resetForm();
    renderTable(dsnv.nhanVien);
  }
}

function xoaNhanVien(taiKhoan) {
  dsnv._xoaNhanVien(taiKhoan);

  // xóa nhân viên trong localStorage
  localStorage.removeItem("DSNV");

  renderTable(dsnv.nhanVien);
}

function chinhSuaNhanVien(taiKhoan) {
  var nv = dsnv._layThongTinNhanVien(taiKhoan);
  if (nv) {
    getElem("#tknv").value = nv.taiKhoan;
    getElem("#tknv").disabled = true;
    getElem("#name").value = nv.hoTen;
    getElem("#email").value = nv.email;
    getElem("#password").value = nv.matKhau;
    getElem("#datepicker").value = nv.ngayLam;
    getElem("#luongCB").value = nv.luongCoBan;
    getElem("#chucvu").value = nv.chucVu;
    getElem("#gioLam").value = nv.gioLam;
  }
}

function capNhatNhanVien() {
  var nv = layThongTinNhanVien();
  dsnv._capNhatNhanVien(nv);

  var newData = JSON.stringify(dsnv.nhanVien);

  localStorage.setItem("DSNV", newData);

  // console.log(dsnv.nhanVien);
  resetForm();
  renderTable(dsnv.nhanVien);
}

getElem("#btnTimNV").onclick = function () {
  // toLowerCase: convert text về chữ thường
  // ?. : Optional chaining (?.)
  var textSearch = getElem("#searchName").value.trim()?.toLowerCase();
  var result = [];

  if (textSearch.length > 0) {
    result = dsnv.nhanVien.filter(function (nv) {
      return nv.xepLoai.toLowerCase().includes(textSearch);
    });

    renderTable(result);
  } else {
    renderTable(dsnv.nhanVien);
  }
};
