document.addEventListener('DOMContentLoaded', () => {
  const petitionList = document.querySelector('[data-org="animal-rights-org"]');
  
  // 1. Fetch from the UK Parliament API endpoint
  const API_ENDPOINT = 'https://petition.parliament.uk/petitions.json?q=animal&state=open';


  fetch('https://petition.parliament.uk/petitions.json?q=animal&state=open')
  .then(res => res.json())
  .then(data => {
    // ONE-LINER FILTER: drop any title containing "testing"
    const petitions = data.data.filter(p => !p.attributes.action.toLowerCase().includes('testing'));

    // Pass 'petitions' to your existing render loop
    petitions.forEach(petition => {
      // your card creation code here...
    });
  });

  fetch(API_ENDPOINT)
    .then(response => {
      if (!response.ok) throw new Error('Network response failed');
      return response.json();
    })
    .then(jsonResponse => {
      // 2. Clear the static "Loading petitions..." text
      petitionList.innerHTML = '';

      // LIMIT IS APPLIED HERE: slices the array from index 0 up to x
      const x = 50; // Define the number of petitions to display
      const petitions = jsonResponse.data.slice(0, x);

      if (!petitions || petitions.length === 0) {
        petitionList.innerHTML = '<li>No open animal petitions found.</li>';
        return;
      }

      // ONE-LINER FILTER: drop any title containing "neuter"
      const filteredPetitions = petitions.filter(f => !f.attributes.action.toLowerCase().includes('neuter'));

      // 4. Loop through each petition object
      filteredPetitions.forEach(petition => {
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
        // Example: "Ban the use of snares - 8,420 signatures"
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
