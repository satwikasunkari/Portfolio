// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const navLinks = document.getElementById("nav-links")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active")
  navLinks.classList.toggle("active")
})

// Close mobile menu when clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("active")
    navLinks.classList.remove("active")
  })
})

// Navbar scroll effect
const navbar = document.getElementById("navbar")

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Contact Form Handler
const contactForm = document.getElementById("contact-form")
const formStatus = document.getElementById("form-status")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // Basic validation
  if (!name || !email || !subject || !message) {
    showFormStatus("Please fill in all fields.", "error")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    showFormStatus("Please enter a valid email address.", "error")
    return
  }

  // Simulate form submission (replace with actual backend logic)
  showFormStatus("Sending message...", "success")

  setTimeout(() => {
    showFormStatus("Thank you! Your message has been sent successfully.", "success")
    contactForm.reset()
  }, 1500)
})

function showFormStatus(message, type) {
  formStatus.textContent = message
  formStatus.className = "form-status " + type
}

// Intersection Observer for animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Apply animation to cards and timeline items
document
  .querySelectorAll(".stat-card, .skill-category, .project-card, .timeline-item, .cert-item, .achievement-item")
  .forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

// Typing effect for name (optional enhancement)
const nameElement = document.querySelector(".name")
const originalName = "Sai Satwika Sunkari"

function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = '<span class="cursor">|</span>'

  function type() {
    if (i < text.length) {
      element.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>'
      i++
      setTimeout(type, speed)
    }
  }

  setTimeout(type, 500)
}

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  typeWriter(nameElement, originalName, 80)
})
