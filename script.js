//your JS code here. If required.
const timer = document.querySelector('#timer');
const updateTimer = () => {
  // Get the current date and time.
  const now = new Date();

  // Format the date and time.
  const formattedDateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

  // Set the text of the `timer` element to the formatted date and time.
  timer.textContent = formattedDateTime;
};

// Start the timer.
setInterval(updateTimer, 1000);
