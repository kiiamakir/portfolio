import './styles//App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import NavigationBar from './components/NavigationBar';
import ScrollToTop from './components/ScrollToTop';
import AaltoGrades from './components/projects/AaltoGrades';
import AaltoProgramVis from './components/projects/AaltoProgramVis';
import RecipeStash from './components/projects/RecipeStash';
import TreePlanter from './components/projects/TreePlanter';

const App = () => {
  return (
    <BrowserRouter>
    <NavigationBar/>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/work/aalto-grades' element={<AaltoGrades/>}/>
        <Route path='/work/aalto-program-vis' element={<AaltoProgramVis/>}/>
        <Route path='/work/recipe-stash' element={<RecipeStash/>}/>
        <Route path='/work/tree-planter' element={<TreePlanter/>}/>
      </Routes>
      <footer>
        <p>© Kiia Mäkirinta 2023</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
