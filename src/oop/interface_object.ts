interface User{
    name : string
    id : number
    email: string
    isActive? : true //? suggest this property is optional
    [key: string]: any// Index signature to allow additional properties
}

//Interface implementation in an object creation
//defined properties of User object with help of interface
//this properties has to be there in any object type user
//no additional type can be introducted in any object type const unless its pre defined in interface
const user1 : User={
    name : "Md Rezwan Hassan Khan", 
    id : 15101078,
    email: 'md.rezwanhassankhan@gmail.com',
    isActive : true,
    extraProperty : 'This is allowed'
}

// Print individual properties
console.log("Name:", user1.name);              // Output: Name: Md Rezwan Hassan Khan
console.log("ID:", user1.id);                  // Output: ID: 15101078
console.log("Email:", user1.email);            // Output: Email: md.rezwanhassankhan@gmail.com
console.log("Is Active:", user1.isActive);     // Output: Is Active: true
console.log("Extra Property:", user1.extraProperty); // Output: Extra Property: This is allowed

