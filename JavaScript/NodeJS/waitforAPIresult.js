import fetch from "node-fetch"

let url = "https://restcountries.com/v3.1/all"

// remove async and await and run once
// by using async and await we can the fetch the data from API call
let fetchdata = async function(){

    try {
       let response = await fetch(url)
       let country = await response.json() 
       console.log(country) 
    }
    
    catch (err) {
     console.log("could not load API response and error message is : "+err.message)   
    }
}

fetchdata()