function calculateParallelogramArea(){
   const parallelogramInput = document.getElementById('parallelogram-base');
   const parallelogramText = parallelogramInput.value;
   const base = parseFloat(parallelogramText);
   console.log(base);
   
//    hight 
const parallelogramHightInput = document.getElementById('parallelogram-hight');
const parallelogramHightText = parallelogramHightInput.value;
const hight = parseFloat(parallelogramHightText);
console.log(hight);
// calculate 
const areaCalculate = base * hight;
console.log(areaCalculate);

}