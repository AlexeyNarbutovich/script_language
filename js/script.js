let addBtn;
let deleteBtn;
let getIdNumber = getId();

window.onload = function(){
    addBtn = document.getElementById("addBtn");
    deleteBtn = document.getElementById("deleteBtn");
    addBtn.addEventListener("click", addNewCard);
    fillInDocument();
}

function clearValue(){
    document.getElementById("descriptionInput").value = "";
}

function addNewCard(){
    let description = document.getElementById("descriptionInput").value;
    if (description === "") description = "New Description";
    let id = getIdNumber();
    addNewCardWithParam(id, description);
}

function addNewCards(items){
    let spinner = document.getElementById("overlay");
    spinner.classList.add("show");
    items.forEach((item) => addNewCardWithParam(item.id, item.description));
    setTimeout(()=>{spinner.classList.remove("show");}, 250);

}

function addNewCardWithParam(id, description){
    let div = createElementWithProperties("div", id, "sa-kanban-card__box",
        {"draggable":"true", "ondblclick":"openCardToEdit(this)"});
    let b = createElement("b", "sa-kanban-card__header");
    let span = createElementWithId("span", id, "sa-kanban-card__name");
    span.innerText = id;
    let p = createElement("div", "sa-kanban-card__text");
    p.innerText = description;
    b.appendChild(span);
    let divBtn = document.createElement("div");
    appendChildToElement(divBtn, [createEditButton(), createRemoveButton(), createDoneButton()]);
    appendChildToElement(div, [b,p,divBtn]);
    let container = document.getElementById("newColumn")
        .getElementsByClassName("sa-kanban-column__container");
    container[0].appendChild(div);
    sendData(id, description);
}

function getId(){
    let id = 1;
    return function(){
        let s = "00000" + id++;
        return "I-" + s.substr(s.length-6);
    }
}

function editCard(element){
    let div = element.parentElement.parentElement;
    openCardToEdit(div);
}

function openCardToEdit(element){
    let descriptions = element.getElementsByTagName("div");
    let popup = document.getElementById("popup");
    let textArea = document.getElementById("txtArea");
    textArea.value = descriptions[0].innerText;
    let idField = document.getElementById("idField");
    idField.innerText = element.getAttribute("id");
    popup.classList.replace("b-hidden", "b-show");
}

function closePopup(){
    let popup = document.getElementById("popup");
    popup.classList.replace("b-show", "b-hidden");
}

function saveAndClose(){
    let id = document.getElementById("idField").innerText;
    let element = document.getElementById(id);
    let description = element.getElementsByTagName("div");
    let textArea = document.getElementById("txtArea");
    description[0].innerText = textArea.value;
    closePopup();
}

function createEditButton(){
    return addButtonToCard("Edit");
}

function createRemoveButton(){
    return addButtonToCard("Del");
}

function createDoneButton(){
    return addButtonToCard("Done");
}

function appendChildToElement(element, children){
    for(let child of children){
        element.appendChild(child);
    }
}

function addButtonToCard(name){
    let button = document.createElement("button");
    button.className = "button-sm";
    button.innerText = name;
    switch (name){
        case "Done" :
            button.setAttribute("onclick", "moveCardToDoneColumn(this)");
            break;
        case "Del" :
            button.setAttribute("onclick", "removeCardFromKanban(this)");
            break;
        case "Edit" :
            button.setAttribute("onclick", "editCard(this)");
            break;
        default:
            break;
    }
    return button;
}

function moveCardToDoneColumn(button){
    let card = button.parentElement.parentElement;
    let destination = document.getElementById("doneColumn").getElementsByClassName("sa-kanban-column__container");
    destination[0].appendChild(card);
}

function removeCardFromKanban(button){
    let card = button.parentElement.parentElement;
    card.remove();
}

function createElementWithId(tagName, id, className){
    let element = createElement(tagName, className);
    element.id = id;
    return element;
}

function createElementWithProperties(tagName, id, className, properties){
    let element = createElementWithId(tagName, id, className);
    for(let property in properties){
        element.setAttribute(property, properties[property]);
    }
    return element;
}

function createElement(tagName, className){
    let element = document.createElement(tagName);
    element.className = className;
    return element;
}

function fillInDocument(){
    getJson((json) => addNewCards(json));
}