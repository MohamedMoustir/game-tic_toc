
let span = document.querySelectorAll("span")


let win1 = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 2],
    [3, 4, 5],
    [6, 7, 8]

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
            console.log("eeee");
            if (count) {
                checwin(player2, i)
                count = false;
                isEmpty(i)

            } else {
                checwin(player1, i)
                count = true;
                isEmpty(i)
            }
        } else {
            console.log("eeeeee");

        }

    })

}





console.log(celse);


function checwin(player, i) {
    span[i].textContent = player.mood;
    celse.push(i)

}

function isEmpty(i) {

    if (celse.includes(i)) {
        return false
    }
    return true

}



function winers() {




    }




}
winers()