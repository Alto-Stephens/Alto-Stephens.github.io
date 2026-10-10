const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const submitButton = contactForm.querySelector(".contact-submit");
  const feedback = document.querySelector("#contact-feedback");
  let feedbackTimeout;

  const showFeedback = (message, type) => {
    window.clearTimeout(feedbackTimeout);
    feedback.textContent = message;
    feedback.className = `contact-feedback is-${type}`;
    feedback.hidden = false;
    feedbackTimeout = window.setTimeout(() => {
      feedback.hidden = true;
      feedback.textContent = "";
      feedback.className = "contact-feedback";
    }, 1000);
  };

  contactForm.addEventListener("invalid", () => {
    showFeedback("Please complete all required fields and enter a valid email address.", "error");
  }, true);

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    submitButton.disabled = true;
    submitButton.textContent = "SENDING...";
    contactForm.setAttribute("aria-busy", "true");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(contactForm),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "The message could not be sent. Please try again.");
      }

      contactForm.reset();
      showFeedback("Message sent! Thanks for getting in touch.", "success");
    } catch (error) {
      showFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
        "error"
      );
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "SEND MESSAGE";
      contactForm.removeAttribute("aria-busy");
    }
  });
}
