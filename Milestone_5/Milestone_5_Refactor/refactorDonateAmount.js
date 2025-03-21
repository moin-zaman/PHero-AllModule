const historyDivByID = document.getElementById('history-div');
const modal = document.getElementById('my_modal_1');

// General Function to Handle Donations
function handleDonation(buttonID, inputID, balanceID, locationID) {
    const donateBtn = document.getElementById(buttonID);

    donateBtn.addEventListener('click', function () {
        const donateAmount = parseFloat(getDonatedAmountByID(inputID));
        const donatedAmountShow = parseFloat(showDonatedAmountById(balanceID));

        // Calculate total donated amount
        const totalDonatedAmount = donateAmount + donatedAmountShow;

        // Get available donation amount
        const donationAvailableAmount = parseFloat(getAvailableDonationAmountById('donate-balance-available-nav'));
        const totalDonationAvailableAmount = donationAvailableAmount - donateAmount;

        if (donateAmount <= 0 || isNaN(totalDonatedAmount)) {
            alert("Invalid Amount cannot be added");
            return;
        } else if (totalDonationAvailableAmount < 0) {
            alert("Not Enough Balance in the Account");
        } else {
            // Update UI
            document.getElementById(balanceID).innerText = totalDonatedAmount;
            document.getElementById('donate-balance-available-nav').innerText = totalDonationAvailableAmount;

            // Open modal
            modal.showModal();

            // Add to history
            const createHistoryDiv = getDonatedLocation(locationID, donateAmount);
            historyDivByID.appendChild(createHistoryDiv);
            console.log(createHistoryDiv);
        }
    });
}

// Initialize donation handlers
handleDonation('btn-donate-now-noakhali', 'donate-amount-noakhali', 'donate-balance-noakhali', 'donate-location-noakhali');
handleDonation('btn-donate-now-feni', 'donate-amount-feni', 'donate-balance-feni', 'donate-location-feni');
handleDonation('btn-donate-now-quota', 'donate-amount-quota', 'donate-balance-quota', 'donate-location-quota');
