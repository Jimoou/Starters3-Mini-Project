import AttendanceModel from "../../Models/AttendanceModel";
import TableCell from '@mui/material/TableCell';
import styles from '../../Stylesheet/ShowStatus.module.css';
export const ShowStatus: React.FC<{ status: AttendanceModel }> = (props) => {
  let obj = JSON.parse(JSON.stringify(props.status.Attendance));
  console.log(obj);

  const Values = Object.values(obj);
  return (
    <>
      <div>
        {Values.map((value: any) => (
          <>
            <TableCell align="center"><p className={styles.cell}>{value}</p></TableCell>
          </>
        ))}
      </div>
    </>
  );
};