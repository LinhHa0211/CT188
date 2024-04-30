var labels = {
    //Login_Register
    //Login
    "FORM_LOGIN_NAME": {
        "vi-VN": "Đăng Nhập",
        "en_US": "Login",
    },
    "FORM_LOGIN_INPUT-PASSWORD": {
        "vi-VN": "Mật khẩu",
        "en_US": "Password",
    },
    "FORM_LOGIN_REMEMBER": {
        "vi-VN": "Ghi nhớ đăng nhập",
        "en_US": "Remember me",
    },
    "FORM_LOGIN_FORGOT": {
        "vi-VN": "Quên mật khẩu?",
        "en_US": "Forgot Password",
    },
    "FORM_LOGIN_BUTTON": {
        "vi-VN": "Đăng Nhập",
        "en_US": "Login",
    },
    "FORM_LOGIN_HAVE-ACCOUNT": {
        "vi-VN": "Bạn không có tài khoản?",
        "en_US": "Don't have an account?",
    },
    "FORM_LOGIN_REGISTER": {
        "vi-VN": "Đăng Ký",
        "en_US": "Register",
    },
    //Register
    "FORM_REGISTER_NAME": {
        "vi-VN": "Đăng Ký",
        "en_US": "Registration",
    },
    "FORM_REGISTER_INPUT-NAME": {
        "vi-VN": "Tên tài khoảkhoản",
        "en_US": "User name",
    },
    "FORM_REGISTER_INPUT-PASSWORD": {
        "vi-VN": "Mật khẩu",
        "en_US": "Password",
    },
    "FORM_REGISTER_POLICY": {
        "vi-VN": "Tôi đồng ý với Các Điều Khoản và Điều Kiện",
        "en_US": "I agree to the terms & conditions",
    },
    "FORM_REGISTER_BUTTON": {
        "vi-VN": "Đăng Ký",
        "en_US": "Register",
    },
    "FORM_REGISTER_HAVE-ACCOUNT": {
        "vi-VN": "Bạn đã có tài khoản?",
        "en_US": "Already have an account?",
    },
    "FORM_REGISTER_LOGIN": {
        "vi-VN": "Đăng Nhập",
        "en_US": "Login",
    },
}


var loginLabels = {
    "FORM_LOGIN_NAME": {
        "vi-VN": "Đăng Nhập",
        "en_US": "Login",
    },
    "FORM_LOGIN_INPUT-PASSWORD": {
        "vi-VN": "Mật khẩu",
        "en_US": "Password",
    },
    "FORM_LOGIN_REMEMBER": {
        "vi-VN": "Ghi nhớ đăng nhập",
        "en_US": "Remember me",
    },
    "FORM_LOGIN_FORGOT": {
        "vi-VN": "Quên mật khẩu?",
        "en_US": "Forgot Password",
    },
    "FORM_LOGIN_BUTTON": {
        "vi-VN": "Đăng Nhập",
        "en_US": "Login",
    },
    "FORM_LOGIN_HAVE-ACCOUNT": {
        "vi-VN": "Bạn không có tài khoản?",
        "en_US": "Don't have an account?",
    },
    "FORM_LOGIN_REGISTER": {
        "vi-VN": "Đăng Ký",
        "en_US": "Register",
    }
}

var registerLabels = {
    "FORM_REGISTER_NAME": {
        "vi-VN": "Đăng Ký",
        "en_US": "Registration",
    },
    "FORM_REGISTER_INPUT-NAME": {
        "vi-VN": "Tên tài khoản",
        "en_US": "User name",
    },
    "FORM_REGISTER_INPUT-PASSWORD": {
        "vi-VN": "Mật khẩu",
        "en_US": "Password",
    },
    "FORM_REGISTER_POLICY": {
        "vi-VN": "Tôi đồng ý với Các Điều Khoản và Điều Kiện",
        "en_US": "I agree to the terms & conditions",
    },
    "FORM_REGISTER_BUTTON": {
        "vi-VN": "Đăng Ký",
        "en_US": "Register",
    },
    "FORM_REGISTER_HAVE-ACCOUNT": {
        "vi-VN": "Bạn đã có tài khoản?",
        "en_US": "Already have an account?",
    },
    "FORM_REGISTER_LOGIN": {
        "vi-VN": "Đăng Nhập",
        "en_US": "Login",
    }
}

setLanguage("vi-VN");

function setLanguage(language){
    if (localStorage.getItem("language") == language){
        return;
    }
    localStorage.setItem("language", language);
    window.location.reload();
}

function getLanguage(){
    return localStorage.getItem("language");
}

function changeLoginLanguage(){
    let language = getLanguage();

    for (const [key, value] of Object.entries(loginLabels)) {
        
        if (key == 'FORM_LOGIN_HAVE-ACCOUNT'){
            document.getElementById(key).innerHTML = `${value[language]} <a href="./register.html">${loginLabels["FORM_LOGIN_REGISTER"][language]}</a>`;
            continue;
        }

        if (key == 'FORM_LOGIN_REMEMBER') {
            document.getElementById(key).innerHTML = `<input type="checkbox" >${value[language]}`;
            continue;
        }

        document.getElementById(key).innerText = value[language];
    }
}

function changeRegisterLanguage(){
    let language = getLanguage();

    for (const [key, value] of Object.entries(registerLabels)) {

        if (key == 'FORM_REGISTER_HAVE-ACCOUNT'){
            document.getElementById(key).innerHTML = `${value[language]} <a href="./login.html">${registerLabels["FORM_REGISTER_LOGIN"][language]}</a>`;
            continue;
        }

        if (key == 'FORM_REGISTER_POLICY') {
            document.getElementById(key).innerHTML = `<input type="checkbox" >${value[language]}`;
            continue;
        }

        document.getElementById(key).innerText = value[language];
    }
}