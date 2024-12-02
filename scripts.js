// Function to handle smooth scroll on anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Function to show/hide additional content
function toggleContent(id) {
    var content = document.getElementById(id); 
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

// Example: Add this to your HTML to use toggle functionality
// <button onclick="toggleContent('exampleContent')">Show/Hide Content</button>
// <div id="exampleContent" style="display:none;">
//     <p>This is some hidden content!</p>
// </div>

// Function to toggle the chat popup visibility
function toggleChatPopup() {
    var popup = document.getElementById('chat-popup');
    if (popup.style.display === 'none' || popup.style.display === '') {
        // Open the chat box
        popup.style.display = 'block';
    } else {
        // Close the chat box
        popup.style.display = 'none';
    }
}

// Function to close the chat box when the close button is clicked
function closeChatPopup() {
    var popup = document.getElementById('chat-popup');
    popup.style.display = 'none';
}
