let dexInfo = document.getElementById('dexInfo')
let sprite = document.getElementById('sprite')
let pokePrompt = prompt('Introduce the name or number for the pokemon to search.').toLowerCase()

const pokeInfo = async str => {
    try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${str}`)
        const data = await res.json()
    pokeData(data)
    }

    catch (error) {
        const errorMsg = (`The pokemon you submitted (${str}) either does not exist, or it isn't valid.`);
        console.error(errorMsg)
        box.innerText = errorMsg
    } 
} 



const wrongValues = [null, undefined, '']

const capitalWords = word => { //stolen from darkie's code, sorry darkie i could've just googled it anyways
    return word
    .toLowerCase()
    .split(' ')
    .map(letter => letter.charAt(0).toUpperCase() + letter.slice(1))
    .join(' ');
}

let periodFunc = x => {

    let numb = x 
    let textNumb = numb.toString()

    var len = textNumb.length;
    var split = textNumb.substring(0, len-1) + "." + textNumb.substring(len-1);
    return split;
}

const pokeData = data => {
const { id, name, weight, sprites, height, types, abilities, held_items , stats } = data
    
    
    //Sprite
     let pokeSprite = document.createElement('img')
     pokeSprite.src = sprites.front_default 
    
    //Number
     let pokeId = document.createElement('p')
     let pokeDataId = document.createTextNode(`Number: ${id}`)
     pokeId.appendChild(pokeDataId)

    //Name 
     let pokeName = document.createElement('p')
     let pokeDataName = document.createTextNode(`Name: ${capitalWords(name)}`)
     pokeName.appendChild(pokeDataName)
     
    //Types
     let pokeTypes = document.createElement('p')

     if (!types[1] || wrongValues.includes(types[1])) {
        let pokeDataTypes = document.createTextNode(`Type: ${capitalWords(types[0].type.name)}`)
        pokeTypes.appendChild(pokeDataTypes)

     } else {
        let pokeDataTypes = document.createTextNode(`Types: ${capitalWords(types[0].type.name)} | ${capitalWords(types[1].type.name)}`)
        pokeTypes.appendChild(pokeDataTypes)

     }

    //Held Item(s)
     let pokeHeld = document.createElement('p')

     if (!held_items[0] || wrongValues.includes(held_items[0])) {

     } else
      if (!held_items[1] || wrongValues.includes(held_items[1])) {
        
        let pokeDataHeld = document.createTextNode(`Held Item: ${capitalWords(held_items[0].item.name.replaceAll('-', ' '))}`)
        pokeHeld.appendChild(pokeDataHeld)
     } else {
        
        let pokeDataHeld = document.createTextNode(`Held Items: ${capitalWords(held_items[0].item.name.replaceAll('-', ' '))} | ${capitalWords(held_items[1].item.name.replaceAll('-', ' '))}`)
        pokeHeld.appendChild(pokeDataHeld)
     }

    //Ability
     const pokemonAbility = abilities.map(el => {
        const { ability } = el 
        return `${capitalWords(ability.name)}`
     })

     let pokeAbility = document.createElement('p')
     let pokeDataAbility = document.createTextNode(`Ability: ${pokemonAbility.join(' | \n').replaceAll('-', ' ')}`)
     pokeAbility.appendChild(pokeDataAbility)
     
     
     //Height
     let pokeHeight = document.createElement('p')
     let pokeDataHeight = document.createTextNode(`Height: ${periodFunc(height)}m`)
     pokeHeight.appendChild(pokeDataHeight)
     
     //Weight
     let pokeWeight = document.createElement('p')
     let pokeDataWeight = document.createTextNode(`Weight: ${periodFunc(weight)}kg`)
     pokeWeight.appendChild(pokeDataWeight) 
     
     
          //Stats 
          let Stat = document.createElement('h3')
          pokeStat = document.createTextNode("—Stats for nerds—")
          Stat.appendChild(pokeStat)

          let pokeHP = document.createElement('p')
          let pokeDataHP = document.createTextNode(`HP: ${stats[0].base_stat}`)
          pokeHP.appendChild(pokeDataHP) 

          let pokeAtk = document.createElement('p')
          let pokeDataAtk = document.createTextNode(`Attack: ${stats[1].base_stat}`)
          pokeAtk.appendChild(pokeDataAtk) 

          let pokeDef = document.createElement('p')
          let pokeDataDef = document.createTextNode(`Defense: ${stats[2].base_stat}`)
          pokeDef.appendChild(pokeDataDef) 

          let pokeSpA = document.createElement('p')
          let pokeDataSpA = document.createTextNode(`Special Attack: ${stats[3].base_stat}`)
          pokeSpA.appendChild(pokeDataSpA) 

          let pokeSpD = document.createElement('p')
          let pokeDataSpD = document.createTextNode(`Special Defense: ${stats[4].base_stat}`)
          pokeSpD.appendChild(pokeDataSpD) 

          let pokeSpe = document.createElement('p')
          let pokeDataSpe = document.createTextNode(`Speed: ${stats[5].base_stat}`)
          pokeSpe.appendChild(pokeDataSpe) 
     
     
     sprite.appendChild(pokeSprite)
     dexInfo.appendChild(pokeId)
     dexInfo.appendChild(pokeName)
     dexInfo.appendChild(pokeAbility)
     dexInfo.appendChild(pokeWeight)
     dexInfo.appendChild(pokeHeight)
     dexInfo.appendChild(pokeTypes)
     dexInfo.appendChild(pokeHeld) 


    //Stats
    dexInfo.appendChild(Stat) 
    dexInfo.appendChild(pokeHP)
    dexInfo.appendChild(pokeAtk)
    dexInfo.appendChild(pokeDef)
    dexInfo.appendChild(pokeSpA)
    dexInfo.appendChild(pokeSpD)
    dexInfo.appendChild(pokeSpe)
} 



if (pokePrompt == "darmanitan") {

    pokeInfo("darmanitan-standard")
 
 } else {
    pokeInfo(pokePrompt)
}