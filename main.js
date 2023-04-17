// Functionize Minecraft Fishing Start Code
// let answer1 = "toronto";
// let answer2 = "vancouver";
// let answer3 = "edmonton";
// let answer4 = "montreal";
// Answer
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let score = 0;
  let feedback = "";
  //Input Variables

  let question1 = document.getElementById("answer1").value;
  if (question1 == "Toronto") {
    score++;
    feedback += "<p>Question 1: Correct!</p>";
  } else {
    feedback += `<p>Question 1: Incorrect. The correct answer is Toronto.</p>`;
  }
  let question2 = document.getElementById("answer2").value;
  if (question2 == "Vancouver") {
    score++;
    feedback += "<p>Question 2: Correct!</p>";
  } else {
    feedback += `<p>Question 2: Incorrect. The correct answer is Vancouver.</p>`;
  }
  let question3 = document.getElementById("answer3").value;
  if (question3 == "Edmonton") {
    score++;
    feedback += "<p>Question 3: Correct!</p>";
  } else {
    feedback += `<p>Question 3: Incorrect. The correct answer is Edmonton.</p>`;
  }
  let question4 = document.getElementById("answer4").value;
  if (question4 == "Montreal") {
    score++;
    feedback += "<p>Question 4: Correct!</p>";
  } else {
    feedback += `<p>Question 4: Incorrect. The correct answer is Montreal.</p>`;
  }

  let percentage = Math.round((score / 4) * 100);
  let scoreText = `<br>You got ${score}/4 (${percentage}%)`;
  if (percentage >= "75") {
    feedback += "<p>Congratualations, you have passed this quiz!</p>";
  } else {
    feedback += `<p>You have not passed this quiz. Try to be more prepared next time.</p>`;
  }

  document.getElementById("resultDiv").innerHTML = scoreText + feedback;
}
console.log();
