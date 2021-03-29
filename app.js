let counter = 0
let forceCounter = 0
let autoCounter = 0


let boosters = {
    force: {
        name: 'Dark Force',
        imgUrl: './assets/darkforce.jpg',
        price: 5,
        quantity: 0,
        multiplier: 1,
        attackQ: 10

    },
    sithLord: {
        name: 'Sith Lord',
        imgUrl: './assets/sithlord.png',
        price: 50,
        quantity: 0,
        multiplier: 5,
        attackQ: 5

    }
};

let autoBooster = {
    walker: {
        name: 'Imperial Walker',
        imgUrl: './assets/walk.jpg',
        price: 200,
        quantity: 0,
        multiplier: 20,
        attackQ: 2

    },
    deathStar: {
        name: 'Death Star',
        imgUrl: './assets/deathstar.png',
        price: 1500,
        quantity: 0,
        multiplier: 50,
        attackQ: 1
    }
}

let planets = ['Tatooine', 'Naboo', 'Hoth', 'Jedha']

function buyForce() {
    if (counter >= boosters['force'].price) {
        forceCounter += boosters['force'].multiplier
        counter -= boosters['force'].price
        boosters['force'].quantity += 1
        update()
        darkPriceAdjust()
    }

}

function buySithLord() {
    if (counter >= boosters['sithLord'].price) {
        forceCounter += boosters['sithLord'].multiplier
        counter -= boosters['sithLord'].price
        boosters['sithLord'].quantity += 1
        update()
        sithPriceAdjust()

    }

}

function buyWalker() {
    if (counter >= autoBooster['walker'].price) {
        autoCounter += autoBooster['walker'].multiplier
        counter -= autoBooster['walker'].price
        autoBooster['walker'].quantity += 1
        update()
        walkerPriceAdjust()

    }
}

function buyDeathStar() {
    if (counter >= autoBooster['deathStar'].price) {
        autoCounter += autoBooster['deathStar'].multiplier
        counter -= autoBooster['deathStar'].price
        autoBooster['deathStar'].quantity += 1
        update()
        deathStarPriceAdjust()
    }
}

function clickAdd() {
    counter += forceCounter + 1
    update()
}
function autoClickAdd() {
    counter += autoCounter
    update()
}

function darkPriceAdjust() {
    if (boosters['force'].quantity >= 1) {
        boosters['force'].price = boosters['force'].price * 2
    }
}
function sithPriceAdjust() {
    if (boosters['sithLord'].quantity >= 1) {
        boosters['sithLord'].price = boosters['sithLord'].price * 2
    }
}
function walkerPriceAdjust() {
    if (autoBooster['walker'].quantity >= 1) {
        autoBooster['walker'].price = autoBooster['walker'].price * 2
    }
}

function deathStarPriceAdjust() {
    if (autoBooster['deathStar'].quantity >= 1) {
        autoBooster['deathStar'].price = autoBooster['deathStar'].price * 2
    }
}

function attack(playerChoice) {
    comChoice = random()
    if (boosters['force'].quantity >= 1 && boosters['sithLord'.quantity >= 1] && autoBooster['walker'].quantity >= 1 && autoBooster['deathStar'].quantity >= 1) {
        if (playerChoice == comChoice) {
            showOverlay()
        }
    }
}
function random() {
    let rand = Math.floor(Math.random() * planets.length)
    return planets[rand]
}

function removeOverlay() {
    document.getElementById('overlay').remove()
}
function showOverlay() {
    document.getElementById('overlay').classList.remove('hidden')
    document.getElementById('count').innerText = counter
    document.getElementById('dquantity').innerText = 0
    document.getElementById('squantity').innerText = 0
    document.getElementById('wquantity').innerText = 0
    document.getElementById('dsquantity').innerText = 0
    document.getElementById('dprice').innerText = 0
    document.getElementById('sprice').innerText = 0
    document.getElementById('wprice').innerText = 0
    document.getElementById('dsprice').innerText = 0
    document.getElementById('dmodifier').innerText = 0
    document.getElementById('smodifier').innerText = 0
    document.getElementById('wmodifier').innerText = 0
    document.getElementById('dsmodifier').innerText = 0

}

function update() {
    document.getElementById('count').innerText = counter
    document.getElementById('dquantity').innerText = boosters['force'].quantity
    document.getElementById('squantity').innerText = boosters['sithLord'].quantity
    document.getElementById('wquantity').innerText = autoBooster['walker'].quantity
    document.getElementById('dsquantity').innerText = autoBooster['deathStar'].quantity
    document.getElementById('dprice').innerText = boosters['force'].price
    document.getElementById('sprice').innerText = boosters['sithLord'].price
    document.getElementById('wprice').innerText = autoBooster['walker'].price
    document.getElementById('dsprice').innerText = autoBooster['deathStar'].price
    document.getElementById('dmodifier').innerText = boosters['force'].multiplier
    document.getElementById('smodifier').innerText = boosters['sithLord'].multiplier
    document.getElementById('wmodifier').innerText = autoBooster['walker'].multiplier
    document.getElementById('dsmodifier').innerText = autoBooster['deathStar'].multiplier
}



setInterval(autoClickAdd, 3000)

// function drawBooster() {
//     let template = ''
//     for (let prop in boosters) {
//         let booster = boosters[prop]
//         template += `
//                 <h5 class="card-title">Price: $${booster.price}</h5>
//                 <h5 class="card-title">Multiplier: ${booster.multiplier}</h5>
//                 <h5 class="card-title">Quantity: ${booster.quantity}</h5>
//                 `
//     }
//     document.getElementById('booster').innerHTML = template
// }


// drawBooster()




















