/* ===== 1. ПЕРЕВОДЫ (RU / KK / EN) ===== */
const I18N = {
  ru: {
    nav_home:"Главная", nav_menu:"Меню", nav_about:"О нас", nav_book:"Бронь",
    phone_note:"Свяжитесь с нами для бронирования", book:"Заказ столика",
    hero_hello:"Добро пожаловать в", hero_title:"Наш ресторан", hero_tag:"Дом лучшей еды", hero_btn:"View menu",
    f1_t:"Магическая <span>Атмосфера</span>", f1_p:"В нашем заведении царит магическая атмосфера наполненная вкусными ароматами",
    f2_t:"Лучшее качество <span>Еды</span>", f2_p:"Качество нашей Еды - отменное!",
    f3_t:"Недорогая <span>Еда</span>", f3_p:"Стоимость нашей Еды зависит только от ее количества. Качество всегда на высоте!",
    story_t:"Наша <span>История</span>",
    story_p:"Как и у любого другого самобытного места, у нас есть своя, особая история. Идея ресторана пришла основателям неожиданно. Во время прогулки по лесу создатель нашего ресторана застрял в сотнях километров от ближайшего населенного пункта. Вдали от цивилизации и связи им пришлось наверняка обустроить себе нехитрый быт, добывать и готовить себе еду.",
    stat1:"Напитки", stat2:"Еда", stat3:"Закуски",
    promo_t:"Отпразднуйте в одном из самых лучших ресторанов.", promo_p:"Только в этом месяце бизнес-ланч от 250 ₽",
    dishes_t:"Наши <span>Блюда</span>", dish:"Гамбургер мини",
    menu_t:"Наше меню", rec:"Recommended", burger:"Гамбургер макси", burger_d:"Максимально толстый слой мяса", order:"Заказать",
    visitor:"Посетитель",
    r1:"Я надолго запомню мой День рождения, проведённый в этом ресторане! Кусочек родной Армении!!! Отдельное спасибо за комплимент в виде фруктовой тарелки. Будем рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, путешествующих в Санкт-Петербург!!!", r1n:"Николай",
    r2:"Заказывали ужин на семью — всё подали горячим и вовремя. Бургеры сочные, а десерты просто восторг. Обязательно вернёмся в выходные!", r2n:"Айгерим",
    r3:"Отличное место для делового обеда: быстро, вкусно и недорого. Официанты вежливые, а интерьер очень уютный.", r3n:"Дмитрий",
    gal_t:"Галерея <span>Блюд</span>", chefs_t:"Наши <span>Повара</span>", hours:"Ежедневно 10:00–23:00"
  },
  kk: {
    nav_home:"Басты бет", nav_menu:"Мәзір", nav_about:"Біз туралы", nav_book:"Брондау",
    phone_note:"Брондау үшін бізге хабарласыңыз", book:"Үстел брондау",
    hero_hello:"Қош келдіңіздер", hero_title:"Біздің мейрамхана", hero_tag:"Ең жақсы тағам үйі", hero_btn:"Мәзірді көру",
    f1_t:"Сиқырлы <span>атмосфера</span>", f1_p:"Біздің мекемеде тәтті иістерге толы сиқырлы атмосфера орнаған",
    f2_t:"Ең жақсы <span>тағам</span> сапасы", f2_p:"Тағамымыздың сапасы тамаша!",
    f3_t:"Қолжетімді <span>тағам</span>", f3_p:"Тағам бағасы тек оның мөлшеріне байланысты. Сапа әрқашан жоғары!",
    story_t:"Біздің <span>тарих</span>",
    story_p:"Кез келген өзге тамақтану орны сияқты, біздің де ерекше тарихымыз бар. Мейрамхана идеясы негізін қалаушыларға кенеттен келді. Орманда серуендеп жүргенде, мейрамхананың авторы жақын елді мекеннен жүздеген шақырым қашықта адасып қалды. Өркениет пен байланыстан алыста өз тұрмысын жолға қойып, тамақ тауып, пісіруге тура келді.",
    stat1:"Сусындар", stat2:"Тағамдар", stat3:"Тіскебасарлар",
    promo_t:"Ең үздік мейрамханалардың бірінде мерекелеңіз.", promo_p:"Тек осы айда бизнес-ланч 250 ₽-ден",
    dishes_t:"Біздің <span>тағамдар</span>", dish:"Шағын бургер",
    menu_t:"Біздің мәзір", rec:"Ұсынамыз", burger:"Макси бургер", burger_d:"Еттің ең қалың қабаты", order:"Тапсырыс беру",
    visitor:"Келуші",
    r1:"Осы мейрамханада өткен туған күнімді ұзақ есте сақтаймын! Туған Армениядан бір үзік!!! Жеміс табағы түріндегі сыйлығы үшін бөлек рахмет. Достарымызға да, шетелдегі туыстарымызға да, Санкт-Петербургке саяхаттап жүргендерге де осы мейрамхананы ұсынамыз!!!", r1n:"Николай",
    r2:"Отбасымызға кешкі ас тапсырдық — бәрі ыстық әрі уақытында келді. Бургерлер шырынды, ал десерттер керемет. Демалыс күндері міндетті түрде қайта келеміз!", r2n:"Айгерім",
    r3:"Іскерлік түскі асқа тамаша орын: жылдам, дәмді әрі қымбат емес. Даяшылар сыпайы, интерьері өте жайлы.", r3n:"Дмитрий",
    gal_t:"Тағамдар <span>галереясы</span>", chefs_t:"Біздің <span>аспазшылар</span>", hours:"Күн сайын 10:00–23:00"
  },
  en: {
    nav_home:"Home", nav_menu:"Menu", nav_about:"About", nav_book:"Booking",
    phone_note:"Call us to book a table", book:"Book a table",
    hero_hello:"Welcome to", hero_title:"Our Restaurant", hero_tag:"Home of the best food", hero_btn:"View menu",
    f1_t:"Magical <span>Atmosphere</span>", f1_p:"Our place is filled with a magical atmosphere and delicious aromas",
    f2_t:"Best <span>Food</span> Quality", f2_p:"The quality of our food is excellent!",
    f3_t:"Affordable <span>Food</span>", f3_p:"The price of our food depends only on the portion. The quality is always top-notch!",
    story_t:"Our <span>Story</span>",
    story_p:"Like any other distinctive place, we have a special story of our own. The idea of the restaurant came to its founders unexpectedly. While walking in the forest, the creator of our restaurant got stranded hundreds of kilometers from the nearest settlement. Far from civilization and any connection, they had to build a simple life, finding and cooking their own food.",
    stat1:"Drinks", stat2:"Dishes", stat3:"Snacks",
    promo_t:"Celebrate at one of the best restaurants.", promo_p:"This month only: business lunch from 250 ₽",
    dishes_t:"Our <span>Dishes</span>", dish:"Mini burger",
    menu_t:"Our menu", rec:"Recommended", burger:"Maxi burger", burger_d:"The thickest layer of meat", order:"Order",
    visitor:"Visitor",
    r1:"I will remember my birthday at this restaurant for a long time! A piece of native Armenia!!! Special thanks for the fruit platter. We will recommend this restaurant to friends and relatives, including those abroad traveling to St. Petersburg!!!", r1n:"Nikolay",
    r2:"We ordered dinner for the family — everything came hot and on time. The burgers are juicy and the desserts are a delight. We will definitely come back on the weekend!", r2n:"Aigerim",
    r3:"A great place for a business lunch: fast, tasty and affordable. The waiters are polite and the interior is very cozy.", r3n:"Dmitry",
    gal_t:"Dish <span>Gallery</span>", chefs_t:"Our <span>Chefs</span>", hours:"Daily 10:00–23:00"
  }
};

