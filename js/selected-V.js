const select = [];

// function displayPlayers(){
//     const playersList = document.getElementById("players-list");
//     playersList.textContent = '';

    
// }

function addToList(element){
    const playerName = element.parentNode.parentNode.children[0].innerText;
    
    
    const playersList = document.getElementById("players-list");
    

    const li = document.createElement("li");
    li.innerText = playerName;
    
    playersList.appendChild(li);

    
    
    
    

}


