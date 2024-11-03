const root = document.documentElement
const number = document.getElementById("number")
let n1 = 0
let history = []

const storedHistory = localStorage.getItem('history')
if (storedHistory) {
    try {
        history = JSON.parse(storedHistory)
    } catch (e) {
        console.error('Erro ao analisar JSON do localStorage:', e)
        history = []
    }
}

number.innerText = n1

function rebuild() {
    const ul = document.getElementById("ul")
    ul.innerText = ""
    history.forEach((item, index) => {
        const li = document.createElement("li")
        li.innerText = item
        ul.appendChild(li)
    }
    )
}


rebuild()

function saveHistory() {
    localStorage.setItem('history', JSON.stringify(history))
}

function increase(n) {
    n1 += n
    console.log(n1)
    number.innerText = n1
}

function decrease(n) {
    n1 -= n
    console.log(n1)
    number.innerText = n1
}

function getLastNumber(lastNumber) {
    if (lastNumber === 0) {} 
    else  {
        if (history.length >= 5) {
            history.shift()
        }
        history.push(lastNumber)
        saveHistory()
        console.log(history)
        nestLi()
    }

}

function reset() {
    getLastNumber(n1)
    n1 = 0
    console.log(n1)
    number.innerText = n1
}


function nestLi() {
    const ul = document.getElementById('ul')
    const li = document.createElement('li')
    while (ul.children.length > 4) {
        ul.removeChild(ul.children[0])
    }
    li.innerText = history[history.length - 1]
    ul.appendChild(li)
}
