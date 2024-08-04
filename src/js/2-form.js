const formEl = document.querySelector('.feedback-form');
let formData = {};

const fillFormFilds = () => {
  const formDataFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      formEl.elements[key].value = formDataFromLS[key];
    }
  }
};

fillFormFilds();

const onFormInput = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();
  formData[fieldName] = fieldValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFormSubmit = event => {
  event.preventDefault();
  if (
    formEl.elements.email.value === '' ||
    formEl.elements.message.value === ''
  ) {
    alert('Fill please all fields');
  }

  event.target.reset();
  localStorage.removeItem('feedback-form-state');
};

formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', onFormSubmit);
