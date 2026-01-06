function pickCandy() {
  const candies = ["🍫 Chocolate Bar", "🍭 Lollipop", "🍬 Gummies", "🍪 Cookie"];
  const random = Math.floor(Math.random() * candies.length);
  document.getElementById("candy-result").textContent =
    "You got: " + candies[random];
}

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const text = card.textContent.trim();

      let message = "";

      if (text.includes("Vampire")) {
        message = "🎃 You have put on the vampire costume! 🧛‍♂️";
      } else if (text.includes("Zombie")) {
        message = "🎃 You have put on the zombie costume! 🧟‍♂️";
      } else if (text.includes("Witch")) {
        message = "🎃 You have put on the witch costume! 🧙‍♀️";
      }

      card.textContent = "";

      const msgElement = document.createElement("p");
      msgElement.textContent = message;
      msgElement.style.fontSize = "1rem";
      msgElement.style.fontWeight = "bold";
      msgElement.style.color = "white";
      card.appendChild(msgElement);
    });
  });
});
