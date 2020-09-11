import React from 'react';
import VHeader from './components/VHeader';
import Sidenavbar from './components/Sidenavbar';
import { Container, Content, Footer } from 'rsuite';

function App() {
  return (
    <div className='show-fake-browser'>
      <Container>
        <Sidenavbar/>
        <Container>
          <VHeader/>
          <Content>
            Hello !  This is my github page!
          </Content>
          <Footer>...</Footer>
        </Container>
      </Container>
    </div>
  );
}

export default App;
