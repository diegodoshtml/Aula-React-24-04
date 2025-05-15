const route = "characters";

const host = 'https://dattebayo-api.onrender.com'

fetch(`${host}/${route}`, {
    method: "GET",
    headers: {
        Accept: 'application/json'
    }

}).then((response) => {
    return response.json();

}).then((data) => { 

    console.log(data.characters[0].images[0]);

    var characters = [];
    var jutsus = data.characters[0].jutsu;

  console.log("\nJovemBolsonaroJovemBolsonaroJovemBolsonaro\n");
  for(n = 0; n <data.characters.length; n++){
        console.log('Personagem : ', n,' - ID:', data.characters[n].id, ' - ', 'Nome: ',data.characters[n].name, ' - Total Jutsus : ', data.characters[n].jutsu.length);
          console.log("\nJovemBolsonaroJovemBolsonaroJovemBolsonaro\n")
   
    }
})
.catch((error) => {
    console.log(error);
})