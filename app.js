const reviews = [
  {
    id: 1,
    description: "Это просто потрясающий сервис! Всё работает быстро и без сбоев. Я был приятно удивлён качеством обслуживания и вниманием к деталям.",
    name: "Анна Смирнова",
    profession: "Маркетолог",
    imagePath: "photowomen1.jfif"
  },
  {
    id: 2,
    description: "Отличный опыт сотрудничества. Команда всегда была на связи и помогала на каждом этапе проекта. Рекомендую!",
    name: "Иван Петров",
    profession: "Разработчик",
    imagePath: "photo2.avif"
  },
  {
    id: 3,
    description: "Профессиональный подход и результат, превзошедший мои ожидания. Буду обращаться снова!",
    name: "Екатерина Лебедева",
    profession: "Дизайнер",
    imagePath: "photowomen2.jfif"
  },
  {
    id: 4,
    description: "Сервис действительно стоит своих денег. Всё чётко, оперативно и с отличным результатом.",
    name: "Александр Волков",
    profession: "Предприниматель",
    imagePath: "photo men2.webp"
  },
  {
    id: 5,
    description: "Очень доволен сотрудничеством! Ребята большие молодцы, учли все пожелания и сделали всё в срок.",
    name: "Мария Кузнецова",
    profession: "Менеджер по продукту",
    imagePath: "photowomen3.jfif"
  }
];


const rightSlideBtn = document.querySelector('.section4 .rectangle .right');
const leftSlideBtn = document.querySelector('.section4 .rectangle .left');
const descriptionSlide = document.querySelector('.section4 .rectangle .center .p1');
const nameSlide = document.querySelector('.section4 .rectangle .center h4');
const professionSlide = document.querySelector('.section4 .rectangle .center .p2');
const imagePathSlide = document.querySelector('.section4 .rectangle .center .img img');

let current=0;
function slide(){
    const currentSlide=reviews[current];
    descriptionSlide.textContent=currentSlide.description;
    nameSlide.textContent=currentSlide.name;
    professionSlide.textContent=currentSlide.profession;
     imagePathSlide.src=currentSlide.imagePath;
}
rightSlideBtn.addEventListener('click',()=>{
current=(current===reviews.length-1)? 0 : (current +1);
slide();
});

leftSlideBtn.addEventListener('click',()=>{
current=(current===0) ? (reviews.length-1) : (current -1);
slide();
});