# Chippr.dev PE CRUD Form

Dit project omvat een CRUD formulier wat nieuwe projecten kan toevoegen aan de Chippr API d.m.v SSR en Progressive Enhancement.

## Wireflow
<img width="500" src="https://github.com/boudewijnbout/the-web-is-for-everyone-PE-crud-form/blob/main/public/images/IMG_0030.jpg" />

## Breakdown
<img width="500" src="https://github.com/boudewijnbout/the-web-is-for-everyone-PE-crud-form/blob/main/public/images/IMG_0031.jpg" />

## Code
```js
  // Cutting the Mustard
  <script type="module" src="scripts/index.js"></script>
  
 // Client-Side Fetch
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
 
```
<!-- documenteer het onderzoek met de browser ondersteuning in de WIKI van de leertaak -->

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
