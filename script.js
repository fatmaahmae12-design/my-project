
// الأبيات التالية نماذج تجريبية من تأليفي.
const poets = [
  {
    id: "mohammed-bin-futais",
    name: "محمد بن فطيس",
    image: "images/mohammed-bin-futais.jpg",
    bio: "اختر قصيدة من المختارات المعروضة في هذا الموقع.",
    poems: [
      {
        title: "على درب الوفا",
        verses: "يا صاحبي والطيب يبقى له عنوان\nوالعز في فعل الكريم ومواقيفه"
      },
      {
        title: "ذكريات",
        verses: "للماضي اللي في ضلوعي حكايات\nوللوقت دربٍ ما عرفنا نهايته"
      },
      {
        title: "صبر الليالي",
        verses: "نمشي ولو طال الطريق وتعبنا\nدام الأمل في داخل القلب حيّ"
      }
    ]
  },
  {
    id: "daidan-bin-qadaan",
    name: "ضيدان بن قضعان",
    image: "images/daidan-bin-qadaan.jpg",
    bio: "مختارات تجريبية لصفحة الشاعر.",
    poems: [
      {
        title: "قصيدة الوفاء",
        verses: "الوفا طبعٍ يشرّف راعيه\nوالكريم أفعاله تسبق كلامه"
      }
    ]
  },
  {
    id: "abdullah-al-sumairi",
    name: "عبدالله السميري",
    image: "images/abdullah-al-sumairi.jpg",
    bio: "مختارات تجريبية لصفحة الشاعر.",
    poems: [
      {
        title: "يا صاحبي",
        verses: "يا صاحبي لا ضاق وقتك تذكّر\nإن الفرج عقب العنا له ميعاد"
      }
    ]
  },
  {
    id: "hamed-zaid",
    name: "حامد زيد",
    image: "images/hamed-zaid.jpg",
    bio: "مختارات تجريبية لصفحة الشاعر.",
    poems: [
      {
        title: "معنى القصيد",
        verses: "بعض القصايد تختصر عمر وأحلام\nوبعض الحكي يبقى صدى في ضميرك"
      }
    ]
  },
  {
    id: "yaser-al-twaijri",
    name: "ياسر التويجري",
    image: "images/yaser-al-twaijri.jpg",
    bio: "مختارات تجريبية لصفحة الشاعر.",
    poems: [
      {
        title: "كلمة وموقف",
        verses: "الكلمة اللي من وفا القلب تنقال\nتبقى ولو غابت وجيهٍ تحبها"
      }
    ]
  },
  {
    id: "saad-bin-jadlan",
    name: "سعد بن جدلان",
    image: "images/saad-bin-jadlan.jpg",
    bio: "مختارات تجريبية لصفحة الشاعر.",
    poems: [
      {
        title: "طيب الأثر",
        verses: "يبقى الأثر لو غاب راعيه عن العين\nوالطيب يذكر صاحبه كل الأزمان"
      }
    ]
  },
  {
    id: "ali-al-saeed",
    name: "علي السعيد",
    image: "images/ali-al-saeed.jpg",
    bio: "مختارات تجريبية لصفحة الشاعر.",
    poems: [
      {
        title: "أمل",
        verses: "خل الأمل في خاطرك دايمٍ حي\nوالليالي مهما تطول لها نهاية"
      }
    ]
  }
];

document.querySelectorAll(".year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const poetCards = document.querySelector("#poetCards");

if (poetCards) {
  poetCards.innerHTML = poets.map((poet) => `
    <article class="poet-card">
      <img
        class="poet-image"
        src="${poet.image}"
        alt="صورة ${poet.name}"
        onerror="this.style.display='none'"
      >
      <p class="eyebrow">شاعر نبطي</p>
      <h3>${poet.name}</h3>
      <p>${poet.bio}</p>
      <a class="button" href="poet.html?id=${poet.id}">عرض القصائد</a>
    </article>
  `).join("");
}

const poemList = document.querySelector("#poemList");

if (poemList) {
  const params = new URLSearchParams(window.location.search);
  const poet = poets.find((item) => item.id === params.get("id"));
  const poetName = document.querySelector("#poetName");
  const poetBio = document.querySelector("#poetBio");
  const poetPageImage = document.querySelector("#poetPageImage");

  if (poet) {
    document.title = `قصائد ${poet.name} | ديوان الشعراء`;
    poetName.textContent = `قصائد ${poet.name}`;
    poetBio.textContent = poet.bio;

    if (poetPageImage) {
      poetPageImage.src = poet.image;
      poetPageImage.alt = `صورة ${poet.name}`;
      poetPageImage.onerror = () => {
        poetPageImage.style.display = "none";
      };
    }

    poemList.innerHTML = poet.poems.map((poem) => `
      <article class="poem-card">
        <h2>${poem.title}</h2>
        <p>${poem.verses}</p>
      </article>
    `).join("");
  } else {
    poetName.textContent = "الشاعر غير موجود";
    poetBio.textContent = "ارجع إلى الصفحة الرئيسية واختر شاعرًا من القائمة.";
  }
}