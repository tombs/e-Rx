import React from 'react'
// import PropTypes from 'prop-types'

// Fetch data function (axios)
import { getAllPatients } from 'scripts/dataFetch'

// apiConstants Urls
import { PATIENTS_URL } from 'apiConstants'

// React Bootstrap Components
import Form from 'react-bootstrap/Form'

import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

// import CustomButton  from 'components/CustomButton'
import A  from 'components/CustomComponent'
import NewApp from 'components/CustomComponent2'

class PatientsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            patients: [],
            isApiError: false,
            //buttons: [...Array(16).keys()],

        }
    }
    
    componentDidMount() {
        // Get all cat breeds using API
        getAllPatients(PATIENTS_URL)
        .then(response => {
        this.setState({
            patients: response
        })
        })
        .catch((error) => {
        console.log('ERROR: ' + JSON.stringify(error))
        this.setState({
            isApiError: true
        })
        })
    }

    handleClick(event) {
        // Add delete API       
        console.log("Clicked!")
    }

    createTable = () => {
        let table = []
    
        // Outer loop to create parent
        for (let i = 0; i < 4; i++) {
          let children = []
          //Inner loop to create children
          for (let j = 0; j < 4; j++) {
            children.push(<td>{`Column ${j + 1}`}</td>)
          }
          //Create the parent and add the children
          table.push(<tr>{children}</tr>)
        }
        return table
      }

    render () {
        const {
            patients,            
        } = this.state

        console.log("patients: "+JSON.stringify(patients))

        return (
            <Container>
                <p>Hello Patients! </p>

                <Form>
                <Form.Row>
                    <Col>
                    <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Middle name" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Last name" />
                    </Col>
                </Form.Row>
                <br/>
                <Form.Row>
                    <Col>
                    <Form.Control placeholder="Address" />
                    </Col>
                    
                </Form.Row>
                <br/>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>


                <br/>

                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                { patients.length > 0 && patients.map((patient)=> {
                    return (<tr key={patient.lastName}>
                        <td>{patient.firstName}</td>
                        <td>{patient.middleName}</td>
                        <td>{patient.lastName}</td>
                        <td><Button onClick={event=>this.handleClick(event)}>Delete</Button></td>
                    </tr>)
                })}
                </tbody>
                </Table>
                <Table striped bordered hover>
                    {this.createTable()}                              
                </Table>
                <A />

                <NewApp />
                
            </Container>
            
        )
    }   
}

export default PatientsPage