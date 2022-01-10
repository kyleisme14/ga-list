const axios = require("axios");

axios.get('http://localhost:3000/sales')
        .then((response) => {
            console.log(response.data)
            
        })
        .catch((error) => {
            console.log('error hitting api', error);
        });
  