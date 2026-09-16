/* Y-Takip tanitim sitesi — arayuz davranislari */
(function () {
  "use strict";

  /* Mobil menu */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Ustbar sayfa kaydirilinca cizgi kazanir */
  var topbar = document.getElementById("topbar");
  if (topbar) {
    var setStuck = function () {
      topbar.setAttribute("data-stuck", window.scrollY > 8 ? "true" : "false");
    };
    setStuck();
    window.addEventListener("scroll", setStuck, { passive: true });
  }

  /* Ayni anda tek SSS acik kalsin */
  var faq = document.getElementById("faq");
  if (faq) {
    var items = faq.querySelectorAll("details");
    items.forEach(function (d) {
      d.addEventListener("toggle", function () {
        if (!d.open) return;
        items.forEach(function (other) {
          if (other !== d) other.open = false;
        });
      });
    });
  }

  /* Alt bilgideki yil */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
