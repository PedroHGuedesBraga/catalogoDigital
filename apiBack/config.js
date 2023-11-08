const mongoose = require("mongoose")

async function main(){
    try {
        mongoose.set("strictQuery",true)
        await mongoose.connect("mongodb+srv://pedrohenriqueguedesbraga:FQm2dgBjPyv0La3Q@cluster0.sjmcg4m.mongodb.net/?retryWrites=true&w=majority")

        console.log("Conectado ao banco")
    } catch (error) {
        console.log(`Erro:${error}`);
    }
}

module.exports = main;