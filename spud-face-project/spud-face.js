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
        cardElement.innerText = value
    }
  })
  // ** Phase 1B: Update license with event delegation and event.target **

  // ** Phase 2: Add focus and blur events to form inputs **


  // ** Phase 3: Check that license numbers match **


  // ** Phase 4: Update submit button click count **


});
