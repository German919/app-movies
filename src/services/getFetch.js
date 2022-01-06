export const getFetch = (path) => {

    const URL = "https://api.themoviedb.org/3/";
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTcyNmUyNTU2OTBiOGQ3Y2E3MWI1N2Q3Y2IxMmEzYyIsInN1YiI6IjVmOTcwZTQzMDc5MmUxMDAzNzVhNGZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vk5yTxiSDDw-0QoXfR_DboPmCSAx_U4Tnp7IRnxz3sU";
    
    return fetch(`${URL}${path}`, {
        headers: {
            Authorization:
            `Bearer ${token}`,
            "content-Type":"application/json; charset=utf-8"
        },  
    })
    .then( res => res.json())
}
