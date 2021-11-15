const animalsURL = 'http://localhost:5000/api/animals/'
const questionsURL = 'http://localhost:5000/api/questions/'

const animalsServices = {

    getAnimals() {
        return fetch(animalsURL)
        .then(res => res.json())
    },
    getQuestions(){
        return fetch(questionsURL)
        .then(res => res.json())
    }
}

export default animalsServices;