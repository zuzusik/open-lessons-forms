window.addEventListener('load', () => {
  const userForm = document.getElementsByTagName('form')[0],
        submitButton = userForm.submit;

  userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userFormData = new FormData(userForm),
          formRequest = new XMLHttpRequest();

    function enableSubmitButton() {
      submitButton.disabled = false;
    }

    submitButton.disabled = true;
    formRequest.addEventListener('load', () => {
      enableSubmitButton();
      userForm.reset();
    });
    formRequest.addEventListener('error', enableSubmitButton);
    formRequest.open(userForm.method, userForm.action);
    formRequest.send(userFormData);
  });
});
