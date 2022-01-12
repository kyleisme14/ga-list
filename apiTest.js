const axios = require("axios");

axios.get('https://ga-list.herokuapp.com/sales')
        .then((response) => {
            console.log(response.data)
            
        })
        .catch((error) => {
            console.log('error hitting api', error);
        });
  