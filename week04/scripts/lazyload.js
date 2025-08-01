function displayCurrentYear() { document.querySelector("#currentyear").innerHTML = new Date().getFullYear(); }
displayCurrentYear()

document.querySelector("#lastModified").innerHTML = "Last Modified" + document.lastModified;