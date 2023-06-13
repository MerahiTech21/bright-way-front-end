export async function fetchData(name){
    const res = await fetch(`https://brightapi.merahitechnologies.com/api/${name}`, {cache:"no-store"})
    if(!res.ok){
        throw new Error('faild to fetch data')
    }
    return await res.json()
}