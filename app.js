const heroes = [
    {
        name: 'sloth',
        type: 'duck',
        emoji: '🦆',
        damage: 5,
        health: 100
    },
    {
        name: 'phaelius',
        type: 'elf',
        emoji: '🧝‍♂️',
        damage: 10,
        health: 50
    }
]


const boss = {
    name:'squee',
    emoji: '👺',
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}




function attackBoss() {
    let damage = 0
    heroes.forEach(h => { 
        damage += h.damage
    })
    boss.health -= damage
    if (boss.health <= 0) boss.health = 0
    console.log(boss.health);
    drawHealth()
}

function bossAttack() {
    let bossAttacking = setInterval(() => {
        if (boss.health == 0) {
            clearInterval(bossAttacking)
            console.log("boss dead")
        } else {
            heroes.forEach(hh => {
                hh.health -= 5
            })}drawHealth()
        }, 1000)
}


function drawHealth() {
    let bossHealth = document.getElementById('squee')
    bossHealth.querySelector(".progress-bar").style.width = boss.health + '%'
    heroes.forEach(hh => {
        document.getElementById(hh.name).querySelector(".health").innerText = hh.health
        if (hh.health <=0 ) {hh.health = 0}
    }
        )
    }


function startFight() {
    if (boss.health < boss.maxHealth) {
        bossAttack()
        clearInterval(firstStrike)} 
}

function endFight() {
    if (boss.health == 0) {
        clearInterval(bossAttacking),
            console.log(bossAttacking)
    }
}

let firstStrike = setInterval(() => { startFight() }, 500)







//ANCHOR - notes 
// function do something() {
// }

// let doSomeThingElse = function () {
// }

// let thing 
// thing = () => {
// }
// setTimeout(() => (console.log('done')), seconds * 1000) {
    
// }

// setInterval(() => {
    
// }, interval);
// clearInterval()

