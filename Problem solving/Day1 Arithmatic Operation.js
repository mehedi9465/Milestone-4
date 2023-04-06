function getArea(length, width) {
    return length * width;
}

function getPerimeter(length, width){
    let perimeter = 2 * (length + width);
    return perimeter;
}


function main() {
    const length = +(readLine());
    const width = +(readLine());
    
    console.log(getArea(length, width));
    console.log(getPerimeter(length, width));
}