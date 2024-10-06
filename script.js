document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Simple validation
    if (!name || !email || !message) {
      alert("All fields are required!");
      return;
    }
  
    // Email format validation (regex)
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Success message and log data to console
    document.getElementById("successMessage").textContent = "Form submitted successfully!";
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  
    // Reset form
    document.getElementById("contactForm").reset();
  });
  