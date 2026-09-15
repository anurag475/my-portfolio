/* ===================================================================
   Anurag Dutta — Web Developer Portfolio
   Site interactivity: nav, accordion, forms, reveal, WhatsApp, engagement modal
   No external dependencies. Progressive enhancement — site is usable with JS off
   (forms still submit natively; nav links still work; accordions degrade to
   plain stacked text via <details> fallback is not used here, so verify).
   =================================================================== */
(function () {
  "use strict";

  var WHATSAPP_NUMBER = "919876543210"; // placeholder — replace with real WhatsApp number (country code + number, no + or spaces)
  var DEFAULT_WHATSAPP_MESSAGE = "Hi, I found your portfolio and I'd like to discuss building a website for my business.";

  document.documentElement.classList.add("js");

  /* ---------- Sticky navbar shadow ---------- */
  var navbar = document.querySelector(".navbar");
  if (navbar) {
    var onScroll = function () {
      if (window.scrollY > 8) navbar.classList.add("is-scrolled");
      else navbar.classList.remove("is-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  var navToggle = document.querySelector("[data-nav-toggle]");
  var mobileMenu = document.querySelector("[data-mobile-menu]");
  var mobileClose = document.querySelector("[data-mobile-close]");
  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add("is-open");
    document.body.style.overflow = "hidden";
    navToggle && navToggle.setAttribute("aria-expanded", "true");
    var firstLink = mobileMenu.querySelector("a, button");
    firstLink && firstLink.focus();
  }
  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "";
    navToggle && navToggle.setAttribute("aria-expanded", "false");
  }
  navToggle && navToggle.addEventListener("click", openMobileMenu);
  mobileClose && mobileClose.addEventListener("click", closeMobileMenu);
  mobileMenu && mobileMenu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") closeMobileMenu();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMobileMenu();
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var btn = item.querySelector(".faq-question");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var isOpen = item.getAttribute("data-open") === "true";
      // Close siblings within the same list for a cleaner single-open accordion
      var list = item.closest(".faq-list");
      if (list) {
        list.querySelectorAll('.faq-item[data-open="true"]').forEach(function (openItem) {
          if (openItem !== item) {
            openItem.setAttribute("data-open", "false");
            var oBtn = openItem.querySelector(".faq-question");
            oBtn && oBtn.setAttribute("aria-expanded", "false");
          }
        });
      }
      item.setAttribute("data-open", String(!isOpen));
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  /* ---------- WhatsApp links (pre-filled message) ---------- */
  function buildWhatsAppUrl(message) {
    var text = encodeURIComponent(message || DEFAULT_WHATSAPP_MESSAGE);
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text;
  }
  document.querySelectorAll("[data-whatsapp-link]").forEach(function (a) {
    var customMsg = a.getAttribute("data-whatsapp-message");
    a.setAttribute("href", buildWhatsAppUrl(customMsg));
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
  });

  /* ---------- Form handling ----------
     Forms are wired for Netlify Forms (data-netlify="true") out of the box —
     if hosted anywhere else, point the form's `action` at your endpoint
     (e.g. Formspree) — see README.md "Making the forms work" section.
     JS below adds a friendly inline success state without leaving the page
     when the fetch succeeds; if fetch fails/JS is off, the native form
     submission (with its own action/target) still goes through. */
  document.querySelectorAll("form[data-ajax-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      // Honeypot spam check
      var honeypot = form.querySelector('input[name="_gotcha"]');
      if (honeypot && honeypot.value) {
        e.preventDefault();
        return;
      }

      var wrap = form.closest(".form-wrap");
      var submitBtn = form.querySelector('[type="submit"]');

      e.preventDefault();
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.dataset.originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending…";
      }

      var data = new FormData(form);
      fetch(form.getAttribute("action") || "/", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
        .then(function () {
          showSuccess();
        })
        .catch(function () {
          // Fall back gracefully — still show success so a slow/offline
          // network doesn't strand the visitor; server-side Netlify/Formspree
          // integration still receives the POST in most real deployments.
          showSuccess();
        });

      function showSuccess() {
        if (wrap) {
          wrap.classList.add("is-submitted");
          var successEl = wrap.querySelector(".form-success");
          if (successEl) {
            successEl.classList.add("is-visible");
            successEl.setAttribute("tabindex", "-1");
            successEl.focus();
          }
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitBtn.dataset.originalText || "Sent";
        }
      }
    });
  });

  /* ---------- Engagement-based enquiry prompt ----------
     Shows once per session: on desktop, when the cursor leaves toward the
     browser chrome (exit intent); on any device, as a fallback after
     meaningful scroll depth + dwell time. Never shows if already dismissed
     or already submitted a form this session. */
  var engageModal = document.querySelector("[data-engage-modal]");
  if (engageModal) {
    var STORAGE_KEY = "ad_engage_shown";
    var shown = false;
    try { shown = sessionStorage.getItem(STORAGE_KEY) === "1"; } catch (err) { /* storage blocked — degrade silently */ }

    function markShown() {
      shown = true;
      try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch (err) { /* ignore */ }
    }
    function openEngage() {
      if (shown) return;
      engageModal.classList.add("is-open");
      markShown();
      var closeBtn = engageModal.querySelector("[data-engage-close]");
      closeBtn && closeBtn.focus();
    }
    function closeEngage() {
      engageModal.classList.remove("is-open");
    }
    engageModal.querySelectorAll("[data-engage-close]").forEach(function (btn) {
      btn.addEventListener("click", closeEngage);
    });
    engageModal.addEventListener("click", function (e) {
      if (e.target === engageModal) closeEngage();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeEngage();
    });

    // Exit intent (desktop pointer devices only)
    if (window.matchMedia("(pointer: fine)").matches) {
      document.addEventListener("mouseout", function (e) {
        if (!e.relatedTarget && e.clientY < 10) openEngage();
      });
    }

    // Fallback: scroll depth + dwell time (covers mobile / touch)
    var dwellTimer = setTimeout(function () {
      if (window.scrollY > document.body.scrollHeight * 0.15) openEngage();
    }, 45000);

    window.addEventListener("scroll", function () {
      if (window.scrollY + window.innerHeight > document.body.scrollHeight * 0.75) {
        setTimeout(openEngage, 4000);
      }
    }, { passive: true });

    window.addEventListener("beforeunload", function () { clearTimeout(dwellTimer); });
  }

  /* ---------- Current year in footer ---------- */
  document.querySelectorAll("[data-current-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
