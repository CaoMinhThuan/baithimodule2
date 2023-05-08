import {Pupil} from "./Pupil";

export class PupilManagers {
    listPupil: Pupil[]

    constructor() {
        this.listPupil = [];
    }

    getListPupil() {
        return this.listPupil
    }

    addPupil(code: number, name: string, classRoom: string, address: string, point: number, interest: string) {
        let newPupil = new Pupil(code, name, classRoom, address, point, interest)
        this.listPupil.push(newPupil)
    }

    findPupil(name: string) {
        let indexPupil = -1
        for (let i = 0; i < this.listPupil.length; i++) {
            if (name === this.listPupil[i].getName()) {
                indexPupil = i
            }
        }
        if (indexPupil !== -1) {
            console.table(this.listPupil[indexPupil])
        } else console.log(`Không có dữ liệu phù hợp`)
    }

    updatePupil(code: number, newPupil: Pupil) {
        let indexPupil = -1
        for (let i = 0; i < this.listPupil.length; i++) {
            if (code === this.listPupil[i].getCode()) {
                indexPupil = i
            }

        }
        if (indexPupil !== -1) {
            this.listPupil[indexPupil] = newPupil
        } else console.log('Không tồn tại sinh viên cần update')
    }

    deletePupil(code: number) {
        let indexPupil = -1
        for (let i = 0; i < this.listPupil.length; i++) {
            if (code === this.listPupil[i].getCode()) {
                indexPupil = i
            }

        }
        if (indexPupil !== -1) {
            this.listPupil.splice(indexPupil, 1)
            console.log('Xóa thành công')
        } else console.log(`Không tồn tại sinh viên cần xoá`)
    }
}
let pupilManagers = new PupilManagers()
pupilManagers.addPupil(1,'Hieu Anh','Ke Toan','Hung Yen',10,'Doc sach')
pupilManagers.addPupil(2,'Hieu Em','Quan Tri','Ha Noi',9,'Boi Loi')
pupilManagers.addPupil(3,'Toan Korean','Ngan Hang','Vinh Phuc',8,'Xem Phim')
pupilManagers.addPupil(4,'Cam Cam','Ke Toan','Nam Dinh',7,'Nghe Nhac')
pupilManagers.addPupil(5,'Minh Minh','Ke Toan','Nam Dinh',6,'Chơi Game')
console.table(pupilManagers.getListPupil())

pupilManagers.findPupil('Hieu Anhh')
pupilManagers.updatePupil(6,new Pupil(10,'Thuan','The Duc','Nam Dinh',9,'Boi Loi'))
pupilManagers.deletePupil(100)