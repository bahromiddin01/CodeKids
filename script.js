// Log In Button.........................................
const logInModal = document.querySelectorAll('.logInModal');
const loginBtn = document.querySelectorAll('#loginBtn');
const exitLogIn = document.querySelectorAll('.exitLogIn');
const loginWithGoogle = document.querySelectorAll('.loginWithGoogle');
const loginWithApple = document.querySelectorAll('.loginWithApple');

loginBtn?.forEach(element => {
    element.addEventListener('click', () => {
        logInModal.forEach(e => {
            e.style.display = 'flex';
        })
    })
});

exitLogIn?.forEach(element => {
    element.addEventListener('click', () => {
        logInModal.forEach(e => {
            e.style.display = 'none'
        })
    })
})

loginWithGoogle?.forEach(element => {
    element.addEventListener('click', () => {
        alert('Bu sahifa hozircha mavjud emas')
    })
})

loginWithApple?.forEach(element => {
    element.addEventListener('click', () => {
        alert('Bu sahifa hozircha mavjud emas')
    })
});


// Sign Up Button.......................................
const signUpBtn = document.querySelectorAll('.signUpBtn');
const signUpModal = document.querySelector('.signUpModal');
const exitSignUp = document.querySelectorAll('.exitSignUp');
const continueWithGoogle = document.querySelector('.continueWithGoogle');
const continueWithApple = document.querySelector('.continueWithApple');

signUpBtn.forEach(function (signUp) {
    signUp.addEventListener('click', function () {
        signUpModal.style.display = 'flex';
    })
})

exitSignUp.forEach(e => {
    e.addEventListener('click', function () {
        signUpModal.style.display = 'none';
    })
});

continueWithGoogle?.addEventListener('click', function () {
    alert('Bu sahifa hali mavjud emas');
});

continueWithApple?.addEventListener('click', function () {
    alert('Bu sahifa hali mavjud emas');
});

// Form........................................................
const form = document.getElementById('form');
const submitBtn = document.getElementById('submitBtn');
const submitModal = document.querySelector('.submitModal');
const exitSubmit = document.querySelector('.exitSubmit');

form?.addEventListener('submit', function (event) {
    event.preventDefault();
    form.reset();
    setTimeout(function () {
        submitModal.style.display = 'flex';
    }, 500);
});

exitSubmit?.addEventListener('click', function () {
    submitModal.style.display = 'none';
})

// Menu.............................................................
const menuIcon = document.querySelectorAll('.menuIcon');
const menuModal = document.querySelectorAll('.menuModal');
const exitMenu = document.querySelectorAll('.exitMenu');

menuIcon.forEach(function (icon) {
    icon.addEventListener('click', () => {
        menuModal.forEach(e => e.style.display = 'flex')
    });
});

exitMenu.forEach(function (exit) {
    exit.addEventListener('click', () => {
        menuModal.forEach(e => e.style.display = 'none')
    });
});