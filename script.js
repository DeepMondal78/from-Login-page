const passinput = document.getElementById('password');
passinput.onclick = function () {

    let password_box = document.querySelector('.password_show');
    let passText = document.getElementById('pass_text');

    if (passinput.value != "") {
        password_box.style.display = "none"
    }
    else {
        password_box.style.display = "block"
    }

    passText.onclick = function () {
        let new_pass = passText.innerHTML;
        passinput.value = new_pass;
        password_box.style.display = "none"
    }
}
passinput.oninput = function () {
    let password_box = document.querySelector('.password_show');
    password_box.style.display = "none";
}

const wrapper = document.querySelector(".wrapper");
const login_link = document.querySelector(".loginLink");
const register_link = document.querySelector(".registerLink");
register_link.addEventListener('click', () => {
    wrapper.classList.add('active')
});
login_link.addEventListener('click', () => {
    wrapper.classList.remove('active')
});

const btnPopup = document.querySelector(".btnLogin-popup");
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup')
});

const iconClose = document.querySelector(".icon-close");
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup')
});

const check_Box = document.getElementById("checkBox");
const loginBtn = document.querySelector('.login_btn');
check_Box.onclick = function () {
    if (check_Box.checked == true) {
        loginBtn.style.cursor = "pointer";
    } else if (check_Box.checked == false) {
        loginBtn.style.cursor = "not-allowed";
    }
}

const userPass = document.querySelector("#user-password");
const alertText = document.querySelector('.alert-text');
const checkbox = document.getElementById("check_Box");
const registerBtn = document.querySelector('.register_btn');
userPass.addEventListener('input', () => {
    if (userPass.value.length == 0) {
        alertText.style.display = "none";
    } else {
        alertText.style.display = "block";
        userPass.classList.add('active-popup');
    }
    if (userPass.value.length <= 8) {
        alertText.style.width = "75%";
        alertText.textContent = "Minimum Password 8 Character";
    } else if (userPass.value.length > 8) {
        alertText.style.width = "99%";
        alertText.textContent = "Password must be at least 8 characters long";
    } if (userPass.value.length >= 8) {
        userPass.value = userPass.value.slice(0, 9);
    } 
});

checkbox.onclick = function () {
    if (checkbox.checked == true) {
        registerBtn.style.cursor = "pointer";
    } else if (checkbox.checked == false) {
        registerBtn.style.cursor = "not-allowed";
    } else if (userPass.value.length == 8 && conformPass.value.length == 8) {
        registerBtn.style.cursor = "pointer"
    } else {
        registerBtn.style.cursor = "not-allowed";
    }
}

const eyeIcon1 = document.querySelector("#fa-eye-first");
const eyeIcon2 = document.querySelector("#fa-eye-slash-first");
const eyeIcon3 = document.querySelector("#fa-eye-second");
const eyeIcon4 = document.querySelector("#fa-eye-slash-second");
const conformPass = document.getElementById("conform-password");
eyeIcon1.addEventListener('click', () => {
    eyeIcon1.style.display = "none"
    eyeIcon2.style.display = "block"
    userPass.type = "password"
});
eyeIcon2.addEventListener('click', () => {
    eyeIcon1.style.display = "block";
    eyeIcon2.style.display = "none";
    userPass.type = "text";
});
eyeIcon3.addEventListener('click', () => {
    eyeIcon3.style.display = "none"
    eyeIcon4.style.display = "block"
    conformPass.type = "password"

});
eyeIcon4.addEventListener('click', () => {
    eyeIcon3.style.display = "block";
    eyeIcon4.style.display = "none";
    conformPass.type = "text";
});
conformPass.addEventListener('input', () => {
    if (conformPass.value.length >= 8) {
        conformPass.value = conformPass.value.slice(0, 8);
    }
});

