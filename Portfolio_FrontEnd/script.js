// NAV BAR //

// Responsive nav bar (max-width: 600px)
function openMenu() {
    const sideMenu = document.getElementById("sidemenu")
    return sideMenu.style.right = "0";
};
function closeMenu() {
    const sideMenu = document.getElementById("sidemenu")
    return sideMenu.style.right = "-200px";
};



// ABOUT ME SECTION //

// Selectors for Tabs 
let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

// function to show/hide Tabs 
// tabName = argument > openTab(>>'skills'<<) etc.
function openTab(tabName) {
    for (tabLink of tabLinks) {
        // removes the "active-link" color line
        tabLink.classList.remove("active-link");
    }
    for (tabContent of tabContents) {
        // removes content from the "active-tab"
        tabContent.classList.remove("active-tab");
    }
    // displays the "active-link" color line for the new clicked "active-link"
    event.currentTarget.classList.add("active-link");
    // displays the content with the new clicked "active-tab".
    document.getElementById(tabName).classList.add("active-tab");
};


// ALERT BUTTONS
const submitButton = document.getElementById("submitBtn");
const downloadCV = document.getElementById("downloadCV");

submitButton.addEventListener("click", function() {
    const userInput = alert("Thank you for submitting, but this form is currently inactive.");
    console.log(userInput);
});

downloadCV.addEventListener("click", function() {
    const userInput = alert("Thank you for your interest, but this option is currently unavailabe.")
    console.log(userInput)
})