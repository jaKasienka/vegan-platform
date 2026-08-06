document.addEventListener('DOMContentLoaded', () => {
  const petitionList = document.querySelector('[data-org="animal-rights-org"]');
  
  // 1. Fetch from the UK Parliament API endpoint
  const API_ENDPOINT = 'https://petition.parliament.uk/petitions.json?q=animal&state=open';

  fetch(API_ENDPOINT)
    .then(response => {
      if (!response.ok) throw new Error('Network response failed');
      return response.json();
    })
    .then(jsonResponse => {
      // 2. Clear the static "Loading petitions..." text
      petitionList.innerHTML = '';

      // 3. Access the 'data' array from the API response
      // const petitions = jsonResponse.data; // all petitions, but we only want a limited number

      // LIMIT IS APPLIED HERE: slices the array from index 0 up to x
      const x = 50; // Define the number of petitions to display
      const petitions = jsonResponse.data.slice(0, x);

      if (!petitions || petitions.length === 0) {
        petitionList.innerHTML = '<li>No open animal petitions found.</li>';
        return;
      }

      // 4. Loop through each petition object
      petitions.forEach(petition => {
        // Extract required fields based on the API nesting
        const petitionId = petition.id;
        const actionText = petition.attributes.action;
        const petitionUrl = `https://petition.parliament.uk/petitions/${petitionId}`;

        // 5. Create DOM elements safely to prevent XSS
        const li = document.createElement('li');
        const link = document.createElement('a');
        
        link.href = petitionUrl;
        link.textContent = actionText;
        link.target = '_blank';
        link.rel = 'noopener noreferrer'; // Essential security for target="_blank"

        // 6. Append elements back to the card container
        li.appendChild(link);
        petitionList.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error fetching UK Parliament petitions:', error);
      petitionList.innerHTML = '<li class="error">Could not load petitions at this time.</li>';
    });
});
