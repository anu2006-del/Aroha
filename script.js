/* =========================
   AROHA - MAIN NAVIGATION
========================= */

function goToWomen() {
    localStorage.setItem("arohaGender", "women");
    window.location.href = "women.html";
}

function goToMen() {
    localStorage.setItem("arohaGender", "men");
    window.location.href = "men.html";
    const gender = localStorage.getItem("arohaGender");

if (gender === "men") {
    document.body.className = "men-page";
} else {
    document.body.className = "women-page";
}
}


/* =========================
   WELLNESS SOLUTIONS
========================= */

const wellnessData = {

    selfcare: {
        title: "Self Care",
        intro: "Small acts of care can make a big difference in how you feel every day.",
        why: "Self-care helps you take time for your body, mind and emotions while building healthier daily habits.",
        do: [
            "Take a few minutes for yourself",
            "Stay hydrated throughout the day",
            "Get enough rest",
            "Choose nourishing food"
        ],
        tips: [
            "Start with small habits",
            "Keep a simple daily routine",
            "Listen to your body",
            "Give yourself enough recovery time"
        ],
        reminder: "You don't have to do everything perfectly. Consistency matters more."
    },


    period: {
        title: "Period Care",
        intro: "Understanding your menstrual cycle can help you care for yourself with more comfort and confidence.",
        why: "Periods can bring changes in energy, mood and physical comfort. Simple self-care may help you feel better.",
        do: [
            "Stay hydrated",
            "Eat balanced meals",
            "Use comfortable period products",
            "Take enough rest"
        ],
        tips: [
            "Keep track of your cycle",
            "Use gentle heat for cramps",
            "Choose comfortable clothing",
            "Talk to a healthcare professional if symptoms are unusual"
        ],
        reminder: "Your body changes throughout your cycle. Listen to what it needs."
    },


    mental: {
        title: "Mental Wellness",
        intro: "Your mental wellbeing deserves the same care as your physical health.",
        why: "Taking breaks, managing stress and staying connected can support emotional wellbeing.",
        do: [
            "Take short breaks during the day",
            "Spend time doing something you enjoy",
            "Talk to someone you trust",
            "Give yourself enough rest"
        ],
        tips: [
            "Practice slow breathing",
            "Reduce unnecessary screen time",
            "Write down your thoughts",
            "Don't be afraid to ask for support"
        ],
        reminder: "It is okay to slow down and take care of yourself."
    },


    fitness: {
        title: "Fitness",
        intro: "Movement doesn't have to be complicated. Find activities that feel comfortable and enjoyable.",
        why: "Regular physical activity can support strength, energy, mobility and overall wellbeing.",
        do: [
            "Start with a warm-up",
            "Move your body regularly",
            "Include simple strength exercises",
            "Cool down after exercise"
        ],
        tips: [
            "Start slowly",
            "Focus on proper form",
            "Take rest when your body needs it",
            "Increase intensity gradually"
        ],
        reminder: "Small amounts of regular movement can become a powerful habit."
    },


    nutrition: {
        title: "Nutrition",
        intro: "Good nutrition is about giving your body the energy and nutrients it needs.",
        why: "A balanced diet supports energy, growth, recovery and everyday wellbeing.",
        do: [
            "Include vegetables and fruits",
            "Choose protein-rich foods",
            "Drink enough water",
            "Eat a variety of foods"
        ],
        tips: [
            "Avoid skipping meals regularly",
            "Include different food groups",
            "Choose home-cooked meals when possible",
            "Eat slowly and mindfully"
        ],
        reminder: "Healthy eating is about balance, not perfection."
    },


    water: {
        title: "Water",
        intro: "Staying hydrated is one of the simplest ways to support your daily wellbeing.",
        why: "Water helps your body perform many essential functions and supports normal hydration.",
        do: [
            "Keep water nearby",
            "Drink regularly throughout the day",
            "Drink more when you are physically active",
            "Include water-rich foods"
        ],
        tips: [
            "Carry a reusable water bottle",
            "Drink water with meals",
            "Don't wait until you are extremely thirsty",
            "Make hydration part of your routine"
        ],
        reminder: "Small sips throughout the day can make hydration easier."
    },


    skin: {
        title: "Skin Care",
        intro: "A simple and consistent skincare routine can help you take better care of your skin.",
        why: "Your skin acts as a protective barrier, so gentle daily care can support its health.",
        do: [
            "Clean your face gently",
            "Keep your skin clean after sweating",
            "Avoid picking or squeezing acne",
            "Keep your pillowcase and towels clean"
        ],
        tips: [
            "Avoid harsh scrubbing",
            "Introduce new products slowly",
            "Choose products suitable for your skin",
            "See a dermatologist for persistent skin problems"
        ],
        reminder: "Healthy skin care is about consistency and gentle habits."
    },


    hair: {
        title: "Hair Care",
        intro: "Healthy hair starts with gentle care and a healthy daily routine.",
        why: "Hair can be affected by nutrition, styling, heat, chemical treatments and everyday habits.",
        do: [
            "Keep your scalp clean",
            "Handle wet hair gently",
            "Avoid excessive heat styling",
            "Eat a balanced diet"
        ],
        tips: [
            "Avoid very tight hairstyles",
            "Trim damaged ends when needed",
            "Don't brush wet hair harshly",
            "Seek professional advice for persistent hair loss"
        ],
        reminder: "Gentle care and patience can help you maintain healthier hair."
    },


    routine: {
        title: "Daily Routine",
        intro: "A simple routine can make your day feel more organized and manageable.",
        why: "Consistent daily habits can help you manage time, rest and personal wellbeing.",
        do: [
            "Start your day with a simple plan",
            "Set realistic goals",
            "Make time for meals and rest",
            "Prepare for tomorrow before sleeping"
        ],
        tips: [
            "Don't overload your schedule",
            "Keep your routine flexible",
            "Prioritize important tasks",
            "Celebrate small achievements"
        ],
        reminder: "A good routine should support your life, not make it stressful."
    },


    mood: {
        title: "Mood Tracker",
        intro: "Noticing your mood can help you understand your emotional patterns over time.",
        why: "Tracking how you feel can help you recognize patterns, triggers and activities that affect your mood.",
        do: [
            "Check in with yourself daily",
            "Write down how you feel",
            "Notice what affects your mood",
            "Give yourself time to relax"
        ],
        tips: [
            "Use simple mood words",
            "Look for patterns over time",
            "Talk to someone when needed",
            "Don't judge yourself for difficult emotions"
        ],
        reminder: "Every emotion is worth noticing. Be kind to yourself."
    },


    sleep: {
        title: "Sleep",
        intro: "Good sleep gives your body and mind time to rest and recover.",
        why: "Adequate sleep supports everyday energy, concentration, mood and physical wellbeing.",
        do: [
            "Keep a regular sleep schedule",
            "Create a calm bedtime routine",
            "Keep your sleeping space comfortable",
            "Give yourself enough time to sleep"
        ],
        tips: [
            "Reduce screen time before bed",
            "Avoid heavy meals close to bedtime",
            "Keep your room comfortable and quiet",
            "Try relaxing activities before sleep"
        ],
        reminder: "Rest is not wasted time. Your body needs it to recover."
    },


    progress: {
        title: "My Progress",
        intro: "Progress is about building healthy habits and noticing positive changes over time.",
        why: "Tracking small improvements can help you stay aware of your habits and maintain consistency.",
        do: [
            "Track your daily habits",
            "Celebrate small improvements",
            "Review your routine regularly",
            "Focus on consistency"
        ],
        tips: [
            "Don't compare your progress with others",
            "Look at long-term changes",
            "Set realistic goals",
            "Give yourself credit for small wins"
        ],
        reminder: "Progress doesn't have to be perfect. Keep moving forward."
    }

};


