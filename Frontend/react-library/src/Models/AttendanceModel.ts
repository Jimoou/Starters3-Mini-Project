class AttendanceModel {
    userName: string;
    Attendance: any;

    constructor(
        userName: string,
        Attendance: any,
    ){
        this.userName = userName;
        this.Attendance = Attendance;
    }
}
export default AttendanceModel;