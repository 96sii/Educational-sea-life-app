use sea_life;
db.dropDatabase();

db.animals.insertMany([
    {
        name: "Penguin", 
        location: "Antarctica",
        coordinates: "",
        diet: ["Krill", "Squid", "Fish"],
        species:"Flightless Seabird",
        endangered_level: "Some species are critically endangered",
        size: "1.1-1.3m",
        lifespan: "15-20 years",
        fun_facts: "The male of the species looks after the eggs."
    },
    {
        name: "Whale", 
        location: "All of the world's major oceans",
        diet: ["Krill", "Fish", "Plankton", "Algae"],
        species:"Mammal",
        endangered_level: "Some species are critically endangered",
        size: "13 - 30m",
        lifespan: "35 - 90 years",
        fun_facts: "Despite living in the water, whales breathe air."
    },
    {
        name: "Turtle", 
        location: "Coastal Waters",
        diet: ["Meat", "Plants"],
        species:"Reptiles",
        endangered_level: "Some species are critically endangered",
        size: "0.1 - 2.7m",
        lifespan: "25 -100 years",
        fun_facts: "Turtles have favourite colours - they prefer yellow, orange and red food."
    },
    {
        name: "Walrus", 
        location: "Pacific, Atlantic and Arctic oceans",
        diet: ["Clams", "Worms", "Snails", "Soft Shell Crabs"],
        species:"Mammal",
        endangered_level: "Some species are endangered",
        size: "2.6 - 3.7m",
        lifespan: "40 years",
        fun_facts: "Orcas and polar bears are their only natural predators"
    },
    {
        name: "Shark", 
        location: "Tropical waters",
        diet: ["Fishes", "Crustaceans", "Marine Mammals"],
        species:"Fish",
        endangered_level: "Almost Extinct",
        size: "1.2 - 10m",
        lifespan: "20 - 30 years",
        fun_facts: "Sharks have fantastic vision"
    },
    {
        name: "Dolphin", 
        location: "Tropical waters",
        diet: ["Fish", "Squid", "Crustaceans"],
        species:"Mammal",
        endangered_level: "Some species are critically endangered",
        size: "2.2 - 2.7m",
        lifespan: "40 - 60 years",
        fun_facts: "Dolphins have 2 stomachs"
    },
    {
        name: "Clown Fish", 
        location: "Coral Reefs",
        diet: ["Algae", "Zooplankton", "Worms"],
        species:"Fish",
        endangered_level: "Not endangered, however coral reefs where they make their home are disappearing.",
        size: "7cm",
        lifespan: "6 - 10 years",
        fun_facts: "Clownfish have a symbiotic relationship with anemone.They depend on each other for survival. "
    },
    {
        name: "Seals", 
        location: "North Atlantic Ocean",
        diet: ["Sand eels", "Cod"],
        species:"Mammal",
        endangered_level: "Some species are endangered",
        size: "1.8 - 2.1m",
        lifespan: "25 - 35 years",
        fun_facts: "Seals can swim up to 22mph"
    }
]);