'use strict';
const faqHeader = document.querySelectorAll('.faq_header');


faqHeader.forEach((faq, index) => {
    faq.addEventListener('click', function () {
        faq.classList.toggle('active');

        // if (faq.parentElement.children) {
        //     faq.classList.toggle('active');
        // }



        const allSiblings = Array.from(card.parentElement.children).filter(
					(siblings) => siblings.id !== card.id
				);

    });
})


