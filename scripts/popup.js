// Select all "Learn More" buttons
  const learnMoreButtons = document.querySelectorAll('.btn-mantis.btn-sm');

  // Add click event for each button
  learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Find the card that button belongs to
      const card = button.closest('.card');
      const title = card.querySelector('.card-title').textContent;
      const description = card.querySelector('.card-text').textContent;

      // Show popup
      alert(`${title}\n\n${description}`);
    });
  });