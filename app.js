var quotes = [
"The best way to predict the future is to invent it. — Alan Kay",

"In the end, we will remember not the words of our enemies, but the silence of our friends.— Martin Luther King Jr",

"You must be the change you wish to see in the world. — Mahatma Gandhi",

"The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",

"The only way to do great work is to love what you do. — Steve Jobs",

"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. — Albert Schweitzer",

"Life is what happens when you're busy making other plans.— John Lennon",

"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. — Ralph Waldo Emerson",

"The journey of a thousand miles begins with one step.— Lao Tzu",

"The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
"The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
"Believe you can and you're halfway there.- Theodore Roosevelt",
"The only way to do great work is to love what you do. - Steve Jobs",
 "Kindness is a language which the deaf can hear and the blind can see.- Mark Twain ", 
"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller ", 
"You are stronger than you think you are.",
"Happiness is not a destination, it's a journey." ,
"Every day is a new opportunity to start again.",
"The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
"The greatest discovery of my generation is that human beings can alter their lives by altering their attitudes of mind- William James",
"Don't be afraid to let your imagination run wild.- Roger Von Oech",
"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
"Life is 10% what happens to you and 90% how you react to it.- Charles R. Swindoll",
"The only thing standing between you and your dream is the story you keep telling yourself.- Jordan Belfort",
"Believe in yourself and all that you are. Know that you are capable of more than you imagine."

]

function getQuote()
{
    var randomNumber = Math.floor(Math.random() * quotes.length);
    var quoteSection = document.getElementById("newQuoteSection");
    
    // Fade out current quote
    quoteSection.style.opacity = 0;
    
    setTimeout(function() {
        quoteSection.innerHTML = quotes[randomNumber];
        
        // Fade in new quote
        quoteSection.style.opacity = 1;
    }, 300); // Delay to match fade-out duration

}