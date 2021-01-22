const user = {
    UserName: 'Alex',
    age: 35,
    purchases: ['phone', 'car', 'laptop']
};

function apples() {
    console.log("apples");
}


// THIS
window.apples();

console.log(this)