// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { Typography, Paper, TextField, Button, Box, Grid, Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const HomeScreen = () => {
  const [contact, setContact] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Handle form submission logic
    alert('Message sent!');
  };

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" marginBottom="20px">
      <Avatar alt="Suhayb Daud" src={require('/Users/suhwali/CV/your-cv-app/src/Assets/suhda.jpeg')} sx={{ width: 200, height: 200 }} />
        <Typography variant="h4" gutterBottom>Welcome to Suhayb Daud's CV</Typography>
        <Typography variant="subtitle1" style={{ textAlign: 'center' }}>I am a Bachelor of Science in Big Data Analytics student with a minor in Business Administration. Passionate about data science and eager to apply my skills in real-world scenarios.</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: '20px', minHeight: '300px' }}>
            <Typography variant="h6">Contact Information</Typography>
            <Box display="flex" alignItems="center" marginBottom="8px">
              <EmailIcon color="primary" style={{ marginRight: '10px' }} />
              <Typography variant="body1">s.daud@aui.ma</Typography>
            </Box>
            <Box display="flex" alignItems="center" marginBottom="8px">
              <PhoneIcon color="primary" style={{ marginRight: '10px' }} />
              <Typography variant="body1">+212 61-668-8039</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <LocationOnIcon color="primary" style={{ marginRight: '10px' }} />
              <Typography variant="body1">P.O. Box 104 Hassan II Avenue, 53000 Ifrane – Morocco</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: '20px', minHeight: '300px' }}>
            <Typography variant="h6">Get in Touch</Typography>
            <TextField label="Name" name="name" fullWidth margin="normal" value={contact.name} onChange={handleInputChange} />
            <TextField label="Email" name="email" fullWidth margin="normal" value={contact.email} onChange={handleInputChange} />
            <TextField label="Message" name="message" fullWidth multiline rows={4} margin="normal" value={contact.message} onChange={handleInputChange} />
            <Button variant="contained" color="primary" style={{ marginTop: '10px' }} onClick={handleSubmit}>
              Send
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeScreen;
