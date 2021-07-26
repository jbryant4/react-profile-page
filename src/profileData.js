import familyPhoto from './assets/images/family.jpg';
import uSingImg from './assets/images/uSing.png';
import mymovielistImg from './assets/images/mymovielis.png';
import drwhoImg from './assets/images/drwho.png';

//! Usage names in fab
// html5, css3-alt, js, node, react, bootstrap, 

export const about =
{
    image: familyPhoto,
    body: 'Hi my name is Joseph Bryant but I go by Joe. I would consider myself a family man and a practical nerd. I have always had an interest in the tech world. Either playing video games, building custom computers, or just researching new programs, I find that there is so much to explore in this world. From a young age, I was always told that there is a time for work and a time to play. I am a firm believer that the quality of work put into a project will equal the quality of the projects output.Being the oldest of 8 kids in my family, I always knew that I wanted to have a big family. Nothing is more important to me than my familly, they are my pride and joy. My wife and I have been married for two and a half years. We have two adorable kids. An overly energetic boy named Samuel Joseph (SJ), who is almost 2 years old, and a 4 month old girl named Charlotte'
};

export const projects =
    [
        {
            title: 'uSing',
            image: uSingImg,
            description: 'An application to find our favorite songs/artists as well as their bio, lyrics and next events.',
            repo: 'https://github.com/jbryant4/uSing',
            app: 'https://jbryant4.github.io/uSing/',
            // usage: html5
        },
        {
            title: 'myMovieList',
            image: mymovielistImg,
            description: 'As a user, I want to be able to create, compare and like custom movie lists; made by multiple users, so that I can see what everyone has been watching during quarantine.',
            repo: 'https://github.com/jbryant4/Project2-Group1',
            app: 'https://mymovielistapp.herokuapp.com/'
        },
        {
            title: 'Budget Tracker',
            image: '',
            description: 'A simple PWA app that allows the user to track their budget with offline functionality.',
            repo: 'https://github.com/jbryant4/budget-tracker',
            app: 'https://jbryant-budget-tracker.herokuapp.com/'
        },
        {
            title: 'Task-Master Pro',
            image: '',
            description: 'A simple tracking application that allows you to create a task and track its progrress.',
            repo: 'https://github.com/jbryant4/taskmaster-pro',
            app: 'https://jbryant4.github.io/taskmaster-pro/'
        },
        {
            title: 'Whovian Quiz',
            image: drwhoImg,
            description: 'A simple javascript time game quiz with an alien twist',
            repo: 'https://github.com/jbryant4/timed-quiz',
            app: 'https://jbryant4.github.io/timed-quiz/'
        },
        {
            title: 'Weather Board',
            image: '',
            description: 'A weather app that gathers data from a 3rd party api to show the user a 5 day forecast of the city they enter into the search form',
            repo: 'https://github.com/jbryant4/weather-board',
            app: 'https://jbryant4.github.io/weather-board/'
        }
    ];

export const contact = {
    github: 'https://github.com/jbryant4',
    linkedIn: 'https://www.linkedin.com/in/joseph-bryant-927335206/',
    resume: 'https://drive.google.com/file/d/1rkX3HvzZXRONy-jKBmOHPTzUR_-QXJiR/view?usp=sharing'
};

export const details =
{
    name: "Joseph Bryant",
    email: "bryantc0der@gmail.com",
    location: "Mesa, AZ"
};

export const skills = [
    {
        category:'Front End',
        skills: ['React', 'Handlebars', 'HTML', 'CSS', 'JavaScript', 'ES6', 'JQuery', 'Bootstrap', 'Materialize', 'Foundation']
    },
    {
        category:'API Creation and Implementation',
        skills: ['Web APIs', 'Third-Party APIs', 'Server-Side APIs', 'RESTful APIs', 'GraphQL']
    },
    {
        category:'Node.js',
        skills: ['NPM packages','inquire','jest', 'Other packages']
    },
    {
        category:'Server Creation and Utilization',
        skills: ['Express.js', 'Heroku', 'MongoDB Atlas','Insomnia']
    },
    {
        category:'Databases',
        skills: ['MySQL - Sequalize', 'MongoDB - Mongoose', 'CRUD operations', 'MySQL workbench']
    },
    {
        category:'Coding paradigms',
        skills: ['Object Oriented Programing (OOP)', 'Test Driven Development (TDD)', 'Object-Relational Mapping (ORM)', 'Object-Document Mapping (ODM)']
    },
    {
        category:'Source Control',
        skills: ['Git', 'GitHub']
    },
    {
        category:'Others',
        skills: ['PWA', 'MERN']
    },
   
]