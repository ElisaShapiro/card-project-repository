const magicCardDealer = {
    contact: "MagicCard@magiccard.com",
    hours: "24/7 ",
    inventory: [
        {
            id: "164",
            name: "Advocate of the Beast",
            color: "green",
            manaCost: 2, 
            flavorText: "I am neither their drover nor their leader. To these majestic beats, I am simply their herdmate and nothing more",
            image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=370738&type=card",
            effect: "At the beginning of your end step, put a +1/+1 counter on target Beast create you control",
            power: 2,
            toughness: 3
        },
        {
            id: "324",
            name: "Alela, Artful Provocateur",
            color: "yellow",
            manaCost: 4,
            flavorText: "Rankle/'s pranks are child/'s play. My games will topple kingdoms.",
            image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=476042&type=card",
            effect: "Flying, deathtouch, lifelink. Other creatures you control with flying get+1/+0. Whenever you cast an artifact or enchantment spell, create a 1/1/ blue Faerie create token with flying",
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
            name: "Chandra/'s Embercat",
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
function renderCard(card){
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


    li.className = 'card'
    img.src = card.img
    h4Name.textContent= card.name
    h4Id.textContent = card.h4Id
    pManaCost.textContent = `Mana Cost: ${card.manaCost}`
    pFlavorText.textContent = `Flavor Text: ${card.flavorText}`
    pEffect.textContent = `Effect: ${card.effect}`
    pPower.textContent = `Power: ${card.power}`
    pToughness.textContent = `Toughness: ${card.toughness}`
    pColor.textContent = `Color: ${card.color}`



    li.append(img, h4Name, h4Id, pManaCost, pFlavorText, pEffect,pPower, pInventory, pReviews)
    document.querySelector('#magic-card-list').append(li)


}

function initialRender(){
    console.log(magicCardDealer)
    document.querySelector('#magic-card-list li').remove()
    magicCardDealer.inventory.forEach(renderCard)
}
initialRender()
