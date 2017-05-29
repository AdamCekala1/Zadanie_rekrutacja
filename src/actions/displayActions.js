import React from "react";

const displayData=(data,DataRow)=>{
        if(data && data.length>0){
            return data.map((result,i)=>{
                return <DataRow key={result.identifier} result={result} i={i}/>
            })
        }else{
            //if data is empty or cant be download
            return (
                <tr>
                    <td colSpan={this.mainRow.length} className="fetchError"> 
                        Brak rekordów lub błąd połączenia 
                    </td>
                </tr>);
        }
    }


//display main row with descriptions of columns
const displayMainRow=(mainRow)=>{
    return mainRow.map((result,i)=>{
        return(
                <th key={i}><h7>{result}</h7></th>
        ); 
    })
}

export {displayData,displayMainRow};