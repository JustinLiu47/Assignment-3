document.getElementById("HeronsFormula").addEventListener("submit", handleFormSubmit(HeronsFormula));
document.getElementById("AmbiguousCase").addEventListener("submit", handleFormSubmit(AmbiguousCaseFormula));
document.getElementById("NewtonsMethod").addEventListener("submit", handleFormSubmit(NewtonsMethod));
document.getElementById("PolynomialFunction").addEventListener("submit", handleFormSubmit(PolynomialFunction));

function handleFormSubmit(callback) {
    return function(event) {
        event.preventDefault();
        callback();
    };
}

function HeronsFormula() {
    const A = parseFloat(document.getElementById("SideA").value);
    const B = parseFloat(document.getElementById("SideB").value);
    const C = parseFloat(document.getElementById("SideC").value);

    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        alert("Please enter valid numbers for all sides.");
        return;
    }

    const Answer = 0.25 * Math.sqrt(4 * A ** 2 * B ** 2 - (A ** 2 + B ** 2 - C ** 2) ** 2);
    document.getElementById("AreaResults").value = isNaN(Answer) || Answer === 0 ? "No Area Possible" : Answer;
}

function AmbiguousCaseFormula() {
    const AA = parseFloat(document.getElementById("AngleA").value);
    const SA = parseFloat(document.getElementById("SideA_Ambiguous").value);
    const SB = parseFloat(document.getElementById("SideB_Ambiguous").value);

    if (isNaN(AA) || AA >= 180 || isNaN(SA) || isNaN(SB)) {
        alert("Please enter valid numbers for the angle (Below 180° for a valid triangle) and sides.");
        return;
    }

    const RadAA = AA * (Math.PI / 180);
    const h = SB * Math.sin(RadAA);

    if (AA > 90) {
        document.getElementById("TriangleTypeResults").value = (SA <= SB) ? "No Triangle" : "One Triangle";
    } else if (AA === 90) {
        document.getElementById("TriangleTypeResults").value = "Right Triangle";
    } else if (SA < h) {
        document.getElementById("TriangleTypeResults").value = "No Triangle";
    } else if (h < SA && SA < SB) {
        document.getElementById("TriangleTypeResults").value = "Two Triangles (Ambiguous Case)";
    } else {
        document.getElementById("TriangleTypeResults").value = "One Triangle";
    }
}

function NewtonsMethod() {
    let x = parseFloat(document.getElementById("RootGuess").value);
    if (isNaN(x)) {
        alert("Please enter a valid number");
        return;
    }

    let Approximation;
    do {
        Approximation = x - (6 * x ** 4 - 13 * x ** 3 - 18 * x ** 2 + 7 * x + 6) / (24 * x ** 3 - 39 * x ** 2 - 36 * x + 7);
        if (Math.abs(x - Approximation) <= 0.0000001) break;
        x = Approximation;
    } while (true);

    document.getElementById("RootResults").value = Approximation;
}

function PolynomialFunction() {
    const Coefficients = document.getElementById("Coefficients").value.split(" ").map(parseFloat);
    const Exponents = document.getElementById("Exponents").value.split(" ").map(parseFloat);
    const XValue = parseFloat(document.getElementById("XValue").value);
    let Function = "";
    let value = 0;

    for (let i = 0; i < Coefficients.length; i++) {
        const n = Coefficients[i];
        const e = Exponents[i];
    
        if (isNaN(n)) break;
    
        if (i === 0) {
            Function += (n < 0) ? "-" : "";
        } else {
            Function += (n < 0) ? " - " : " + ";
        }
    
        Function += Math.abs(n) + "x^" + e;
        value += n * XValue ** e;
    }

    document.getElementById("PolynomialFunctionResults").value = "f(x) = " + Function;
    document.getElementById("PolynomialEvaluationResults").value = "f(" + XValue + ") = " + value;
}