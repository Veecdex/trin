
const messages = [
  {
    title: "Send love, even when you’re far away",
    sub: "Thoughtful eGifts from trusted businesses",
    icon: "ri-gift-line",
    color: "text-indigo-600"
  },
  {
    title: "Make birthdays unforgettable",
    sub: "Let them redeem what they truly want",
    icon: "ri-cake-2-line",
    color: "text-yellow-500"
  },
  {
    title: "Celebrate moments that matter",
    sub: "Gifts from fashion, gadgets & food vendors",
    icon: "ri-sparkling-line",
    color: "text-green-600"
  },
  {
    title: "Love deserves better gifting",
    sub: "Real businesses. Real redemption.",
    icon: "ri-heart-3-line",
    color: "text-pink-500"
  }
];

let index = 0;
const box = document.getElementById("giftMessage");
const title = document.getElementById("giftTitle");
const sub = document.getElementById("giftSub");
const icon = document.getElementById("giftIcon");

function showMessage() {
  box.classList.remove("opacity-0", "translate-y-2");

  setTimeout(() => {
    box.classList.add("opacity-0", "translate-y-2");

    setTimeout(() => {
      index = (index + 1) % messages.length;
      const m = messages[index];

      title.innerText = m.title;
      sub.innerText = m.sub;
      icon.className = `${m.icon} text-2xl ${m.color}`;

      box.classList.remove("opacity-0", "translate-y-2");
    }, 1000);
  }, 4000);
}

showMessage();
setInterval(showMessage, 6000);

const notifBtn = document.getElementById("notifBtn");
const notifPanel = document.getElementById("notifPanel");
const menuPanel = document.getElementById("menuPanel");

notifBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent document click from immediately closing
  notifPanel.classList.toggle("opacity-0");
  notifPanel.classList.toggle("pointer-events-none");
  notifPanel.classList.toggle("translate-y-2");

  // Close menu if open
  if (!menuPanel.classList.contains("-translate-y-full")) {
    menuPanel.classList.add("-translate-y-full");
  }
});

// Click outside to close
document.addEventListener("click", (e) => {
  if (!notifPanel.classList.contains("opacity-0")) {
    if (!notifPanel.contains(e.target) && !notifBtn.contains(e.target)) {
      notifPanel.classList.add("opacity-0", "pointer-events-none", "translate-y-2");
    }
  }
});


  function openBanner() {
    document.getElementById("giftBanner").classList.remove("-translate-y-full");
  }

  function closeBanner() {
    document.getElementById("giftBanner").classList.add("-translate-y-full");
  }



