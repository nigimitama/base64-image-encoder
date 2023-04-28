// setup FileReader
let reader = new FileReader();
reader.addEventListener("load", () => {
  document.getElementById("editable-container").hidden = true;
  document.getElementById("result").hidden = false;

  const base64img = reader.result;
  document.getElementById("preview").setAttribute("src", base64img);
  document.getElementById("output-textarea").innerText = base64img;
});


// listen paste
let inputDiv = document.querySelector("#editable-container [contenteditable]");
inputDiv.addEventListener("paste", (event) => {
  console.log("addEventListener")
  const items = event.clipboardData.items;
  console.log(`items:${items}`)
  for (let item of items) {
    if (item.kind == "file") {
      reader.readAsDataURL(item.getAsFile());
    }
  }
});
