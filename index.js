function getDogImage(dogBreed) {
    fetch (`https://dog.ceo/api/breed/${dogBreed}/images/random`)
        .then(response => response.json())
        .then(responseJson => renderDogs(responseJson))
        .catch(error => alert('Breed not recognized. Please try again.'));
}

function renderDogs(responseJson) {
console.log(responseJson);
$('section').html(`
    <img src="${responseJson.message}">
`);

}

function watchForm() {
$('form').submit( e => {
    const dogBreed = e.target.dogBreed.value;
    event.preventDefault();
    getDogImage(dogBreed);
});
}

$(watchForm)