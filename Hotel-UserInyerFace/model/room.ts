export interface Room {
    roomNumber : number;
    desc : string;
    photo : string;
    beds : number;
    cost : number;
    service : boolean; 
    type : RoomType;
}

export enum RoomType {
    Basic = "Basic",
    Suite = "Suite",
    Family = "Family",
    ExecutiveSuite = "Executive Suite",
}