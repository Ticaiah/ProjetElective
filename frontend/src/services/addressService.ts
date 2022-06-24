import axios, {AxiosResponse} from "axios";

export default class UserService {

    
    public getAddress() {

      axios.get('https://api-adresse.data.gouv.fr/search/?q=20%20avenue%20de%20S%C3%A9gur%2C%20Paris&type=housenumber&autocomplete=0')
      .then(function (response) {

          const address:any[] = [];
          response.data.features.forEach((feature: any) => {
              address.push(feature.properties.label);
          });

        console.log(address);
        return address;
        
        
      })
      .catch(function (error) {
          console.log(error);
      });
    }
//TODO
}

 
    