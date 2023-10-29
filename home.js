const nameDado = document.querySelector("#nome-dado")
const dadoValue = document.querySelector("#dado")
const sucesso = document.querySelector("#sucesso")
const valorAtributos = document.querySelectorAll("#atributo-valor")

const msgDado = document.querySelector(".msg-dado")
const msgCombat = document.querySelector(".msg-combat")
const msgInventory = document.querySelector(".msg-inventory")
const msgMoney = document.querySelector(".msg-money")
const msgPontos = document.querySelector(".msg-pontos")

const pontosAtuaisTotais = document.querySelectorAll("#pontos-atuais-totais")
const pontosMaximosTotais = document.querySelectorAll("#pontos-maximos-totais")

const pontosAtuais = document.querySelector('#pontos-atuais')
const pontosMaximos = document.querySelector('#pontos-maximos')

let typePontos = ""
const handleClickPontos = (namePontos) => {
    const tituloPontos = document.querySelector("#titulo-pontos")
    if (namePontos == "vida") {
        typePontos = "vida"
        pontosAtuais.value = pontosAtuaisTotais[0].value
        pontosMaximos.value = pontosMaximosTotais[0].value

    } else if (namePontos == "sanidade") {
        typePontos = "sanidade"
        pontosAtuais.value = pontosAtuaisTotais[1].value
        pontosMaximos.value = pontosMaximosTotais[1].value

    } else if (namePontos == "ocultismo") {
        typePontos = "ocultismo"
        pontosAtuais.value = pontosAtuaisTotais[2].value
        pontosMaximos.value = pontosMaximosTotais[2].value

    }
    msgPontos.classList.add('add-msg-pontos')
    tituloPontos.innerHTML = `Mudar ${namePontos}`
}

const addPontos = () => {

    if (typePontos == "vida") {
        pontosAtuaisTotais[0].value = pontosAtuais.value
        pontosMaximosTotais[0].value = pontosMaximos.value
        const callBarra = (Number(pontosAtuaisTotais[0].value) * 100) / Number(pontosMaximosTotais[0].value)
        const barLife = document.querySelector(".vida")
        barLife.style.width = `${callBarra}%` 

    } else if (typePontos == "sanidade") {
        pontosAtuaisTotais[1].value = pontosAtuais.value
        pontosMaximosTotais[1].value = pontosMaximos.value
        const callBarra = (Number(pontosAtuaisTotais[1].value) * 100) / Number(pontosMaximosTotais[1].value)
        const barSanidade = document.querySelector(".sanidade")
        barSanidade.style.width = `${callBarra}%` 

    } else if (typePontos == "ocultismo") {
        pontosAtuaisTotais[2].value = pontosAtuais.value
        pontosMaximosTotais[2].value = pontosMaximos.value
        const callBarra = (Number(pontosAtuaisTotais[2].value) * 100) / Number(pontosMaximosTotais[2].value)
        const barOcultismo = document.querySelector(".ocultismo")
        barOcultismo.style.width = `${callBarra}%` 
    }
    msgPontos.classList.remove("add-msg-pontos")
}


//-------------------------------------//

const revelarResultado = (valorAtributo, valorDado, nome) => {
    const normal = valorAtributo / 1
    const bom = valorAtributo / 2
    const extremo = valorAtributo / 5

    const valorExtremo = 21 - extremo 
    const valorBom = 21 - bom
    const valorNormal = 21 - normal

    dadoValue.innerHTML = valorDado
    nameDado.innerHTML = `Rolagem do dado (${nome})`

    if (valorDado >= valorExtremo) {
        sucesso.innerHTML = "Extremo"

    } else if (valorDado >= valorBom) {
        sucesso.innerHTML = "Sucesso Bom"

    } else if (valorDado >= valorNormal) {
        sucesso.innerHTML = "Sucesso Normal"

    } else {
        sucesso.innerHTML = "Fracasso"
    }
}

