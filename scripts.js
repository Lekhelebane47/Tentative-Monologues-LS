// Chatbot Interactivity with Humor
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
    switch (true) {
        case /hello/i.test(input):
            return "Hello there! Fancy a chat about deep thoughts and questionable ideas?";
        case /episodes/i.test(input):
            return "Oh, you've got great taste! Check out the Episodes section – I hear Episode 3 is particularly life-changing.";
        case /what's new/i.test(input):
            return "Just the usual existential crises and a sprinkle of humor! Ask me about the podcast or random topics!";
        case /fun fact/i.test(input):
            return "Fun fact: The accordion is also called a 'squeezebox' because, well, you squeeze it!";
        case /gallery/i.test(input):
            return "Our gallery has all the good stuff – visuals that match the profound nonsense you’ll love!";
        default:
            return "I'm here for all your questions, wise or silly! Try 'fun fact' or 'episodes'!";
    }
}

// Info Pop-ups for Episodes
const episodesInfo = {
    episode1: "Did you know? Accordions have a rich history dating back to the early 19th century!",
    episode2: "Fun tidbit: Episode 2 dives deep into intriguing human behaviors. No spoilers though!",
    episode3: "New in the world? Philosophers are re-evaluating old thoughts – perhaps Episode 3 is ahead of its time!",
    episode4: "Did you hear? New studies show laughter is the best medicine. Check out Episode 4 for a dose!",
    episode5: "Just in: People are debating tech’s impact on creativity. Episode 5 might have answers!",
    episode6: "Trivia: Did you know that colors can affect your mood? Episode 6 delves into the science of emotions.",
    episode7: "Breaking News! AI is now writing poetry. Is it soulful or soulless? Episode 7 has some answers!"
};

// Function to show info pop-ups
document.querySelectorAll('.episode-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const popup = card.querySelector('.episode-info-popup');
        const topic = card.getAttribute('data-topic');
        popup.textContent = episodesInfo[card.id] || "Interesting fact!";
    });
});

// Dynamic API content placeholder
// Future integration with API to pull news and facts around episode topics
async function updateEpisodeInfo() {
    // Placeholder for future API integration
    // E.g., fetch real-time news or facts on episode topics
    console.log("Dynamic data updates would appear here.");
}
updateEpisodeInfo();
