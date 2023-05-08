export class Pupil {
    private code: number;
    private name: string;
    private classRoom: string;
    private address: string;
    private point: number;
    private interest: string;


    constructor(code: number, name: string, classRoom: string, address: string, point: number, interest: string) {
        this.code = code;
        this.name = name;
        this.classRoom = classRoom;
        this.address = address;
        this.point = point;
        this.interest = interest;
    }
    getCode(){
        return this.code
    }
    getName(){
        return this.name
    }
    getClassRoom(){
        return this.classRoom
    }
    getAddress(){
        return this.address
    }
    getPoint(){
        return this.point
    }
    getInterest(){
        return this.interest
    }
    setCode(code:number){
        this.code = code
    }
    setName(name:string){
        this.name = name
    }
    setClassRoom(classRoom:string){
        this.classRoom = classRoom
    }
    setAddress(address:string){
        this.address = address
    }
    setPoint(point:number){
        this.point = point
    }
    setInterest(interest:string){
        this.interest = interest
    }
}