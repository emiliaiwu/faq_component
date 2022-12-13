'use strict';
const faqHeader = document.querySelectorAll('.faq_header');
const faqContent = document.querySelectorAll('.faq_content');


faqHeader.forEach((faq, idx) => {
    faq.addEventListener('click', function () {
        faqContent.forEach((fq, index) => {
            if (idx === index) {
                fq.classList.toggle('active');
            }
            const allSiblings = Array.from(fq.parentElement.children).filter(
				(siblings) => siblings.id !== fq.id
            );
            
            allSiblings.forEach((sibling) => {

                if (fq.classList.contains('active')) {
                    
                }
                
            })
        })

        

    });
})


