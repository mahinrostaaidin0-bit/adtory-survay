/* ===================================================================
   جاوااسکریپت فقط برای این کارها (بقیه چیزها با HTML/CSS خالص انجام می‌شن):
   ۱) تغییر زبان کل سایت
   ۲) ثبت انتخاب کاربر در هر مرحله
   ۳) تشخیص دستگاه (موبایل/دسکتاپ)
   ۴) ذخیره پاسخ‌ها در localStorage و نمایش در پنل ادمین
   ۵) دکمه خروجی PDF (چاپ مرورگر)
   سوییچ صفحه‌ها، مراحل، اسلایدشو، لایت‌باکس و بزرگ‌شدن عکس‌ها: بدون JS
=================================================================== */

/* ---------- دیکشنری سه‌زبانه (متن‌ها با نگاه یک روانشناس نوشته شدن) ---------- */
const T = {
  fa: {
    home: "رفتن به خانه",
    navAbout: "درباره ما",
    navContact: "ارتباط با ما",
    heroTitle: "بیا از روی انتخاب‌هات، سلیقه‌ات رو بشناسیم",
    heroDesc:
      "من به‌عنوان روانشناس می‌خوام بفهمم کدوم طرح‌ها بیشتر به دلت می‌شینن. جواب درست یا غلطی وجود نداره؛ فقط به حس اولت اعتماد کن.",
    heroMeta: "این پرسشنامه ۱۰ سوال دارد و در مجموع حدود ۲ دقیقه زمان می‌برد.",
    heroCta: "شروع نظرسنجی",
    zoom: "بزرگ‌نمایی",
    prev: "قبلی",
    next: "بعدی",
    neither: "هیچکدام را دوست ندارم",
    both: "انتخاب هر دو",
    finish: "اتمام نظرسنجی",
    close: "بستن ✕",
    pick: "این رو می‌پسندم",
    prompt:
      "کدام تصویر حس بهتری به تو می‌دهد؟ به شهودت اعتماد کن؛ لازم نیست دلیل بیاوری.",
    thanksTitle: "متشکریم از شرکت در نظرسنجی",
    thanksDesc: "پاسخ‌های شما ثبت شد؛ ممنون که صادقانه همراهی کردی.",
    backHome: "بازگشت به صفحه اصلی",
    footerLeft: "استودیو ادیتوری — پروژه نظرسنجی سلیقه",
    aboutTitle: "درباره هلدینگ ادیتوری",
    aboutBody:
      "[متن نمونه — ویرایش کنید] هلدینگ ادیتوری در حوزه تولید محتوا و طراحی تجربه کاربری فعالیت می‌کند و این نظرسنجی بخشی از پروژه‌های تحقیقاتی آن است.",
    adminTitle: "پنل ادمین — پاسخ‌های نظرسنجی",
    adminIdx: "#",
    adminTime: "زمان",
    adminDevice: "دستگاه",
    adminChoices: "انتخاب هر مرحله (۱=راست، ۲=چپ)",
    adminBoth: "هر دو",
    adminOne: "یکی",
    adminNone: "هیچکدام",
    adminEmpty: "هنوز پاسخی ذخیره نشده.",
    deviceMobile: "موبایل",
    deviceDesktop: "دسکتاپ",
    exportPdf: "خروجی PDF (چاپ)",
    locale: "fa-IR",
  },
  en: {
    home: "Go to Home",
    navAbout: "About Us",
    navContact: "Contact Us",
    heroTitle: "Let's get to know your taste through your choices",
    heroDesc:
      "As a psychologist, I'd like to understand which designs speak to you most. There are no right or wrong answers — just trust your first feeling.",
    heroMeta:
      "This survey has 10 questions and takes about 2 minutes in total.",
    heroCta: "Start Survey",
    zoom: "Zoom",
    prev: "Previous",
    next: "Next",
    neither: "I like neither",
    both: "Select both",
    finish: "Finish Survey",
    close: "Close ✕",
    pick: "I like this one",
    prompt:
      "Which image gives you a better feeling? Trust your intuition — no need to explain why.",
    thanksTitle: "Thanks for taking part",
    thanksDesc:
      "Your answers have been recorded. Thank you for being honest with me.",
    backHome: "Back to home",
    footerLeft: "Editorial Studio — Taste Survey Project",
    aboutTitle: "About Editorial Holding",
    aboutBody:
      "[Sample text — please edit] Editorial Holding works in content production and UX design; this survey is part of its research projects.",
    adminTitle: "Admin Panel — Survey Responses",
    adminIdx: "#",
    adminTime: "Time",
    adminDevice: "Device",
    adminChoices: "Choice per step (1=Right, 2=Left)",
    adminBoth: "Both",
    adminOne: "One",
    adminNone: "None",
    adminEmpty: "No responses saved yet.",
    deviceMobile: "Mobile",
    deviceDesktop: "Desktop",
    exportPdf: "Export PDF (print)",
    locale: "en-US",
  },
  ar: {
    home: "الذهاب إلى الرئيسية",
    navAbout: "من نحن",
    navContact: "اتصل بنا",
    heroTitle: "دعنا نتعرّف على ذوقك من خلال اختياراتك",
    heroDesc:
      "بصفتي أخصائياً نفسياً، أودّ أن أفهم أي التصاميم أقرب إلى قلبك. لا توجد إجابة صحيحة أو خاطئة؛ ثق بإحساسك الأول.",
    heroMeta: "يحتوي هذا الاستطلاع على 10 أسئلة ويستغرق حوالي دقيقتين إجمالاً.",
    heroCta: "ابدأ الاستطلاع",
    zoom: "تكبير",
    prev: "السابق",
    next: "التالي",
    neither: "لا أحب أياً منهما",
    both: "اختيار كلاهما",
    finish: "إنهاء الاستطلاع",
    close: "إغلاق ✕",
    pick: "هذه تعجبني",
    prompt: "أي صورة تمنحك شعوراً أفضل؟ ثق بحدسك؛ لا حاجة لتبرير اختيارك.",
    thanksTitle: "شكراً لمشاركتك في الاستطلاع",
    thanksDesc: "تم تسجيل إجاباتك؛ شكراً لصدقك معي.",
    backHome: "العودة للصفحة الرئيسية",
    footerLeft: "استوديو تحريري — مشروع استطلاع الذوق",
    aboutTitle: "عن مجموعة إديتوريال",
    aboutBody:
      "[نص نموذجي — يرجى التعديل] تعمل مجموعة إديتوريال في إنتاج المحتوى وتصميم تجربة المستخدم، وهذا الاستطلاع جزء من مشاريعها البحثية.",
    adminTitle: "لوحة الإدارة — إجابات الاستطلاع",
    adminIdx: "#",
    adminTime: "الوقت",
    adminDevice: "الجهاز",
    adminChoices: "الاختيار في كل مرحلة (١=يمين، ٢=يسار)",
    adminBoth: "كلاهما",
    adminOne: "واحدة",
    adminNone: "لا شيء",
    adminEmpty: "لا توجد إجابات محفوظة بعد.",
    deviceMobile: "جوال",
    deviceDesktop: "سطح المكتب",
    exportPdf: "تصدير PDF (طباعة)",
    locale: "ar-EG",
  },
};
let lang = "fa";

