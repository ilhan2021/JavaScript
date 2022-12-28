import { searchShows } from "./modules/98-tvmaze.js";
document.getElementById("txtSearch").addEventListener("input", (e)=>{
    const query = e.target.value;
    if(!query || query.length<3){
        document.getElementById("tvShows").innerHTML = "";
        return;
    } 
    searchShows(query, (shows)=>{
        console.log(shows);
        let strShows = "";
        shows.forEach( (item)=>{
            const {image, name, genres } = item.show;
            strShows += `
            <div class="col">
                <div class="card h-100">
                    <img src="${image.medium}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${genres.join("-")}</p>
                    </div>
                </div>
            </div>
            `;
        } );
        document.getElementById("tvShows").innerHTML = strShows;
        
    });
    
});