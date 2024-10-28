var HeronListener = document.getElementById("HeronsFormula");
HeronListener.addEventListener(submit, HeronsFormula());
function HeronsFormula(){
    var A = document.getElementbyId("HeronsFormula").SideA.value
    var B = document.getElementbyId("HeronsFormula").SideB.value
    var C = document.getElementbyId("HeronsFormula").SideC.value
    alert ("Form Submitted");
    document.getElementbyId("HeronsFormula").AreaResults = Answer
    Answer.innerHTML = 0.25*Math.sqrt(4*A**3*B**3-(A**2+B**2-C**2)**2)
};