/* ===== Countdown ===== */
const target=new Date("2026-04-13");
const cd=document.getElementById("countdown");
function update(){
  const d = Math.ceil((target - new Date()) / 86400000);
  cd.innerHTML = d <= 0
    ? "<span class='days'>本日開幕！</span>"
    : `<span class="label">開幕まで</span>
       <span class="days">${d}</span>
       <span class="label">日</span>`;
}

update();setInterval(update,3600000);

/* ===== NEWS ===== */
const news={
  open:{title:"開幕日・会場案内",date:"2025.11.15",tag:"公式",
    body:"<p>2026年4月13日 開幕</p><p>空シリ未来島 特設会場</p>"},
  reserve:{title:"来場予約開始",date:"2025.12.01",tag:"公式",
    body:"<p>事前予約制です。</p>"}
};
const nList=document.getElementById("newsListView");
const nDetail=document.getElementById("newsDetailView");
const nInner=document.getElementById("newsDetailInner");
document.querySelectorAll("[data-news]").forEach(a=>{
  a.onclick=()=>{
    const d=news[a.dataset.news];
    nInner.innerHTML=`<h2>${d.title}</h2>
      <div class="news-meta"><span>${d.date}</span><span class="news-tag">${d.tag}</span></div>${d.body}`;
    nList.style.display="none";
    nDetail.style.display="block";
  };
});
document.getElementById("newsBackBtn").onclick=()=>{
  nDetail.style.display="none";nList.style.display="block";
};



/* ===== PAVILION ===== */
const data=[
  {id:1, ex:"関東急行電鉄", n:"動物館", m:"動物のすごさを伝えよう", t:"動物・環境問題", c:"環境問題が与える動物への影響"},
  {id:2, ex:"…", n:"Tatsuya City 〜空想だからできること〜", m:"たつや輝く未来都市のデザイン", t:"ネタ枠", c:"2億円トイレ"},
  {id:3, ex:"地理さん", n:"地理さんパビリオン（仮）", m:"未定", t:"空文技術系", c:"未定"},
  {id:4, ex:"まいはこ", n:"空文イコラブパビリオン / ハンバーガーメニューパビリオン", m:"なんそれ", t:"個性を引き出す", c:"ハンバーガーかイコラブ"},
  {id:5, ex:"hall", n:"自動車パビリオン", m:"車の織りなす未来のAnswerを", t:"クルマ", c:"未来的な先進車"},
  {id:6, ex:"DT", n:"DT館", m:"future start", t:"未来へ", c:"空飛ぶ文章"},
  {id:7, ex:"愛知市民", n:"愛知県究", m:"愛知県のここがすごい", t:"鉄道", c:"地下鉄桜通線とJR名古屋の接続"},
  {id:8, ex:"MR(首都圏鉄道)", n:"Future railway 未来につながる鉄路", m:"時代は変わる、鉄道も変わる", t:"これからの鉄道", c:"MR-X000形 試験型車両"},
  {id:9, ex:"全国空想電鉄", n:"鉄道研究所", m:"鉄道の色んな所を超解説", t:"鉄道", c:"リニア新幹線"},
  {id:10, ex:"優_鉄道", n:"未来の鉄道博 RAILVERSE", m:"つながる未来、走る夢", t:"未来の鉄道", c:"AIによる鉄道整備実演"},
  {id:11, ex:"東武推し", n:"発車メロディ館", m:"発車メロディの魅力を", t:"鉄道", c:"発車メロディの歴史"},
  {id:12, ex:"コガネムシ大好き❤️", n:"昆虫のスゴイ技術！！", m:"虫の技術を楽しく学ぶ", t:"昆虫", c:"昆虫の鳴き声体験"},
  {id:13, ex:"D/K18", n:"高度医療未来館", m:"未来の医療へ", t:"医療", c:"医療説明文・論文"},
  {id:14, ex:"関東急行電鉄", n:"海洋急行電鉄館", m:"未来と共に", t:"鉄道", c:"海洋急行電鉄の歴史"},
  {id:15, ex:"TKGdenota", n:"都会と田舎の綺羅びやかな関係性", m:"未来になってもつなぐ", t:"周綿グループ各社", c:"田舎と都会の製品"},
  {id:16, ex:"ひーたろー", n:"日鉄館", m:"交通と幸福を", t:"鉄道", c:"国鉄路線継承・車両"},
  {id:17, ex:"N＠panam", n:"Δ館", m:"∞∈∀", t:"興味", c:"鉄道・航空・小ネタ"},
  {id:18, ex:"マリルタチー", n:"海と走り続ける可能性", m:"次世代エコ列車", t:"鉄道", c:"水素列車開発"},
  {id:19, ex:"クハ5050の40番代", n:"闘走ミッドナイトパビリオン", m:"未来へ", t:"自動車", c:"作品展示・限定トミカ"},
  {id:20, ex:"多奈・有本鉄道", n:"たなあり100年パビリオン", m:"ずっと、もっと。", t:"歴史", c:"多奈北海道支部55系"},
  {id:21, ex:"越前のカニ", n:"福井県パビリオン", m:"福井を知る", t:"観光名所", c:"東尋坊VR"},
  {id:22, ex:"優_鉄道", n:"世界のこれからパビリオン", m:"世界はもっと美しい", t:"世界", c:"世界の魅力展示"},
  {id:23, ex:"ベルギーファン", n:"ニッツァランド・チェルコ館", m:"食の美", t:"料理・絵画", c:"ニッツァランド展示"},
  {id:24, ex:"くりぼ", n:"関西の鉄道網", m:"関西の未来", t:"関西の鉄道", c:"新線計画一覧"},
  {id:25, ex:"YKライナー＠大和路快速", n:"next train square", m:"未来の鉄道界", t:"未来の鉄道", c:"運転シミュレーター"},
  {id:26, ex:"悟朗", n:"地球持続パビリオン", m:"持続可能な都市", t:"鉄道・町", c:"持続可能な町"},
  {id:27, ex:"光＿鉄道・優_鉄道", n:"YKRパビリオン", m:"YKRを知ってほしい", t:"鉄道", c:"車両展示"},
  {id:28, ex:"下総みなと", n:"KFCパビリオン", m:"最大の雑談広場", t:"集団コミュニティ", c:"KFC参加メリット"}
];

