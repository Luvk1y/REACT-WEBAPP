import React from 'react'
import { AddMap } from '../AddMap/AddMap'
import septemberGames from '../../utilities/september';

export  const TdData =() =>{
    const row = Object.values(septemberGames);
    console.log(row);
    return row.map((data) => {
       return (
        <tbody>
         <tr>
            <td>{data.id}</td>
           <td>{data.date}</td>
           <td>{data.time}</td>
           <td>{data.teams}</td>
           <td>{data.location}</td>
           <td><AddMap url = {data.url}/></td>
         </tr>
        </tbody>
       )
       })
    }

 //   {Object.values(data).map((val) => (
 //       <td>{val}</td>
 //   ))}