const { User } = require("../models");

const userData = [
  {
    username: "Tara_Calca_Bell",
    twitter: "Tbell",
    github: "Tbell",
    email: "CalcaB@gmail.com",
    password: "p@ssword1",
  },
  {
    username: "Aaron_Davis",
    twitter: "ADIS",
    github: "ADIS",
    email: "DavisAarow@gmail.com",
    password: "p@ssword2",
  },
  {
    username: "Kyre_Seven",
    twitter: "Neptune7",
    github: "Neptune7",
    email: "Kyre_N7@gmail.com",
    password: "p@ssword7",
  },
  {
    username: "Ringo_Seven",
    twitter: "Cra7yApple",
    github: "Cra7yApple",
    email: "AppleSeven@gmail.com",
    password: "p@ssword43",
  },
  {
    username: "Adelaide_E",
    twitter: "Ebunkie_A",
    github: "Huntress Adela",
    email: "Adela.H@gmail.com",
    password: "p@ssword5",
  },
  {
    username: "Damien_A",
    twitter: "Ashen",
    github: "AshenShiver",
    email: "D.Ashenta@gmail.com",
    password: "p@ssword6",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
