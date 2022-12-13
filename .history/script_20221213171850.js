'use strict';
const faqContent = document.querySelectorAll('.faq_content');


faqContent.forEach((faq) => {
    faq.addEventListener('click', function () {
        // deselect();
        faq.classList.toggle('active');

    });
})
