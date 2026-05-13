/* ===== Works Data ===== */
const works = [
  {
    title: "ヴァンパイア / エルフピース【エイプリルフールver.】",
    artist: "エルフピース",
    category: "mv",
    thumbnail: "https://img.youtube.com/vi/0CNqDxiPA20/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=0CNqDxiPA20"
  },
  {
    title: "ディストピっしょ！ / 和田たけあき feat. 小春六花",
    artist: "和田たけあき",
    category: "mv",
    thumbnail: "https://img.youtube.com/vi/o0W5HLFZ5bU/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=o0W5HLFZ5bU"
  },
  {
    title: "天藍のアイスヘヴン / irucaice feat. 初音ミク",
    artist: "irucaice",
    category: "mv",
    thumbnail: "https://img.youtube.com/vi/D2oOoNfjkEg/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=D2oOoNfjkEg"
  },
  {
    title: "恋慕 / 倉田理音",
    artist: "倉田理音",
    category: "mv",
    thumbnail: "https://img.youtube.com/vi/IH0uws24hgs/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=IH0uws24hgs"
  },
  {
    title: "吸血鬼 / 星崎（Cover）",
    artist: "星崎",
    category: "mv",
    thumbnail: "https://img.youtube.com/vi/rSYqA1ZXbTY/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=rSYqA1ZXbTY"
  },
  {
    title: "月雲と歌姫 / monochrome school",
    artist: "monochrome school",
    category: "mv",
    thumbnail: "https://img.youtube.com/vi/vT2wHxfuo6A/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=vT2wHxfuo6A"
  },
  {
    title: "むり / 宮守文学 feat.春日部つむぎ",
    artist: "宮守文学",
    category: "mv",
    thumbnail: "https://img.youtube.com/vi/JQNL-kZ1OL4/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=JQNL-kZ1OL4"
  },
  {
    title: "C!M!Y!K! / The 4gnalZ",
    artist: "The 4gnalZ",
    category: "mv",
    thumbnail: "https://img.youtube.com/vi/So9oE0NVkgA/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=So9oE0NVkgA"
  },
  {
    title: "Cats Night Out / 猫瀬乃しん",
    artist: "猫瀬乃しん",
    category: "mv",
    thumbnail: "https://img.youtube.com/vi/auq7o5EMvZA/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=auq7o5EMvZA"
  },
  {
    title: "丑三つ時の音 / monochrome school",
    artist: "monochrome school",
    category: "mv",
    thumbnail: "https://img.youtube.com/vi/r_dyt62Z3mA/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=r_dyt62Z3mA"
  },
  {
    title: "ホラフキパペット / 和田たけあき（Self Cover）",
    artist: "和田たけあき",
    category: "mv",
    thumbnail: "https://img.youtube.com/vi/SSkKQUHZc58/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=SSkKQUHZc58"
  },
  {
    title: "平行線 / KMNZ TINA（Cover）",
    artist: "KMNZ TINA",
    category: "mv",
    thumbnail: "https://img.youtube.com/vi/g_Mo5VQEbE0/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=g_Mo5VQEbE0"
  },
  {
    title: "Adobe Creative — 魔法を創造する。",
    artist: "covox",
    category: "motion",
    thumbnail: "images/works/mg-adobe.jpg",
    url: "https://x.com/channel3_jp/status/2050179407357370616"
  },
  {
    title: "Thank you FOR 500 FOLLOWERS",
    artist: "covox",
    category: "motion",
    thumbnail: "images/works/mg-500followers.jpg",
    url: "https://x.com/channel3_jp/status/1875015642317017217"
  },
  {
    title: "瓦 — かわら / が",
    artist: "covox",
    category: "motion",
    thumbnail: "images/works/mg-kawara.jpg",
    url: "https://x.com/channel3_jp/status/1856657978155266224"
  },
  {
    title: "品川心中 — The Shinagawa Double Suicide",
    artist: "covox",
    category: "motion",
    thumbnail: "images/works/mg-shinagawa.jpg",
    url: "https://x.com/channel3_jp/status/2052371089423224844"
  },
  {
    title: "電蝕 — DENSHOKU",
    artist: "covox",
    category: "motion",
    thumbnail: "images/works/mg-denshoku.jpg",
    url: "https://x.com/channel3_jp/status/2054127026618134687"
  },
  {
    title: "1000 FOLLOWERS — RGB ONLY",
    artist: "covox",
    category: "motion",
    thumbnail: "images/works/mg-1000followers.jpg",
    url: "https://x.com/channel3_jp/status/2054127026618134687"
  },
];

const categoryLabels = {
  mv: "Music Video",
  textpv: "Text PV",
  motion: "Motion Graphics",
  logo: "Logo Motion",
  live: "Live Visual",
  other: "Other",
};

function createWorkCard(work) {
  const card = document.createElement("a");
  card.className = "work-card";
  card.href = work.url;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.dataset.category = work.category;

  if (work.thumbnail) {
    const bg = document.createElement("div");
    bg.className = "work-card-bg";
    bg.style.backgroundImage = `url(${work.thumbnail})`;
    card.appendChild(bg);
    const overlay = document.createElement("div");
    overlay.className = "work-card-overlay";
    card.appendChild(overlay);
  } else {
    /* TODO: Replace with actual thumbnail */
    const dummy = document.createElement("div");
    dummy.className = "work-card-dummy";
    card.appendChild(dummy);
  }

  const info = document.createElement("div");
  info.className = "work-card-info";
  info.innerHTML = `
    <div class="work-card-category">${categoryLabels[work.category] || work.category}</div>
    <div class="work-card-title">${work.title}</div>
  `;
  card.appendChild(info);
  return card;
}

/* ===== Works Filter (works.html) ===== */
function initWorksFilter() {
  const grid = document.getElementById("works-grid");
  if (!grid) return;

  works.forEach(work => grid.appendChild(createWorkCard(work)));

  document.querySelectorAll(".filter").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.category;
      document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll(".work-card").forEach(card => {
        card.style.display = (cat === "all" || card.dataset.category === cat) ? "" : "none";
      });
    });
  });
}

/* ===== Hamburger Menu ===== */
function initHamburger() {
  const btn = document.querySelector(".hamburger");
  const nav = document.querySelector(".mobile-nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", () => {
  initWorksFilter();
  initHamburger();
});