/* =========================
   LOAD SOLUTION PAGE
========================= */

function loadSolution() {

    const title = document.getElementById("solutionTitle");

    // If we are not on solution.html, stop here
    if (!title) {
        return;
    }

    const params = new URLSearchParams(window.location.search);

    const topic = params.get("topic") || "selfcare";

    const data = wellnessData[topic] || wellnessData.selfcare;


    /* TITLE */

    title.textContent = data.title;


    /* INTRO */

    const intro = document.getElementById("solutionIntro");

    if (intro) {
        intro.textContent = data.intro;
    }


    /* WHY */

    const whyText = document.getElementById("whyText");

    if (whyText) {
        whyText.textContent = data.why;
    }


    /* DO LIST */

    const doList = document.getElementById("doList");

    if (doList) {

        doList.innerHTML = "";

        data.do.forEach(function (item) {

            const li = document.createElement("li");

            li.textContent = item;

            doList.appendChild(li);

        });
    }


    /* TIPS LIST */

    const tipsList = document.getElementById("tipsList");

    if (tipsList) {

        tipsList.innerHTML = "";

        data.tips.forEach(function (item) {

            const li = document.createElement("li");

            li.textContent = item;

            tipsList.appendChild(li);

        });
    }


    /* REMINDER */

    const reminderText = document.getElementById("reminderText");

    if (reminderText) {
        reminderText.textContent = data.reminder;
    }


    /* REMINDER TITLE */

    const reminderTitle = document.getElementById("reminderTitle");

    if (reminderTitle) {
        reminderTitle.textContent = "Your daily reminder";
    }

}


/* =========================
   START
========================= */

document.addEventListener("DOMContentLoaded", function () {

    loadSolution();

const taskChecks = document.querySelectorAll(
    '.todo-item input[type="checkbox"]'
);

const completedCount = document.getElementById("completedCount");
const progressFill = document.getElementById("progressFill");

function updateTaskProgress() {

    const completed = document.querySelectorAll(
        '.todo-item input[type="checkbox"]:checked'
    ).length;

    if (completedCount) {
        completedCount.textContent = completed;
    }

    if (progressFill) {
        const total = taskChecks.length;
        const percentage = total > 0 ? (completed / total) * 100 : 0;
        progressFill.style.width = percentage + "%";
    }
}

taskChecks.forEach(function (checkbox) {
    checkbox.addEventListener("change", updateTaskProgress);
});

updateTaskProgress();

    

});

// Aroha solution page theme
const currentPage = window.location.pathname;
const previousPage = document.referrer;

if (currentPage.includes("solution.html")) {

    if (previousPage.includes("women.html")) {
        document.body.classList.add("women-page");
    }

    if (previousPage.includes("men.html")) {
        document.body.classList.add("men-page");
    }

}