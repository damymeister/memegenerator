import React from "react"
export default function Meme (){

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setallMemesImages] = React.useState([])
    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setallMemesImages(data.data.memes))
    },[])
    function showImage(){
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevmeme =>({
            ...prevmeme,
            randomImage : url
        }))
    }
    function handleChange(event){
        const {name,value, type} = event.target
        setMeme(previous => ({
            ...previous,
            [name] : value
        }))
    }
    return (
        <main>
        <div className="form">
            <input 
                type="text"
                placeholder="Top text"
                className="form--input"
                onChange = {handleChange}
                name = "topText"
                value = {meme.topText}
            />
            <input 
                type="text"
                placeholder="Bottom text"
                className="form--input"
                onChange = {handleChange}
                name = "bottomText"
                value = {meme.bottomText}
            />
            <button onClick={showImage}
                className="form--button"
            >
                Get a new meme image 🖼
            </button>
        </div>
        <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    </main>
    )
    }

