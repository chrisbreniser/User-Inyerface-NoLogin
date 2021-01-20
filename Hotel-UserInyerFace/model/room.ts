export interface Room {
    desc : string;
    photo : string;
    beds : number;
    cost : number;
    roomNumber : number;
    service : boolean; 
    type : RoomType;
}

export enum RoomType {
    Basic = "Basic",
    Suite = "Suite",
    Family = "Family",
    ExecutiveSuite = "ExecutiveSuite",
}

export interface BookedRoom {
    room : Room;
    checkIn : Date;
    checkOut : Date;
}