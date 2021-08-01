function createDivsForMemes() {
    const memeContainer = document.createElement("div");
    const imgElement = document.createElement("img");
    const topDiv = document.createElement("div");
    const bottomDiv = document.createElement("div");
    
    // Adding class attributes 
    memeContainer.classList.add("memeContainer");
    imgElement.classList.add("img");
    topDiv.classList.add("top");
    bottomDiv.classList.add("bottom");

    imgElement.src = document.getElementById("imgSrc").value;
    topDiv.innerHTML = document.getElementById("topText").value;
    bottomDiv.innerHTML = document.getElementById("botText").value;

    memeContainer.addEventListener("click", removeImage);

    memeContainer.appendChild(imgElement);
    memeContainer.appendChild(topDiv);
    memeContainer.appendChild(bottomDiv);

    document.body.appendChild(memeContainer);
}

function handleSubmit() {
    createDivsForMemes();
    imgSrc.value = "";
    makeTop();
    makeBot();
}

function makeTop() {
    let top = document.getElementById("topText")
    topText.value = "";
}

function makeBot() {
    let bottom = document.getElementById("botText")
    botText.value = "";
}

function removeImage(event) {
    let element = event.target.parentElement;
    element.remove();
}