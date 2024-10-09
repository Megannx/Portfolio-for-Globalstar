// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init();
  
    // Get modal elements
    const projectModal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-project-title');
    const modalDescription = document.getElementById('modal-project-description');
  
    // Event listener for project buttons
    document.querySelectorAll('.button[data-project]').forEach(button => {
      button.addEventListener('click', (event) => {
        const projectName = event.currentTarget.getAttribute('data-project');
        showModal(projectName);
      });
    });
  
    // Function to show the modal
    function showModal(projectName) {
      modalTitle.textContent = projectName;
      modalDescription.textContent = getProjectDescription(projectName);
      projectModal.classList.add('is-active');
    }
  
    // Function to hide the modal when clicking outside of it
    projectModal.addEventListener('click', (event) => {
      if (event.target === projectModal || event.target.classList.contains('modal-background')) {
        projectModal.classList.remove('is-active');
      }
    });
  });
  
  // Function to get project description based on project name
  function getProjectDescription(projectName) {
    const descriptions = {
      'Business Database System': 'This project is dedicated to efficiently gathering and analyzing data to identify a company\'s key departments, roles, and salary structures. It aims to provide valuable insights that support informed decision-making and organizational development.',
      'E-Commerce Business Database': 'Developed a modern backend for an e-commerce platform to enhance operational efficiency and user experience. This project optimizes product management, secure payments, and order fulfillment, ensuring competitiveness in the e-commerce market.'
    };
    return descriptions[projectName] || 'Description not available.';
  }
  