const translations = {
    en: {
        nav: { work: "Work", about: "About", services: "Services", contact: "Contact", lang: "العربية" },
        hero: {
            title: "HI, I'M AMIR.",
            statement: "I BUILD DIGITAL BUSINESSES.<br>AI • PRODUCT • BRAND • GROWTH<br><span class='sub-statement'>From idea &rarr; launch &rarr; scale.</span>",
            btnWork: "View Work",
            btnTalk: "Let's Talk"
        },
        about: {
            title: "About",
            text: "I build digital businesses by combining <span class='text-accent'>AI, product design, brand identity and marketing</span>. My work spans websites, mobile apps, e-commerce experiences, hospitality platforms and business automation.",
            location: "Based between Egypt and Dubai."
        },
        work: {
            title: "Selected Work",
            subtitle: "Other Projects",
            visit: "Visit Website ↗"
        },
        services: {
            title: "Services",
            s1_t: "Websites & E-commerce",
            s1_p: "High-conversion platforms, Shopify stores, and cinematic landing pages.",
            s2_t: "Apps & Digital Products",
            s2_p: "User-centric mobile applications and interactive digital tools.",
            s3_t: "Brand Identity",
            s3_p: "Creative direction, visual systems, and premium brand positioning.",
            s4_t: "AI Workflows",
            s4_p: "Business automation, AI-powered content systems, and custom workflows."
        },
        contact: {
            title: "LET'S BUILD SOMETHING."
        },
        footer: "© 2026 AMIR SERAG. All rights reserved."
    },
    ar: {
        nav: { work: "أعمالي", about: "من أنا", services: "خدماتي", contact: "تواصل", lang: "English" },
        hero: {
            title: "أهلاً، أنا أمير.",
            statement: "أبني مشاريع رقمية.<br>ذكاء اصطناعي • منتجات • هوية • نمو<br><span class='sub-statement'>من الفكرة &rarr; الإطلاق &rarr; التوسع.</span>",
            btnWork: "مشاهدة الأعمال",
            btnTalk: "لنبدأ الحديث"
        },
        about: {
            title: "من أنا",
            text: "أقوم ببناء أعمال رقمية من خلال دمج <span class='text-accent'>الذكاء الاصطناعي، تصميم المنتجات، الهوية البصرية والتسويق</span>. تشمل أعمالي المواقع الإلكترونية، تطبيقات الهاتف، تجارب التجارة الإلكترونية، منصات الضيافة وأتمتة الأعمال.",
            location: "متواجد بين مصر ودبي."
        },
        work: {
            title: "أعمال مختارة",
            subtitle: "مشاريع أخرى",
            visit: "زيارة الموقع ↗"
        },
        services: {
            title: "خدماتي",
            s1_t: "المواقع والتجارة الإلكترونية",
            s1_p: "منصات عالية التحويل، متاجر Shopify، وصفحات هبوط سينمائية.",
            s2_t: "التطبيقات والمنتجات الرقمية",
            s2_p: "تطبيقات هاتف تركز على تجربة المستخدم وأدوات رقمية تفاعلية.",
            s3_t: "الهوية البصرية",
            s3_p: "التوجيه الإبداعي، الأنظمة البصرية، وتموضع العلامات التجارية الراقية.",
            s4_t: "أتمتة الذكاء الاصطناعي",
            s4_p: "أتمتة الأعمال، أنظمة محتوى مدعومة بالذكاء الاصطناعي، وسير عمل مخصص."
        },
        contact: {
            title: "لنصنع شيئاً عظيماً."
        },
        footer: "© ٢٠٢٦ أمير سراج. جميع الحقوق محفوظة."
    }
};

let currentLang = 'en';

const langBtn = document.getElementById('lang-switch');

