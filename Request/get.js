const fetch = require('node-fetch');	//npm install node-fetch

 const getAll = async ()=>{
     try{
        let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=200")
        let result = await res.json() 
        let final = []

        for (let index = 0; index < result.results.length; index++) {
            
            console.log(result.results[index])
            let one = await getOne(result.results[index].url)
            //final = [...final, one] //diferente o nuevo espacio en memoria X86592DF
            final.push(one) // en el mismo  X4845DF espacio de memoria esta agregando un nuevo elemento
        }

        return final
     }

     catch(error){
        throw error
     }
 
 }

 const getOne = async (url) => {
    try{
        let res = await fetch(url)
        let result = await res.json()
        return result
     }

     catch(error){
         throw error
     }
 }

 exports.getAll = getAll