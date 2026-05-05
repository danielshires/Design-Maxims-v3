// Random design quote generator – original concept by Sophanarith Sok.
// https://www.freecodecamp.org/news/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08/

const quotes = [
  { quote: "The faker you are, the more successful you can be.", author: "Pablo Stanley", url: "https://www.youtube.com/watch?v=bEg5ySTUGxE" },
  { quote: "Fuck the midtones.", author: "Gerhard Steidl", url: "https://www.youtube.com/watch?v=8McHbjaxpbA" },
  { quote: "Thinking is hard. Not thinking is harder.", author: "Hans Aarsman", url: "https://hansaarsman.nl" },
  { quote: "Perfect is the enemy of the good. Free yourself from the tyranny of perfection! Never surrender!", author: "Erik Kessels", url: "https://www.erikkessels.com" },
  { quote: "Live in the leading—the spaces in between the rules.", author: "Stefan Mumaw", url: "http://www.stefanmumaw.com" },
  { quote: "Have no fear of perfection—you’ll never reach it.", author: "Salvador Dalí", url: "https://en.wikipedia.org/wiki/Salvador_Dal%C3%AD" },
  { quote: "Good design is like a refrigerator—when it works, no one notices, but when it doesn’t, it sure stinks.", author: "Irene Au", url: "https://ireneau.com" },
  { quote: "Digital design is like painting, except the paint never dries.", author: "Neville Brody", url: "https://brody-associates.com" },
  { quote: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs", url: "https://en.wikipedia.org/wiki/Steve_Jobs" },
  { quote: "Creativity is a highfalutin word for the work I have to do between now and Tuesday.", author: "Ray Kroc", url: "https://en.wikipedia.org/wiki/Ray_Kroc" },
  { quote: "Art is anything you can get away with.", author: "Marshall McLuhan", url: "https://en.wikipedia.org/wiki/Marshall_McLuhan" },
  { quote: "It’s through mistakes that you actually can grow. You have to get bad in order to get good.", author: "Paula Scher", url: "https://www.pentagram.com/about/paula-scher" },
  { quote: "Get rid of everything that is not essential to making a point.", author: "Christoph Niemann", url: "https://www.christophniemann.com" },
  { quote: "The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.", author: "Charles Eames", url: "https://en.wikipedia.org/wiki/Charles_Eames" },
  { quote: "Design can be art. Design can be simple. That’s why it’s so complicated.", author: "Paul Rand", url: "https://www.paulrand.design" },
  { quote: "People ignore designs that ignore people.", author: "Frank Chimero", url: "https://frankchimero.com" },
  { quote: "You don’t have to be ‘a creative’ to be creative.", author: "Drory Ben-Menachem", url: "" },
  { quote: "I love deadlines. I like the whooshing sound they make as they fly by.", author: "Douglas Adams", url: "https://en.wikipedia.org/wiki/Douglas_Adams" },
  { quote: "For every complex problem, there is an answer that is clear, simple, and wrong.", author: "H. L. Mencken", url: "https://en.wikipedia.org/wiki/H._L._Mencken" },
  { quote: "Good design is honest.", author: "Dieter Rams", url: "https://en.wikipedia.org/wiki/Dieter_Rams" },
  { quote: "Design is thinking made visual.", author: "Saul Bass", url: "https://en.wikipedia.org/wiki/Saul_Bass" },
  { quote: "How well we communicate is determined not by how well we say things, but how well we are understood.", author: "Andrew Grove", url: "https://en.wikipedia.org/wiki/Andrew_Grove" },
  { quote: "Good design is obvious. Great design is transparent.", author: "Joe Sparano", url: "https://joesparano.com/about" },
  { quote: "Where do new ideas come from? The answer is simple: differences. Creativity comes from unlikely juxtapositions.", author: "Nicholas Negroponte", url: "https://en.wikipedia.org/wiki/Nicholas_Negroponte" },
  { quote: "Do not seek praise. Seek criticism.", author: "Paul Arden", url: "https://en.wikipedia.org/wiki/Paul_Arden" },
  { quote: "Styles come and go. Good design is a language, not a style.", author: "Massimo Vignelli", url: "https://en.wikipedia.org/wiki/Massimo_Vignelli" },
  { quote: "You don’t think your way to creative work. You work your way to creative thinking.", author: "George Nelson", url: "https://www.hermanmiller.com/en_au/designers/nelson/" },
  { quote: "If I had asked people what they wanted, they would have said faster horses.", author: "Henry Ford", url: "https://en.wikipedia.org/wiki/Henry_Ford" },
  { quote: "Design is a solution to a problem. Art is a question to a problem.", author: "John Maeda", url: "https://en.wikipedia.org/wiki/John_Maeda" },
  { quote: "There is no design without discipline. There is no discipline without intelligence.", author: "Massimo Vignelli", url: "https://en.wikipedia.org/wiki/Massimo_Vignelli" },
  { quote: "Design everything on the assumption that people are not heartless or stupid but marvelously capable.", author: "John Chris Jones", url: "https://en.wikipedia.org/wiki/John_Chris_Jones" },
  { quote: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry", url: "https://en.wikipedia.org/wiki/Antoine_de_Saint-Exup%C3%A9ry" },
  { quote: "There is no such thing as a boring project. There are only boring executions.", author: "Irene Etzkorn", url: "https://www.siegelvision.com/ireneetzkorn" },
  { quote: "The time it takes to make a decision increases as the number of alternatives increases.", author: "William Edmund Hick", url: "https://en.wikipedia.org/wiki/W._E._Hick" },
  { quote: "Sometimes when you innovate, you make mistakes.", author: "Steve Jobs", url: "https://en.wikipedia.org/wiki/Steve_Jobs" },
  { quote: "Simplicity is not the goal. It is the by-product of a good idea and modest expectations.", author: "Paul Rand", url: "https://www.paulrand.design" },
  { quote: "Simplicity, wit and good typography.", author: "Michael Bierut", url: "https://www.pentagram.com/about/michael-bierut" },
  { quote: "Practice safe design: Use a concept.", author: "Petrula Vrontikis", url: "http://www.35k.com" }
];

const colors = [
  "#E831A0", "#0C82EA", "#02978C", "#01388B", "#FD6835",
  "#CB3338", "#2CA7DB", "#652DCC", "#009646", "#017DA6", "#B62CD1"
];

const quoteEl = document.getElementById("quotetext");
const sourceEl = document.getElementById("quotesource");

function renderQuote(index) {
  if (!quoteEl || !sourceEl) return;
  const item = quotes[index];
  quoteEl.textContent = item.quote;
  if (item.url) {
    const link = document.createElement("a");
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = item.author;
    sourceEl.replaceChildren(link);
  } else {
    sourceEl.textContent = item.author;
  }
}

function applyRandomColor() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
  document.querySelectorAll("button.mobile-button-random").forEach((btn) => {
    btn.style.color = color;
  });
}

function getQuote() {
  renderQuote(Math.floor(Math.random() * quotes.length));
  applyRandomColor();
}

// Side menu
const sideNav = document.getElementById("mySidenav");
const openMenuBtn = document.querySelector("[data-open-menu]");
const closeMenuBtn = document.querySelector("[data-close-menu]");

function openNav() {
  if (!sideNav) return;
  sideNav.style.width = "80%";
  sideNav.setAttribute("aria-hidden", "false");
  if (openMenuBtn) openMenuBtn.setAttribute("aria-expanded", "true");
}

function closeNav() {
  if (!sideNav) return;
  sideNav.style.width = "0";
  sideNav.setAttribute("aria-hidden", "true");
  if (openMenuBtn) {
    openMenuBtn.setAttribute("aria-expanded", "false");
    openMenuBtn.focus();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll("[data-random]").forEach((btn) => {
    btn.addEventListener("click", getQuote);
  });

  if (openMenuBtn) openMenuBtn.addEventListener("click", openNav);
  if (closeMenuBtn) closeMenuBtn.addEventListener("click", closeNav);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  if (quoteEl) {
    renderQuote(Math.floor(Math.random() * quotes.length));
  }
});
