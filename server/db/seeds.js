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
        fun_facts: "Emperor Penguins incubate their eggs during the long dark southern winter months. Courtship displays are intricate but copulation is quick and the female lays a single egg in May or June. She then passes it over to her mate to incubate - and she’s off. She spends the next nine weeks at sea, feeding. The male carefully balances the egg on his feet for between 65 – 75 days to keep it warm in a specially adapted brood pouch, and off the snow surface, before it hatches. Then out pops a fluffy chick."

    }
]);