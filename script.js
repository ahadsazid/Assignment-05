const signIn = document.getElementById("sign-in");
const userName = document.getElementById("username");
const passWord = document.getElementById("password");

signIn.addEventListener("click", function () {
    if (userName.value === "admin" && passWord.value === "admin123") {
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password");
    }
});