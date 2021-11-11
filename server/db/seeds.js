use sea_life;
db.dropDatabase();

db.animals.insertMany([
    {
        name: "Penguin", 
        location: "Antarctica",
        diet: ["Krill", "Squid", "Fish"],
        species:"Flightless Seabird",
        endangered_level: "Some species are critically endangered",
        size: "1.1-1.3m",
        lifespan: "15-20 years",
        fun_facts: "The male of the species looks after the eggs"
    }
]);