document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    const saveBtn = document.getElementById('saveBtn');
    const dollarsDisplay = document.getElementById('dollars');
    const daysInMonth = 31; // Number of days in the month (you can customize this)
    const dollarsPerYesDay = 100 / 21; // Calculate dollars per "yes" day
    let totalDollars = 0;
    const savedSelections = {};

    // Create calendar days
    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.textContent = i;
        dayDiv.setAttribute('data-day', i);
        dayDiv.addEventListener('click', toggleSelection);
        calendar.appendChild(dayDiv);
        savedSelections[i] = false; // Initialize all days as not selected
    }

    // Toggle selection on click
    function toggleSelection(event) {
        const dayNumber = parseInt(event.target.getAttribute('data-day'));
        
        // If already selected, do nothing
        if (savedSelections[dayNumber]) {
            return;
        }
        
        // Mark as selected (yes)
        savedSelections[dayNumber] = true;
        event.target.classList.add('selected');
        totalDollars += dollarsPerYesDay;

        updateDollarsDisplay();
    }

    // Update dollar display
    function updateDollarsDisplay() {
        dollarsDisplay.textContent = `$${totalDollars.toFixed(2)}`;
    }

    // Save selections
    saveBtn.addEventListener('click', function() {
        // Here you can save the 'savedSelections' object to a database or local storage
        console.log('Saved selections:', savedSelections);
        alert('Selections saved successfully!');
    });
});




