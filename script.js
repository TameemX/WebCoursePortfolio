// I wasn't present during the JavaScript lecture so I didn't have time to study it properly so I just tried to make do.

const contactButton = document.querySelector(".footer-right button");

contactButton.addEventListener("click", () => {
    alert("Thank you for your interest! We will get back to you soon.");
});

const readMoreButtons = document.querySelectorAll("#PROJECTS article button");

readMoreButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const projectInfo = document.createElement("p");
        projectInfo.textContent = `Additional information about project ${index + 1}. This is dynamically added content!`;
        projectInfo.style.marginTop = "10px";
        projectInfo.style.fontSize = "16px";
        button.parentElement.appendChild(projectInfo);
        button.disabled = true; 
    });
});