/* ===== 2. СМЕНА ЯЗЫКА ===== */
const langBtns = document.querySelectorAll('[data-lang]');

function setLang(lang) {
  document.documentElement.lang = lang === 'kk' ? 'kk' : lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = I18N[lang][el.dataset.i18n];
  });
  langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  localStorage.setItem('lang', lang);
}
langBtns.forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
setLang(localStorage.getItem('lang') || 'ru');

/* ===== 3. МОБИЛЬНОЕ МЕНЮ ===== */
const burger = document.querySelector('.burger');
const nav = document.getElementById('nav');

function toggleNav(open) {
  burger.classList.toggle('open', open);
  nav.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
}
burger.addEventListener('click', () => toggleNav(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleNav(false)));

/* ===== 4. ПЛАВНОЕ ПОЯВЛЕНИЕ ПРИ ПРОКРУТКЕ + СЧЁТЧИКИ ===== */
function countUp(el) {
  const to = +el.dataset.count;
  let n = 0;
  (function step() {
    n = Math.min(n + Math.ceil(to / 40), to);
    el.textContent = n;
    if (n < to) requestAnimationFrame(step);
  })();
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    if (el.classList.contains('reveal')) {
      el.classList.add('visible');
      // после показа убираем класс, чтобы не мешал hover-эффекту
      el.addEventListener('transitionend', () => el.classList.remove('reveal', 'visible'), { once: true });
    }
    if (el.dataset.count) countUp(el);
    observer.unobserve(el);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, [data-count]').forEach(el => observer.observe(el));

/* ===== 5. ОТЗЫВЫ: ТОЧКИ + ГОРИЗОНТАЛЬНАЯ ПРОКРУТКА ===== */
const track = document.getElementById('reviews');
const dots = document.querySelectorAll('#dots button');
const previousReview = document.querySelector('.review-arrow--prev');
const nextReview = document.querySelector('.review-arrow--next');

function updateDots() {
  const i = Math.round(track.scrollLeft / track.clientWidth);
  dots.forEach((d, n) => d.classList.toggle('active', n === i));
}
track.addEventListener('scroll', updateDots, { passive: true });
dots.forEach((d, n) => d.addEventListener('click', () =>
  track.scrollTo({ left: n * track.clientWidth, behavior: 'smooth' })));
previousReview.addEventListener('click', () =>
  track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' }));
nextReview.addEventListener('click', () =>
  track.scrollBy({ left: track.clientWidth, behavior: 'smooth' }));
updateDots();

/* ===== 6. КНОПКА «НАВЕРХ» ===== */
const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => toTop.classList.toggle('show', window.scrollY > 500), { passive: true });
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
