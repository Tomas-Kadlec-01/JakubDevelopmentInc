function onLoadTest() {
    let d = new Date();
    //document.body.innerHTML = "<h2>344:Today's date is " + d + "</h2>"
}

function vypocti() {
    let input = document.getElementById('inputNumber').value
    let output
    //krok 0 kontrolovat vstup
    if (parseInt(input) > 0) {
        console.log(`Pocitam cislo: ${input}`)
        output = input * input
        console.log(`Vysledek je ${output}`)

        document.getElementById('outputNumber').textContent = output

    } else {
        document.getElementById('outputNumber').textContent = "vlozte cislo"


    }
    //TEST jakub 2
}