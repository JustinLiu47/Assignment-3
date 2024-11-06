document.getElementById("heronsFormula").addEventListener("submit", handleFormSubmit(heronsFormula));
document.getElementById("ambiguousCase").addEventListener("submit", handleFormSubmit(ambiguousCaseFormula));
document.getElementById("newtonsMethod").addEventListener("submit", handleFormSubmit(newtonsMethod));
document.getElementById("polynomialFunction").addEventListener("submit", handleFormSubmit(polynomialFunction));

function handleFormSubmit(callback) {
    return function(event) {
        event.preventDefault();
        callback();
    };
}

function heronsFormula() {
    const a = parseFloat(document.getElementById("sideA").value);
    const b = parseFloat(document.getElementById("sideB").value);
    const c = parseFloat(document.getElementById("sideC").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Please enter valid numbers for all sides.");
        return;
    }

    const answer = 0.25 * Math.sqrt(4 * a ** 2 * b ** 2 - (a ** 2 + b ** 2 - c ** 2) ** 2);
    document.getElementById("areaResults").value = isNaN(answer) || answer === 0 ? "No Area Possible" : answer;
}

function ambiguousCaseFormula() {
    const aA = parseFloat(document.getElementById("angleA").value);
    const sS = parseFloat(document.getElementById("sideA_Ambiguous").value);
    const sB = parseFloat(document.getElementById("sideB_Ambiguous").value);

    if (isNaN(aA) || aA >= 180 || isNaN(sA) || isNaN(sB)) {
        alert("Please enter valid numbers for the angle (Below 180° for a valid triangle) and sides.");
        return;
    }

    const radAA = aA * (Math.PI / 180);
    const h = sB * Math.sin(radAA);

    if (aA > 90) {
        document.getElementById("triangleTypeResults").value = (sa <= sb) ? "No Triangle" : "One Triangle";
    } else if (aA === 90) {
        document.getElementById("triangleTypeResults").value = "Right Triangle";
    } else if (sA < h) {
        document.getElementById("triangleTypeResults").value = "No Triangle";
    } else if (h < sA && sA < sB) {
        document.getElementById("triangleTypeResults").value = "Two Triangles (Ambiguous Case)";
    } else {
        document.getElementById("triangleTypeResults").value = "One Triangle";
    }
}

function newtonsMethod() {
    let x = parseFloat(document.getElementById("rootGuess").value);
    if (isNaN(x)) {
        alert("Please enter a valid number");
        return;
    }

    let approximation;
    do {
        approximation = x - (6 * x ** 4 - 13 * x ** 3 - 18 * x ** 2 + 7 * x + 6) / (24 * x ** 3 - 39 * x ** 2 - 36 * x + 7);
        if (Math.abs(x - approximation) <= 0.0000001) break;
        x = approximation;
    } while (true);

    document.getElementById("rootResults").value = approximation;
}

function polynomialFunction() {
    const coefficients = document.getElementById("coefficients").value.split(" ").map(parseFloat);
    const exponents = document.getElementById("exponents").value.split(" ").map(parseFloat);
    const xValue = parseFloat(document.getElementById("xValue").value);
    let func = "";
    let value = 0;

    for (let i = 0; i < coefficients.length; i++) {
        const n = coefficients[i];
        const e = exponents[i];

        if (isNaN(n)) break;

        if (i === 0) {
            func += (n < 0) ? "-" : "";
        } else {
            func += (n < 0) ? " - " : " + ";
        }

        func += Math.abs(n) + "x^" + e;
        value += n * xValue ** e;
    }

    document.getElementById("polynomialFunctionResults").value = "f(x) = " + func;
    document.getElementById("polynomialEvaluationResults").value = "f(" + xValue + ") = " + value;
}