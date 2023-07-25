
// document.addEventListener("DOMContentLoaded", function () {
//     const getInvolvedBtn = document.getElementById("getInvolvedBtn");
//     getInvolvedBtn.addEventListener("click", function () {
//       window.open("donate.html", "_blank");
//     });
  
  
  
//     // Rest of the script remains the same...

  
  
//     // Function to show the donation form
//     function showDonationForm() {
//       // Show the blurred background effect
//       document.body.style.filter = "blur(5px)";
  
//       // Show the donation form container
//       donationFormContainer.style.display = "block";
  
//       // Get the close button element
//       const closeButton = document.querySelector(".close");
  
//       // Handle the close button click to hide the form and reset the background
//       closeButton.addEventListener("click", function () {
//         hideDonationForm();
//       });
  
//       // Handle the form submission
//       const donationForm = document.getElementById("donationForm");
//       donationForm.addEventListener("submit", function (event) {
//         event.preventDefault();
  
//         // Get the donor's details
//         const fullName = document.getElementById("fullName").value;
//         const email = document.getElementById("email").value;
//         const phoneNumber = document.getElementById("phoneNumber").value;
//         const amount = document.getElementById("amount").value;
//         const dedication = document.getElementById("dedication").value;
//         const paymentMethod = document.getElementById("paymentMethod").value;
//         const cardNumber = document.getElementById("cardNumber").value;
//         const expiryDate = document.getElementById("expiryDate").value;
//         const cvv = document.getElementById("cvv").value;
//         const address = document.getElementById("address").value;
//         const subscribe = document.getElementById("subscribe").checked;
//         const captcha = document.getElementById("captcha").value;
//         const customAmount = document.getElementById("customAmount").value;
  
//         // Process the form data here (you can add your desired actions, such as sending data to a server)
  
//         // Show the thank-you message
//         showThankYouMessage(fullName);
  
//         // Hide the donation form after submission
//         hideDonationForm();
//       });
//     }
  
//     // Function to hide the donation form and reset the background
//     function hideDonationForm() {
//       document.body.style.filter = "none";
//       donationFormContainer.style.display = "none";
//     }
  
//     // Function to display the thank-you message
//     function showThankYouMessage(fullName) {
//       const thankYouMessage = `
//         <h3>Thank You, ${fullName}!</h3>
//         <p>Your generous donation is greatly appreciated.</p>
//         <p>We will send you a confirmation email shortly.</p>
//       `;
  
//       // Create a container div for the thank-you message
//       const thankYouContainer = document.createElement("div");
//       thankYouContainer.className = "modal";
//       thankYouContainer.innerHTML = `<div class="modal-content">${thankYouMessage}</div>`;
  
//       // Append the thank-you container to the body
//       document.body.appendChild(thankYouContainer);
  
//       // Hide the thank-you message after a few seconds (optional)
//       setTimeout(function () {
//         thankYouContainer.style.display = "none";
//       }, 5000); // Adjust the time as needed


  
//     }

//   });


  
  
// JavaScript for the Donation Form

document.addEventListener("DOMContentLoaded", function () {
    const getInvolvedBtn = document.getElementById("getInvolvedBtn");
    getInvolvedBtn.addEventListener("click", function () {
      window.open("donate.html", "_blank");
    });
  });
document.addEventListener("DOMContentLoaded", function () {
    const donationForm = document.getElementById("donationForm");
    const thankYouMessage = document.getElementById("thankYouMessage");
  
    donationForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Get form values
      const fullName = document.getElementById("fullName").value;
      const email = document.getElementById("email").value;
      const phoneNumber = document.getElementById("phoneNumber").value;
      const donationAmount = document.getElementById("donationAmount").value;
      const paymentMethod = document.getElementById("paymentMethod").value;
      const dedication = document.getElementById("dedication").value;
  
      // Perform form submission here (you can send the form data to your backend server)
  
      // Display thank-you message
      thankYouMessage.innerHTML = `
        <h3>Thank You, ${fullName}!</h3>
        <p>Your donation of $${donationAmount} has been received.</p>
        <p>We appreciate your generous support and dedication: ${dedication}</p>
        <p>An email receipt has been sent to ${email}.</p>
        <p>Thank you for helping us in our mission to alleviate poverty!</p>
      `;
  
      // Clear the form fields after submission (optional)
      donationForm.reset();
    });
  });
  