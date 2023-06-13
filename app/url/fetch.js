export async function fetchData(pathName){
    const res = await fetch(`https://brightapi.merahitechnologies.com/api/${pathName}`, {cache:"no-store"})
    if(!res.ok){
        throw new Error('faild to fetch data')
    }
    return await res.json()
}