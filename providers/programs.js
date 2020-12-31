import { v4 as uuid } from 'uuid'

let programs = [
    {
        title: "Assessment 101",
        image: "../images/programs/program1.jpg",
        description: "If you're new to us and you're note sure what program fits you best, then start here.",
        numberOfSessions: 1,
        lengthOfSessionInHours: 0.5,
        frequencyOfSessionsPerWeek: 2,
        price: 39.99,
        available: true,
        categories: ["Assessment"],
        instructors: ["Emily Engel"]
    },
    {
        title: "Fitness 101",
        image: "../images/programs/program2.jpg",
        description: "If you're new to us and you're note sure what program fits you best, then start here.",
        numberOfSessions: 1,
        lengthOfSessionInHours: 0.5,
        frequencyOfSessionsPerWeek: 2,
        price: 39.99,
        available: true,
        categories: ["Fitness"],
        instructors: ["Emily Engel"]
    },
    {
        title: "Fitness 201",
        image: "../images/programs/program3.jpg",
        description: "If you're new to us and you're note sure what program fits you best, then start here.",
        numberOfSessions: 1,
        lengthOfSessionInHours: 0.5,
        frequencyOfSessionsPerWeek: 2,
        price: 39.99,
        available: true,
        categories: ["Fitness"],
        instructors: ["Emily Engel"]
    },
    {
        title: "Fitness Advanced 6 Week",
        image: "../images/programs/program4.png",
        description: "If you're new to us and you're note sure what program fits you best, then start here.",
        numberOfSessions: 1,
        lengthOfSessionInHours: 0.5,
        frequencyOfSessionsPerWeek: 2,
        price: 39.99,
        available: true,
        categories: ["Fitness"],
        instructors: ["Emily Engel"]
    },
    {
        title: "Nutrition 101",
        image: "../images/programs/program5.jpg",
        description: "If you're new to us and you're note sure what program fits you best, then start here.",
        numberOfSessions: 1,
        lengthOfSessionInHours: 0.5,
        frequencyOfSessionsPerWeek: 2,
        price: 39.99,
        available: true,
        categories: ["Assessment"],
        instructors: ["Emily Engel"]
    },
    {
        title: "Ultimate Fitness and Nutrition",
        image: "../images/programs/program6.jpg",
        description: "If you're new to us and you're note sure what program fits you best, then start here.",
        numberOfSessions: 30,
        lengthOfSessionInHours: 1,
        frequencyOfSessionsPerWeek: 2,
        price: 999,
        available: true,
        categories: ["Integrated"],
        instructors: ["Emily Engel"]
    }
]

programs.map(program => {
    program.id = uuid();
    return program;
})

export default programs;