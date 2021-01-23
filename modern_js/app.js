const userList = document.querySelectorAll(".name-list li");
const listInput = document.querySelector('.list-input');

for (user of userList) {
    user.addEventListener("click", function() {
        this.style.color = "red";
    });
}

console.log(listInput.value);