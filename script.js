const sMin = (el) => {
    return document.querySelector(el);
}

function calculoIMC() {
    let inName = sMin("#inName");
    let inPeso = sMin("#inPeso");
    let inAltura = sMin("#inAltura");

    let out = document.querySelectorAll("#outName, #outPeso, #outAltura, #outImc, #outCategoria");

    let name = inName.value;
    let peso = Number(inPeso.value);
    let altura = Number(inAltura.value);

    let containerModal = sMin("#container-modal");

    if(name == "" || peso == "" || peso == 0 || isNaN(peso) || altura == "" || altura == 0 || isNaN(altura)) {
        containerModal.style.display = "flex";
        inName.focus();
        return;
    }

    let imc = peso / (altura * altura).toFixed(1);
    let categoria = ["Desnutrido", "Saudável", "Sobrepeso", "Obesidade Grau I", "Obesidade Grau II", "Obesidade Grau III", "Super Obesidade"];

    if(imc <= 14) {
        out[0].textContent = `${name}`;
        out[1].textContent = `${peso}`;
        out[2].textContent = `${altura.toFixed(2)}`;
        out[3].textContent = `${imc.toFixed(1)}`;
        out[4].textContent = `${categoria[0]}`;
        out[4].style.color = '#e95353';
        out[4].style.background = '#ffc8c8';
    }else if(imc == 18.5 || imc < 25) {
        out[0].textContent = `${name}`;
        out[1].textContent = `${peso}`;
        out[2].textContent = `${altura.toFixed(2)}`;
        out[3].textContent = `${imc.toFixed(1)}`;
        out[4].textContent = `${categoria[1]}`;
        out[4].style.color = '#356937';
        out[4].style.background = '#7FC682';
    } else if(imc == 25 || imc < 30) {
        out[0].textContent = `${name}`;
        out[1].textContent = `${peso}`;
        out[2].textContent = `${altura.toFixed(2)}`;
        out[3].textContent = `${imc.toFixed(1)}`;
        out[4].textContent = `${categoria[2]}`;
        out[4].style.color = '#e95353';
        out[4].style.background = '#ffc8c8';
    } else if(imc == 30 || imc < 35) {
        out[0].textContent = `${name}`;
        out[1].textContent = `${peso}`;
        out[2].textContent = `${altura}`;
        out[3].textContent = `${imc.toFixed(1)}`;
        out[4].textContent = `${categoria[3]}`;
        out[4].style.color = '#e95353';
        out[4].style.background = '#ffc8c8';
    } else if(imc == 35 || imc < 40) {
        out[0].textContent = `${name}`;
        out[1].textContent = `${peso}`;
        out[2].textContent = `${altura.toFixed(2)}`;
        out[3].textContent = `${imc.toFixed(1)}`;
        out[4].textContent = `${categoria[4]}`;
        out[4].style.color = '#e95353';
        out[4].style.background = '#ffc8c8';
    } else if(imc == 40 || imc < 50) {
        out[0].textContent = `${name}`;
        out[1].textContent = `${peso}`;
        out[2].textContent = `${altura.toFixed(2)}`;
        out[3].textContent = `${imc.toFixed(1)}`;
        out[4].textContent = `${categoria[5]}`;
        out[4].style.color = '#e95353';
        out[4].style.background = '#ffc8c8';
    } else if(imc > 50) {
        out[0].textContent = `${name}`;
        out[1].textContent = `${peso}`;
        out[2].textContent = `${altura.toFixed(2)}`;
        out[3].textContent = `${imc.toFixed(1)}`;
        out[4].textContent = `${categoria[6]}`;
        out[4].style.color = '#e95353';
        out[4].style.background = '#ffc8c8';
    }

    let containerItem2 = sMin(".container-item2");

    if(containerItem2.style.display == 'flex') {
        containerItem2.style.display = 'none';
    } else {
        containerItem2.style.display = 'flex';
    }
}
let btnEnviar = sMin("#btnEnviar");
btnEnviar.addEventListener("click", calculoIMC);

function recarregar() {
    location.reload();
    return;
}
let reC = sMin("#reload");
reC.addEventListener("click", recarregar);

function modalReload() {
    location.reload();
    return;
}
let btnModal = sMin("#btnModal");
btnModal.addEventListener("click", modalReload);

