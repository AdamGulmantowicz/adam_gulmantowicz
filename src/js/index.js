import "@babel/polyfill";
import $ from "jquery";
import axios from 'axios';
import { showAlert } from "./alert";

window.onload = () => {
  (function () {
    $(".nav__item").click((e) => {
      e.preventDefault();
      const sectionId = $(e.target).data('scrollto');
      $('#navigation').prop('checked', false);
      $("body, html").animate(
        {
          scrollTop: $(sectionId).offset().top,
        },
        500
      );
    });
  })();

  (function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = nameInput.value;
      const email = emailInput.value;
      const message = messageInput.value;
      if (!name && !email && !message) return showAlert('error', 'All fields are required');
      try {
        await axios({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          url: 'https://submit-form.com/CkeiuMT1IkX2YdYEKJdle',
          data: {
            name, email, message
          }
        });
        showAlert('success', 'Thank you for your message!');
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
      } catch (err) {
        showAlert('error', 'Please, try again later...');
      }
    });
  })();
};
