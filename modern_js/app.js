const user = {
    userName: 'Alex',
    age: 35,
    purchases: ['phone', 'car', 'laptop'],

    sayName: function() {
        console.log(this.userName);
    }
};

user.sayName();
