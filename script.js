
let span = document.querySelectorAll("span")


let win1 = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
   
]








let count = true;
let celse = []
let player1 = {
    mood: "X",
    soccer: 0,
    played: []
}

let player2 = {
    mood: "O",
    soccer: 1,
    played: []
}
// let dd =true

for (let i = 0; i < 9; i++) {

    span[i].addEventListener('click', () => {
        if (isEmpty(i)) {
            
            if (count) { 
                 winers(player2)
                checkwin(player2, i)
              
                count = false;
             
                

            } else {
                winers(player1)
                checkwin(player1, i)
                
                count = true;
               
                
            }
        } else {
            
        }

    })

}








function checkwin(player, i) {
    span[i].textContent = player.mood;
    player.played.push(i)
    player.played.push(i)    
    celse.push(i)
  
    
   
    console.log(player.played);
    

}

function isEmpty(i) {

    if (celse.includes(i)) {
        return false
    }
    return true

}



function winers(player) {

win1.some(comp =>{

    if(comp.every(index => player.played.includes(index))){
        alert("you win")
    }else{
        
    }
})


    }