const callDados = (atributo, dado) => {
    msgDado.classList.add("add-msg-dado")
    
    const calc = Math.floor(Math.random() * dado + 1)
    
    switch (atributo) {
        case "sanidade":
            const exp = Number(document.querySelector("#exp").value)
            dadoValue.innerHTML = calc
            nameDado.innerHTML = "Rolagem de dado (Sanidade)"
            if (calc > exp) {
                sucesso.innerHTML = "Fracasso"
            } else {
                sucesso.innerHTML = "Sucesso"
            }
            break;

        case "força":
            revelarResultado(Number(valorAtributos[0].value), calc, "Força")
            break;

        case "constituiçao":
            revelarResultado(Number(valorAtributos[1].value), calc, "Constituição")
            break;

        case "destreza":
            revelarResultado(Number(valorAtributos[2].value), calc, "Destreza")
            break;

        case "aparencia":
            revelarResultado(Number(valorAtributos[3].value), calc, "Aparência")
            break;

        case "educaçao":
            revelarResultado(Number(valorAtributos[4].value), calc, "Educação")
            break;

        case "inteligencia":
            revelarResultado(Number(valorAtributos[5].value), calc, "Inteligencia")
            break;

        case "poder":
            revelarResultado(Number(valorAtributos[6].value), calc, "Poder")
            break;

        case "sorte":
            revelarResultado(Number(valorAtributos[7].value), calc, "Sorte")
            break;
    
        default:
            break;
    }
}

const sair = () => {
    msgDado.classList.remove("add-msg-dado")
    msgInventory.classList.remove("add-msg-inventory")
    msgMoney.classList.remove("add-msg-money")
    msgPontos.classList.remove("add-msg-pontos")
}

//------------------------------------------------

const clearInput = () => {
    for (let cont = 0; cont < weaponCharacteristics.length; cont++) {
        weaponCharacteristics[cont].value = ""
    }
}
const add = () => {
    msgCombat.classList.add("add-msg-combat")
    clearInput()
}

const tbody = document.querySelector("#weapons")
const arrayWeapons = []

let editor = false
let editorId = ""

const weaponCharacteristics = document.querySelectorAll("#weapon-characteristics");

const addWeapon = () => {
    if (weaponCharacteristics[0].value != "" && weaponCharacteristics[2].value != "") {
        tbody.innerHTML = ""
        let tr = tbody.insertRow()
        const arrayTitulos = ["", "Nome", "Tipo", "Dano", "Mun. Atual", "Mun. Maximo", "Ataque", "Alcance", "Defeito", "Aréa"]
        for (let i = 0; i < arrayTitulos.length; i++) {
            const th = document.createElement("th")
            th.innerHTML = arrayTitulos[i]
            tr.append(th)
        }

        if (editor == false) {
            let weaponsFull = {}
            if (arrayWeapons[0]) {
                weaponsFull.id = 1 + arrayWeapons[arrayWeapons.length - 1].id
            } else {
                weaponsFull.id = 1
            }
            weaponsFull.nome = weaponCharacteristics[0].value
            weaponsFull.tipo = weaponCharacteristics[1].value
            weaponsFull.dano = weaponCharacteristics[2].value
            weaponsFull.munAtual = weaponCharacteristics[3].value
            weaponsFull.munMax = weaponCharacteristics[4].value
            weaponsFull.ataque = weaponCharacteristics[5].value
            weaponsFull.alcance = weaponCharacteristics[6].value
            weaponsFull.defeito = weaponCharacteristics[7].value
            weaponsFull.area = weaponCharacteristics[8].value

            arrayWeapons.push(weaponsFull)
        } else {
            for (let cont = 0; cont < arrayWeapons.length; cont ++) {
                if (editorId == arrayWeapons[cont].id) {
                    arrayWeapons[cont].nome = weaponCharacteristics[0].value
                    arrayWeapons[cont].tipo = weaponCharacteristics[1].value
                    arrayWeapons[cont].dano = weaponCharacteristics[2].value
                    arrayWeapons[cont].munAtual = weaponCharacteristics[3].value
                    arrayWeapons[cont].munMax = weaponCharacteristics[4].value
                    arrayWeapons[cont].ataque = weaponCharacteristics[5].value
                    arrayWeapons[cont].alcance = weaponCharacteristics[6].value
                    arrayWeapons[cont].defeito = weaponCharacteristics[7].value
                    arrayWeapons[cont].area = weaponCharacteristics[8].value
                }
            }
        }

        for (var cont = 0; cont < arrayWeapons.length; cont++) {
            let tr = tbody.insertRow()

            let tdAction = tr.insertCell()
            let tdName = tr.insertCell()
            let tdType = tr.insertCell()
            let tdDamage = tr.insertCell()
            let tdMunAtual = tr.insertCell()
            let tdMunMaxima = tr.insertCell()
            let tdAtack = tr.insertCell()
            let tdReach = tr.insertCell()
            let tdDefect = tr.insertCell()
            let tdArea = tr.insertCell()

            const button = document.createElement('button')
            button.innerHTML = "🗑"
            tdAction.append(button)

            const edit = document.createElement('button')
            edit.innerHTML = "🖊️"
            tdAction.append(edit)

            button.classList.add(".button-delete")
            button.setAttribute("id", arrayWeapons[cont].id)
            button.addEventListener('click', delWeapon)

            edit.classList.add("edit")
            edit.setAttribute("id", arrayWeapons[cont].id)
            edit.addEventListener("click", handleClickEdit)

            tdName.innerHTML = arrayWeapons[cont].nome
            tdType.innerHTML = arrayWeapons[cont].tipo
            tdDamage.innerHTML = arrayWeapons[cont].dano
            tdMunAtual.innerHTML = arrayWeapons[cont].munAtual
            tdMunMaxima.innerHTML = arrayWeapons[cont].munMax
            tdAtack.innerHTML = arrayWeapons[cont].ataque
            tdReach.innerHTML = arrayWeapons[cont].alcance
            tdDefect.innerHTML = arrayWeapons[cont].defeito
            tdArea.innerHTML = arrayWeapons[cont].area
        }

        msgCombat.classList.remove("add-msg-combat")
        editor = false
    }
}

