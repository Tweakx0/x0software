// Array of reviews - you can add more reviews here
const reviews = [
    {
        username: "nevo1997",
        rating: 5,
        date: "2 days ago",
        content: "HWID Spoofer is flawless. Able to get back on warzone, fortnite, and CS so far. X0 team goated."
    },
    {
        username: "guaponexus",
        rating: 4,
        date: "3 days ago",
        content: "Warzone ESP works like a charm, and that ray gun feature is just chefs kiss. Wonderful work. 4 starts only because on older pcs can cause a slight amount of lag."
    },
    {
        username: "schrexxy",
        rating: 5,
        date: "7 days ago",
        content: "Shout out to X0 team for making the easiest to use and most consistent mods I've come across in a while."
    },
    {
        username: "berasedbased",
        rating: 5,
        date: "1 day ago",
       content: "Spoofer got me back up and running on warzone. +REP"
    },
    {  
        username: "prjkt",
        rating: 4.5,
        date: "8 days ago",
        content: "just purchased apex esp, no issues so far all features work correctly"
    },
    {  
        username: "jarcuteemux",
        rating: 5,
        date: "14 days ago",
        content: "X0 team are amazing, friendly, great service, great customer support."
    },
    {  
        username: "prjkt",
        rating: 3.5,
        date: "31 days ago",
        content: "initially had some issues with spoofer but tweak helped me out and got me up and running in just a few minutes. +REP"
    },

]

// Function to create star rating
function createStarRating(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

// Function to create a review card
function createReviewCard(review) {
    return `
        <div class="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700 mb-4">
            <div class="flex justify-between items-start mb-2">
                <div class="flex items-center space-x-2">
                    <span class="font-semibold">${review.username}</span>
                    <span class="flex text-yellow-400 text-sm">${createStarRating(review.rating)}</span>
                </div>
                <span class="text-xs text-gray-400">${review.date}</span>
            </div>
            <p class="text-sm text-gray-300">${review.content}</p>
        </div>
    `;
}

// Function to render the reviews section
function renderReviews() {
    const reviewsContainer = document.getElementById('scrollableReviews');
    
    // Create the reviews section HTML
    const reviewsHTML = `
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-blue-400">User Reviews</h2>
            <div class="text-sm">Recent Reviews</div>
        </div>
        <div class="space-y-4 h-48 overflow-y-auto pr-2 reviews-scrollbar">
            ${reviews.map(review => createReviewCard(review)).join('')}
        </div>
    `;
    
    reviewsContainer.innerHTML = reviewsHTML;
}

// Initialize reviews when the page loads
document.addEventListener('DOMContentLoaded', renderReviews);