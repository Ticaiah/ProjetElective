import mongoose from "mongoose";

// mongoose.connect(
//     'mongodb://admin:pass@mongo-dev:27017/'
//   )
//   .then(() => {
//     console.log("Connecté à mongodb !");
//   })
//   .catch((reason) => { 
//     console.log("Erreur de connection à la base mongodb :");
//     console.log(reason);
// });

export const mongo = mongoose.createConnection('mongodb://admin:pass@mongo-dev:27017/');