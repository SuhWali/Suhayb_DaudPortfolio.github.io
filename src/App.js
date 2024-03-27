// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import HomeScreen from './screens/HomeScreen';
import EducationScreen from './screens/EducationScreen';
import ExperienceScreen from './screens/ExperienceScreen';
import SkillsScreen from './screens/SkillsScreen';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Suhayb Daud's CV
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/education">Education</Button>
          <Button color="inherit" component={Link} to="/experience">Experience</Button>
          <Button color="inherit" component={Link} to="/skills">Skills</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/education" element={<EducationScreen />} />
          <Route path="/experience" element={<ExperienceScreen />} />
          <Route path="/skills" element={<SkillsScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
