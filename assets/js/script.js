function changeLanguage() {
    var languageSelect = document.getElementById('language');
    var selectedLanguage = languageSelect.value;

    // Get elements by their IDs
    var text1Element = document.getElementById('text1');
    var text2Element = document.getElementById('text2');
    var text3Element = document.getElementById('text3');
    var paragraphElement = document.getElementById('paragraph');
    var hireMeElement = document.getElementById('hireMe');

    // Define language-specific content
    var languageContent = {
        'en': {
            text1: 'Get every single solution',
            text2: "I'm a web developer",
            text3: 'Marc-Donald OMEUS',
            paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui obcaecati at modi adipisci error. Ea, possimus! Repellendus ad vitae adipisci aliquam, dolores distinctio fuga in dolorum exercitationem voluptate sunt similique!',
            hireMe: 'Hire me'
        },
        'fr': {
            text1: 'Obtenez chaque solution',
            text2: 'Je suis un développeur web',
            text3: 'Marc-Donald OMEUS',
            paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui obcaecati at modi adipisci error. Ea, possimus! Repellendus ad vitae adipisci aliquam, dolores distinctio fuga in dolorum exercitationem voluptate sunt similique!',
            hireMe: 'Engagez-moi'
        },
        'es': {
            text1: 'Obtén cada solución',
            text2: 'Soy un desarrollador web',
            text3: 'Marc-Donald OMEUS',
            paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui obcaecati at modi adipisci error. Ea, possimus! Repellendus ad vitae adipisci aliquam, dolores distinctio fuga in dolorum exercitationem voluptate sunt similique!',
            hireMe: 'Contrátame'
        }
    };

    // Set content based on selected language
    text1Element.textContent = languageContent[selectedLanguage].text1;
    text2Element.textContent = languageContent[selectedLanguage].text2;
    text3Element.textContent = languageContent[selectedLanguage].text3;
    paragraphElement.textContent = languageContent[selectedLanguage].paragraph;
    hireMeElement.textContent = languageContent[selectedLanguage].hireMe;

    console.log('Selected Language:', selectedLanguage);
}

// script.js
function toggleMobileMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}
