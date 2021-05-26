import React from 'react'

class A extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            p: 10
        }    
    }
    
    
    render(){
        const { p } = this.state;
        return (<B p={p} />)
    }
}
 

class B extends React.Component{
    render(){
        return (<C p={this.props.p}/>)
    }
}


class C extends React.Component{
    render(){

        // print the value of "p" here
        return (<p>{this.props.p}</p>)
        
    }
}


export default A

