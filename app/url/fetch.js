import axios from "axios"

export async function fetchData(pathName){
    const res = await axios(`https://brightapi.merahitechnologies.com/api/${pathName}`).then(response => response.data)
    return res
}