const donationFeatureBtn = document.getElementById('btn-donation-feature');
const historyFeatureBtn = document.getElementById('btn-history-feature');
const blogNavBtn = document.getElementById('btn-blog-nav');
const homeNavBtn = document.getElementById('btn-home-nav');

// Function to toggle between Donation and History views
function toggleFeature(activeBtn, inactiveBtn, showID, hideID) {
    activeBtn.classList.add('bg-info', 'text-white');
    inactiveBtn.classList.remove('bg-info', 'text-white');
    inactiveBtn.classList.add('bg-base-200');

    document.getElementById(hideID).classList.add('hidden');
    document.getElementById(showID).classList.remove('hidden');
}

// Donation Button Click Event
donationFeatureBtn.addEventListener('click', function () {
    toggleFeature(donationFeatureBtn, historyFeatureBtn, 'main-id', 'history-div');
});

// History Button Click Event
historyFeatureBtn.addEventListener('click', function () {
    toggleFeature(historyFeatureBtn, donationFeatureBtn, 'history-div', 'main-id');
});

// Blog and Home Navigation
blogNavBtn.addEventListener('click', () => window.location.assign('./blog.html'));
homeNavBtn.addEventListener('click', () => window.location.assign('/index.html'));
