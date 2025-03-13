console.log('namoooooo')

let result = '';

for (let i = 0; i < 10; i++) {

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
        console.log(response.data.response);

        const elementContainerCard = document.getElementById('container-card');
        

        
        result += `<div class="card">
            <div class="card-body">
              ${response.data.response }
            </div>
        </div>
         `

         elementContainerCard.innerHTML = result;


    })
        .catch((error) => {
            console.log('errore');
            console.log(error);
        })


}

