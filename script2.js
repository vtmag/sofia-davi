document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quizForm');
    const quizResult = document.getElementById('quizResult');
    const submitQuizButton = document.getElementById('submitQuiz');

    const serviceLinks = {
        "Ατομική Θεραπεία": "individual-therapy.html",
        "Ομαδική Θεραπεία": "group-therapy.html",
        "Online Συνεδρίες": "online-therapy.html",
        "Κατ'οίκον Συνεδρίες": "home-therapy.html",
        "Θεραπεία Ζεύγους/Οικογενειακή Θεραπεία": "family-therapy.html",
        "Ψυχολογικές Αξιολογήσεις": "test-therapy.html",
        "Ψυχολογική Υποστήριξη για Ηλικιωμένους": "old-therapy.html",
        "Παιδοψυχολογία και Θεραπεία Παιδιών/Εφήβων": "child-therapy.html"
    };

    submitQuizButton.addEventListener('click', () => {
        const answers = {
            "Ατομική Θεραπεία": 0,
            "Ομαδική Θεραπεία": 0,
            "Online Συνεδρίες": 0,
            "Κατ'οίκον Συνεδρίες": 0,
            "Θεραπεία Ζεύγους/Οικογενειακή Θεραπεία": 0,
            "Ψυχολογικές Αξιολογήσεις": 0,
            "Ψυχολογική Υποστήριξη για Ηλικιωμένους": 0,
            "Παιδοψυχολογία και Θεραπεία Παιδιών/Εφήβων": 0
        };

        const settingPreferences = {
            "Κατ'οίκον": 0,
            "Online": 0
        };

        // Collect all selected answers
        const selectedAnswers = quizForm.querySelectorAll('input[type="radio"]:checked');

        if (selectedAnswers.length < 5) {
            alert('Παρακαλώ απαντήστε σε όλες τις ερωτήσεις.');
            return;
        }

        selectedAnswers.forEach(answer => {
            const value = answer.value;
            answers[value]++;

            // Determine if the setting is "Κατ'οίκον" or "Online"
            if (value === "Κατ'οίκον Συνεδρίες") {
                settingPreferences["Κατ'οίκον"]++;
            } else if (value === "Online Συνεδρίες") {
                settingPreferences["Online"]++;
            }
        });

        // Determine the preferred setting: "Κατ'οίκον" or "Online"
        const preferredSetting = settingPreferences["Κατ'οίκον"] > settingPreferences["Online"] ? "Κατ'οίκον Συνεδρίες" : "Online Συνεδρίες";

        // Remove setting-specific services from the tally
        delete answers["Κατ'οίκον Συνεδρίες"];
        delete answers["Online Συνεδρίες"];

        // Find the maximum score
        const maxScore = Math.max(...Object.values(answers));

        // Find all services with the maximum score (handling ties)
        const recommendedTherapies = Object.keys(answers).filter(service => answers[service] === maxScore);

        // Generate links for the recommended services
        const settingLink = serviceLinks[preferredSetting];
        const therapyLinks = recommendedTherapies.map(service => `<a href="${serviceLinks[service]}" target="_blank">${service}</a>`).join(', ');

        // Display the result with HTML links
        quizResult.innerHTML = `<h2>Η Κατάλληλη Υπηρεσία για Εσάς:</h2> 
                                <p>Προτιμώμενο Περιβάλλον: <a href="${settingLink}" target="_blank">${preferredSetting}</a></p> 
                                <p>Προτεινόμενες Μορφές Θεραπείας: ${therapyLinks}</p>`;
        quizResult.style.display = 'block';
    });
});