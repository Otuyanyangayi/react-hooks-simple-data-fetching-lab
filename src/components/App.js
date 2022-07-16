// create your App component here
import React, {useEffect, useState}  from "react";




function App(){
    const [imageLoaded, setImagesLoaded] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then((data) =>{ 
            //console.log(data)
            setImagesLoaded(data)
            setIsLoading(true)
        })
    }, [])


    if(!isLoading) return <p>Loading...</p>
    return(
        <>
        <img src={imageLoaded.message} alt="A Random Dog" />
        </>        
    )
}

export default App