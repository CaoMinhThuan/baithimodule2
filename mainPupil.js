"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PupilManagers_1 = require("./PupilManagers");
var Pupil_1 = require("./Pupil");
var listPupil = new PupilManagers_1.PupilManagers();
var readlineSync = require('readline-sync');
function PupilManager() {
    var features = ['GetList', 'FindPupil', 'AddPupil', 'UpdatePupil', 'DeletePupil'];
    var index = readlineSync.keyInSelect(features, 'Which features');
    switch (index) {
        case 0:
            getList();
            break;
        case 1:
            findPupil();
            break;
        case 2:
            addPupil();
            break;
        case 3:
            updatePupil();
            break;
        case 4:
            deletePupil();
            break;
        default:
            console.log('Exit');
    }
    PupilManager();
}
function getList() {
    console.table(listPupil.getListPupil());
}
function findPupil() {
    var name = readlineSync.question('Enter Name:');
    listPupil.findPupil(name);
}
function addPupil() {
    var code = +readlineSync.question('Enter Code :');
    var name = readlineSync.question('Enter Name :');
    var classRoom = readlineSync.question('Enter ClassRoom :');
    var address = readlineSync.question('Enter Address :');
    var point = +readlineSync.question('Enter Point :');
    var interest = readlineSync.question('Enter Interest :');
    var newPupil = new Pupil_1.Pupil(code, name, classRoom, address, point, interest);
    this.listStudent.push(newPupil);
}
function updatePupil() {
    var codeUpdate = +readlineSync.question('Enter Code :');
    var name = readlineSync.question('Enter Name :');
    var classRoom = readlineSync.question('Enter ClassRoom :');
    var address = readlineSync.question('Enter Address :');
    var point = +readlineSync.question('Enter Point :');
    var interest = readlineSync.question('Enter Interest :');
    var newPupil = new Pupil_1.Pupil(codeUpdate, name, classRoom, address, point, interest);
    listPupil.updatePupil(codeUpdate, newPupil);
}
function deletePupil() {
    var codeDelete = readlineSync.question('Enter Code :');
    listPupil.deletePupil(codeDelete);
}