/* تغییر زبان: متن همه‌ی عنصرهای data-i18n و جهت صفحه رو عوض می‌کنه */
function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = T[lang][el.dataset.i18n];
  });
  document
    .querySelectorAll(".lang-switch button")
    .forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  renderAdmin();
}
document.querySelectorAll(".lang-switch button").forEach(
  (b) =>
    (b.onclick = () => {
      lang = b.dataset.lang;
      applyLang();
    }),
);

/* ---------- ثبت پاسخ‌ها در حافظه صفحه ---------- */
const answers = {};
/* دکمه «این رو می‌پسندم» روی هر عکس: همون عکس رو ثبت می‌کنه (و چون label رادیوی مرحله بعده، خودکار می‌ره جلو؛
   فقط در مرحله ۱۰ که مرحله بعدی نداره، انتخاب نشون داده می‌شه و با «اتمام نظرسنجی» تموم می‌شه) */
document.querySelectorAll(".pick-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card-img");
    const p = +card.dataset.page,
      side = card.dataset.side;
    answers[p] = { a: side === "a", b: side === "b" };
    document
      .querySelectorAll('.card-img[data-page="' + p + '"]')
      .forEach((c) => c.classList.toggle("sel", c.dataset.side === side));
  });
});
/* «انتخاب هر دو» و «هیچکدام»: پاسخ رو ثبت می‌کنن و (چون label رادیوی مرحله بعدی هستن) خودکار می‌رن جلو */
document.querySelectorAll(".neither,.both").forEach((el) => {
  el.addEventListener("click", () => {
    const p = +el.dataset.page;
    answers[p] = { a: el.dataset.a === "1", b: el.dataset.b === "1" };
    const cards = document.querySelectorAll('.card-img[data-page="' + p + '"]');
    cards[0].classList.toggle("sel", answers[p].a);
    cards[1].classList.toggle("sel", answers[p].b);
  });
});
/* شروع نظرسنجی: هر بار از اول شروع می‌شه و پاسخ‌های قبلی پاک می‌شن */
document.getElementById("startLabel").addEventListener("click", () => {
  for (const k in answers) delete answers[k];
  document
    .querySelectorAll(".card-img.sel")
    .forEach((el) => el.classList.remove("sel"));
  document.getElementById("step1").checked = true;
});

