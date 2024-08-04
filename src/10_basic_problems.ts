//1
function calculateRectangleArea(width:number,height:number){
    const area = width * height
    console.log(`the rectangle area = ${area} metere square`)

}


//2
function stringOrArray(name : string | string []) : string | string[]{
    
    if (typeof name == 'string'){
        return name.toUpperCase()
    }
    else{
        return  name.map((str) => str.toUpperCase())
        
    }

}


// //3
// function(){
    
// }







calculateRectangleArea(2,5)

console.log(stringOrArray('abc'))
console.log(stringOrArray(['s','j','k']))












calculateRectangleArea(2,5)