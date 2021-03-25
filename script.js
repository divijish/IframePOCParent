window.onload = ()=> {

    let childData = [];
var dacsFrame = document.querySelector("#dacsFrame");

let button = document.querySelector("button");

button.addEventListener("click", (event)=> {
    dacsFrame.contentWindow.postMessage("hello there", "http://localhost:4200");
})

let messageArea = document.querySelector("#messageArea");

window.addEventListener("message", (event)=> {
    childData.push(event.data);
    messageArea.innerHTML = childData;

});

}