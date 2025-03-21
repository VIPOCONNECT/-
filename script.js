// נתונים של האתרים
const sitesData = {
  business: {
    title: "Business Pro",
    description: "אתר עסקי מקצועי עם עיצוב נקי וחדשני. מתאים לעסקים קטנים ובינוניים, משרדים מקצועיים וחברות שירותים. האתר כולל דף בית מרשים, עמוד אודות, גלריית עבודות, עמוד שירותים וטופס יצירת קשר.",
    price: "₪1,499",
    originalPrice: "₪1,999",
    discount: "25%",
    previewUrl: "https://vipoconnect.github.io/fitnes/",
    features: [
      "עיצוב רספונסיבי מלא",
      "אופטימיזציה למנועי חיפוש",
      "טעינה מהירה",
      "אינטגרציה עם רשתות חברתיות",
      "טופס יצירת קשר מתקדם",
      "גלריית תמונות",
      "חיבור לגוגל אנליטיקס"
    ]
  },
  ecommerce: {
    title: "ShopMaster",
    description: "חנות אונליין מתקדמת עם ממשק ניהול קל לשימוש. מתאימה למגוון עסקים שרוצים למכור מוצרים באינטרנט. כוללת סל קניות, מערכת תשלומים, ניהול מלאי, ומערכת משלוחים.",
    price: "₪2,199",
    originalPrice: "₪2,999",
    discount: "27%",
    previewUrl: "https://vipoconnect.github.io/vila/",
    features: [
      "מערכת ניהול מוצרים",
      "סל קניות מתקדם",
      "שער תשלומים מאובטח",
      "ניהול מלאי אוטומטי",
      "מערכת קופונים והנחות",
      "דירוג וביקורות מוצרים",
      "מעקב הזמנות"
    ]
  },
  portfolio: {
    title: "Portfolio X",
    description: "תיק עבודות מרשים עם אנימציות ואפקטים מתקדמים. מתאים לצלמים, מעצבים, אמנים ואנשי יצירה. האתר מציג את העבודות בצורה מרשימה ומקצועית.",
    price: "₪1,299",
    originalPrice: "₪1,799",
    discount: "28%",
    previewUrl: "https://vipoconnect.github.io/face/",
    features: [
      "גלריית עבודות מרשימה",
      "אנימציות ואפקטים מתקדמים",
      "פילטרים לקטגוריות",
      "אינטגרציה עם אינסטגרם",
      "טופס יצירת קשר",
      "דף אודות מעוצב",
      "אפשרות להורדת קבצים"
    ]
  },
  blog: {
    title: "BlogMaster",
    description: "פלטפורמת בלוג עשירה ומותאמת אישית. מתאימה לכותבי תוכן, עיתונאים, ובלוגרים. כוללת מערכת ניהול תוכן קלה לשימוש, קטגוריות, תגיות, ומערכת תגובות.",
    price: "₪999",
    originalPrice: "₪1,399",
    discount: "29%",
    previewUrl: "https://vipoconnect.github.io/fit/",
    features: [
      "מערכת ניהול תוכן ידידותית",
      "קטגוריות ותגיות",
      "מערכת תגובות",
      "שיתוף ברשתות חברתיות",
      "חיפוש מתקדם",
      "RSS פיד",
      "סטטיסטיקות וניתוח נתונים"
    ]
  },
  landing: {
    title: "LandingPro",
    description: "דף נחיתה ממוקד להמרות גבוהות. מתאים לקמפיינים, השקות מוצרים, ואיסוף לידים. עיצוב מרשים שמוביל לפעולה.",
    price: "₪799",
    originalPrice: "₪1,199",
    discount: "33%",
    previewUrl: "https://vipoconnect.github.io/fitnes/",
    features: [
      "עיצוב ממוקד המרות",
      "טפסים מתקדמים",
      "A/B בדיקות",
      "אינטגרציה עם מערכות CRM",
      "מעקב אחר המרות",
      "כפתורי קריאה לפעולה בולטים",
      "זמן טעינה מהיר"
    ]
  },
  restaurant: {
    title: "RestaurantX",
    description: "אתר מסעדה מעוצב עם תפריט אינטראקטיבי. מתאים למסעדות, בתי קפה, ועסקי מזון. כולל תפריט דיגיטלי, מערכת הזמנות, וגלריית תמונות.",
    price: "₪1,699",
    originalPrice: "₪2,299",
    discount: "26%",
    previewUrl: "https://vipoconnect.github.io/vila/",
    features: [
      "תפריט דיגיטלי אינטראקטיבי",
      "מערכת הזמנות שולחן",
      "גלריית תמונות מרשימה",
      "אינטגרציה עם Wolt/Uber Eats",
      "דף אירועים",
      "ביקורות לקוחות",
      "מפה ושעות פעילות"
    ]
  }
};

