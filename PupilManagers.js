"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PupilManagers = void 0;
var Pupil_1 = require("./Pupil");
var PupilManagers = /** @class */ (function () {
    function PupilManagers() {
        this.listPupil = [];
    }
    PupilManagers.prototype.getListPupil = function () {
        return this.listPupil;
    };
    PupilManagers.prototype.addPupil = function (code, name, classRoom, address, point, interest) {
        var newPupil = new Pupil_1.Pupil(code, name, classRoom, address, point, interest);
        this.listPupil.push(newPupil);
    };
    PupilManagers.prototype.findPupil = function (name) {
        var indexPupil = -1;
        for (var i = 0; i < this.listPupil.length; i++) {
            if (name === this.listPupil[i].getName()) {
                indexPupil = i;
            }
        }
        if (indexPupil !== -1) {
            console.table(this.listPupil[indexPupil]);
        }
        else
            console.log("Kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u ph\u00F9 h\u1EE3p");
    };
    PupilManagers.prototype.updatePupil = function (code, newPupil) {
        var indexPupil = -1;
        for (var i = 0; i < this.listPupil.length; i++) {
            if (code === this.listPupil[i].getCode()) {
                indexPupil = i;
            }
        }
        if (indexPupil !== -1) {
            this.listPupil[indexPupil] = newPupil;
        }
        else
            console.log('Không tồn tại sinh viên cần update');
    };
    PupilManagers.prototype.deletePupil = function (code) {
        var indexPupil = -1;
        for (var i = 0; i < this.listPupil.length; i++) {
            if (code === this.listPupil[i].getCode()) {
                indexPupil = i;
            }
        }
        if (indexPupil !== -1) {
            this.listPupil.splice(indexPupil, 1);
            console.log('Xóa thành công');
        }
        else
            console.log("Kh\u00F4ng t\u1ED3n t\u1EA1i sinh vi\u00EAn c\u1EA7n xo\u00E1");
    };
    return PupilManagers;
}());
exports.PupilManagers = PupilManagers;
var pupilManagers = new PupilManagers();
pupilManagers.addPupil(1, 'Hieu Anh', 'Ke Toan', 'Hung Yen', 10, 'Doc sach');
pupilManagers.addPupil(2, 'Hieu Em', 'Quan Tri', 'Ha Noi', 9, 'Boi Loi');
pupilManagers.addPupil(3, 'Toan Korean', 'Ngan Hang', 'Vinh Phuc', 8, 'Xem Phim');
pupilManagers.addPupil(4, 'Cam Cam', 'Ke Toan', 'Nam Dinh', 7, 'Nghe Nhac');
pupilManagers.addPupil(5, 'Minh Minh', 'Ke Toan', 'Nam Dinh', 6, 'Chơi Game');
console.table(pupilManagers.getListPupil());
pupilManagers.findPupil('Hieu Anhh');
pupilManagers.updatePupil(6, new Pupil_1.Pupil(10, 'Thuan', 'The Duc', 'Nam Dinh', 9, 'Boi Loi'));
pupilManagers.deletePupil(100);
