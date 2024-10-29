
import Header from './components/Header';
import Footer from './components/Footer';
import Faculty from './components/Faculty';
import Student from './components/Student';
import Courses from './components/Courses';
import Component from './components/Component';
import User from './components/User';
import Assignment from './components/Assignment';
import Stusents from './components/Students';
import Feedbackform from './components/Feedbackform';
//import MB from './components/MB';
import Res from './components/Res';
import Schedule from './components/Schedule';

import './App.css';

function App() {
  return (
    <div className="App">
       <Res/>
      <Header/>
      <Footer/>
      <Faculty/>
      <Student/>
      <Courses/>
      <Component/>
      <User/>
      <Assignment/>
      <Stusents/>
      <h1>Feedbackform</h1>
      <Feedbackform/>
      <Schedule/>
    
    </div>
    
  );

}

export default App;