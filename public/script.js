
const formSignup = document.querySelector('#form-signup')
const info = document.querySelector('.info')
const infoAPI = document.querySelector('.api-info')
const inputs = document.querySelectorAll('input')


const handleSubmit = async () => {
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
        info.style.color = '#fff'
        info.style.letterSpacing = '6px'
        info.innerHTML = (`Welcome ${userData.firstname}`).toUpperCase()
        axios.post("http://localhost:3000/signup", userData).then(res => {
            infoAPI.innerHTML = res.data.message

        })

    } else {
        infoAPI.innerHTML = ''
        info.style.color = 'gold'
        info.style.letterSpacing = 'normal'
        return false
    }
}


formSignup.addEventListener('submit', (e) => {
    e.preventDefault()
    handleSubmit()

})


