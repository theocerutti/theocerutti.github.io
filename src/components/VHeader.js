import React from 'react';
import { Navbar, Nav, Header, Icon } from 'rsuite';

const VHeader = () => {
  return (
    <Header>
      <Navbar>
        <Navbar.Header>
          <a href='https://google.com' className='d-inline-block pt-3 pl-5 pr-5'>Théo Cerutti</a>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>
            <Nav.Item eventKey='1' icon={ <Icon icon='home'/> }>Me</Nav.Item>
            <Nav.Item eventKey='2'>Projects</Nav.Item>
            <Nav.Item eventKey='3'>Experiences</Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </Header>
  );
};

export default VHeader;