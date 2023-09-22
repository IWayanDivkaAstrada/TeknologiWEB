function calculateFibonacci() {
    const n = parseInt(document.querySelector(".fibonacciInput").value);
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    document.querySelector(".fibonacci .result").innerText = "Deret Fibonacci: " + fib.join(", ");
}

function calculateVolume(shape) {
    const resultElement = document.querySelector(`.${shape} .result`);
    switch (shape) {
        case "kubus":
            const kubusSide = parseFloat(document.querySelector(".kubusInput").value);
            const kubusVolume = kubusSide ** 3;
            resultElement.innerText = `Volume Kubus: ${kubusVolume}`;
            break;
        case "tabung":
            const tabungRadius = parseFloat(document.querySelector(".tabungRadius").value);
            const tabungHeight = parseFloat(document.querySelector(".tabungHeight").value);
            const tabungVolume = Math.PI * tabungRadius ** 2 * tabungHeight;
            resultElement.innerText = `Volume Tabung: ${tabungVolume.toFixed(2)}`;
            break;
        case "bola":
            const bolaRadius = parseFloat(document.querySelector(".bolaRadius").value);
            const bolaVolume = (4 / 3) * Math.PI * bolaRadius ** 3;
            resultElement.innerText = `Volume Bola: ${bolaVolume.toFixed(2)}`;
            break;
    }
}

document.querySelector(".shape").addEventListener("change", function () {
    const selectedShape = this.value;
    document.querySelectorAll(".form").forEach(function (form) {
        form.style.display = "none";
    });
    document.querySelector(`.${selectedShape}.form`).style.display = "block";
});


