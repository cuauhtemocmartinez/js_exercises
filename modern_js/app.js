const userList = document.querySelectorAll(".name-list li");

for (user of userList) {
    user.addEventListener("click", function() {
        this.style.color = "red";
    });
}