/* ---------- تشخیص نوع دستگاه ---------- */
function detectDevice() {
  return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
    ? "mobile"
    : "desktop";
}

/* ---------- پایان: ذخیره در localStorage همین مرورگر ---------- */
const STORAGE_KEY = "tasteSurveyResponses";
document.getElementById("finishBtn").addEventListener("click", () => {
  const record = {
    time: new Date().toISOString(),
    device: detectDevice(),
    answers: JSON.parse(JSON.stringify(answers)),
  };
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  saved.unshift(record);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  document.getElementById("thanks").hidden = false;
});
document.getElementById("backBtn").addEventListener("click", () => {
  document.getElementById("thanks").hidden = true;
  document.getElementById("viewHero").checked = true;
});

/* ---------- پنل ادمین: آدرس صفحه + ?admin=1 ---------- */
function choicesStr(ans) {
  const D = { fa: ["۱", "۲", "،"], en: ["1", "2", ","], ar: ["١", "٢", "،"] }[
    lang
  ];
  const out = [];
  for (let p = 1; p <= 10; p++) {
    const v = (ans && ans[p]) || { a: false, b: false };
    out.push(v.a && v.b ? D[0] + D[2] + D[1] : v.a ? D[0] : v.b ? D[1] : "—");
  }
  return out.join(" / ");
}
function renderAdmin() {
  if (new URLSearchParams(location.search).get("admin") !== "1") return;
  document.getElementById("viewHero").checked = false;
  document.getElementById("hero").style.display = "none";
  document.getElementById("survey").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("adminview").style.display = "block";
  const status = document.getElementById("adminStatus");
  const responses = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  if (!responses.length) {
    status.textContent = T[lang].adminEmpty;
    document.getElementById("adminTable").style.display = "none";
    return;
  }
  status.textContent = responses.length + " — " + T[lang].adminTitle;
  const tbody = document.getElementById("adminBody");
  tbody.innerHTML = "";
  responses.forEach((data, i) => {
    let both = 0,
      one = 0,
      none = 0;
    Object.values(data.answers || {}).forEach((v) => {
      if (v.a && v.b) both++;
      else if (v.a || v.b) one++;
      else none++;
    });
    const deviceLabel =
      data.device === "mobile" ? T[lang].deviceMobile : T[lang].deviceDesktop;
    const tr = document.createElement("tr");
    [
      i + 1,
      new Date(data.time).toLocaleString(T[lang].locale),
      deviceLabel,
      choicesStr(data.answers),
      both,
      one,
      none,
    ].forEach((v) => {
      const td = document.createElement("td");
      td.textContent = v;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  document.getElementById("adminTable").style.display = "table";
}
document.getElementById("exportBtn").addEventListener("click", () => {
  const blob = new Blob([localStorage.getItem(STORAGE_KEY) || "[]"], {
    type: "application/json;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "survey-responses.json";
  a.click();
  URL.revokeObjectURL(url);
});
document.getElementById("clearBtn").addEventListener("click", () => {
  if (confirm("همه پاسخ‌های ذخیره‌شده در این مرورگر پاک شوند؟")) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
});
/* خروجی PDF: چاپ مرورگر (Save as PDF) — سبک‌ترین راه بدون کتابخونه */
document
  .getElementById("printBtn")
  .addEventListener("click", () => window.print());

applyLang();
