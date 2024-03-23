console.log("hello");

const changeLanguage = (event) => {
  const LR1t = {
    en: "Our Most Recent Projects",
    jp: "最新のプロジェクト",
  };
  const LR1h = {
    en: "Latest Release",
    jp: "最新のリリース",
  };
  const FC1t = {
    en: "Explore Our Back Catalogue",
    jp: "過去のカタログをご覧ください",
  };
  const FC1h = {
    en: "Filmography",
    jp: "フィルモグラフィー",
  };
  const SC1t = {
    en: "Check Out Whats New",
    jp: "新機能をチェックしてください",
  };
  const SC1h = {
    en: "Shop Now",
    jp: "今すぐ購入",
  };
  const RM = {
    en: "Read more",
    jp: "最続きを読む",
  };
  const SG = {
    en: "Studio Ghibli",
    jp: "スタジオジブリ",
  };
  const a1 = {
    en: "Home",
    jp: "家",
  };
  const a2 = {
    en: "About",
    jp: "について",
  };
  const a3 = {
    en: "Latest Release",
    jp: "最新のリリース",
  };
  const a4 = {
    en: "Filmography",
    jp: "フィルモグラフィー",
  };
  const a5 = {
    en: "Shop",
    jp: "店",
  };
  const SG9 = {
    en: "Studio Ghibli © 2024",
    jp: "スタジオジブリ © 2024",
  };
  const AB1t = {
    en: "Learn More About Our History",
    jp: "当社の歴史について詳しく知る",
  };
  const AB1h = {
    en: "About",
    jp: "について",
  };

  document.getElementById("LR1t").replaceChildren(LR1t[event.target.value]);
  document.getElementById("LR1h").replaceChildren(LR1h[event.target.value]);
  document.getElementById("FC1t").replaceChildren(FC1t[event.target.value]);
  document.getElementById("FC1h").replaceChildren(FC1h[event.target.value]);
  document.getElementById("SC1t").replaceChildren(SC1t[event.target.value]);
  document.getElementById("SC1h").replaceChildren(SC1h[event.target.value]);
  document.getElementById("RM1").replaceChildren(RM[event.target.value]);
  document.getElementById("RM2").replaceChildren(RM[event.target.value]);
  document.getElementById("RM3").replaceChildren(RM[event.target.value]);
  document.getElementById("RM4").replaceChildren(RM[event.target.value]);
  document.getElementById("SG9").replaceChildren(RM[event.target.value]);
  document.getElementById("SG").replaceChildren(SG[event.target.value]);
  document.getElementById("a1").replaceChildren(a1[event.target.value]);
  document.getElementById("a2").replaceChildren(a2[event.target.value]);
  document.getElementById("a3").replaceChildren(a3[event.target.value]);
  document.getElementById("a4").replaceChildren(a4[event.target.value]);
  document.getElementById("a5").replaceChildren(a5[event.target.value]);
  document.getElementById("AB1t").replaceChildren(AB1t[event.target.value]);
  document.getElementById("AB1h").replaceChildren(AB1h[event.target.value]);
};
