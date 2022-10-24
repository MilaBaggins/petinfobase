function createCardRegister() {
    const sectionRegistration = document.getElementById('registrationSection')

    const form = document.createElement('div')
    form.setAttribute('id', 'card')

    const h3BackToLogin = document.createElement('div')
    h3BackToLogin.classList.add('h3BacktoLogin')

    const h3Registration = document.createElement('h3')
    h3Registration.classList.add('h3registration')
    h3Registration.innerText = ('Cadastro')

    const buttonBackToLogin = document.createElement('button')
    buttonBackToLogin.setAttribute('id', 'backToLoginId1')
    buttonBackToLogin.innerText = ('Voltar para o login')

    const userLabel = document.createElement('label')
    userLabel.setAttribute('id', 'userLabelId')
    userLabel.innerText = ('Usuário')

    const userInput = document.createElement('input')
    userInput.setAttribute('id', 'userInput')
    userInput.placeholder = ('Digite seu usuário aqui')
    userInput.required = ('true')
    userInput.type = ('text')

    const emailLabel = document.createElement('label')
    emailLabel.setAttribute('id', 'emailLabel')
    emailLabel.innerText = ('E-mail')

    const inputEmail = document.createElement('input')
    inputEmail.setAttribute('id', 'emailInput')
    inputEmail.placeholder = ('digite seu e-mail aqui')
    inputEmail.required = ('true')
    inputEmail.type = ('email')

    const labelLinkImg = document.createElement('label')
    labelLinkImg.setAttribute('id', 'linklLabel')
    labelLinkImg.innerText = ('Link da foto do perfil')

    const inputLinkImg = document.createElement('input')
    inputLinkImg.setAttribute('id', 'linkImgInput')
    inputLinkImg.placeholder = ('Insira o link aqui')
    inputLinkImg.required = ('true')
    inputLinkImg.type = ('url')

    const passwordLabel = document.createElement('label')
    passwordLabel.setAttribute('id', 'passwordId')
    passwordLabel.innerText = ('Senha')

    const inputPassword = document.createElement('input')
    inputPassword.setAttribute('id', 'passwordLabelId')
    inputPassword.placeholder = ('Digite sua senha aqui')
    inputPassword.required = ('true')
    inputPassword.type = ('password')

    const buttonRegister = document.createElement('button')
    buttonRegister.classList.add('button-blue-large')
    buttonRegister.setAttribute('id', 'registrationIdButton')
    buttonRegister.innerText = ('Cadastrar')
    buttonRegister.disabled = true

    const buttonBackToLogin2 = document.createElement('button')
    buttonBackToLogin2.classList.add('button-grey-large')
    buttonBackToLogin2.setAttribute('id', 'backToLoginId')
    buttonBackToLogin2.innerText = ('Voltar para o login')

    h3BackToLogin.append(h3Registration, buttonBackToLogin)
    form.append(h3BackToLogin, userLabel, userInput, emailLabel, inputEmail, labelLinkImg, inputLinkImg, passwordLabel, inputPassword, buttonRegister, buttonBackToLogin2)
    sectionRegistration.appendChild(form)
}
createCardRegister()

function getInfoRegister() {
    const userRegister = document.getElementById('userInput')
    userRegister.value
    const emailRegister = document.getElementById('emailInput')
    emailRegister.value
    const linkImgRegister = document.getElementById('linkImgInput')
    linkImgRegister.value
    const passwordRegister = document.getElementById('passwordLabelId')
    passwordRegister.value

    const userRegisterApi = {
        "username": userRegister.value,
        "email": emailRegister.value,
        "avatar": linkImgRegister.value,
        "password": passwordRegister.value
    }
    return userRegisterApi
}



const clickregister = document.getElementById('acessIdButton')
function register() {
    const registerButton = document.getElementById('registrationIdButton')
    

    registerButton.addEventListener('click', async () => {
        registerButton.innerHTML = ''
        const imgSpinner = document.createElement('img')
        imgSpinner.src = ('../../assets/img/spinner.svg')
        imgSpinner.alt = ('Spinner Loading')
        imgSpinner.classList.add('loading')

        registerButton.appendChild(imgSpinner)
        const getInfoRegisterReturn = getInfoRegister()

        const resultRegister = await fetch(createUserPath, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(getInfoRegisterReturn),
        })
        console.log(resultRegister)
        if (resultRegister.status === 200){
            window.location = 'pages/login/index.html'
        }
    })
}
register()

function validationInputRegister() {
    const validUserRegister = document.getElementById('userInput')
    const validEmailInputRegister = document.getElementById('emailInput')
    const validImgLink = document.getElementById('linkImgInput')
    const validpasswordInputRegister = document.getElementById('passwordLabelId')
    const buttonRegisterDisable = document.getElementById('registrationIdButton')

    validUserRegister.addEventListener('input', () => {

        if (validUserRegister.value === '' || validEmailInputRegister.value === '' || validImgLink.value === '' || validpasswordInputRegister.value === '' ){
            buttonRegisterDisable.disabled = true
        } else {
            buttonRegisterDisable.disabled = false

        }
    })

    validEmailInputRegister.addEventListener('input', () => {

        if (validUserRegister.value === '' || validEmailInputRegister.value === '' || validImgLink.value === '' || validpasswordInputRegister.value === '' ){
            buttonRegisterDisable.disabled = true
        } else {
            buttonRegisterDisable.disabled = false

        }
    })

    validImgLink.addEventListener('input', () => {

        if (validUserRegister.value === '' || validEmailInputRegister.value === '' || validImgLink.value === '' || validpasswordInputRegister.value === '' ){
            buttonRegisterDisable.disabled = true
        } else {
            buttonRegisterDisable.disabled = false

        }
    })

    validpasswordInputRegister.addEventListener('input', () => {

        if (validUserRegister.value === '' || validEmailInputRegister.value === '' || validImgLink.value === '' || validpasswordInputRegister.value === '' ){
            buttonRegisterDisable.disabled = true
        } else {
            buttonRegisterDisable.disabled = false

        }
    })
}
validationInputRegister()