var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

console.log(users[1].age) // prints John's age

console.log(users[0].name) // prints name of first object

// prints name and age
for (var i=0; i<users.length; i++){
    console.log(users[i].name +" - "+ users[i].age)
}