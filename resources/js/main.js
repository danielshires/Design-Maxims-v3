// Random design quote generator – original concept by Sophanarith Sok.
// https://www.freecodecamp.org/news/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08/

const quotes = [
  { quote: "How well we communicate is determined not by how well we say things, but how well we are understood.", author: "Andrew Grove", url: "https://en.wikipedia.org/wiki/Andrew_Grove" },
  { quote: "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry", url: "https://en.wikipedia.org/wiki/Antoine_de_Saint-Exup%C3%A9ry", tag: "Graphic Design" },
  { quote: "I’ve never had a problem with a dumb client. There is no such thing as a bad client. Part of our job is to do good work and get the client to accept it.", author: "Bob Gill", url: "", tag: "Graphic Design" },
  { quote: "The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.", author: "Charles Eames", url: "https://en.wikipedia.org/wiki/Charles_Eames" },
  { quote: "Get rid of everything that is not essential to making a point.", author: "Christoph Niemann", url: "https://www.christophniemann.com" },
  { quote: "Graphic design will save the world right after rock and roll does.", author: "David Carson", url: "", tag: "Graphic Design" },
  { quote: "Good design is honest.", author: "Dieter Rams", url: "https://en.wikipedia.org/wiki/Dieter_Rams" },
  { quote: "I love deadlines. I like the whooshing sound they make as they fly by.", author: "Douglas Adams", url: "https://en.wikipedia.org/wiki/Douglas_Adams" },
  { quote: "You don’t have to be ‘a creative’ to be creative.", author: "Drory Ben-Menachem", url: "" },
  { quote: "Design isn’t crafting a beautiful textured button with breathtaking animation. It’s figuring out if there’s a way to get rid of the button altogether.", author: "Edward Tufte", url: "" },
  { quote: "Perfect is the enemy of the good. Free yourself from the tyranny of perfection! Never surrender!", author: "Erik Kessels", url: "https://www.erikkessels.com" },
  { quote: "Good design is all about making other designers feel like idiots because that idea wasn’t theirs.", author: "Frank Chimero", url: "", tag: "Design" },
  { quote: "People ignore designs that ignore people.", author: "Frank Chimero", url: "https://frankchimero.com" },
  { quote: "You don’t think your way to creative work. You work your way to creative thinking.", author: "George Nelson", url: "https://www.hermanmiller.com/en_au/designers/nelson/" },
  { quote: "Fuck the midtones.", author: "Gerhard Steidl", url: "https://www.youtube.com/watch?v=8McHbjaxpbA" },
  { quote: "It’s easier to ask forgiveness than it is to get permission.", author: "Grace Hopper", url: "", tag: "Design" },
  { quote: "For every complex problem, there is an answer that is clear, simple, and wrong.", author: "H. L. Mencken", url: "https://en.wikipedia.org/wiki/H._L._Mencken" },
  { quote: "Thinking is hard. Not thinking is harder.", author: "Hans Aarsman", url: "https://hansaarsman.nl" },
  { quote: "If I had asked people what they wanted, they would have said faster horses.", author: "Henry Ford", url: "https://en.wikipedia.org/wiki/Henry_Ford" },
  { quote: "Good design is like a refrigerator—when it works, no one notices, but when it doesn’t, it sure stinks.", author: "Irene Au", url: "https://ireneau.com" },
  { quote: "There is no such thing as a boring project. There are only boring executions.", author: "Irene Etzkorn", url: "https://www.siegelvision.com/ireneetzkorn" },
  { quote: "Content precedes design. Design in the absence of content is not design, it’s decoration.", author: "Jeffrey Zeldman", url: "", tag: "Design" },
  { quote: "The work you do while you procrastinate is probably the work you should be doing for the rest of your life.", author: "Jessica Hische", url: "" },
  { quote: "Good design is obvious. Great design is transparent.", author: "Joe Sparano", url: "https://joesparano.com/about" },
  { quote: "Design everything on the assumption that people are not heartless or stupid but marvelously capable.", author: "John Chris Jones", url: "https://en.wikipedia.org/wiki/John_Chris_Jones" },
  { quote: "Design is a solution to a problem. Art is a question to a problem.", author: "John Maeda", url: "https://en.wikipedia.org/wiki/John_Maeda" },
  { quote: "Socrates said, “Know thyself.” I say, “Know thy users.” And guess what? They don’t think like you do.", author: "Joshua Brewer", url: "", tag: "UX Design" },
  { quote: "I strive for two things in design: simplicity and clarity. Great design is born of those two things.", author: "Lindon Leader", url: "", tag: "Design" },
  { quote: "Only those who attempt the absurd will achieve the impossible.", author: "M.C. Escher", url: "" },
  { quote: "But I find that for myself, without exception, the more I deal with the work as something that is my own, as something that is personal, the more successful it is.", author: "Marian Bantjes", url: "", tag: "Graphic Design" },
  { quote: "Art is anything you can get away with.", author: "Marshall McLuhan", url: "https://en.wikipedia.org/wiki/Marshall_McLuhan" },
  { quote: "Styles come and go. Good design is a language, not a style.", author: "Massimo Vignelli", url: "https://en.wikipedia.org/wiki/Massimo_Vignelli" },
  { quote: "The life of a designer is a life of fight. Fight against the ugliness. Just like a doctor fights against disease. For us, the visual disease is what we have around, and what we try to do is cure it somehow with design.", author: "Massimo Vignelli", url: "https://en.wikipedia.org/wiki/Massimo_Vignelli", tag: "Graphic Design" },
  { quote: "There is no design without discipline. There is no discipline without intelligence.", author: "Massimo Vignelli", url: "https://en.wikipedia.org/wiki/Massimo_Vignelli" },
  { quote: "If you do good work for good clients, it will lead to other good work for other good clients. If you do bad work for bad clients, it will lead to other bad work for other bad clients.", author: "Michael Bierut", url: "https://www.pentagram.com/about/michael-bierut", tag: "Graphic Design" },
  { quote: "Simplicity, wit and good typography.", author: "Michael Bierut", url: "https://www.pentagram.com/about/michael-bierut" },
  { quote: "There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.", author: "Milton Glaser", url: "", tag: "Graphic Design" },
  { quote: "Digital design is like painting, except the paint never dries.", author: "Neville Brody", url: "https://brody-associates.com" },
  { quote: "Where do new ideas come from? The answer is simple: differences. Creativity comes from unlikely juxtapositions.", author: "Nicholas Negroponte", url: "https://en.wikipedia.org/wiki/Nicholas_Negroponte" },
  { quote: "The faker you are, the more successful you can be.", author: "Pablo Stanley", url: "https://www.youtube.com/watch?v=bEg5ySTUGxE" },
  { quote: "Do not seek praise. Seek criticism.", author: "Paul Arden", url: "https://en.wikipedia.org/wiki/Paul_Arden" },
  { quote: "Design can be art. Design can be simple. That’s why it’s so complicated.", author: "Paul Rand", url: "https://www.paulrand.design" },
  { quote: "Simplicity is not the goal. It is the by-product of a good idea and modest expectations.", author: "Paul Rand", url: "https://www.paulrand.design" },
  { quote: "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.", author: "Paul Rand", url: "https://www.paulrand.design", tag: "Graphic Design" },
  { quote: "It’s through mistakes that you actually can grow. You have to get bad in order to get good.", author: "Paula Scher", url: "https://www.pentagram.com/about/paula-scher" },
  { quote: "Practice safe design: Use a concept.", author: "Petrula Vrontikis", url: "http://www.35k.com" },
  { quote: "Creativity is a highfalutin word for the work I have to do between now and Tuesday.", author: "Ray Kroc", url: "https://en.wikipedia.org/wiki/Ray_Kroc" },
  { quote: "Have no fear of perfection—you’ll never reach it.", author: "Salvador Dalí", url: "https://en.wikipedia.org/wiki/Salvador_Dal%C3%AD" },
  { quote: "Design is thinking made visual.", author: "Saul Bass", url: "https://en.wikipedia.org/wiki/Saul_Bass" },
  { quote: "I want to make beautiful things, even if nobody cares, as opposed to ugly things. That’s my intent.", author: "Saul Bass", url: "https://en.wikipedia.org/wiki/Saul_Bass", tag: "Graphic Design" },
  { quote: "Live in the leading—the spaces in between the rules.", author: "Stefan Mumaw", url: "http://www.stefanmumaw.com" },
  { quote: "You can have an art experience in front of a Rembrandt… or in front of a piece of graphic design.", author: "Stefan Sagmeister", url: "", tag: "Graphic Design" },
  { quote: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs", url: "https://en.wikipedia.org/wiki/Steve_Jobs" },
  { quote: "Sometimes when you innovate, you make mistakes.", author: "Steve Jobs", url: "https://en.wikipedia.org/wiki/Steve_Jobs" },
  { quote: "The time it takes to make a decision increases as the number of alternatives increases.", author: "William Edmund Hick", url: "https://en.wikipedia.org/wiki/W._E._Hick" }
];

const LONG_QUOTE_THRESHOLD = 100;

const quoteEl = document.getElementById("quotetext");
const sourceEl = document.getElementById("quotesource");

function pickRandomColor() {
  // HSL keeps saturation/lightness fixed for consistent contrast against white text.
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 60%, 40%)`;
}

function applyRandomColor() {
  const color = pickRandomColor();
  document.body.style.backgroundColor = color;
  document.querySelectorAll("button.mobile-button-random").forEach((btn) => {
    btn.style.color = color;
  });
}

function renderQuote(index) {
  if (!quoteEl || !sourceEl) return;
  const item = quotes[index];

  quoteEl.textContent = item.quote;
  quoteEl.classList.toggle("long", item.quote.length > LONG_QUOTE_THRESHOLD);

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
    applyRandomColor();
  }
});
