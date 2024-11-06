// Chatbot with Enhanced Humor Tailored to Episodes
document.getElementById('chat-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let userInput = e.target.value;
        let response = chatbotResponse(userInput);
        document.querySelector('.chatbot-body').innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
        document.querySelector('.chatbot-body').innerHTML += `<p><strong>Sankomota:</strong> ${response}</p>`;
        e.target.value = '';
    }
});

function chatbotResponse(input) {
    if (/accordion/i.test(input)) {
        return "Ah, Episode 1! The accordion – a party in your hands since 1829!";
    } else if (/fun fact/i.test(input)) {
        return "Fun fact: The word 'accordion' comes from 'accord,' meaning harmony or agreement. Fancy, right?";
    } else if (/news|latest/i.test(input)) {
        return "Breaking news: Just heard on Twitter, cats may indeed be planning world domination.";
    } else {
        return "I'm here for all your questions, wise or silly! Try 'fun fact' or 'episodes'!";
    }
}

// Interactive Episode Info Pop-Ups
const episodesInfo = {
    episode1: "Did you know? Accordions were first patented in 1829 and have since been a staple in folk music.",
    episode2: "Episode 2 tackles human behavior – latest findings show that humor can help us bond faster!",
    episode3: "Episode 3 explores philosophy – just in: over 90% of philosophers agree thinking is exhausting.",
    // Add more episode-specific facts
};

// API Placeholder for Future Integration
async function updateEpisodeInfo() {
    console.log("Future data updates would appear here for live info on episode topics.");
}
updateEpisodeInfo();
