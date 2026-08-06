document.addEventListener('DOMContentLoaded', () => {
  const petitionList = document.querySelector('[data-org="wildlife-org"]');
  
  // 1. Fetch from the UK Parliament API endpoint
  const API_ENDPOINT = 'https://petition.parliament.uk/petitions.json?q=wildlife&state=open';

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
      const x = 24; // Define the number of petitions to display
      const petitions = jsonResponse.data.slice(0, x);

      if (!petitions || petitions.length === 0) {
        petitionList.innerHTML = '<li>No open wildlife petitions found.</li>';
        return;
      }

      // 4. Loop through each petition object
      petitions.forEach(petition => {
        // Extract required fields based on the API nesting
        const petitionId = petition.id;
        const actionText = petition.attributes.action;
        const signatures = petition.attributes.signature_count;
        const petitionUrl = `https://petition.parliament.uk/petitions/${petitionId}`;

        // 5. Create DOM elements safely to prevent XSS
        const div = document.createElement('div');
        div.className = 'global-petition-card';

        const li = document.createElement('li');

        const button = document.createElement('a');
        button.className = 'global-petition-btn';
        button.setAttribute('style', 'text-decoration:none;');

        const text1 = document.createElement('h4');
        const text2 = document.createElement('p');
        
        button.href = petitionUrl;
        button.textContent = "Sign Petition";

        // Format with explicit English commas (242,687)
        const formattedCount = signatures.toLocaleString('en-GB');

        text1.textContent = actionText;
        text2.textContent = `${formattedCount} signatures`;

        button.target = '_blank';
        button.rel = 'noopener noreferrer'; // Essential security for target="_blank"

        // 6. Append elements back to the card container
        div.appendChild(text1);
        div.appendChild(text2);
        div.appendChild(button);
        li.appendChild(div);
        petitionList.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error fetching UK Parliament petitions:', error);
      petitionList.innerHTML = '<li class="error">Could not load petitions at this time.</li>';
    });
});
