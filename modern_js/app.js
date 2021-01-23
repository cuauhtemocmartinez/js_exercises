const userList = document.querySelectorAll('.name-list li');

for (user of userlist){
    user.addEventListener("click", function(){
        console.log(this);
    });
}