const delWeapon = (e) => {
    e.composedPath()[2].remove()
    for (let cont = 0; cont < arrayWeapons.length; cont ++) {
        if (e.path[0].id == arrayWeapons[cont].id) {
            arrayWeapons.splice(cont, 1)
        }
    }
}

const handleClickEdit = (e) => {
    editor = true
    editorId = e.path[0].id
    add()
    for (let cont = 0; cont < arrayWeapons.length; cont++) {
        if (editorId == arrayWeapons[cont].id) {
            weaponCharacteristics[0].value = arrayWeapons[cont].nome
            weaponCharacteristics[1].value = arrayWeapons[cont].tipo
            weaponCharacteristics[2].value = arrayWeapons[cont].dano
            weaponCharacteristics[3].value = arrayWeapons[cont].munAtual
            weaponCharacteristics[4].value = arrayWeapons[cont].munMax
            weaponCharacteristics[5].value = arrayWeapons[cont].ataque
            weaponCharacteristics[6].value = arrayWeapons[cont].alcance
            weaponCharacteristics[7].value = arrayWeapons[cont].defeito
            weaponCharacteristics[8].value = arrayWeapons[cont].area
        }
    }
}

const backCombat = () => {
    msgCombat.classList.remove("add-msg-combat")
    editor = false
}

//------------------------------------------------------

let pericias = document.querySelectorAll(".pericias");

const quickSkills = document.querySelector(".container-pericias-rapidas")

const HandleAddQuickAcess = (e) => {
    if (e.composedPath()[0].checked == true) {
        const quickSkill = document.createElement("div")
        const valueQuickSkill = document.createElement("input")
        const nameQuickSkill = document.createElement("p")

        quickSkill.classList.add("pericias", "quick-skill")
        
        valueQuickSkill.value = e.composedPath()[1].childNodes[3].value
        nameQuickSkill.append(e.composedPath()[1].childNodes[5].textContent)

        quickSkill.appendChild(valueQuickSkill)
        quickSkill.appendChild(nameQuickSkill)

        quickSkills.appendChild(quickSkill)
        
    } else {
        const removeQuickSkill = document.querySelectorAll(".quick-skill")
        //------observando pericia por pericia----------------
        for (let contagem = 0; contagem < removeQuickSkill.length; contagem++) {
            if (e.composedPath()[1].innerText == removeQuickSkill[contagem].innerText) {
                removeQuickSkill[contagem].remove()
            }
        }
    }

    pericias = document.querySelectorAll(".pericias");
    resetSkills()
}

