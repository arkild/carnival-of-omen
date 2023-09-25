const entries = [
    //DateAdded is going to be looked and and modified later.
    {
        name: "Patruck",
        entryTitle: "This was a blast!",
        haveFun: "Yes",
        description: "The magic show was really cool! Even though there wasn't much else right now, I could see the construction sites and what they were working for, so I'm absolutely coming back!"
    },
    {
        name: "Miry",
        entryTitle: "The best carnival involving omens that I've ever been to!",
        haveFun: "Yes",
        description: "This carnival is in a league of its own and nothing can compete. Being the only one with this theme makes it the best! It also makes it the wors--I mean no it doesn't! The best! Definitely!"
    },
    {
        name: "Condy",
        entryTitle: "Fantastic Food",
        haveFun: "Yes",
        description: "The concessions they serve at this carnival are absolutely delicious! I ate about 3 hours ago and I still feel a nice warmth inside my stomach that kept me toasty through my visit here! Can't wait to return and find something else to eat!"
    },
    {
        name: "Frad",
        entryTitle: "What is this nonsense?",
        haveFun: "No",
        description: "What a creepy place. I'm getting really weird vibes from it and have been on edge since I arrived. As soon as I'm done writing this entry, I'm out of here and never coming back!"
    }
]
const subjects = [
    {
        name: "Lenny",
        species: "Rabbit",
        image: "/assets/rabbit.png"
    },
    {
        name: "Nebula",
        species: "Cat",
        image: "/assets/cat.png"
    },
    {
        name: "Regret",
        species: "Parking Ticket",
        image: "/assets/ticket.png"
    },
    {
        name: "Camo",
        species: "Zebra",
        image: "/assets/zebra.png"
    }
]

//Export this seed data to models/index.js
//We're going to try exporting two seeds simultaneously.
module.exports = entries, subjects