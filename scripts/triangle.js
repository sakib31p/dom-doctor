function calculateTriangleArea(){
    // triangle base 
    const triangleInput = document.getElementById('triangle-base');
    const triangleBase = triangleInput.value;
    const base = parseFloat(triangleBase);
    console.log(base);
    // trianle hight 
    const triangleHightInput = document.getElementById('triangle-hight');
    const triangleHight = triangleHightInput.value;
    const hight = parseFloat(triangleHight);
    console.log(hight);
    // calculate area 
    const area = 0.5 * base * hight;
    console.log(area);
    // display set 
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;


}