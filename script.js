const magicCardDealer = {
    contact: "MagicCard@mc.com",
    hours: "Reach us by email 24/7",
    inventory: [
        {
            id: "164",
            name: "Advocate of the Beast",
            color: "green",
            manaCost: 2, 
            flavorText: "I am neither their drover nor their leader. To these majestic beats, I am simply their herdmate and nothing more",
            image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=370738&type=card",
            effect: "At the beginning of your end step, put a +1/+1 counter on target Beast create you control.",
            power: 2,
            toughness: 3
        },
        {
            id: "324",
            name: "Alela, Artful Provocateur",
            color: "yellow",
            manaCost: 4,
            flavorText: "Rankle's pranks are child's play. My games will topple kingdoms.",
            image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=476042&type=card",
            effect: "Flying, deathtouch, lifelink. Other creatures you control with flying get+1/+0. Whenever you cast an artifact or enchantment spell, create a 1/1 blue Faerie create token with flying.",
            power: 2,
            toughness: 3
        },
        {
            id: "203",
            name: "Black Cat",
            color: "black",
            manaCost: 1, 
            flavorText: "Its last life is spent tormenting your dreams.",
            image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489209&type=card",
            effect: "When Black Cat dies, target opponent discards a card at random.",
            power: 1,
            toughness: 1
        },
        {
            id: "129",
            name: "Chandra's Embercat",
            color: "orange",
            manaCost: 1, 
            flavorText: "Furballs? Try drealing with fireballs. - Chandra Nalaar",
            image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466883&type=card",
            effect: "Add fire mana. Spend this mana only to cast an Elemental spell or a Chandra planeswalker spell.",
            power: 2,
            toughness: 2
        },
        {
            id: "151",
            name: "Elite Cat Warrior",
            color: "green",
            manaCost: 2, 
            flavorText: "Hear that? No? That/'s a cat warrior",
            image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=221917&type=card",
            effect: "Forestwalk (If defending player has any forests in play, Elite Cat Warrior cannot be intercepted. Forests are in play regardless of whether they are tapped or untapped.)",
            power: 2,
            toughness: 3
        },
    ]
}
document.querySelector('#card-form').addEventListener('submit', (e)=> {
    e.preventDefault()
    let newCard = {
        cardname: e.target.cardname.value,
        color: e.target.color.value,
        manacost: e.target.manacost.value,
        flavortext: e.target.flavortext.value,
        image: e.target.image.value,
        effect: e.target.effect.value,
        power: e.target.power.value,
        toughness: e.target.toughness.value, 
    }
    renderCard(newCard)
})

function renderAside(cardObj){
    document.querySelector('#contact').textContent = cardObj.contact
    document.querySelector('#hours').textContent = cardObj.hours
}

function renderCard(magicCard){
    let li = document.createElement('li')
    let h4Name = document.createElement('h4')
    let h4Id = document.createElement('h4')
    let img = document.createElement('img')
    let pManaCost = document.createElement('p')
    let pFlavorText = document.createElement('p')
    let pEffect = document.createElement('p')
    let pPower = document.createElement('p')
    let pToughness = document.createElement('p')
    let pColor = document.createElement('p')
    // let btn = document.createElement('button')

    li.className = 'card'
    img.src = magicCard.image
    h4Name.textContent= magicCard.name
    h4Id.textContent = magicCard.h4Id
    pManaCost.textContent = `Mana Cost: ${magicCard.manaCost}`
    pFlavorText.textContent = `Flavor Text: ${magicCard.flavorText}`
    pEffect.textContent = `Effect: ${magicCard.effect}`
    pPower.textContent = `Power: ${magicCard.power}`
    pToughness.textContent = `Toughness: ${magicCard.toughness}`
    pColor.textContent = `Color: ${magicCard.color}`
    
    

    li.append(img, h4Name, h4Id, pManaCost, pFlavorText, pEffect,pPower, pToughness, pColor)
    document.querySelector('#magic-card-list').append(li)


}

function initialRender(){
    console.log(magicCardDealer)
    renderAside(magicCardDealer)
    document.querySelector('#magic-card-list.cards li').remove()
    magicCardDealer.inventory.forEach(renderCard)
}
initialRender()

Array.from(document.querySelectorAll('.card')).forEach(element => element.addEventListener('click', (e) => {
    e.preventDefault()
    let edit = document.createElement("button") 
    edit.textContent = "Edit Card"
    element.append(edit)
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete Card"
    element.append(deleteBtn)
    edit.addEventListener("click", () => {
        e.preventDefault()
        console.log("I want to edit")
    })
    deleteBtn.addEventListener("click", () => {
        e.preventDefault()
        element.remove()
    })
    }
))

