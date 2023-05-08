import {PupilManagers} from "./PupilManagers";
import {Pupil} from "./Pupil";


let listPupil = new PupilManagers()
const readlineSync = require('readline-sync');


function PupilManager() {
    let features = ['GetList', 'FindPupil', 'AddPupil', 'UpdatePupil', 'DeletePupil']
    let index = readlineSync.keyInSelect(features, 'Which features')
    switch (index) {

        case 0 :
            getList()
            break
        case 1 :
            addPupil()
            break
        case 2 :

            break
        case 3 :

            break
        case 4:

            break
        default:
            console.log('Exit')

    }

}

function getList() {
    console.table(listPupil.getListPupil())
}

function addPupil() {
    let code = +readlineSync.question('Enter Code :')
    let name = readlineSync.question('Enter Name :')
    let classRoom = readlineSync.question('Enter ClassRoom :')
    let address = readlineSync.question('Enter Address :')
    let point = +readlineSync.question('Enter Point :')
    let interest = readlineSync.question('Enter Interest :')
    let newPupil = new Pupil(code, name, classRoom, address, point, interest)

}