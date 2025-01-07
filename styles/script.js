let header=document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('show', window.scrollY > 680);
});

 
const sider =document.getElementById('sider');
const btnSider =document.getElementById('btn-sider');
btnSider.onclick = () =>{
    if(btnSider.classList.contains('fa-bars')){
        btnSider.classList.replace('fa-bars','fa-close');
        sider.classList.add('show');
}
else{
    btnSider.classList.replace('fa-close','fa-bars');
    sider.classList.remove('show');
}
}


// const Amina=document.querySelector('.amina');
// const Main2=document.querySelector('.main2');

// Amina.click =() =>{
// Main2.classList.replace('hard','show');

// }
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const slideWidth = slides[0].getBoundingClientRect().width;

// ترتيب الصور جنبًا إلى جنب
slides.forEach((slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
});

let currentIndex = 0;

function moveToSlide(track, currentIndex) {
  const amountToMove = slides[currentIndex].style.left;
  track.style.transform = `translateX(-${amountToMove})`;
}

// زر الانتقال إلى الصورة التالية
nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 4) { // تأكد من عدم تجاوز آخر 5 صور
    currentIndex++;
    moveToSlide(track, currentIndex);
  }
});

// زر الرجوع إلى الصورة السابقة
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    moveToSlide(track, currentIndex);
  }
});

// ضبط العرض عند تغيير حجم الشاشة
window.addEventListener('resize', () => {
  const slideWidth = slides[0].getBoundingClientRect().width;
  slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
  });
  moveToSlide(track, currentIndex);
});





function showCards(id, p) {
  // 1. إخفاء جميع الكروت
  const allCards = document.querySelectorAll('.cards-container');
  allCards.forEach(container => container.classList.remove('active'));

  // 2. إزالة تمييز الأزرار
  const allButtons = document.querySelectorAll('.button-container .main2-click');
  allButtons.forEach(btn => btn.classList.remove('active'));

  // 3. عرض الكروت المرتبطة بالزر
  const selectedCards = document.getElementById(id);
  selectedCards.classList.add('active');

  // 4. تمييز الزر النشط
  p.classList.add('active');

}

// عرض الكروت الافتراضية عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.button-container p.active').click();
});







var con1=document.querySelector(".con1");
var mainImg=document.getElementById('main-img');
var images =document.querySelectorAll('.sub-image');

images.forEach((image)=>{
    image.addEventListener('click',()=>{
        mainImg.src=image.getAttribute('src');
    })
})



 

// Select all the divs
// const boxes = document.querySelectorAll('.box');

// // Function to show each div sequentially
// boxes.forEach((box, index) => {
//   setTimeout(() => {
//     box.classList.add('show');
//   }, index * 800); // Delay each by 1 second
// });






// Select all the boxes
const boxes = document.querySelectorAll('.box');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const box = entry.target;
      setTimeout(() => {
        box.classList.add('show');
      }, Array.from(boxes).indexOf(box) * 100); // Delay based on index
      observer.unobserve(box); // Stop observing once the animation is triggered
    }
  });
});

// Observe each box
boxes.forEach((box) => observer.observe(box));





// Select all the boxes
const boxez = document.querySelectorAll('.boxz');

// Create an Intersection Observer
const observ = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const box = entry.target;
      setTimeout(() => {
        box.classList.add('show');
      }, Array.from(boxez).indexOf(box) * 50); // Delay based on index
      observ.unobserve(box); // Stop observing once the animation is triggered
    }
  });
});

// Observe each box
boxez.forEach((box) => observ.observe(box));






// Select all the divs
// const boxez= document.querySelectorAll('.boxz');

// // Function to show each div sequentially
// boxez.forEach((boxez, index) => {
//   setTimeout(() => {
//     boxez.classList.add('show');
//   }, index * 400); // Delay each by 1 second
// });
