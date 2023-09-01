const ANSWERS = {
    1: "big data",
    2: "supervised learning",
    3: "clustering",
    4: "artificial intelligence",
    5: "target variable"
};

function checkAnswer(clueNumber) {
    const userAnswer = document.getElementById("answer").value.toLowerCase();

    if (userAnswer === ANSWERS[clueNumber]) {
        // Redirect to the next clue page or the treasure page
        if (clueNumber === 5) {
            window.location.href = "treasure.html";
        } else {
            window.location.href = `clue_${clueNumber + 1}.html`;
        }
    } else {
        alert("Wrong answer! Try again.");
    }
}
