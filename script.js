// ==========================
  // Initialize EmailJS
  // ==========================
  emailjs.init("HDkPuJgqdfOiWOGoZ");

  // ==========================
  // Mobile Navigation
  // ==========================
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });

  // ==========================
  // Scroll Reveal Animation
  // ==========================
  const revealEls = document.querySelectorAll(".reveal");

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealEls.forEach(el => io.observe(el));
  // ==========================
  // Contact Form (EmailJS)
  // ==========================
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    status.textContent = "Sending...";
    status.className = "form-status";

    emailjs.sendForm(
      "service_w95a7m8",
      "template_pagfh0l",
      this
    )

    .then(() => {

      status.textContent = "✅ Message sent successfully!";
      status.className = "form-status ok";

      form.reset();

    })

    .catch((error) => {

      console.error("EmailJS Error:", error);

      status.textContent = "❌ Failed to send message. Please try again.";
      status.className = "form-status err";

    });

  });
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeIcon.className="fa-solid fa-sun";
    }else{
        themeIcon.className="fa-solid fa-moon";
    }

});
// Load saved theme

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

    themeIcon.className="fa-solid fa-sun";

}

themeToggle.addEventListener("click",()=>{

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

    }else{

        localStorage.setItem("theme","light");

    }

});