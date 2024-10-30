var HeronListener = document.getElementById("HeronsFormula");
HeronListener.addEventListener("submit", function(event) {
    event.preventDefault();
    HeronsFormula();
});
function HeronsFormula(){
    var A = document.getElementById("SideA").value;
    var B = document.getElementById("SideB").value;
    var C = document.getElementById("SideC").value;
    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        alert("Please enter valid numbers for all sides.");
        return;
    };
    alert("Form Submitted");
    Answer = 0.25*Math.sqrt(4*A**2*B**2-(A**2+B**2-C**2)**2);
    if (isNaN(Answer) | Answer==0){
        document.getElementById("AreaResults").value = "No Area Possible";
        return
    }
    document.getElementById("AreaResults").value = Answer;
};
var AmbiguousCaseListener = document.getElementById("AmbiguousCaseFormula");
AmbiguousCase.addEventListener("submit", function(event) {
    event.preventDefault();
    AmbiguousCaseFormula();
});
function AmbiguousCaseFormula(){
    var AA = document.getElementById("AngleA").value;
    var SA = document.getElementById("SideA_Ambiguous").value;
    var SB = document.getElementById("SideB_Ambiguous").value;
    if (isNaN(AA) || AA>=180 || isNaN(SA) || isNaN(SB)){
        alert("Please enter valid numbers for the angle (Below 180° for a valid triangle) and sides. ");
        return;
    };
    alert("Form Submitted");
    RadAA = AA*(Math.PI/180);
    var h = SB*Math.sin(RadAA);
    if (AA>90){
        if (SA<=SB){
            document.getElementById("TriangleTypeResults").value = "No Triangle";
            return;
        };
        if (SA>SB){
            document.getElementById("TriangleTypeResults").value = "One Triangle";
            return;
        };
    };
    if (AA<=90){
        if (SA<h){
            document.getElementById("TriangleTypeResults").value = "No Triangle";
            return;
        };
        if (SA==h){
            document.getElementById("TriangleTypeResults").value = "Right Triangle";
            return;
        }
        if (h<SA && SA<SB){
            document.getElementById("TriangleTypeResults").value = "two triangles (ambiguous case)";
            return;
        };
        if (SA>SB){
            document.getElementById("TriangleTypeResults").value = "One Triangle";
            return;
        };
        
    };
};