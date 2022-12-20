const formSignup = document.querySelector('#form-signup')
const username = document.querySelector('.input-name')
const password = document.querySelector('.input-password')
const button = document.querySelector('.btn')
const info = document.querySelector('.info')
const inputs = document.querySelectorAll('input')
const navSignup = document.querySelector('.nav-signup')
const navSignin = document.querySelector('.nav-signin')


const handleSubmit = () => {

    const errors = []
    const userData = {}
    inputs.forEach(input => {
        if (!input.value || input.value == '') {
            errors.push(input.name)
            info.innerHTML = `${errors}  is required`
            input.style.border = '2px solid red'
        } else {
            input.style.border = 'none'
            userData[input.name] = input.value

        }
    })

    if (!errors.length && Object.entries(userData).length !== 0) {
        info.innerHTML = ''
        const json = JSON.stringify(userData);
        console.log(json)
        info.style.color = '#fff'
        info.innerHTML = (`Welcome ${JSON.parse(json).firstname.toUpperCase()}! You are registered!`)
    }
}


formSignup.addEventListener('submit', (e) => {
    e.preventDefault()
    handleSubmit()

})