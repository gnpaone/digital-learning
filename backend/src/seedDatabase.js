const mongoose = require('mongoose');
const Video = require('../models/video.model.js');
require('dotenv').config();

 const videoData = [
        {
            title: 'Video 1: Personal Protective Equipment (PPE)',
            url: '/videos/video1.mp4',
            order: 1,
            description: `Importance of PPE: Explain the significance of PPE in preventing injuries and illnesses in the workplace. 
            Types of PPE: Introduce various types of PPE, such as hard hats, safety glasses, gloves, earplugs, respirators, and steel-toed boots. 
            Proper Use and Maintenance: Demonstrate how to properly use and maintain PPE, including inspection procedures and storage guidelines.`,
        },
        {
            title: 'Video 2: Fire Safety and Prevention',
            url: '/videos/video2.mp4',
            order: 2,
            description: `Fire Hazards: Identify potential fire hazards in the workplace, such as electrical equipment, open flames, and chemical reactions. 
            Fire Extinguisher Training: Train learners on how to use a fire extinguisher correctly, including the PASS method (Pull, Aim, Squeeze, Sweep). 
            Emergency Procedures: Explain emergency procedures in case of a fire, such as evacuation routes, assembly points, and fire alarm systems.`,
        },
        {
            title: 'Video 3: Slip, Trip, and Fall Prevention',
            url: '/videos/video3.mp4',
            order: 3,
            description: `Hazards: Identify potential hazards that can lead to slips, trips, and falls, such as wet floors, uneven surfaces, loose cords, and cluttered walkways. 
            Prevention Measures: Explain prevention measures to prevent slips, trips, and falls, including: 
            - Cleaning up spills promptly
            - Using non-slip mats or signs on stairs
            - Securing cords and cables
            - Maintaining a clean and organized workspace
            - Wearing proper footwear 
            Reporting Incidents: Emphasize the importance of reporting incidents to supervisors or safety personnel.`,
        },
    ];

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB for seeding'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const seedDatabase = async () => {
  try {
    await Video.deleteMany({});
    await Video.insertMany(videoData);
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
};

seedDatabase();
