import React from 'react';
import { useEffect } from "react";
import { ThData } from '../Tableparts/ThData';
import { TdData } from '../Tableparts/TdData';



export function DynamicTable({columns}){
  
    return (
        <table className="table">
          <ThData ></ThData>
          <TdData></TdData>
          </table>
        )
}

