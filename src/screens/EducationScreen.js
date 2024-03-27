// src/screens/EducationScreen.js
import React from 'react';
import { Typography, Paper, Box, Grid } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';

import SchoolIcon from '@mui/icons-material/School';

const EducationScreen = () => {
    return (
        <Box>
           
                <Grid item xs={12} md={6}>
                    <Box sx={{ padding: 2 }}>
                        <Typography variant="h5" gutterBottom>My Educational Journey</Typography>
                        <Typography paragraph>
                            My journey in education has been a transformative experience, shaping not only my academic skills but also my worldview...
                            {/* Additional inspirational story content */}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="primary"><SchoolIcon /></TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} style={{ padding: '20px' }}>
                                    <Typography variant="h6" component="h1">Bachelor of Science in Big Data Analytics</Typography>
                                    <Typography>Al Akhawayn University, Ifrane Morocco (2020-Present)</Typography>
                                    <Typography>Key subjects: Data Science, Machine Learning, Statistical Analysis</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="secondary"><SchoolIcon /></TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} style={{ padding: '20px' }}>
                                    <Typography variant="h6" component="h1">High School Diploma</Typography>
                                    <Typography>Abaarso School of Science and Technology, Hargeisa Somalia (2014-2019)</Typography>
                                    <Typography>Participated in various science fairs and competitions</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot><SchoolIcon /></TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} style={{ padding: '20px' }}>
                                    <Typography variant="h6" component="h1">PAX-Program of Academic Exchange</Typography>
                                    <Typography>Bloomington High School South, Bloomington Indiana US (2018-2019)</Typography>
                                    <Typography>Cultural exchange program focusing on global education and perspectives</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>

                    </Timeline>
            </Grid>
        </Box>
    );
};

export default EducationScreen;
