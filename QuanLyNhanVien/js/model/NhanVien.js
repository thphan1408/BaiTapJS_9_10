function NhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = 0;
  this.xepLoai = "";

  this.tinhTongLuong = function () {
    if (this.chucVu === "Sếp") {
      this.tongLuong = this.luongCoBan * 3;
    } else if (this.chucVu == "Trưởng phòng") {
      this.tongLuong = this.luongCoBan * 2;
    } else {
      this.tongLuong = this.luongCoBan * 1.5;
    }

    return this.tongLuong;
  };

  this.xepLoaiNhanVien = function () {
    if(this.chucVu ==="Nhân viên"){
      if (this.gioLam >= 192) {
        this.xepLoai = "Nhân viên xuất sắc";
      } else if (this.gioLam >= 176) {
        this.xepLoai = "Nhân viên giỏi";
      } else if (this.gioLam >= 160) {
        this.xepLoai = "Nhân viên khá";
      } else{
        this.xepLoai = "Nhân viên trung bình";
      }
    }

    return this.xepLoai;
  };
}
