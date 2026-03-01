const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add('show');
    }
  });
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const token = "8467269941:AAE5iCW7kunNZ1kaJg3nv2lqmqALNnDEc4w";
  const chat_id = "7960027462";

  const text = `
📩 Yangi xabar!
👤 Ism: ${name}
📝 Xabar: ${message}
  `;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chat_id,
      text: text
    })
  })
  .then(response => {
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("contactForm").reset();
  })
  .catch(error => {
    alert("Xatolik yuz berdi!");
  });

});
function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox-img").style.display = "block";
  document.getElementById("lightbox-video").style.display = "none";
}

function openVideo(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-video").src = src;
  document.getElementById("lightbox-video").style.display = "block";
  document.getElementById("lightbox-img").style.display = "none";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
