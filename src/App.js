import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
	Container,
	Row,
	Col,
	Form,
	FormGroup,
	Label
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Container fluid>
				<Row>
					<Col md={4} sm={3} xs={2}></Col>
					<Col md={4} sm={6} xs={8}>
						<p className='text-center'>
						</p>
						<section className='admin-login' id='admin-login'>
							<Form>
                <p>ADMIN LOGIN</p>
								<FormGroup>
									<Label for="username">Username</Label><br/>
									<input ref={adminUname => this.adminUname = adminUname} className='custom-field login-field' placeholder='Username for admin'/>
								</FormGroup>
								<FormGroup>
									<Label for="username">Password</Label><br/>
									<input ref={adminPass => this.adminPass = adminPass} type='password' className='custom-field login-field' placeholder='Password for admin'/>
								</FormGroup>
								<p className='text-center'>
									<button className="litnite-btn" onClick={this.onLogin}>LOGIN&nbsp;&nbsp;&nbsp;</button>
								</p>
							</Form>
							<br/><br/><br/>
							<hr className='line-break'/>
							<p className='text-center'>Adeq App Admin &copy;2019</p>
						</section>
					</Col>
					<Col md={4} sm={3} xs={2}></Col>
				</Row>
			</Container>
        </header>
      </div>
    );
  }
}

export default App;
