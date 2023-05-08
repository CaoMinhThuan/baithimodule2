"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pupil = void 0;
var Pupil = /** @class */ (function () {
    function Pupil(code, name, classRoom, address, point, interest) {
        this.code = code;
        this.name = name;
        this.classRoom = classRoom;
        this.address = address;
        this.point = point;
        this.interest = interest;
    }
    Pupil.prototype.getCode = function () {
        return this.code;
    };
    Pupil.prototype.getName = function () {
        return this.name;
    };
    Pupil.prototype.getClassRoom = function () {
        return this.classRoom;
    };
    Pupil.prototype.getAddress = function () {
        return this.address;
    };
    Pupil.prototype.getPoint = function () {
        return this.point;
    };
    Pupil.prototype.getInterest = function () {
        return this.interest;
    };
    Pupil.prototype.setCode = function (code) {
        this.code = code;
    };
    Pupil.prototype.setName = function (name) {
        this.name = name;
    };
    Pupil.prototype.setClassRoom = function (classRoom) {
        this.classRoom = classRoom;
    };
    Pupil.prototype.setAddress = function (address) {
        this.address = address;
    };
    Pupil.prototype.setPoint = function (point) {
        this.point = point;
    };
    Pupil.prototype.setInterest = function (interest) {
        this.interest = interest;
    };
    return Pupil;
}());
exports.Pupil = Pupil;
