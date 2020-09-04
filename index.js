function getDogImage(number) {
    fetch (`https://dog.ceo/api/breeds/image/random/${number}`)
        .then(response => response.json())
        .then(responseJson => renderDogs(responseJson))
}

function renderDogs(responseJson) {
console.log(responseJson);
$('section').html(responseJson.message.map(image => `
    <img src="${image}"><br>
`)
);

}

function watchForm() {
$('form').submit( e => {
    const number = e.target.number.value;
    event.preventDefault();
    getDogImage(number);
});
}

$(watchForm)