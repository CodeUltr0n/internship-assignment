// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}
// form validations -
document.addEventListener("DOMContentLoaded", function () {
  console.log("main.js loaded");
  const form = document.getElementById("contact-form");
  console.log("Form element:", form);

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    let valid = true;

    const fields = [
      { id: "name", errorId: "name-error", pattern: /.+/ },
      { id: "phone", errorId: "phone-error", pattern: /^\+?[\d\s\-().]{7,}$/ },
      { id: "email", errorId: "email-error", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      { id: "reason", errorId: "reason-error", pattern: /.+/ },
      { id: "preferredTime", errorId: "preferredTime-error", pattern: /.+/ },
      { id: "agree", errorId: "agree-error", isCheckbox: true }
    ];

    fields.forEach(field => {
      const input = document.getElementById(field.id);
      console.log(`Validating ${field.id}:`, input?.value);
      const error = document.getElementById(field.errorId);
      let isValid = true;

      if (!input) return;

      if (field.isCheckbox) {
        isValid = input.checked;
      } else {
        const value = input.value.trim();
        isValid = field.pattern ? field.pattern.test(value) : !!value;
      }

      if (!isValid) {
        error.classList.remove("hidden");
        valid = false;
      } else {
        error.classList.add("hidden");
      }
    });

    const success = document.getElementById("form-success");

    if (valid) {
      console.log("Form is valid. Resetting and showing success.");
      success.classList.remove("hidden");
      form.reset(); 
    } else {
      console.log("Form is invalid. Check error messages.");
      success.classList.add("hidden");
    }
  });
});