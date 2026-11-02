const items = [
  {file:"cream1.png",name:"Крем № 01",type:"КОКОС-ПЕРСИК",category:"extra",desc:"Нежный кокос и сочный персик переносят в тропический рай, где даже старосты умеют отдыхать."},
  {file:"cream2.png",name:"Крем № 02",type:"МАЛИНА",category:"extra",desc:"Яркая малина добавляет уходу сочный ягодный характер, а коже — необходимую заботу."},
  {file:"gel1.png",name:"Гель № 01",type:"ЯБЛОЧНЫЙ ПИРОГ",category:"wash",desc:"Сочный аромат печёных яблок, корицы и хрустящего теста добавляет уюта и тепла в жизнь даже самым суровым мракобесам."},
  {file:"gel2.png",name:"Гель № 02",type:"ВАНИЛЬ-САНДАЛ",category:"wash",desc:"Тёплая ваниль и благородный сандал создают аромат настоящего героя с безупречным стилем."},
  {file:"gel3.png",name:"Гель № 03",type:"МАРШМЭЛЛОУ",category:"wash",desc:"Воздушная сладость маршмэллоу окутывает мягким ароматом, пока ты готовишься к новым подвигам."},
  {file:"gel4.png",name:"Гель № 04",type:"КЛУБНИЧНЫЕ СЛИВКИ",category:"wash",desc:"Сочная клубника и нежные сливки превращают обычный душ в сладкое приключение супергероя."},
  {file:"los'on_cold.png",name:"Охлаждающий лосьон",type:"БЕРГАМОТ",category:"extra",desc:"Холодная голова, отсутствие отопления."},
  {file:"los'on_hot.png",name:"Согревающий лосьон",type:"ИМБИРНЫЙ ПРЯНИК",category:"extra",desc:"Горячий гриффиндорец, интересные бинго."},
  {file:"pena1.png",name:"Пена № 01",type:"ЧЕРНИЧНЫЙ ЙОГУРТ",category:"extra",desc:"Сочная черника и нежный сливочный йогурт создают аппетитный аромат для расслабления после всех героически-старостатских дел."},
  {file:"pena2.png",name:"Пена № 02",type:"ЛЕСНАЯ ЗЕМЛЯНИКА",category:"extra",desc:"Сладкая лесная земляника наполняет ванну ягодным настроением и превращает передышку в заслуженный отдых."},
  {file:"penab1.png",name:"Пена для бритья",type:"КЛУБНИЧНЫЙ МОХИТО",category:"face",desc:"Сочная клубника, освежающая мята и цитрусовые ноты превращают бритьё в яркий ритуал супергероя."},
  {file:"penab2.png",name:"Гель после бритья",type:"ПИНА КОЛАДА",category:"face",desc:"Тропический дуэт ананаса и кокоса дарит коже ощущение свежести и настроение заслуженного отпуска."},
  {file:"scrab1.png",name:"Скраб № 01",type:"ЛИМОН МЁД КОРИЦА",category:"wash",desc:"Солнечный лимон, золотистый мёд и пряная корица создают ароматный союз для мощного обновления."},
  {file:"scrab2.png",name:"Скраб № 02",type:"КОФЕ БУРБОН",category:"wash",desc:"Бодрящий кофе и тёплые бурбоновые ноты создают насыщенный аромат с характером."},
  {file:"shampun1.png",name:"Шампунь № 01",type:"МАЛИНА-ШОКОЛАД",category:"hair",desc:"Яркая малина встречается с насыщенным шоколадом в дерзком дуэте для настоящих покорителей Готэма."},
  {file:"shampun2.png",name:"Шампунь № 02",type:"МЯТА-ЛИМОН",category:"hair",desc:"Взрыв цитрусовой свежести и прохладной мяты помогает зарядиться энергией для новых миссий."},
  {file:"tv_mylo1.png",name:"Твёрдое мыло № 01",type:"ЕЖЕВИКА",category:"wash",desc:"Сочная ежевика дарит ягодный заряд, достойный самого-самого."},
  {file:"tv_mylo2.png",name:"Твёрдое мыло № 02",type:"ВЕРЕСК",category:"wash",desc:"Тонкий травянистый аромат вереска напоминает о таинственных местах Запретного леса."},
  {file:"tv_mylo3.png",name:"Твёрдое мыло № 03",type:"ПЛОМБИР",category:"wash",desc:"Нежный сливочный аромат пломбира превращает ежедневное очищение в маленькую супергеройскую слабость."},
  {file:"zubpasta.png",name:"Зубная паста",type:"КОКА-КОЛА",category:"face",desc:"Несочетаемое сочетается и взламывает мозг, так же как отсуствие кариеса после когтевранских леденцов."}
];
const products = document.getElementById("products");
function render(filter="all"){
  products.innerHTML="";
  items.forEach((item,index)=>{
    if(filter!=="all" && item.category!==filter) return;
    const card=document.createElement("article");
    card.className="product-card";
    card.style.animationDelay=(index%8)*35+"ms";
    const label=item.name.replace(/[<>]/g,"");
    card.innerHTML=`<span class="product-number">№ ${(index+1).toString().padStart(2,"0")}</span>
      <span class="product-type">${item.type}</span>
      <div class="product-image"><img src="assets/${item.file}" alt="${label}" loading="lazy"><div class="fallback-product">${label}<small>BATMAN CARE</small></div></div>
      <h3 class="product-name">${label}</h3><p class="product-desc">${item.desc}</p>`;
    const img=card.querySelector("img");
    img.addEventListener("error",()=>img.classList.add("broken"));
    products.appendChild(card);
  });
  document.getElementById("itemCount").textContent=filter==="all"?"20":products.children.length;
}
document.querySelectorAll(".filter").forEach(button=>button.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  button.classList.add("active");render(button.dataset.filter);
}));
render();


const modal = document.getElementById("letterModal");
const envelope = document.getElementById("envelope");
const closeButton = document.getElementById("closeLetter");
const backdrop = document.getElementById("closeBackdrop");

function openLetter() {
  if (!modal) return;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLetter() {
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (envelope) {
  envelope.addEventListener("click", openLetter);
}

if (closeButton) {
  closeButton.addEventListener("click", closeLetter);
}

if (backdrop) {
  backdrop.addEventListener("click", closeLetter);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLetter();
  }
});
