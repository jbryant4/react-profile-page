import familyPhoto from './assets/images/family.jpg';
import uSingImg from './assets/images/uSing.png';
import mymovielistImg from './assets/images/mymovielis.png';
import drwhoImg from './assets/images/drwho.png';
import coupleImg from './assets/images/wife.jpg'
import board from './assets/images/board-pic.jpg'
import league from './assets/images/league-pic.jpg'
import pc from './assets/images/pc-build.jpg'
import shows from './assets/images/shows.jpg'
import chess from './assets/images/chess.png'
import deepThought from './assets/images/deepThought.PNG'
import budgetTracker from './assets/images/budgetTracker.PNG'
import bookLot from './assets/images/booklot.png'

//! Usage names in fab
// html5, css3-alt, js, node, react, bootstrap, 

export const about =
{
    image: [coupleImg, familyPhoto],
    body: 'Hi my name is Joseph Bryant but I go by Joe. I would consider myself a family man and a practical nerd. I have always had an interest in the tech world. Either playing video games, building custom computers, or just researching new programs, I find that there is so much to explore in this world. From a young age, I was always told that there is a time for work and a time to play. I am a firm believer that the quality of work put into a project will equal the quality of the projects output.Being the oldest of 8 kids in my family, I always knew that I wanted to have a big family. Nothing is more important to me than my familly, they are my pride and joy. My wife and I have been married for two and a half years. We have two adorable kids. An overly energetic boy named Samuel Joseph (SJ), who is almost 2 years old, and a 4 month old girl named Charlotte',
    hobbies: [board,league,pc,shows, chess]
};

export const projects =
[
        {
            title: 'Deep Thoughts',
            image: deepThought,
            description: 'This is a simple social media full stack application. Where users can create thoughts, add reaction to thoughts, and also add friends to their friend list.',
            repo: 'https://github.com/jbryant4/deep-thoughts',
            app: 'https://jbryant-deep-thoughts.herokuapp.com/',
            usage: ['html5','css3-alt', 'js', 'node', 'react']
        },
        {
            title: 'BookLot',
            image: bookLot,
            description: 'A simple book search and save full stack application. This application was a refractor job. The task was to refractor the database from RESTful API to Graphql',
            repo: 'https://github.com/jbryant4/BookLot',
            app: 'https://jbryant-booklot.herokuapp.com/',
            usage: ['html5','css3-alt', 'js', 'node', 'react']
        },
        {
            title: 'uSing',
            image: uSingImg,
            description: 'An application to find our favorite songs/artists as well as their bio, lyrics and next events.',
            repo: 'https://github.com/jbryant4/uSing',
            app: 'https://jbryant4.github.io/uSing/',
            usage: ['html5','css3-alt', 'js', 'bootstrap']
        },
        {
            title: 'myMovieList',
            image: mymovielistImg,
            description: 'As a user, I want to be able to create, compare and like custom movie lists; made by multiple users, so that I can see what everyone has been watching during quarantine.',
            repo: 'https://github.com/jbryant4/myMovieList',
            app: 'https://mymovielistapp.herokuapp.com/',
            usage: ['html5','css3-alt', 'js', 'bootstrap']
        },
        {
            title: 'Budget Tracker',
            image: budgetTracker,
            description: 'A simple PWA app that allows the user to track their budget with offline functionality.',
            repo: 'https://github.com/jbryant4/budget-tracker',
            app: 'https://jbryant-budget-tracker.herokuapp.com/',
            usage: ['html5','css3-alt', 'js', 'node', 'bootstrap']
        },
        {
            title: 'Whovian Quiz',
            image: drwhoImg,
            description: 'A simple javascript time game quiz with an alien twist',
            repo: 'https://github.com/jbryant4/timed-quiz',
            app: 'https://jbryant4.github.io/timed-quiz/',
            usage: ['html5','css3-alt', 'js']
        }
    ];

export const contact = {
    github: 'https://github.com/jbryant4',
    linkedIn: 'https://www.linkedin.com/in/joseph-bryant-927335206/',
    resume: 'https://drive.google.com/file/d/1rkX3HvzZXRONy-jKBmOHPTzUR_-QXJiR/view?usp=sharing',
    email: "bryantc0der@gmail.com"
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