import React from "react"; 
import Project from "../Project";

export default function PortfolioProjects() { 
    const projects = [
    
    { 
        title: "My Animal List", 
        description: "Review Animals Online! Create an Account, upload images, and review people's pets and furry friends", 
        link: " https://my-animal-list.herokuapp.com/",
        image: "https://user-images.githubusercontent.com/112667575/219481500-22489974-48a2-4bfe-8ff3-e3154b36b70c.png"

    }, 
    {  
        title: "Cryptoscope", 
        description: "Use your daily horoscope to find your lucky cryptocoin of the day", 
        link: "https://llangerud.github.io/cryptoscope/", 
        image: "https://user-images.githubusercontent.com/104108239/206606210-4dd86987-afaf-42eb-b2ea-bcf5fbbb96e8.png"

    },  

    { 
        title: "Happy Camper", 
        description: "Search national park campgrounds and pick out youre favorite ones", 
        link: "https://happy-camper12345.herokuapp.com/", 
        image: "https://raw.githubusercontent.com/CBshmear/big-ole-3/main/Assets/Home_W_Search.png"
    }
    ]; 

    return ( 
        <div> 
            {projects.map((projects, i) => (
                <Project key={i} projects={projects} />
            )
            )}
        </div>
    )
}