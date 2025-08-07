function handleLogin() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const error = document.getElementById('login-error');

  if (!username || !password) {
    error.textContent = "Te rugăm să introduci username și parolă!";
  } else {
    error.textContent = "";
    alert(`Autentificat ca ${username}`);
  }
}

document.getElementById('feedback-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const subject = document.getElementById('subject').value;
  const rating = document.getElementById('rating').value;
  const comments = document.getElementById('comments').value.trim();
  const termsAccepted = document.getElementById('terms').checked;
  const wantsContact = document.getElementById('contact').checked;

  if (!name || !email || !subject || !rating || !comments || !termsAccepted) {
    alert("Toate câmpurile obligatorii trebuie completate!");
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <strong>${name}</strong> (${email})<br>
    Telefon: ${phone || "Nespecificat"}<br>
    Subiect: ${subject}<br>
    Rating: ${rating}/5<br>
    Comentarii: ${comments}<br>
    Contact dorit: ${wantsContact ? "Da" : "Nu"}
  `;

  document.getElementById('feedback-list').appendChild(li);
  e.target.reset();
});