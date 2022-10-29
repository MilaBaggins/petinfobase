function createLoginCard(wrongPasswordTrue) {

    const loginSection = document.getElementById('loginSection')
    loginSection.innerText = ''

    const formCardLogin = document.createElement('div')
    formCardLogin.setAttribute('id', 'cardLogin')

    const backToLoginDiv = document.createElement('div')
    backToLoginDiv.classList.add('h3BacktoLogin')

    const h3BackToLogin = document.createElement('h3')
    h3BackToLogin.classList.add('h3registration')
    h3BackToLogin.innerText = ('Login')

    const emailLabelLogin = document.createElement('label')
    emailLabelLogin.setAttribute('id', 'emailLabelLogin')
    emailLabelLogin.innerText = ('E-mail')

    const inputEmailLogin = document.createElement('input')
    inputEmailLogin.setAttribute('id', 'emailInputLogin')
    inputEmailLogin.placeholder = ('digite seu e-mail aqui')
    inputEmailLogin.required = ('true')
    inputEmailLogin.type = ('email')

    const passwordLabelLogin = document.createElement('label')
    passwordLabelLogin.setAttribute('id', 'passwordIdLogin')
    passwordLabelLogin.innerText = ('Senha')

    const inputPasswordLogin = document.createElement('input')
    inputPasswordLogin.setAttribute('id', 'passwordLabelIdLogin')
    inputPasswordLogin.placeholder = ('Digite sua senha aqui')
    inputPasswordLogin.required = ('true')
    inputPasswordLogin.type = ('password')

    const divAlert = document.createElement('div')
    divAlert.setAttribute('div', 'divAlertId')

    if (wrongPasswordTrue === true) {

        const alertWrongPasswoord = document.createElement('small')
        alertWrongPasswoord.innerText = ('A senha está incorreta')
        alertWrongPasswoord.style.color = ('var(--alert100)')

        divAlert.appendChild(alertWrongPasswoord)
    }


    const buttonRegister = document.createElement('button')
    buttonRegister.classList.add('button-blue-large')
    buttonRegister.setAttribute('id', 'acessIdButton')
    buttonRegister.innerText = ('Acessar')
    buttonRegister.disabled = true

    const divPLogin = document.createElement('div')
    divPLogin.classList.add('divPLogin')

    const pIDontHaveAnAccount = document.createElement('p')
    pIDontHaveAnAccount.setAttribute('id', 'pDontHaveAnAcount')
    const pIDontHaveAnAccountStrong = document.createElement('strong')
    pIDontHaveAnAccountStrong.innerText = ('Ainda não possui uma conta?')

    const pClickRegister = document.createElement('p')
    pClickRegister.setAttribute('id', 'pCLickRegisterLogin')
    pClickRegister.innerText = ('Clicando no botão abaixo, você pode se cadastrar rapidamente')

    const buttonBackToLoginRegister = document.createElement('button')
    buttonBackToLoginRegister.classList.add('button-grey-large')
    buttonBackToLoginRegister.setAttribute('id', 'backToLoginIdRegister')
    buttonBackToLoginRegister.innerText = ('Cadastrar')

    pIDontHaveAnAccount.appendChild(pIDontHaveAnAccountStrong)
    backToLoginDiv.appendChild(h3BackToLogin)
    divPLogin.append(pIDontHaveAnAccount, pClickRegister)

    formCardLogin.append(backToLoginDiv, emailLabelLogin, inputEmailLogin, passwordLabelLogin, inputPasswordLogin, divAlert, buttonRegister, divPLogin, buttonBackToLoginRegister)
    loginSection.appendChild(formCardLogin)

}
createLoginCard(false)


const clickAcessar = document.getElementById('acessIdButton')

async function acess() {
    const buttonAcess = document.getElementById('acessIdButton')

    buttonAcess.addEventListener('click', async () => {
        buttonAcess.innerHTML = ''

        const imgSpinner = document.createElement('img')
        imgSpinner.src = ('../../assets/img/spinner.svg')
        imgSpinner.alt = ('Spinner Loading')
        imgSpinner.classList.add('loading')

        buttonAcess.appendChild(imgSpinner)
        const getInfoReturn = getInfo()

        const result = await fetch(loginPath, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(getInfoReturn),
        })
        console.log(result)
        if (result.status === 200) {
            const body = await result.json()
            localStorage.setItem('token', JSON.stringify(body))
            window.location = '../home/index.html'
        } else {
            createLoginCard(true)
        }
    })
}
acess()


function getInfo() {
    const emailLogin = document.getElementById('emailInputLogin')
    emailLogin.value
    const passwordLogin = document.getElementById('passwordLabelIdLogin')
    passwordLogin.value

    const user = {
        "email": emailLogin.value,
        "password": passwordLogin.value
    }
    return user
}

function validationInput() {
    const validEmailInput = document.getElementById('emailInputLogin')
    const validpasswordInput = document.getElementById('passwordLabelIdLogin')
    const buttonDisable = document.getElementById('acessIdButton')

    validEmailInput.addEventListener('input', () => {

        if (validEmailInput.value === '' || validpasswordInput.value === '') {
            buttonDisable.disabled = true
        } else {
            buttonDisable.disabled = false

        }
    })

    validpasswordInput.addEventListener('input', () => {
        if (validEmailInput.value === '' || validpasswordInput.value === '') {
            buttonDisable.disabled = true
        } else {
            buttonDisable.disabled = false

        }
    })
}
validationInput()

const buttonRegistertoLogin = document.getElementById('backToLoginIdRegister')

buttonRegistertoLogin.addEventListener('click', ()=>{
    window.location = '../../index.html'
})