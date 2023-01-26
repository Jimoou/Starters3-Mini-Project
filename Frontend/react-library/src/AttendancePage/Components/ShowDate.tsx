import AttendanceModel from "../../Models/AttendanceModel";
import TableCell from '@mui/material/TableCell';

export const ShowDate: React.FC<{ attend: AttendanceModel }> = (props) => {
  let obj = JSON.parse(JSON.stringify(props.attend.Attendance));
  console.log(obj);

  const Keys = Object.keys(obj);
  return (
    <>
      <div>
        {Keys.map((key: string) => (
          <>
            <TableCell align="center">{key.split(" ")[0]}</TableCell>
          </>
        ))}
      </div>
    </>
  );
};
