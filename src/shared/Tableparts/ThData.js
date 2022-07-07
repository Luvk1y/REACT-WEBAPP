import React from 'react'
import septemberGames from '../../utilities/september';

export const ThData =()=>{
    const column = Object.keys(septemberGames[0])
    console.log(column);
    return (
        <thead>
        <tr>
            {column.map(head => <th>{head}</th>)}
        </tr>
        </thead>)
    };