window.onload = function() {
    alert("Това е съобщение от JS!");
};

document.getElementById("ChangeBtn").onclick = function() {
    document.getElementById("text").textContent = "Текстът е променен! Insane";
};

document.getElementById("externalMSGbtn").onclick = function() {
    alert("Това е съобщение от външен JS!");
};