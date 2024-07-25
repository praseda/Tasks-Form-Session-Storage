document.addEventListener('DOMContentLoaded', () => {
    
    // Function to save form data to session storage
    const saveFormData = (key, value) => {
        console.log(`Saving to sessionStorage: ${key} = ${value}`); // Debug line
        sessionStorage.setItem(key, value);
    
};

    // Function to populate form data from session storage
    const populateFormData = () => {
        const formFields = ['name', 'email', 'phone', 'dob', 'age', 'address'];
        formFields.forEach((field) => {
            const savedValue = sessionStorage.getItem(field);
            if (savedValue) {
                document.getElementById(field).value = savedValue;
            }
        });
    };

    
    // Populate form data on page load
    populateFormData();

    // Add event listeners to save data on input
    const formFields = ['name', 'email', 'phone', 'dob', 'age', 'address'];
    formFields.forEach((field) => {
        document.getElementById(field).addEventListener('input', (e) => saveFormData(field, e.target.value));
    });

    // Handle form submission
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        sessionStorage.clear();
        document.getElementById('success-message').innerText = 'Form submitted successfully!';
;        // Add code here to handle the actual form submission, e.g., sending data to a server
    });

});
