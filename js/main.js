// main.js for Shipa

document.addEventListener('DOMContentLoaded', () => {
    console.log("Shipa main.js loaded and DOM fully parsed.");

    // Product Card Hover Effects (Primarily CSS-driven)
    // JS can be used for more complex hover interactions if needed.

    // --- "Quick Add" Button Functionality ---
    const quickAddButtons = document.querySelectorAll('.quick-add-btn');

    quickAddButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Try to get product name
            const cardBody = this.closest('.card-body');
            let productName = "Unknown Product";
            if (cardBody) {
                const titleElement = cardBody.querySelector('.card-title');
                if (titleElement) {
                    productName = titleElement.textContent.trim();
                }
            }

            console.log(`Product "${productName}" added to cart (simulated).`);

            // Optional: Change button text temporarily
            const originalText = this.textContent;
            this.textContent = "Added!";
            this.disabled = true; // Briefly disable button

            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false; // Re-enable button
            }, 2000); // Revert after 2 seconds
        });
    });

    // --- Live Chat Bubble Functionality ---
    const chatBubble = document.getElementById('chat-bubble');

    if (chatBubble) {
        chatBubble.addEventListener('click', () => {
            console.log("Chat bubble clicked. Open chat window (simulated).");
            // In a real application, this would trigger a chat widget to open.
            // For now, we can add a simple alert or change its appearance.
            // alert("Imagine a chat window opening now!");
        });
    } else {
        console.warn("Chat bubble element not found.");
    }

});
