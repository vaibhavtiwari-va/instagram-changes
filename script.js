// Select the like button and like count elements
const likeButton = document.createElement('button');
likeButton.textContent = '❤️ Like';
likeButton.style.cursor = 'pointer';

const likeCount = document.createElement('span');
likeCount.textContent = '0 Likes';
likeCount.style.marginLeft = '10px';

// Append the button and count to the document body
document.body.appendChild(likeButton);
document.body.appendChild(likeCount);

// Initialize like counter
let likes = 0;

// Add event listener to the like button
likeButton.addEventListener('click', () => {
    likes++;
    likeCount.textContent = `${likes} ${likes === 1 ? 'Like' : 'Likes'}`;
});

// Initialize a counter for the number of reels viewed
let reelsViewed = 0;

// Set the maximum number of reels allowed
const maxReels = 5;

// Function to handle scrolling
function handleScroll() {
    const feed = document.querySelector('.feed');
    const feedBottom = feed.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // Check if the user has scrolled to the bottom of the feed
    if (feedBottom <= windowHeight && reelsViewed < maxReels) {
        reelsViewed++;
        console.log(`Reel ${reelsViewed} viewed`);

        // If the limit is reached, show a message and stop further scrolling
        if (reelsViewed === maxReels) {
            alert('You have reached the maximum number of reels you can view.');
            window.removeEventListener('scroll', handleScroll);
        }
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

if (reelsViewed === maxReels) {
    alert('You have reached the maximum number of reels you can view.');
    document.querySelector('.feed').classList.add('restricted');
    window.removeEventListener('scroll', handleScroll);
}