// משתנים גלובליים
let cube;
let isAutoRotating = true;
let isDragging = false;
let lastMouseX, lastMouseY;
let rotationX = 0;
let rotationY = 0;
let autoRotateInterval;
let scene, camera, renderer;
let canvas;

// אתחול כשהדף נטען
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

// פונקציית אתחול ראשית
function initApp() {
  // אתחול אלמנטים
  cube = document.querySelector('.cube');
  canvas = document.getElementById('webgl-canvas');
  
  // אתחול סצנת תלת-ממד
  initThreeJS();
  
  // אתחול הקוביה
  initCube();
  
  // אתחול אירועים
  initEvents();
  
  // אתחול צ'אט
  initChat();
  
  // אתחול מודאל
  initModal();
  
  // אתחול אירועי גלילה
  initScrollEvents();
}

// אתחול סצנת תלת-ממד
function initThreeJS() {
  // יצירת סצנה
  scene = new THREE.Scene();
  
  // יצירת מצלמה
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
  
  // יצירת רנדרר
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  // יצירת תאורה
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);
  
  // יצירת רקע גרדיאנט עם גריד
  createBackground();
  
  // התחלת לולאת האנימציה
  animate();
  
  // טיפול בשינוי גודל החלון
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// יצירת רקע תלת-ממדי
function createBackground() {
  // יצירת גריד
  const gridHelper = new THREE.GridHelper(20, 20, 0x4a6cf7, 0x334155);
  gridHelper.position.y = -2;
  scene.add(gridHelper);
  
  // יצירת חלקיקים
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 500;
  
  const posArray = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 20;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    color: 0x4a6cf7,
    transparent: true,
    opacity: 0.8
  });
  
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);
  
  // אנימציה לחלקיקים
  function animateParticles() {
    particlesMesh.rotation.y += 0.001;
    requestAnimationFrame(animateParticles);
  }
  
  animateParticles();
}

// לולאת אנימציה
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// אתחול הקוביה
function initCube() {
  startAutoRotate();
  
  // הגדרת פאות הקוביה עם תמונות האתרים
  const faces = document.querySelectorAll('.face');
  faces.forEach(face => {
    face.addEventListener('click', () => {
      const siteType = face.getAttribute('data-site');
      openModal(siteType);
    });
  });
  
  // כפתורי שליטה בקוביה
  document.getElementById('resetCube').addEventListener('click', resetCube);
  document.getElementById('autoRotate').addEventListener('click', startAutoRotate);
  document.getElementById('stopRotate').addEventListener('click', stopAutoRotate);
}

// התחלת סיבוב אוטומטי
function startAutoRotate() {
  isAutoRotating = true;
  clearInterval(autoRotateInterval);
  autoRotateInterval = setInterval(() => {
    if (isAutoRotating) {
      rotationY += 0.5;
      updateCubeRotation();
    }
  }, 50);
}

// עצירת סיבוב אוטומטי
function stopAutoRotate() {
  isAutoRotating = false;
  clearInterval(autoRotateInterval);
}