const callPericias = (e) => {
    const calc = Math.floor(Math.random() * 20 + 1)

//--------pericias normais-----------------
    if (e.composedPath()[0].childNodes.length == 7) {
        const valuePericia = e.target.childNodes[3].value
        const namePericia = e.composedPath()[0].innerText
        revelarResultado(valuePericia, calc, namePericia)
        msgDado.classList.add("add-msg-dado")

//-------pericias rapidas-------------------
    } else if (e.composedPath()[0].childNodes.length == 2) {
        const valuePericia = e.target.childNodes[0].value
        const namePericia = e.target.childNodes[1].textContent
        revelarResultado(valuePericia, calc, namePericia)
        msgDado.classList.add("add-msg-dado")

    }
    
}

const resetSkills = () => {
    for (let pericia of pericias) {
        pericia.addEventListener("click", callPericias)
    }
}

resetSkills()

const addQuickAcess = document.querySelectorAll("#add-quick-acess");

for (let quickAcess of addQuickAcess) {
    quickAcess.addEventListener("click", HandleAddQuickAcess)
}

//-------------inventory-----------------------------

const addInventory = () => {
    msgInventory.classList.add("add-msg-inventory")
}

const inventory = document.querySelector(".container-inventory")

const peso = []
const handleClickDelete = (e) => {
    e.composedPath()[1].remove()

    //this was the solution i was able to find
    for (let contagem = 0; contagem < peso.length; contagem++) {
        if (e.composedPath()[1].childNodes[2].value == peso[contagem]) {
            console.log(peso)
            peso.splice(contagem, 1)
            contagem = peso.length
        }
    }

    handleWeight()
}

const strongValue = Number(valorAtributos[0].value)
let cargaMaxima = 0

if (strongValue >= 10) {
    cargaMaxima = 19
} else {
    cargaMaxima = 18
}
const weight = () => {
    let soma = 0
    for (let contagem = 0; contagem < peso.length; contagem++) {
        soma = peso[contagem] + soma
    }
    return soma
}

const handleWeight = () => {
    pesoTotal.innerHTML = `Peso Total: ${weight()} / ${cargaMaxima}`
}

const pesoTotal = document.querySelector("#peso-total")
const addItems = () => {
    const nameItemValue = document.querySelector("#name-item");
    const pesoItemValue = document.querySelector("#peso-item");
    if (weight() + Number(pesoItemValue.value) <= cargaMaxima) {

        if (nameItemValue.value != "" && pesoItemValue != "") {
    
            const items = document.createElement("div")
            items.classList.add("items")
        
            const del = document.createElement("button")
            const nameItem = document.createElement("input")
            const pesoItem = document.createElement("input")
        
            del.classList.add("del-buttons")
        
            del.innerHTML = "🗑"
            nameItem.value = nameItemValue.value
            pesoItem.value = pesoItemValue.value
            
            peso.unshift(Number(pesoItem.value)) 
            console.log(peso)
            
            handleWeight()
            
            items.append(del)
            items.append(nameItem)
            items.append(pesoItem)
            inventory.appendChild(items)
            
            msgInventory.classList.remove("add-msg-inventory")
            let delButtons = document.querySelectorAll(".del-buttons")
            
            for (let delButton of delButtons) {
                delButton.addEventListener("click", handleClickDelete)
            }
            nameItemValue.value = ""
            pesoItemValue.value = ""
            
        }
    } else {
        window.alert("Você excedeu a sua carga maxima")
    }
}
pesoTotal.innerHTML = `Peso Total: 0 / ${cargaMaxima}`

const addContainerMoney = () => {
    msgMoney.classList.add("add-msg-money")
}

const money = document.querySelector("#money")
const addMoney = () => {
    const moneyValue = document.querySelector("#money-value")
    console.log(moneyValue.value)
    money.innerHTML = `Dinheiro: ${moneyValue.value}R$`
    msgMoney.classList.remove("add-msg-money")
}
money.innerHTML = `Dinheiro: 00R$`

