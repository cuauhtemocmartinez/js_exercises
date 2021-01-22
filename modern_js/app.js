const user = {
    userName: 'Alex',
    age: 35,
    purchases: ['phone', 'car', 'laptop'],

    sayName: function() {
        console.log(`My Name is ${this.userName}.`);
        console.log(`My age is ${this.age}.`);
        console.log(`I purchased a ${this.purchases}.`);
    }
};

user.sayName();

