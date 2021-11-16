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
        fun_facts: "The male of the species looks after the eggs.",
        images: [
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024576/sea-animals-project-image-gallery/Peng1_n1vpmf.jpg' },
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024576/sea-animals-project-image-gallery/Peng2_pprqtk.jpg' },
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024572/sea-animals-project-image-gallery/Peng3_swmmtt.jpg' }
        ]
    },
    {
        name: "Whale", 
        location: "All of the world's major oceans",
        diet: ["Krill", "Fish", "Plankton", "Algae"],
        species:"Mammal",
        endangered_level: "Some species are critically endangered",
        size: "13 - 30m",
        lifespan: "35 - 90 years",
        fun_facts: "Despite living in the water, whales breathe air.",
        images: [
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024580/sea-animals-project-image-gallery/Whale1_dxn9yt.jpg' },
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024580/sea-animals-project-image-gallery/Whale2_r9vryr.jpg' },
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024583/sea-animals-project-image-gallery/Whale3_il0fln.jpg' }
        ]
    },
    {
        name: "Turtle", 
        location: "Coastal Waters",
        diet: ["Meat", "Plants"],
        species:"Reptiles",
        endangered_level: "Some species are critically endangered",
        size: "0.1 - 2.7m",
        lifespan: "25 -100 years",
        fun_facts: "Turtles have favourite colours - they prefer yellow, orange and red food.",
        images: [
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024577/sea-animals-project-image-gallery/Turtle1_vqjmhx.jpg' },
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024578/sea-animals-project-image-gallery/Turtle2_pi9ho5.jpg' },
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024578/sea-animals-project-image-gallery/Turtle3_n3uw2i.jpg' }
        ]
    },
    {
        name: "Walrus", 
        location: "Pacific, Atlantic and Arctic oceans",
        diet: ["Clams", "Worms", "Snails", "Soft Shell Crabs"],
        species:"Mammal",
        endangered_level: "Some species are endangered",
        size: "2.6 - 3.7m",
        lifespan: "40 years",
        fun_facts: "Orcas and polar bears are their only natural predators",
        images: [
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024583/sea-animals-project-image-gallery/Walrus1_bsq9lf.jpg' },
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024578/sea-animals-project-image-gallery/Walrus2_dlnz0p.jpg' },
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024582/sea-animals-project-image-gallery/Walrus3_seldbc.jpg' },
        ]
    },
    {
        name: "Shark", 
        location: "Tropical waters",
        diet: ["Fishes", "Crustaceans", "Marine Mammals"],
        species:"Fish",
        endangered_level: "Almost Extinct",
        size: "1.2 - 10m",
        lifespan: "20 - 30 years",
        fun_facts: "Sharks have fantastic vision",
        images: [
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024578/sea-animals-project-image-gallery/Shark1_firdwc.jpg' },
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024577/sea-animals-project-image-gallery/Shark2_ha46mz.jpg' },
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024576/sea-animals-project-image-gallery/Shark3_uut00y.jpg' }
        ]
    },
    {
        name: "Dolphin", 
        location: "Tropical waters",
        diet: ["Fish", "Squid", "Crustaceans"],
        species:"Mammal",
        endangered_level: "Some species are critically endangered",
        size: "2.2 - 2.7m",
        lifespan: "40 - 60 years",
        fun_facts: "Dolphins have 2 stomachs",
        images: [
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024568/sea-animals-project-image-gallery/Dolphin1_eedg5w.webp' },
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024569/sea-animals-project-image-gallery/Dolphin2_kwtw3f.jpg' },
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024568/sea-animals-project-image-gallery/Dolphin3_z9rnuh.jpg' }
        ]
    },
    {
        name: "Clown Fish", 
        location: "Coral Reefs",
        diet: ["Algae", "Zooplankton", "Worms"],
        species:"Fish",
        endangered_level: "Not endangered, however coral reefs where they make their home are disappearing.",
        size: "7cm",
        lifespan: "6 - 10 years",
        fun_facts: "Clownfish have a symbiotic relationship with anemone.They depend on each other for survival. ",
        images: [
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024575/sea-animals-project-image-gallery/ClownFish1_xww0ea.jpg' },
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024569/sea-animals-project-image-gallery/ClownFish2_vsiywl.jpg' },
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024584/sea-animals-project-image-gallery/ClownFish3_nd7x1m.jpg' }
        ]
    },
    {
        name: "Seals", 
        location: "North Atlantic Ocean",
        diet: ["Sand eels", "Cod"],
        species:"Mammal",
        endangered_level: "Some species are endangered",
        size: "1.8 - 2.1m",
        lifespan: "25 - 35 years",
        fun_facts: "Seals can swim up to 22mph",
        images: [
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024575/sea-animals-project-image-gallery/Seal1_wqjore.jpg' },
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024576/sea-animals-project-image-gallery/Seal2_moljhy.jpg' },
            { original: 'https://res.cloudinary.com/dkwmfvtkq/image/upload/v1637024577/sea-animals-project-image-gallery/Seal3_ru4kbs.jpg' }
        ]
    }
]);

