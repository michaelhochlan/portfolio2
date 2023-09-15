/**
 * The BMR calculation, called whith button.addEventListener()
 */
function calculateBmr() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var age = document.getElementById("age").value;
  var bmrTwo = document.getElementById("activity").value;

  if (document.getElementById("gender").value === "male") {
    var gender1 = 66;
    var bmrOne = Math.round(
      (gender1 + 13.397 * weight + 4.799 * height - 5.677 * age + 88.362) *
        bmrTwo
    );
  } else {
    var gender2 = 655;
    var bmrOne = Math.round(
      (gender2 + 9.247 * weight + 3.098 * height - 4.33 * age + 447.593) *
        bmrTwo
    );
  }
  const resText1 = "Your BMR:";
  const resultBmr = document.getElementById("bmrresult");
  resultBmr.innerHTML = resText1.concat(" ", bmrOne);
}
/**
 * The BMI calculation, called whith button.addEventListener()
 */
function calculateBmi() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  var bmi = Math.round(weight / ((height / 100) * (height / 100)));
  const resText2 = "Your BMI:";
  const resultBmi = document.getElementById("bmiresult");
  resultBmi.innerHTML = resText2.concat(" ", bmi);
}
/**
 * The EventListener for button Calculate
 */
button.addEventListener("click", function () {
  calculateBmr();
  calculateBmi();
});
/**
 * The EventListener for button Reset
 */
reset.addEventListener("click", function () {
  const resultBmr = document.getElementById("bmrresult");
  resultBmr.innerHTML = "Your BMR: 0";

  const resultBmi = document.getElementById("bmiresult");
  resultBmi.innerHTML = "Your BMI: 0";
});
