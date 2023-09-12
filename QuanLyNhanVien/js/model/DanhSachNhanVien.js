function DSNV() {
  this.nhanVien = [];

  // Thêm nhân viên
  this._themNhanVien = function (nv) {
    this.nhanVien.push(nv);
  };

  // Lấy thông tin nhân viên
  this._layThongTinNhanVien = function (taiKhoan) {
    var index = this._timViTriNhanVien(taiKhoan);

    if (index !== -1) {
      nv = this.nhanVien[index];
      return nv;
    }
  };

  // Tìm vị trí nhân viên
  this._timViTriNhanVien = function (taiKhoan) {
    var index = -1;
    for (let i = 0; i < this.nhanVien.length; i++) {
      var nv = this.nhanVien[i];
      if (nv.taiKhoan === taiKhoan) {
        index = i;
        break;
      }
    }
    return index;
  };

  // Xóa nhân viên
  this._xoaNhanVien = function (taiKhoan) {
    var index = this._timViTriNhanVien(taiKhoan);

    if (index !== -1) {
      this.nhanVien.splice(index, 1);
    }
  };

  // Cập nhật nhân viên
  this._capNhatNhanVien = function (nv) {
    var index = this._timViTriNhanVien(nv.taiKhoan);
    if (index !== -1) {
      this.nhanVien[index] = nv;
    }
  };
}
