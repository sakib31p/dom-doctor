function calculateRectangleArea(){
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleText = rectangleWidth.value;
    const width = parseFloat(rectangleText);
    console.log(width);
    // 2nd 
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLength.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length);
    // multiply 
    const area = width * length;
    console.log(area);
    // display set 
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;



}