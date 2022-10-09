let homeScore = 0
let guestScore = 0
let winTeam = document.getElementById("win_team")

function new_game() {
    homeScore = 0
    guestScore = 0
    document.getElementById("scoreboard").textContent = homeScore
    document.getElementById("scoreboard_g").textContent = guestScore
    document.getElementById("home_team").style.color = "white"
    document.getElementById("guest_team").style.color = "white"
    winTeam.textContent = "The winning team is: "
}

function changeScore() {
    document.getElementById("scoreboard").textContent = homeScore
    document.getElementById("scoreboard_g").textContent = guestScore
    if(homeScore >= guestScore) {
        document.getElementById("home_team").style.color = "yellow"
        document.getElementById("guest_team").style.color = "white"
        winTeam.textContent = "The winning team is: " + "HOME"
    }
    else { 
        document.getElementById("guest_team").style.color = "yellow"
        document.getElementById("home_team").style.color = "white"
        winTeam.textContent = "The winning team is: " + "GUEST"
    }
}

function add1() {
    homeScore += 1
    changeScore()
}
function add2() {
    homeScore += 2
    changeScore()
}
function add3() {
    homeScore += 3
    changeScore()
}
function add1_g() {
    guestScore += 1
    changeScore()
}
function add2_g() {
    guestScore += 2
    changeScore()
}
function add3_g() {
    guestScore +=3
    changeScore()
}
