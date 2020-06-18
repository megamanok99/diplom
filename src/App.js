import React from 'react';
import logo from './star.svg';
import hawk from './hawk.svg';
import './App.css';
import Example from './components/header/';
import { Container, Row, Col } from 'reactstrap';
import s from './App.module.scss';
import LeftSidebar from './components/leftSidebar/';
import News from './components/news';
import ProgressBar from './components/progressBar';
import Module1 from './components/module1';

function App() {
  return (
  
    
        <Container className={s.wrap}>
          <Module1/>
    <Row>
      <Col> <Example/></Col>
    </Row>
    
     <Row>
     <Col xs="6">
       <div className="App">
      <header className="App-header">
        <p className="App-link">НПО «АЛЬТАИР»</p>
        <img src={hawk} className="hawk"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p >
        Интегрированная программная среда автоматизации оформления КД печатных узлов
        </p>
       
      </header>
    </div></Col>
     <Col xs="auto"><LeftSidebar/><ProgressBar/></Col>
   </Row>
   <News/>
   </Container>
  );
}

export default App;