function updateContent() {
    const t = translations[currentLang];
    const html = document.documentElement;
    
    html.lang = currentLang;
    html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // Nav
    document.querySelectorAll('.nav-item').forEach((item, idx) => {
        const keys = ['work', 'about', 'services', 'contact'];
        item.textContent = t.nav[keys[idx]];
    });
    langBtn.textContent = t.nav.lang;
    
    // Hero
    document.querySelector('.hero-text h1').textContent = t.hero.title;
    document.querySelector('.brand-statement').innerHTML = t.hero.statement;
    document.querySelector('.btn-primary').textContent = t.hero.btnWork;
    document.querySelector('.btn-secondary').textContent = t.hero.btnTalk;
    
    // About
    document.querySelector('#about .section-title').textContent = t.about.title;
    document.querySelector('.about-text').innerHTML = t.about.text;
    document.querySelector('.about-location').textContent = t.about.location;
    
    // Work
    document.querySelector('#work .section-title').textContent = t.work.title;
    document.querySelector('.section-subtitle').textContent = t.work.subtitle;
    document.querySelectorAll('.work-link').forEach(link => {
        if(link.textContent.includes('Visit')) link.textContent = t.work.visit;
    });
    
    // Services
    document.querySelector('#services .section-title').textContent = t.services.title;
    const sCards = document.querySelectorAll('.service-card');
    sCards[0].querySelector('h3').textContent = t.services.s1_t;
    sCards[0].querySelector('p').textContent = t.services.s1_p;
    sCards[1].querySelector('h3').textContent = t.services.s2_t;
    sCards[1].querySelector('p').textContent = t.services.s2_p;
    sCards[2].querySelector('h3').textContent = t.services.s3_t;
    sCards[2].querySelector('p').textContent = t.services.s3_p;
    sCards[3].querySelector('h3').textContent = t.services.s4_t;
    sCards[3].querySelector('p').textContent = t.services.s4_p;
    
    // Contact
    document.querySelector('.contact-title').textContent = t.contact.title;
    
    // Footer
    document.querySelector('.footer p').textContent = t.footer;
}

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateContent();
});

// Simple reveal animation on scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
});

// Initial load
updateContent();

// Trigger kinetic animation for hero
setTimeout(() => {
    const heroH1 = document.querySelector('.hero-text h1');
    if(heroH1) heroH1.classList.add('visible');
}, 300);

// Mo.js Contact Section Background Animation
const contactSection = document.querySelector('#contact');
const contactBg = document.getElementById('contact-bg');

const initContactAnimation = () => {
    if (!window.Mo) return;

    const burst = new Mojs.Burst({
        radius: { 0: 150 },
        duration: 2000,
        iterations: 'infinite',
        children: {
            count: 12,
            shape: 'circle',
            radius: 5,
            fill: 'rgba(139, 0, 0, 0.4)',
            duration: 2000,
        },
    });

    burst.tune({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    });

    contactBg.appendChild(burst.dom);
    burst.play();
};

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            initContactAnimation();
            contactObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

contactObserver.observe(contactSection);

// STAGGERED REVEAL FOR SERVICES
const servicesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 150);
            });
            servicesObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

const servicesSection = document.querySelector('#services');
if(servicesSection) servicesObserver.observe(servicesSection);

// Mo.js INTERACTIVE GLOW for Work Items
const workItems = document.querySelectorAll('.work-item');
workItems.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        if (!window.Mo) return;
        
        const rect = item.getBoundingClientRect();
        const burst = new Mojs.Burst({
            radius: { 0: 50 },
            duration: 600,
            children: {
                count: 8,
                shape: 'circle',
                radius: 2,
                fill: 'rgba(139, 0, 0, 0.6)',
                duration: 600,
            },
        });

        burst.tune({ x: e.clientX, y: e.clientY });
        document.body.appendChild(burst.dom);
        burst.play();
        
        // Cleanup dom after animation
        setTimeout(() => {
            if(burst.dom) burst.dom.remove();
        }, 700);
    });
});
