var dsnv = new DSNV();

function getElem(selector) {
  return document.querySelector(selector);
}

function renderTable(NhanVien) {
  htmlString = "";
  for (var i = 0; i < NhanVien.length; i++) {
    var nhanVien = NhanVien[i];

    htmlString += `
              <tr>
                  <td>${nhanVien.taiKhoan}</td>
                  <td>${nhanVien.hoTen}</td>
                  <td>${nhanVien.email}</td>
                  <td>${nhanVien.ngayLam}</td>
                  <td>${nhanVien.chucVu}</td>
                  <td>${nhanVien.tinhTongLuong()}</td>
                  <td>${nhanVien.xepLoaiNhanVien()}</td>
                  <td>
                      <button class="btn btn-danger" onclick="xoaNhanVien('${
                        nhanVien.taiKhoan
                      }')">Xóa</button>
                      <button class="btn btn-info" onclick="chinhSuaNhanVien('${
                        nhanVien.taiKhoan
                      }')" data-toggle="modal" data-target="#myModal">Chỉnh sửa</button>
                  </td>
              </tr>
              `;
  }
  getElem("#tableDanhSach").innerHTML = htmlString;
}


// Lấy thông tin nhân viên 
function layThongTinNhanVien() {
  var taiKhoan = getElem("#tknv").value;
  var hoTen = getElem("#name").value;
  var email = getElem("#email").value;
  var matKhau = getElem("#password").value;
  var ngayLam = getElem("#datepicker").value;
  var luongCoBan = Number(getElem("#luongCB").value);
  var chucVu = getElem("#chucvu").value;
  var gioLam = Number(getElem("#gioLam").value);

  var nv = new NhanVien(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
    
  );

  return nv;
}

// Reset form
function resetForm() {
    getElem("#tknv").value = "";
    getElem("#name").value = "";
    getElem("#email").value = "";
    getElem("#password").value = "";
    getElem("#datepicker").value = "";
    getElem("#luongCB").value = "";
    getElem("#chucvu").value = "";
    getElem("#gioLam").value = "";
}


