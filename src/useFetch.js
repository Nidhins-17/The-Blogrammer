import {useState,useEffect} from 'react';

// custom hook
const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    
    const [isLoading, setIsLoading] = useState(true);
    
    const [error, setError] = useState(null);
    //this is generalised hook to fetch any data thrown at it

    const abortCont = new AbortController();

    useEffect(()=>{
        // fetching the data from json file

        // setTimeout is here for a realisitic experience to show the loading sign that's it eh
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data from the json file');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsLoading(false);
                // if the data is fetched backed then error should be empty again
                setError(null);
            })
            .catch((e) => {
                if(e.name === 'AbortError'){
                    console.log('fetch aborted');
                } else{
                    //if there is any error the loading should be removed
                    setIsLoading(false);
                    setError(e.message);
                }
            })
        },1000)

        return () => abortCont.abort();

    },[url]);


    return {data,isLoading,error};

}

export default useFetch;

