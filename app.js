//VARIABLES
const result = document.querySelector('.result')
const firstName = document.querySelector('#firstname')
const lastName = document.querySelector('#lastname')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const sex = document.querySelectorAll('.radio')
const date = document.querySelector('#date')
const check = document.querySelector('#check')
const btnSubmit = document.querySelector('button')

// GET TODAY'S DATE
const getDate = () => (date.valueAsDate = new Date())
getDate()

// GET RADIO VALUE
let sexValue = ''
const getSexValue = () =>
	sex.forEach((elem) => elem.checked && (sexValue = elem.value))

let checkValue = ''
const getCheckValue = () => {
	check.checked
		? (checkValue = check.value)
		: (checkValue = 'NO Permission granted')
}

// BTN SUBMIT
btnSubmit.addEventListener('click', (e) => {
	e.preventDefault()
	getSexValue()
	getCheckValue()

	result.innerHTML = `
        <fieldset>
            <legend>RESULT</legend>
                <p>firstname: ${firstname.value}</p>
                <p>lastname: ${lastname.value}</p>
                <p>email: ${email.value}</p>
                <p>phone: ${phone.value}</p>
                <p>date of birth: ${date.value}</p>
                <p>sex: ${sexValue} </p>
                <p>verified: ${checkValue}</p>
        </fieldset>
       `
})
