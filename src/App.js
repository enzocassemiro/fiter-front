import { Component } from "react";
import api from "./api";
import phoneMask from "./util/regex";
import {Card, Container, NavbarBrand} from "react-bootstrap";
import "./component/App.css"
import  logo from "./assets/logo.png"

class App extends Component{

  state = {
    employees: [],
  }

  async componentDidMount(){
    const response = await api.get('')

    //console.log(response.data);

    this.setState({employees: response.data})

  }

  render(){

    const {employees} = this.state;

    console.log(employees)
    console.log(logo)
    
    return(
      <div className="page">
        <Container>
          <NavbarBrand>
              <img
              id="logo"
              src={logo}
              width="80"
              height="27.5"
              className="d-inline-block align-center"
              alt="fiter logo"
              />
          </NavbarBrand>
        </Container>
        <div className="grid">
            {employees.map(employee => (
              <Card className="box" key={employee.telefone}>
                <Card.Img src={employee.foto} />
                <Card.Title className="card-title">{employee.nome}</Card.Title>
                <Card.Text className="card-text">{employee.cargo} </Card.Text>
                <Card.Text className="card-text">Telefone: {phoneMask(employee.telefone)}</Card.Text>
              </Card>
            ))}
        </div>
      </div>
    );
  };
}

export default App;
