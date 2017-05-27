import React from "react";

const DataRow = (props) =>{
    return(
        <tr>
            <td>{props.i+1}</td>
            <td>{props.result.fullname}</td>
            <td>{props.result.goals}</td>
        </tr>
    );
}

export default DataRow;