db.questions.insertMany([
    {
        questionText: 'Where do sharks live?',
        answerOptions: [
            { answerText: 'Warm tropical waters', isCorrect: true },
            { answerText: 'The arctic', isCorrect: false },
            { answerText: 'Antarctica', isCorrect: false },
            { answerText: 'Coral Reefs', isCorrect: false },
        ],
    },
    {
        questionText: 'What do seals like to eat?',
        answerOptions: [
            { answerText: 'Algae', isCorrect: false },
            { answerText: 'Sand Eels and Cod', isCorrect: true },
            { answerText: 'Clams', isCorrect: false },
            { answerText: 'Worms', isCorrect: false },
        ],
    },
    {
        questionText: 'How long can a Clown Fish live?',
        answerOptions: [
            { answerText: '90 - 100 years', isCorrect: false },
            { answerText: '40 - 60 years', isCorrect: false },
            { answerText: '25 - 35 years', isCorrect: false },
            { answerText: '6 - 10 years', isCorrect: true },
        ],
    },
    {
        questionText: 'What type of animal is a whale?',
        answerOptions: [
            { answerText: 'Fish', isCorrect: false },
            { answerText: 'Mammal', isCorrect: true },
            { answerText: 'Bird', isCorrect: false },
            { answerText: 'Reptile', isCorrect: false },
        ],
    },
    {
        questionText: 'What are a walruses natural predators?',
        answerOptions: [
            { answerText: 'Sharks', isCorrect: false },
            { answerText: 'Penguins', isCorrect: false },
            { answerText: 'Seals', isCorrect: false },
            { answerText: 'Orcas and Polar Bears', isCorrect: true},
        ],
    },
    {
        questionText: 'How big can an Emperor Penguin grow?',
        answerOptions: [
            { answerText: '1.1 - 1.3m', isCorrect: true },
            { answerText: '13 - 30cm', isCorrect: false },
            { answerText: '7cm', isCorrect: false },
            { answerText: '2.6 - 3.7m', isCorrect: false},
        ],
    },
    {
        questionText: 'How fast can a seal swim?',
        answerOptions: [
            { answerText: '1 mph', isCorrect: false },
            { answerText: '5 mph', isCorrect: false },
            { answerText: '22 mph', isCorrect: true },
            { answerText: '70 mph', isCorrect: false},
        ],
    },
    {
        questionText: 'What are a turtles favourite colours?',
        answerOptions: [
            { answerText: 'Purple', isCorrect: false },
            { answerText: 'Red, yellow and orange', isCorrect: true },
            { answerText: 'Blue', isCorrect: false },
            { answerText: 'Green', isCorrect: false},
        ],
    }
])
