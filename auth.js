// Simple client-side sign-in simulation (not secure for real apps)

const validUsers = {
  "agent": "dream2025",
  "client": "welcome123"
};

document.addEventListener("DOMContentLoaded", () => {
  const signinForm = document.getElementById("signin-form");
  if (signinForm) {
    signinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = signinForm.username.value.trim();
      const password = signinForm.password.value.trim();
      const errorMsg = document.getElementById("error-msg");

      if (validUsers[username] && validUsers[username] === password) {
        // Save login state to localStorage
        localStorage.setItem("dreamAchieveUser", username);
        // Redirect to listings page after sign in
        window.location.href = "listings.html";
      } else {
        errorMsg.textContent = "Invalid username or password.";
      }
    });
  }

  // On listings page, show images only if signed in
  if (window.location.pathname.endsWith("listings.html")) {
    const user = localStorage.getItem("dreamAchieveUser");
    const listingsContainer = document.getElementById("listings-container");
    if (user && listingsContainer) {
      listingsContainer.innerHTML = `
        <div class="listing-item">
          <h3>Luxurious Apartment Building</h3>
          <img src="images/property1.jpg" alt="Apartment Building" />
          <p>8 spacious apartments, modern amenities, secure gated community.</p>
          <p>Price: $1,500,000 USD</p>
        </div>
        <div class="listing-item">
          <h3>Modern Family Home</h3>
          <img src="images/property2.jpg" alt="Family Home" />
          <p>4 bedrooms, fully furnished, elegant kitchen, large garden.</p>
          <p>Price: $850,000 USD</p>
        </div>
        <div class="listing-item">
          <h3>Commercial Office Space</h3>
          <img src="images/property3.jpg" alt="Office Space" />
          <p>Prime location, 10,000 sq ft, parking included, security systems.</p>
          <p>Price: $2,200,000 USD</p>
        </div>
      `;
    }
  }
});
