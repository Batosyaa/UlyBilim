        // 1. Random Number Generation and Conditionals
        document.getElementById('generateNumber').addEventListener('click', function() {
            // Generate random number between 1 and 100
            const randomNum = Math.floor(Math.random() * 100) + 1;
            
            // Display the number
            document.getElementById('randomNumber').textContent = randomNum;
            
            // Check if even or odd
            if (randomNum % 2 === 0) {
                document.getElementById('evenOdd').textContent = 'even';
            } else {
                document.getElementById('evenOdd').textContent = 'odd';
            }
            
            // Check if greater than 50
            if (randomNum > 50) {
                document.getElementById('greaterLess').textContent = 'greater';
            } else {
                document.getElementById('greaterLess').textContent = 'less than or equal';
            }
            
            // Learning path recommendation based on number
            let recommendation = '';
            if (randomNum <= 25) {
                recommendation = 'Beginner learning path - Start with foundational courses';
            } else if (randomNum <= 50) {
                recommendation = 'Intermediate learning path - Consider specialized skills development';
            } else if (randomNum <= 75) {
                recommendation = 'Advanced learning path - Deep dive into complex topics';
            } else {
                recommendation = 'Expert learning path - Consider becoming a course creator yourself!';
            }
            
            document.getElementById('recommendation').textContent = recommendation;
            document.getElementById('numberResult').style.display = 'block';
        });
        
        // 2. Comparators and Logic Operators
        document.getElementById('comparePrices').addEventListener('click', function() {
            const course1Name = document.getElementById('course1Name').value || 'First Course';
            const course2Name = document.getElementById('course2Name').value || 'Second Course';
            
            const course1Price = parseFloat(document.getElementById('course1Price').value);
            const course2Price = parseFloat(document.getElementById('course2Price').value);
            
            let resultMessage = '';
            
            // Check if valid inputs
            if (isNaN(course1Price) || isNaN(course2Price)) {
                resultMessage = 'Please enter valid prices for both courses.';
            } else {
                // Compare prices using comparators
                if (course1Price > course2Price) {
                    resultMessage = `${course1Name} is more expensive than ${course2Name} by $${(course1Price - course2Price).toFixed(2)}.`;
                } else if (course1Price < course2Price) {
                    resultMessage = `${course2Name} is more expensive than ${course1Name} by $${(course2Price - course1Price).toFixed(2)}.`;
                } else {
                    resultMessage = `${course1Name} and ${course2Name} have the same price: $${course1Price.toFixed(2)}.`;
                }
                
                // Add value assessment using logical operators
                if (course1Price > 100 && course2Price > 100) {
                    resultMessage += ' Both courses are premium offerings.';
                } else if (course1Price <= 50 || course2Price <= 50) {
                    resultMessage += ' At least one of these courses is a budget-friendly option.';
                }
            }
            
            document.getElementById('comparisonResult').innerHTML = resultMessage;
            document.getElementById('comparisonResult').style.display = 'block';
        });
        
        // 3. Working with Arrays
        const faqTopics = [
            'Account Creation', 
            'Course Enrollment', 
            'Payments', 
            'Certificates', 
            'Mobile Access'
        ];
        
        // Function to display FAQ topics
        function displayFaqTopics() {
            const topicsList = document.getElementById('faqTopicsList');
            topicsList.innerHTML = '';
            
            for (let i = 0; i < faqTopics.length; i++) {
                const li = document.createElement('li');
                li.textContent = faqTopics[i];
                topicsList.appendChild(li);
            }
        }
        
        // Initialize the list
        displayFaqTopics();
        
        // Add new FAQ topic
        document.getElementById('addFaqTopic').addEventListener('click', function() {
            const newTopic = document.getElementById('newFaqTopic').value.trim();
            if (newTopic) {
                faqTopics.push(newTopic);
                displayFaqTopics();
                document.getElementById('newFaqTopic').value = '';
            }
        });
        
        // 4. Adding Interactivity with Loops
        const courseNames = [
            'Introduction to Web Development',
            'Advanced JavaScript Programming',
            'Data Structures and Algorithms',
            'UX/UI Design Fundamentals',
            'Mobile App Development with React Native',
            'Python for Data Science',
            'Machine Learning Basics',
            'Cloud Computing Fundamentals',
            'Cybersecurity Essentials',
            'Digital Marketing Mastery'
        ];
        
        const courseDescriptions = [
            'Learn HTML, CSS, and basic JavaScript to build responsive websites.',
            'Master advanced concepts like closures, promises, and ES6+ features.',
            'Understand fundamental data structures and algorithmic approaches.',
            'Design user-friendly interfaces with modern design principles.',
            'Build cross-platform mobile apps with React Native framework.',
            'Analyze and visualize data using Python libraries like Pandas and Matplotlib.',
            'Get started with ML algorithms and practical applications.',
            'Explore cloud platforms, services, and deployment strategies.',
            'Learn to protect systems and data from various cyber threats.',
            'Develop effective digital marketing campaigns across multiple channels.'
        ];
        
        const coursePrices = [49.99, 69.99, 79.99, 59.99, 89.99, 74.99, 99.99, 84.99, 69.99, 59.99];
        
        const featuredCoursesDiv = document.getElementById('featuredCourses');
        
        // Generate dynamic course cards using a for loop
        for (let i = 0; i < 10; i++) {
            const card = document.createElement('div');
            card.className = `course-card ${i % 2 === 0 ? 'even' : 'odd'}`;
            
            const title = document.createElement('h3');
            title.textContent = courseNames[i];
            
            const desc = document.createElement('p');
            desc.textContent = courseDescriptions[i];
            
            const price = document.createElement('p');
            price.innerHTML = `<strong>$${coursePrices[i]}</strong>`;
            
            card.appendChild(title);
            card.appendChild(desc);
            card.appendChild(price);
            
            featuredCoursesDiv.appendChild(card);
        }
        
        // FAQ toggle functionality
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const toggle = this.querySelector('.toggle');
                
                if (answer.classList.contains('active')) {
                    answer.classList.remove('active');
                    toggle.textContent = '+';
                } else {
                    answer.classList.add('active');
                    toggle.textContent = '-';
                }
            });
        });