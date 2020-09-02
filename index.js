function getDogImage(dogBreed) {
  fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then((response) => response.json())
    .then((responseJson) => renderDogs(responseJson))
    .catch((error) => alert("Breed not recognized. Please try again."));
}

function renderDogs(responseJson) {
  if (responseJson.code === 404) {
    console.log(responseJson);
    $("section").html(`
        <h2>Sorry, that breed could not be found. Please try again.</h2>
        `);
  } else {
    console.log(responseJson);
    $("section").html(`
    <img src="${responseJson.message}">
`);
  }
}

function watchForm() {
  $("form").submit((e) => {
    const dogBreed = e.target.dogBreed.value;
    event.preventDefault();
    getDogImage(dogBreed);
  });
}

$(watchForm);
