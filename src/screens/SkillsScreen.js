// src/screens/SkillsScreen.js
import React from 'react';
import { Typography, Box, Grid, Paper, Chip } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import FunctionsIcon from '@mui/icons-material/Functions';

const SkillsScreen = () => {
    const skillCategories = {
        'Frontend Technologies': ['React', 'React Native'],
        'Backend Technologies': ['Django', 'Spring Boot'],
        'Programming Languages': ['C', 'Scala'],
        'Databases': ['PostgreSQL', 'Cassandra', 'Neo4j', 'MongoDB'],
        'Other Skills': ['Hadoop Ecosystem', 'Apache Spark', 'Apache Kafka', 'Machine Learning']
    };

    const SkillCategory = ({ title, skills, IconComponent }) => (
        <Paper sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="h6">{title}</Typography>
            <Box display="flex" alignItems="center" flexWrap="wrap" marginTop={1}>
                <IconComponent fontSize="large" sx={{ marginRight: 1 }} />
                {skills.map((skill, index) => (
                    <Chip key={index} label={skill} sx={{ margin: 0.5 }} />
                ))}
            </Box>
        </Paper>
    );

    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Typography variant="h4" gutterBottom>Skills and Proficiencies</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <SkillCategory title="Frontend Technologies" skills={skillCategories['Frontend Technologies']} IconComponent={ComputerIcon} />
                    <SkillCategory title="Backend Technologies" skills={skillCategories['Backend Technologies']} IconComponent={StorageIcon} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <SkillCategory title="Programming Languages" skills={skillCategories['Programming Languages']} IconComponent={CodeIcon} />
                    <SkillCategory title="Databases" skills={skillCategories['Databases']} IconComponent={FunctionsIcon} />
                    <SkillCategory title="Other Skills" skills={skillCategories['Other Skills']} IconComponent={FunctionsIcon} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default SkillsScreen;
