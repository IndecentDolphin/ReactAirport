import React from  'react';

export class Location extends React.Component{
  constructor(props) {
    super(props)
    this.state = {name: "Gatwick"};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
		const name = e.target.value;
    this.props.onChange(name);
  }

  render(){
    return (
      <div className="col-7 content">
        <div>
          <h1>{this.props.name} Airport </h1>
        </div>
        <div>
          <h2>Select an Airport to manage:</h2>
          <select id="airport-names" onChange={this.handleChange}>
            <option value="Gatwick">
              Gatwick
            </option>
  
            <option value="Heathrow">
              Heathrow
            </option>
  
            <option value="London City">
              London City
            </option>
          </select>
        </div>      
      </div>
    );
  }
}
