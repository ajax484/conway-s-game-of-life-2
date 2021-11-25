const canvas = document.querySelector('#gamefield')
const ctx = canvas.getContext('2d')
const game = new GameOfLife()

game.gameSetUp()
window.onload = () => {
    document.querySelector("#start-random").addEventListener("click", () => {
        console.log("simulation is started")
        game.arrayRandomize();
        game.fillArray();

        window.setInterval(() => {
            game.runGame();
        }, 300)
    })

    document.querySelector("#stop").addEventListener("click", () => {
        console.log("simulation is stopped")
        game.gameSetUp();
    })

    function updateAlive (){
        let alive = document.getElementById("alive");
        alive.innerHTML = game.countAlive();
        console.log(game.countAlive())
    }

    window.setInterval(() => {updateAlive()} , 300)
}