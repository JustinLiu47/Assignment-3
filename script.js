var HeronListener = document.getElementById("HeronsFormula");
HeronListener.addEventListener("submit", function(event) {
    event.preventDefault();
    HeronsFormula();
});
function HeronsFormula(){
    var Answer="";
    var A = parseFloat(document.getElementById("SideA").value);
    var B = parseFloat(document.getElementById("SideB").value);
    var C = parseFloat(document.getElementById("SideC").value);
    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        alert("Please enter valid numbers for all sides.");
        return;
    };
    alert("Form Submitted");
    Answer = 0.25*Math.sqrt(4*A**2*B**2-(A**2+B**2-C**2)**2);
    if (Answer==NaN | Answer==0){
        document.getElementById("AreaResults").value = "No Area Possible";
        return
    }
    document.getElementById("AreaResults").value = Answer;
};