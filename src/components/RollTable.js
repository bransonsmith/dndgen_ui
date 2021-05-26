import React from 'react';
import { BrowserRouter as Router, useParams } from "react-router-dom";

function RollTable() {
    var { name } = useParams();
    name = name.split(" ").map((word) => word[0].toUpperCase() + word.substring(1) ).join(" ");

    return <h1>Roll Table: {name}</h1>;
}


export default RollTable;