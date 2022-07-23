addKittensToTheTable = () => {
    const elements = document.getElementsByTagName('td');
    const tableCellsArray = [].slice.call(elements);
    let i = 0;

    tableCellsArray.forEach((element) => {
        i++;
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', `http://placekitten.com/${100 * i}/` + 50 * i);

        element.innerHTML = '';
        element.appendChild(imageElement);
    });
}