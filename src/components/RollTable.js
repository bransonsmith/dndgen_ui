import React from 'react';
import axios from "axios";

export default class RollTable extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      data : null
    };
  }

  componentDidMount() {
      this.renderMyData();
  }

  renderMyData(){
    axios
      .get("/api/roll_tables/")
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err));
  }

  render(){
      return(
          <div>
              {this.state.data 
                ? <div>Select Roll Table
                    <select>
                      {this.state.data.map((value, index) => {
                        return <option key={index}> { value.name } </option>
                      })}
                    </select>
                  </div>
                : <div>Loading...</div> }
          </div>
      );
  }
}





// function RollTable() {
//   let roll_tables = getRollTables().then((res) => res);
    


//     // var { name } = useParams();
//     // name = name.split(" ").map((word) => word[0].toUpperCase() + word.substring(1) ).join(" ");
    

//     console.log(roll_tables);
//     return (
//       <div>
//         <h1>Roll Tables</h1>
//         <div>{{ roll_tables }}</div>
//       </div>
//     );
// }

// async function getRollTables() {
//   return (await axios.get("/api/roll_tables/")).data;
//   // .then((res) => res.data)
//   // .catch((err) => console.log(err));
// }


// export default RollTable;