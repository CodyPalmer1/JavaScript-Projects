const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const consentForm = document.getElementById('consent-form');
const modalText = document.getElementById('modal-text');
const declineBtn = document.getElementById('decline-btn');
const modalChoiceBtns = document.getElementById('modal-choice-btns');

const showModal = () => {
    setTimeout(() => {
        modal.style.display = 'inline';
    }, 1500);
};

const hideModal = () => {
    modal.style.display = 'none';
};

const toggleModalBtns = () => {
    modalChoiceBtns.classList.toggle('modal-btns-reverse');
};

const submitForm = (e) => {
    e.preventDefault();

    const consentFormData = new FormData(consentForm);
    const fullName = consentFormData.get('fullName');

    modalText.innerHTML = `
    <div class="modal-inner-loading">
      <img src="loading.svg" class="loading">
      <p id="upload-text">Uploading your data to the dark web...</p>
    </div>
  `;

    setTimeout(() => {
        document.getElementById('upload-text').innerText = `
      Making the sale...
    `;
    }, 1500);

    setTimeout(() => {
        document.getElementById('modal-inner').innerHTML = `
      <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
      <p>We just sold the rights to your eternal soul.</p>
      <div class="idiot-gif">
        <img src="images/pirate.gif">
      </div>
    `;
        modalCloseBtn.disabled = true;
    }, 3000);
};

showModal();

modalCloseBtn.addEventListener('click', hideModal);
declineBtn.addEventListener('mouseenter', toggleModalBtns);
consentForm.addEventListener('submit', submitForm);
