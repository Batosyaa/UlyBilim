        const chatBox = document.getElementById('chatBox');
        const messageInput = document.getElementById('messageInput');
        const sendButton = document.getElementById('sendButton');
        const notificationSound = new Audio('audio/notification.wav');


        function addMessage(text, isUser = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'support-message'}`;
        messageDiv.innerHTML = isUser ? 
            `<strong>You:</strong> ${text}` : 
            `<strong>Support:</strong> ${text}`;
    
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;

        if (!isUser) {
            notificationSound.play().catch(error => {
                console.log('Audio playback failed:', error);
            });
        }
        }

        sendButton.addEventListener('click', () => {
            const message = messageInput.value.trim();
            if (message) {
                addMessage(message);
                setTimeout(() => {
                    addMessage("Thank you for your message. Our team will respond shortly.", false);
                }, 1000);
                messageInput.value = '';
            }
        });

    // fetch('/api/send-message', {
    //     method: 'POST',
    //     body: JSON.stringify({ message: message }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if(data.success) {
    //         addMessage(message);
    //     }
    // });

        document.getElementById('supportForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Ticket submitted successfully! We will respond within 24 hours.');
            e.target.reset();
        });

        const faqData = [
            {
                question: "How do I update my account information?",
                answer: "You can update your profile information in the account settings section."
            },
            {
                question: "Where can I find my course materials?",
                answer: "All course materials are available in the 'My Courses' section."
            },
        ];

        const faqContainer = document.getElementById('faqAccordion');
        faqData.forEach((faq, index) => {
            const faqItem = document.createElement('div');
            faqItem.className = 'accordion-item faq-item shadow-sm mb-3';
            faqItem.innerHTML = `
                <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" 
                            data-bs-toggle="collapse" data-bs-target="#faq${index + 2}">
                        ${faq.question}
                    </button>
                </h3>
                <div id="faq${index + 2}" class="accordion-collapse collapse" 
                     data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        ${faq.answer}
                    </div>
                </div>
            `;
            faqContainer.appendChild(faqItem);
        });