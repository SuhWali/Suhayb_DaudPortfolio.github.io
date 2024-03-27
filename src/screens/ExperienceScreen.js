// src/screens/ExperienceScreen.js
import React from 'react';
import { Typography, Paper, Box, Grid, Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ExperienceScreen = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Typography variant="h4" gutterBottom>Professional Experiences</Typography>
            <Grid container spacing={3}>
                {/* Mobiklinic Experience */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h6">Mobiklinic - React Native Tester</Typography>
                        <Typography variant="body2" color="textSecondary">July 2023 – Sept 2023 | Virtual</Typography>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar><WorkIcon /></Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Unit Testing" secondary="Developed and executed unit tests to ensure code reliability." />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar><StarBorderIcon /></Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Code Refactoring" secondary="Improved application performance through code optimization." />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>

                {/* UM6P Explorer Experience */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h6">UM6P Explorer - Venture Co-Founder</Typography>
                        <Typography variant="body2" color="textSecondary">June 2023 – Sept 2023 | Virtual</Typography>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar><SchoolIcon /></Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Venture Development" secondary="Collaborated with mentors to develop a business venture." />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar><StarBorderIcon /></Avatar>
                                </ListItemAvatar>
                                <ListItemText primary = "Innovation" secondary="Implemented innovative strategies to drive venture growth." />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>

                {/* Additional Experiences */}
                {/* Template for additional experiences similar to above format */}
                {/* Add each additional experience in a new Grid item */}

            </Grid>
        </Box>
    );
};

export default ExperienceScreen;
