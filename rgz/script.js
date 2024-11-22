let todaysMoneyData = null
let mainCurrency = 'rub-input'

async function loadMoneyData() {
    let data = await fetch('https://www.cbr-xml-daily.ru/latest.js', {
        method: 'GET'
    })

    let info = await data.json()
    console.log(info)
    todaysMoneyData = info.rates
}

function recalculateCurrency(id) {
    if (!id) {
        return
    }

    mainCurrency = id
    let rubInput = document.getElementById('rub-input')
    let grvnInput = document.getElementById('grvn-input')

    // console.log(mainCurrency)

    if (mainCurrency == 'rub-input') {
        grvnInput.value = (rubInput.value * todaysMoneyData.UAH).toFixed(2)
        // console.log('RUB')
    }

    if (mainCurrency == 'grvn-input') {
        rubInput.value = (grvnInput.value / todaysMoneyData.UAH).toFixed(2)
        // console.log('GRVN')
    }
}

function onNewsClick(element){
    element.classList.toggle('folded')
}

window.onload = async function () {
    await loadMoneyData()
    console.log("mone info", todaysMoneyData)

};


