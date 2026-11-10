/* ============================================
   Egor — personal site
   i18n + animations
   ============================================ */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var STORAGE_KEY = "egor_site_lang";

  var I18N = {
    ru: {
      meta_title: "Egor — B2B-продажи и цифровые продукты",
      meta_desc: "Собираю базу клиентов, создаю ИИ-ассистентов и сайты для бизнеса.",

      nav_services: "Услуги",
      nav_cases: "Кейсы",
      nav_reviews: "Отзывы",
      nav_contact: "Контакт",
      cta_short: "Telegram",

      badge: "Открыт к новым проектам",
      hero_l1: "B2B-продажи и",
      hero_l2: "цифровые продукты",
      hero_sub: "Меня зовут Егор. Собираю базу клиентов, создаю ИИ-ассистентов и сайты, которые помогают бизнесу продавать больше.",
      cta_primary: "Написать в Telegram",
      cta_secondary: "Смотреть услуги",

      services_eyebrow: "01 — Услуги",
      services_title: "Что я делаю",
      services_sub: "Три направления, которые можно взять по отдельности или вместе.",

      s1_title: "Соберу базу клиентов",
      s1_text: "Найду вашу целевую аудиторию, соберу проверенные контакты и подготовлю базу для аутбаунда.",
      s2_title: "Создам ИИ-ассистента",
      s2_text: "Автоматизирую рутину: ответы на заявки, квалификацию лидов и повторяющиеся процессы.",
      s3_title: "Соберу сайт под бизнес",
      s3_text: "Быстрый сайт, который понятно объясняет ценность и ведёт клиента к заявке.",

      cases_eyebrow: "02 — Кейсы",
      cases_title: "Кейсы",
      cases_sub: "Первые проекты уже в работе. Здесь появятся результаты с цифрами.",
      case_soon: "Скоро",
      case_placeholder: "Место под результат",

      reviews_eyebrow: "03 — Отзывы",
      reviews_title: "Отзывы",
      reviews_sub: "Собираю первые отзывы. Здесь будет место для слов клиентов.",
      review_placeholder: "Ваш отзыв может быть здесь",
      review_author: "Имя, компания",

      process_eyebrow: "04 — Процесс",
      process_title: "Как я работаю",
      p1_title: "Бриф",
      p1_text: "Разбираемся в задаче, аудитории и целях.",
      p2_title: "Сборка",
      p2_text: "Делаю первую версию быстро и показываю результат.",
      p3_title: "Запуск",
      p3_text: "Дорабатываем по обратной связи и запускаем.",

      contact_eyebrow: "Контакт",
      contact_title: "Есть задача?",
      contact_sub: "Напишите в Telegram — обсудим, что можно сделать за первую неделю.",
      contact_btn: "Написать в Telegram",

      footer_left: "© 2026 Egor. B2B sales & digital products.",
      footer_right: "Сделано с OpenCode"
    },

    en: {
      meta_title: "Egor — B2B Sales & Digital Products",
      meta_desc: "I build client pipelines, AI assistants, and websites for businesses.",

      nav_services: "Services",
      nav_cases: "Work",
      nav_reviews: "Reviews",
      nav_contact: "Contact",
      cta_short: "Telegram",

      badge: "Open for new projects",
      hero_l1: "B2B sales and",
      hero_l2: "digital products",
      hero_sub: "I'm Egor. I build client pipelines, AI assistants, and websites that help businesses sell more.",
      cta_primary: "Message me on Telegram",
      cta_secondary: "View services",

      services_eyebrow: "01 — Services",
      services_title: "What I do",
      services_sub: "Three directions — take one or combine them.",

      s1_title: "Client pipeline",
      s1_text: "I find your ideal customers, gather verified contacts, and prepare a ready-to-use outreach list.",
      s2_title: "AI assistant",
      s2_text: "I automate routine work: replying to inquiries, qualifying leads, and repetitive processes.",
      s3_title: "Business website",
      s3_text: "A fast website that explains your value and guides visitors to get in touch.",

      cases_eyebrow: "02 — Work",
      cases_title: "Case studies",
      cases_sub: "First projects are in progress. Results with numbers will appear here.",
      case_soon: "Soon",
      case_placeholder: "Space for results",

      reviews_eyebrow: "03 — Reviews",
      reviews_title: "Reviews",
      reviews_sub: "Collecting the first testimonials. This is where client words will live.",
      review_placeholder: "Your testimonial could be here",
      review_author: "Name, company",

      process_eyebrow: "04 — Process",
      process_title: "How I work",
      p1_title: "Brief",
      p1_text: "We clarify the task, audience, and goals.",
      p2_title: "Build",
      p2_text: "I ship the first version fast and show you the result.",
      p3_title: "Launch",
      p3_text: "We refine based on feedback and go live.",

      contact_eyebrow: "Contact",
      contact_title: "Have a project?",
      contact_sub: "Message me on Telegram — we will figure out what can be done in the first week.",
      contact_btn: "Message me on Telegram",

      footer_left: "© 2026 Egor. B2B sales & digital products.",
      footer_right: "Built with OpenCode"
    }
  };

  /* ---------- language ---------- */

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && I18N[saved]) return saved;
    } catch (e) { /* ignore */ }
    return (navigator.language || "").toLowerCase().indexOf("ru") === 0 ? "ru" : "en";
  }

  function replayHero() {
    document.body.classList.remove("ready");
    void document.body.offsetWidth;
    requestAnimationFrame(function () {
      document.body.classList.add("ready");
    });
  }

  function setLang(lang, replay) {
    var dict = I18N[lang] || I18N.ru;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    document.title = dict.meta_title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", dict.meta_desc);

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }

    if (replay && !reduceMotion) replayHero();
  }

  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang"), true);
    });
  });

  /* ---------- reveal on scroll ---------- */

  var revealTargets = document.querySelectorAll("[data-reveal]");

  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- cursor spotlight ---------- */

  var spot = document.getElementById("spotlight");
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  if (spot && finePointer && !reduceMotion) {
    document.body.classList.add("has-spotlight");

    var sx = 0, sy = 0, rafId = null;

    window.addEventListener("pointermove", function (e) {
      sx = e.clientX;
      sy = e.clientY;
      if (rafId) return;
      rafId = requestAnimationFrame(function () {
        spot.style.transform = "translate(" + (sx - 310) + "px," + (sy - 310) + "px)";
        rafId = null;
      });
    }, { passive: true });
  }

  /* ---------- card glow ---------- */

  document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("pointermove", function (e) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - rect.left) + "px");
      card.style.setProperty("--my", (e.clientY - rect.top) + "px");
    }, { passive: true });
  });

  /* ---------- boot ---------- */

  setLang(detectLang(), false);

  requestAnimationFrame(function () {
    document.body.classList.add("ready");
  });
})();
