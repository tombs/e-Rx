import React from 'react'
class NewApp extends React.Component {
 
    state = {
      customer: {
        name: "Haresh",
        address: "Adelaide"
      },
      order: {
        id: 1
      }
    };
    onClick = () => {
        this.setState(prevState => ({
            customer: {
              ...prevState.customer,           
              name: "Edwin"
            }
          }))
    }
   
    render() {
      return (
        <div>
          <h1>{this.state.customer.name}</h1>
          <h1>{this.state.customer.address}</h1>
          <h1>{this.state.order.id}</h1>
          <button onClick={this.onClick}>Click me</button>
        </div>
      );
    }
  }
  

  export default NewApp