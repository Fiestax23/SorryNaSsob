const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const messageEl = document.querySelector(".message");

yesBtn.addEventListener("click", () => {
    messageEl.textContent = "Sorry na promise I will try to be better and I stop annoy you again,and sana wag mo na ko i-restrict hahhahahaha.";
});

noBtn.addEventListener("click", () => {
    messageEl.textContent = "Okay hahahahahhahahaha,kahapon pa ako na bobored wag mo na ako i-restrict boring naman pag di kita kausap hahahahahahha. Torry na ulit🥺👉👈 promise talaga di na kita susurahin.";
});