// איפוס הקוביה
function resetCube() {
  gsap.to({ x: rotationX, y: rotationY }, {
    x: 0,
    y: 0,
    duration: 1,
    ease: "power2.out",
    onUpdate: function() {
      rotationX = this.targets()[0].x;
      rotationY = this.targets()[0].y;
      updateCubeRotation();
    }
  });
}

// עדכון הסיבוב של הקוביה
function updateCubeRotation() {
  if (cube) {
    cube.style.transform = `translateZ(-150px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  }
}

// אתחול אירועים
function initEvents() {
  // אירועי עכבר לקוביה
  cube.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
  
  // אירועי מגע למובייל
  cube.addEventListener('touchstart', handleTouchStart);
  document.addEventListener('touchmove', handleTouchMove);
  document.addEventListener('touchend', handleTouchUp);
  
  // אירועי לחיצה על כפתורי תצוגה מקדימה
  const previewBtns = document.querySelectorAll('.preview-btn');
  previewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      previewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const previewFrame = btn.closest('.site-preview, .modal-preview').querySelector('iframe, img');
      if (btn.classList.contains('desktop')) {
        previewFrame.style.width = '100%';
      } else if (btn.classList.contains('tablet')) {
        previewFrame.style.width = '768px';
      } else if (btn.classList.contains('mobile')) {
        previewFrame.style.width = '375px';
      }
    });
  });
  
  // אירועי לחיצה על כפתורי צפייה בדמו
  const siteBtns = document.querySelectorAll('.site-cta');
  siteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const siteType = btn.getAttribute('data-site');
      openModal(siteType);
    });
  });
  
  // אירועי לחיצה על קטגוריות
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.getAttribute('data-category');
      // כאן אפשר להוסיף פונקציונליות לסינון אתרים לפי קטגוריה
      // או להציג דף קטגוריה ספציפי
    });
  });
  
  // אירוע החלפת מצב תצוגה (בהיר/כהה)
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.addEventListener('click', toggleTheme);
  
  // אירוע פתיחת תפריט במובייל
  const menuToggle = document.querySelector('.menu-toggle');
  menuToggle.addEventListener('click', toggleMobileMenu);
}

// טיפול בלחיצת עכבר על הקוביה
function handleMouseDown(e) {
  isDragging = true;
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
  stopAutoRotate();
  e.preventDefault();
}

// טיפול בתנועת עכבר
function handleMouseMove(e) {
  if (!isDragging) return;
  
  const deltaX = e.clientX - lastMouseX;
  const deltaY = e.clientY - lastMouseY;
  
  rotationY += deltaX * 0.5;
  rotationX -= deltaY * 0.5;
  
  // הגבלת הסיבוב האנכי
  rotationX = Math.max(-45, Math.min(45, rotationX));
  
  updateCubeRotation();
  
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
  
  e.preventDefault();
}

// טיפול בשחרור לחיצת עכבר
function handleMouseUp() {
  isDragging = false;
}

// טיפול במגע התחלתי (מובייל)
function handleTouchStart(e) {
  if (e.touches.length === 1) {
    isDragging = true;
    lastMouseX = e.touches[0].clientX;
    lastMouseY = e.touches[0].clientY;
    stopAutoRotate();
  }
  e.preventDefault();
}

// טיפול בתנועת מגע (מובייל)
function handleTouchMove(e) {
  if (!isDragging || e.touches.length !== 1) return;
  
  const deltaX = e.touches[0].clientX - lastMouseX;
  const deltaY = e.touches[0].clientY - lastMouseY;
  
  rotationY += deltaX * 0.5;
  rotationX -= deltaY * 0.5;
  
  // הגבלת הסיבוב האנכי
  rotationX = Math.max(-45, Math.min(45, rotationX));
  
  updateCubeRotation();
  
  lastMouseX = e.touches[0].clientX;
  lastMouseY = e.touches[0].clientY;
  
  e.preventDefault();
}

// טיפול בסיום מגע (מובייל)
function handleTouchUp() {
  isDragging = false;
}

// החלפת מצב תצוגה (בהיר/כהה)
function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const themeIcon = document.querySelector('.theme-toggle i');
  
  if (document.body.classList.contains('light-theme')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
}

// פתיחת תפריט במובייל
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
  
  const menuIcon = document.querySelector('.menu-toggle i');
  if (navLinks.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
}

// אתחול צ'אט
function initChat() {
  const chatButton = document.querySelector('.chat-button');
  const chatContainer = document.querySelector('.chat-container');
  const closeChat = document.querySelector('.close-chat');
  const sendMessage = document.querySelector('.send-message');
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.querySelector('.chat-messages');
  
  // פתיחת צ'אט
  chatButton.addEventListener('click', () => {
    chatContainer.style.display = 'flex';
    chatButton.style.display = 'none';
  });
  
  // סגירת צ'אט
  closeChat.addEventListener('click', () => {
    chatContainer.style.display = 'none';
    chatButton.style.display = 'flex';
  });
  
  // שליחת הודעה
  function sendChatMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;
    
    // הוספת הודעת משתמש
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.innerHTML = `
      <div class="message-content">${message}</div>
      <div class="message-time">עכשיו</div>
    `;
    chatMessages.appendChild(userMessage);
    
    // ניקוי שדה הטקסט
    chatInput.value = '';
    
    // גלילה לתחתית הצ'אט
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // הוספת הודעת תמיכה אוטומטית (לאחר השהייה קצרה)
    setTimeout(() => {
      const supportMessage = document.createElement('div');
      supportMessage.className = 'message support';
      supportMessage.innerHTML = `
        <div class="message-content">תודה על פנייתך! נחזור אליך בהקדם.</div>
        <div class="message-time">עכשיו</div>
      `;
      chatMessages.appendChild(supportMessage);
      
      // גלילה לתחתית הצ'אט
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  }
  
  // אירוע לחיצה על כפתור שליחה
  sendMessage.addEventListener('click', sendChatMessage);
  
  // אירוע לחיצה על Enter
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendChatMessage();
    }
  });
}

// אתחול מודאל
function initModal() {
  const modal = document.getElementById('siteModal');
  const closeModal = document.querySelector('.close-modal');
  
  // סגירת מודאל
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  // סגירת מודאל בלחיצה מחוץ לתוכן
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// פתיחת מודאל עם מידע על האתר
function openModal(siteType) {
  const modal = document.getElementById('siteModal');
  const data = sitesData[siteType];
  
  // עדכון תוכן המודאל
  document.querySelector('.modal-title').textContent = data.title;
  document.querySelector('.site-description').textContent = data.description;
  document.querySelector('.current-price').textContent = data.price;
  document.querySelector('.original-price').textContent = data.originalPrice;
  document.querySelector('.discount-badge').textContent = `-${data.discount}`;
  
  // עדכון רשימת התכונות
  const featuresList = document.querySelector('.features-list');
  featuresList.innerHTML = '';
  data.features.forEach(feature => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
    featuresList.appendChild(li);
  });
  
  // עדכון התצוגה המקדימה
  const previewFrame = document.querySelector('.preview-frame');
  previewFrame.src = data.previewUrl;
  
  // הצגת המודאל
  modal.style.display = 'block';
}

// אתחול אירועי גלילה
function initScrollEvents() {
  window.addEventListener('scroll', () => {
    // שינוי סגנון הדר בגלילה
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // אנימציות בגלילה
    animateOnScroll();
  });
}

// אנימציות בגלילה
function animateOnScroll() {
  const elements = document.querySelectorAll('.section-header, .category-card, .site-card, .feature-card');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight * 0.8) {
      element.classList.add('animate');
    }
  });
}
