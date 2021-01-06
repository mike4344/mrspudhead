window.addEventListener("DOMContentLoaded", (event) => {
  const title = document.getElementById('title')
  const firstName = document.getElementById('first-name')
  const lastName = document.getElementById('last-name')
  const eyeColor = document.getElementById('eye-color')
  const height = document.getElementById('height')
  const licenseNum = document.getElementById('license-num')
  const licenseNumConfirm = document.getElementById('license-num-confirm')
  const donorStatus = document.getElementById('donor-status')
  const formAll = document.getElementById('drivers-license-form')
  // ** Phase 1B: Update license with event delegation and event.target **
  formAll.addEventListener("input", (event) => {
    let value = event.target.value
  })

  // ** Phase 2: Add focus and blur events to form inputs **


  // ** Phase 3: Check that license numbers match **


  // ** Phase 4: Update submit button click count **


});
