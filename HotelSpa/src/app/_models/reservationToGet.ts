export interface ReservationToGet {
    id? : number;
    dateOfReservation? : Date;
    startReservation? : Date;
    endReservation? : Date;
    idOfUser? : number;
    idOfRoom? : number;
    isCanceled? : boolean;
    isAccepted? : boolean;
}