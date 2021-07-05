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
document.querySelector('#add-button').addEventListener('click', (e)=> {
    e.preventDefault()
        let newCard = {
        name: document.querySelector('#card-form #cardname').value,
        color: document.querySelector('#card-form #color').value,
        manaCost: document.querySelector('#card-form #manacost').value,
        flavorText: document.querySelector('#card-form #flavortext').value,
        image: document.querySelector('#card-form #image').value,
        effect: document.querySelector('#card-form #effect').value,
        power: document.querySelector('#card-form #power').value,
        toughness: document.querySelector('#card-form #toughness').value,
    }
    console.log(newCard)
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
        // console.log(element.children);
        document.querySelector('#card-form #cardname').value = element.children[1].innerText;
        document.querySelector('#card-form #color').value = element.children[8].innerText.split('Color: ')[1];
        document.querySelector('#card-form #manacost').value = element.children[3].innerText.split('Mana Cost: ')[1];
        document.querySelector('#card-form #flavortext').value = element.children[4].innerText.split('Flavor Text: ')[1];
        document.querySelector('#card-form #image').value = element.children[0].src;
        document.querySelector('#card-form #effect').value = element.children[5].innerText.split('Effect: ')[1];
        document.querySelector('#card-form #power').value = element.children[6].innerText.split('Power: ')[1];
        document.querySelector('#card-form #toughness').value = element.children[7].innerText.split('Toughness: ')[1];
        element.remove()
    })
    deleteBtn.addEventListener("click", () => {
        e.preventDefault()
        element.remove()
    })
    }
))

