import {PupilManagers} from "./PupilManagers";
import {Pupil} from "./Pupil";


let listPupil = new PupilManagers()
export const readlineSync = require('readline-sync');


function PupilManager() {
    let features = ['GetList', 'FindPupil', 'AddPupil', 'UpdatePupil', 'DeletePupil']
    let index = readlineSync.keyInSelect(features, 'Which features')
    switch (index) {

        case 0 :
            getList()
            break
        case 1 :
            findPupil()
            break
        case 2 :
            addPupil()

            break
        case 3 :
            updatePupil()
            break
        case 4:
            deletePupil()
            break
        default:
            console.log('Exit')

    }

    PupilManager()
}

function getList() {
    console.table(listPupil.getListPupil())
}

function findPupil() {
    let name = readlineSync.question('Enter Name:')
    listPupil.findPupil(name)
}

function addPupil() {
    let code = +readlineSync.question('Enter Code :')
    let name = readlineSync.question('Enter Name :')
    let classRoom = readlineSync.question('Enter ClassRoom :')
    let address = readlineSync.question('Enter Address :')
    let point = +readlineSync.question('Enter Point :')
    let interest = readlineSync.question('Enter Interest :')
    let newPupil = new Pupil(code, name, classRoom, address, point, interest)
    this.listStudent.push(newPupil)

}

function updatePupil() {
    let codeUpdate = +readlineSync.question('Enter Code :')
    let name = readlineSync.question('Enter Name :')
    let classRoom = readlineSync.question('Enter ClassRoom :')
    let address = readlineSync.question('Enter Address :')
    let point = +readlineSync.question('Enter Point :')
    let interest = readlineSync.question('Enter Interest :')
    let newPupil = new Pupil(codeUpdate, name, classRoom, address, point, interest)
    listPupil.updatePupil(codeUpdate, newPupil)
}

function deletePupil() {
    let codeDelete = readlineSync.question('Enter Code :')
    listPupil.deletePupil(codeDelete)
}
