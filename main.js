// ==========about tabs==============
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("tab__active");
    });
    target.classList.add("tab__active");
    tabs.forEach((tab) => {
      tab.classList.remove("tab__active");
    });
    tab.classList.add("tab__active");
  });
});
// ============Contact form==========
const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactSubject = document.getElementById("contact-subject");
const contactMessage = document.getElementById("contact-message");
const errorMessage = document.getElementById("error-message");

const sendEmail = (e) => {
  e.preventDefault();
  //   check if the field has a value
  if (
    contactName.value == "" ||
    contactEmail.value == "" ||
    contactSubject.value == "" ||
    contactMessage.value == ""
  ) {
    //show message
    errorMessage.textContent = "Please fill in all the fields";
  } else {
    // serviceID - templateID -#form - publickey
    emailjs
      .sendForm(
        "service_xyszih3",
        "template_tigbyzh",
        "#contact-form",
        "Ol9jC3CSn9FEugyt6"
      )
      .then(
        () => {
          //show message and add color, window + dot to open emoji
          errorMessage.classList.add("color-first");
          errorMessage.textContent = "Message sent ✔";
          //remove message after 5 seconds
          setTimeout(() => {
            errorMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPs! SOMETHING WENT WRONG...", error);
        }
      );
    //clear input
    contactName.value = "";
    contactEmail.value = "";
    contactSubject.value = "";
    contactMessage.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);

// ================Change background header===========
function scrollHeader() {
  const header = document.getElementById("header");
  //   when the scroll is greater than 80 viewport height, add the scroll-header class to header tag
  if (this.scrollY >= 80) 
    header.classList.add("scroll-header");
   else 
    header.classList.remove("scroll-header");
  
}
window.addEventListener("scroll", scrollHeader);
// ===================Show scrollup===============
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    //   when the scroll is greater than 350 viewport height, add the show-scroll class to scroll-top class
    if (this.scrollY >= 350) 
      scrollUp.classList.add("show-scroll");
     else 
      scrollUp.classList.remove("show-scroll");
    
  }
  window.addEventListener("scroll", scrollUp);