const tb=document.getElementById("pavilionTable");
const search=document.getElementById("pavilionSearch");
const listV=document.getElementById("pavilionListView");
const detailV=document.getElementById("pavilionDetailView");
const detailI=document.getElementById("pavilionDetailInner");

function render(list){
  tb.innerHTML="";
  list.forEach(p=>{
    const tr=document.createElement("tr");
    tr.innerHTML=`<td>${p.id}</td><td>${p.ex}</td><td>${p.n}</td><td>${p.t}</td>`;
    tr.onclick=()=>{
      detailI.innerHTML=`<h2>${p.n}</h2>
      <p><strong>出展者：</strong>${p.ex}</p>
      <h3>モットー</h3><p>${p.m}</p>
      <h3>テーマ</h3><p>${p.t}</p>
      <h3>展示内容</h3><p>${p.c}</p>`;
      listV.style.display="none";detailV.style.display="block";
    };
    tb.appendChild(tr);
  });
}
render(data);

search.oninput=()=>{
  const k=search.value.toLowerCase();
  render(data.filter(p=>p.n.toLowerCase().includes(k)||p.t.toLowerCase().includes(k)));
};
document.getElementById("pavilionBackBtn").onclick=()=>{
  detailV.style.display="none";listV.style.display="block";
};

window.addEventListener("load", () => {
  const text = document.querySelector(".text");
  const loading = document.getElementById("loading");

  // フェードイン
  requestAnimationFrame(() => {
    text.classList.add("show");
  });

  // 表示後にフェードアウト
  setTimeout(() => {
    loading.style.transition = "opacity 0.8s ease";
    loading.style.opacity = "0";

    setTimeout(() => {
      loading.remove();
    }, 800);
  }, 3000);
});
