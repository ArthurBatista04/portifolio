// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: '#000000, #4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f',
  firstName: 'Arthur',
  middleName: 'Rodrigues',
  lastName: 'Batista',
  message: ' Machine Learning and Software Engineer ',
  icons: [
    {
      image: 'fa-github',
      url: 'https://github.com/arthurbatista04',
    },
    {
      image: 'fa-facebook',
      url: 'https://www.facebook.com/arthurbatista04',
    },
    {
      image: 'fa-instagram',
      url: 'https://www.instagram.com/batistarthur',
    },
    {
      image: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/arthur-rodrigues-batista/',
    },
  ],
};

const about = {
  show: true,
  heading: 'About Me',
  imageLink: require('../editable-stuff/profile_pic.jpg'),
  imageSize: 375,
  message:
    "My name is Arthur Batista. I’m a graduate of 2021 from the State University of Maringá at Paraná - Brazil with a degree in Computer Science. I'm most passionate about contributing to everyday lives through technology, and my goal is to pursue this passion within the field of machine learning and software engineering. In my spare time I like to chill playing basketball.",
  resume: 'https://resume.io/r/fmjnM7dNW',
};

const repos = {
  show: false,
  heading: 'Recent Projects',
  gitHubUsername: 'arthurbatista04', //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: 'Leadership',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.',
  images: [
    {
      img: require('../editable-stuff/profile_pic.jpg'),
      label: 'First slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
  ],
  imageSize: {
    width: '615',
    height: '450',
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: 'Skills',
  hardSkills: [
    { name: 'Python', value: 90 },
    { name: 'SQL', value: 75 },
    { name: 'Machine Learning', value: 75 },
    { name: 'JavaScript', value: 90 },
    { name: 'React', value: 80 },
    { name: 'Java', value: 60 },
    { name: 'Express', value: 80 },
    { name: 'FeathersJs', value: 85 },
  ],
  softSkills: [
    { name: 'Goal-Oriented', value: 80 },
    { name: 'Collaboration', value: 90 },
    { name: 'Positivity', value: 75 },
    { name: 'Adaptability', value: 85 },
    { name: 'Problem Solving', value: 75 },
    { name: 'Empathy', value: 90 },
    { name: 'Organization', value: 70 },
    { name: 'Creativity', value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: 'Get In Touch',
  message:
    "I'm always looking for Software Engineering or Machine Learning opportunities! If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: 'arthurbatista04@outlook.com',
};

const experiences = {
  show: false,
  heading: 'Experiences',
  data: [
    {
      role: 'Software Engineer', // Here Add Company Name
      companylogo: require('../editable-stuff/profile_pic.jpg'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../editable-stuff/profile_pic.jpg'),
      date: 'May 2017 – May 2018',
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: true,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
