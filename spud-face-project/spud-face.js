window.addEventListener("DOMContentLoaded", (event) => {
  const licenseNum = document.getElementById('license-num')
  const licenseNumConfirm = document.getElementById('license-num-confirm')
  const donorStatus = document.getElementById('donor-status')
  const formAll = document.getElementById('drivers-license-form')
  formAll.addEventListener("input", (event) => {
    let value = event.target.value
    let element = event.target
    let cardElement = document.getElementById(`card-${element.id}`)

    if (element === donorStatus) {
      if (donorStatus.checked) {
        cardElement.innerText = "True"
      } else {
        cardElement.innerText = "False"
      }
    } else {
      cardElement.addEventListener('focus', ()=> cardElement.classList.add('focus'), true)
      cardElement.addEventListener('blur', ()=> cardElement.classList.remove('focus'), true)
      // formAll.style = '.focused{backgroundColor:green}'
        cardElement.innerText = value
    }
  })
  // ** Phase 3: Check that license numbers match **
licenseNumConfirm.addEventListener('input', event =>{
  let value2 = event.target.value
  let value1 = licenseNum.value

  setTimeout(()=>{if (value1 === value2){
    licenseNum.classList.remove('confirmed')
    licenseNumConfirm.classList.remove('confirmed')
  } else{
    licenseNumConfirm.classList.add('confirmed')
    licenseNum.classList.add('confirmed')
  }},3000)
})

  // ** Phase 4: Update submit button click count **
const submit = document.querySelector('.form__submit')
console.log(submit)
let count = 0
submit.addEventListener('click', (event) => {

  count++
  submit.innerText = count
  event.preventDefault()
})

});
