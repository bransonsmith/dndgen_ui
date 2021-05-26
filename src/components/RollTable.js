import React from 'react';
import axios from "axios";
import Loading from './Loading/Loading';

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
                : <Loading/> }
          </div>
      );
  }
}
