import React from 'react';
import { Navbar, Dropdown, Icon, Nav, Sidenav, Sidebar } from 'rsuite';

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: '#34c3ff',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
};

const iconStyles = {
  width: 56,
  height: 56,
  lineHeight: '56px',
  textAlign: 'center'
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance='subtle' className='nav-toggle'>
      <Navbar.Body>
        <Nav>
          <Dropdown
            placement='topStart'
            trigger='click'
            renderTitle={ children => {
              return <Icon style={ iconStyles } icon='cog'/>;
            } }
          >
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </Nav>

        <Nav pullRight>
          <Nav.Item onClick={ onChange } style={ { width: 56, textAlign: 'center' } }>
            <Icon icon={ expand ? 'angle-left' : 'angle-right' }/>
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

class Sidenavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      expand: !this.state.expand
    });
  }

  render() {
    const { expand } = this.state;
    return (
      <Sidebar
        style={{ display: 'flex', flexDirection: 'column' }}
        width={expand ? 260 : 56}
        collapsible
      >
        <Sidenav.Header>
          <div style={ headerStyles }>
            <Icon icon='logo-analytics' size='lg' style={ { verticalAlign: 0 } }/>
            <span style={ { marginLeft: 12 } }> BRAND</span>
          </div>
        </Sidenav.Header>
        <Sidenav
          expanded={ expand }
          defaultOpenKeys={ ['3'] }
          appearance='subtle'
        >
          <Sidenav.Body>
            <Nav>
              <Nav.Item eventKey='1' active icon={ <Icon icon='dashboard'/> }>Me</Nav.Item>
              <Nav.Item eventKey='2' icon={ <Icon icon='group'/> }>Projects</Nav.Item>
              <Nav.Item eventKey='3' icon={ <Icon icon='group'/> }>Experiences</Nav.Item>
              <Nav.Item eventKey='4' icon={ <Icon icon='group'/> }>CV</Nav.Item>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
        <NavToggle className='' expand={ expand } onChange={ this.handleToggle }/>
      </Sidebar>
    );
  }
}

export default Sidenavbar;