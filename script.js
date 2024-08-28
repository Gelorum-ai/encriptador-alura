document.getElementById("encrypt-btn").addEventListener("click", function() {
    let inputText = document.getElementById("input-text").value;
    let encryptedText = encryptText(inputText);
    document.getElementById("output-text").value = encryptedText;
    toggleOutputVisibility();
});

document.getElementById("decrypt-btn").addEventListener("click", function() {
    let inputText = document.getElementById("input-text").value;
    let decryptedText = decryptText(inputText);
    document.getElementById("output-text").value = decryptedText;
    toggleOutputVisibility();
});

function toggleOutputVisibility() {
    document.getElementById("message-container").classList.add("hidden");
    document.getElementById("output-container").classList.remove("hidden");
}

document.getElementById("copy-btn").addEventListener("click", function() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    showPopup("Texto copiado al portapapeles!");
});

function encryptText(text) {
    let encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    return encryptedText;
}

function decryptText(text) {
    let decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    return decryptedText;
}

document.getElementById("input-text").addEventListener("input", function() {
    this.value = this.value
        .toLowerCase()  
        .replace(/[^a-z\s]/g, ''); 
});

function showPopup(message) {
    let popup = document.createElement("div");
    popup.className = "popup-message";
    popup.innerText = message;
    document.body.appendChild(popup);
    
    setTimeout(function() {
        popup.classList.add("show");
    }, 10);
    
    setTimeout(function() {
        popup.classList.remove("show");
        setTimeout(function() {
            popup.remove();
        }, 300);
    }, 2000);
}
