const createProjectForm = document.querySelector("#create-project-form");
const apiUrl = "https://chipr.api.fdnd.nl/v1/project";
const successMessage = document.querySelector(".success-msg");

// Form inputs
const nameInput = document.querySelector("#name");
const shortDescriptionInput = document.querySelector("#short_description");
const descriptionInput = document.querySelector("#description");
const logoInput = document.querySelector("#logo");
const linkInput = document.querySelector("#link");
const mainImgInput = document.querySelector("#main_img");

// Logics
createProjectForm.addEventListener("submit", submitForm);

/**
 * Submit create project form with form data to API.
 *
 * @function submitForm
 * @param {e} event Submit event of the form.
 */
function submitForm(e) {
  e.preventDefault();

  // Get form data
  let data = getFormData();

  // Request Options
  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Send a request to the API   
  fetch(apiUrl, options).then((res) => {

    successMessage.classList.add("visible");

    return console.log(res.json);
  });
}

/**
 * Gets data from the create project form.
 *
 * @function getFormData
 * @returns {data} Variable that contains the data from the form.
 */
function getFormData() {
  let data = {
    name: nameInput.value,
    short_description: shortDescriptionInput.value,
    description: descriptionInput.value,
    logo: logoInput.value,
    link: linkInput.value,
    main_img: mainImgInput.value,
  };

  return JSON.stringify(data);
}

