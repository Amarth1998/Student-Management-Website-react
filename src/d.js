const d = (props) => {
  return (
    <>


      <tr>
        <td>Roll no</td>
        <td>Student Name</td>
        <td>Address</td>
        <td>Fees</td>
      </tr>
      <tr>
        <td>{props.rn}</td>
        <td>{props.nm}</td>
        <td>{props.add}</td>
        <td>{props.fee}</td>
      </tr>
    </>


  );
}

export default d;



