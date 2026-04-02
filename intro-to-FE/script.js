
console.log("Welcome to my portfolio!");



const $ = (selector) => document.querySelector.bind(document)(selector);

const $$ = (selector) => document.querySelectorAll(selector);

const createEl = (element) => document.createElement.bind(document)(element);


function main() {

    const heading = $("h1");
    
    if(heading) {
        heading.style.color = "blue";
    }
    
    const p = createEl("p");
    p.textContent = "This is a dynamically added paragraph.";
    document.body.appendChild(p);

    const image = createEl("img");

    function onHeadingClick() {
        image.classList.add("animateToRight");
    }
function onHeadingMouseOver() {
    heading.style.color = "red";
}

function onHeadingMouseOut() {
    heading.style.color = "blue";
}



image.src = "https://placehold.co/600x400";
image.alt = "Placeholder Image";
image.id = "dynamic-image";
document.body.insertAdjacentElement("afterbegin", image);

function onImageClick() {
    alert("You clicked the image!");
}

function onImageLoad() {
    alert("Image loaded successfully.");
}



image.addEventListener("click", onImageClick);
image.addEventListener("load", onImageLoad);



    heading?.addEventListener("click", onHeadingClick);
    heading?.addEventListener("mouseover", onHeadingMouseOver);
    heading?.addEventListener("mouseout", onHeadingMouseOut);

}
document.addEventListener("DOMContentLoaded", main);


