const route = 'characters';

fetch(`https://dattebayo-api.onrender.com/${route}`, {
    method: 'GET',
    Headers: {
        Accept: 'application/json'
}
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.characters [0].jutso[0])
    })
    .catch((error) => {
        console.log(error)
    })