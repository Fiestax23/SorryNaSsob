const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const messageEl = document.querySelector(".message");

yesBtn.addEventListener("click", () => {
    messageEl.textContent = "Sorry na promise I will try to be better and I stop annoy you again,and sana wag mo na ko i-restrict hahhahahaha.";
});

noBtn.addEventListener("click", () => {
    messageEl.textContent = "Oo na alam ko naman, but still sorry ha, and miss u na sana di mo na ko i-restrict hahhahahaha, umay dito boring pag di ka kausap.";
});
