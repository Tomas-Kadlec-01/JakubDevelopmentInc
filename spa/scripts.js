function onLoadTest() {
    let d = new Date();
    //document.body.innerHTML = "<h2>344:Today's date is " + d + "</h2>"
}

function vypoctiPrvocislo() {
    let input = document.getElementById('inputNumber').value
    let outputText
    let output
    let jePrvocislo = true
    //krok 0 kontrolovat vstup
    if (parseInt(input) > 0) {
        console.log(`Pocitam cislo: ${input}`)

        //Krok1: Vydelit vstup vsemi mensimi celymi cisly, krome 1 a vlastni hodnoty
        for (let step = 2; step < input; step++) {
            // Runs 5 times, with values of step 0 through 4.
            console.log(`pocitam hodnotu ${step} pro vstupni hodnotu ${input}`);
            console.log(`mezi-vysledek: ${input % step}`)
            if (input % step == 0) {
                jePrvocislo = false
                break
            } else {

            }
        }
        console.log('#################################################')
        if (jePrvocislo) {
            console.log(`vysledek: ${input} je prvocislo`)
            outputText = `Zadane cislo ${input} je Prvocislo`

        } else {
            console.log(`vysledek: ${input} neni prvocislo`)
            outputText = `Zadane cislo ${input} Neni Prvocislo`

        }
        //krok 2 je zobrazit text je/neni prvo cislo
        document.getElementById('outputNumber').textContent = outputText
    } else {
        document.getElementById('outputNumber').textContent ="vlozte text"

    }

    
}