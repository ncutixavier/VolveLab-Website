const barBtn = document.querySelector('.bars')
const navbar = document.querySelector('.navbar-list')
const name = document.querySelector('#name')
const mail = document.querySelector('#mail')
const message = document.querySelector('#message')
const nameErr = document.querySelector('.name-err')
const mailErr = document.querySelector('.mail-err')
const messageErr = document.querySelector('.message-err')
const submitBtn = document.querySelector('#submit-btn')

window.onscroll = function () {
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        document.querySelector('.scroll-up-btn').style.display = "block"
    } else {
        document.querySelector('.scroll-up-btn').style.display = "none"
    }
};

barBtn.addEventListener('click', (e) => {
    navbar.classList.toggle('active')
})

const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const nameIsValid = name => {
    return /^[a-zA-Z\s]+$/.test(name);
}

const validate = (e) => {

    if (!nameIsValid(name.value)) {
        nameErr.style.display = 'inline'
        nameErr.textContent = "Please enter a valid name"
        name.focus()
        return false
    } else {
        nameErr.style.display = 'none'
    }

    if (!emailIsValid(mail.value)) {
        mailErr.style.display = 'inline'
        mailErr.textContent = "Please enter a valid mail"
        return false
    } else {
        mailErr.style.display = 'none'
    }

    if (message.value == "") {
        messageErr.style.display = 'inline'
        messageErr.textContent = "Please enter a valid message"
        return false
    } else {
        messsageErr.style.display = 'none'
    }

    if ((name.value || mail.value || message.value) == "") {
        return false
    } else {
        console.log(name.value, mail.value, message.value)
        return true
    }

}

submitBtn.addEventListener('click', validate)

