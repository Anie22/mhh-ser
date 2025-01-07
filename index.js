const team = document.getElementById('team');
const preBut = document.getElementById('prev');
const nextBut = document.getElementById('next');
const service = document.getElementById('services');
const heroHeading = document.getElementById('hero-heading');
const heroBody = document.getElementById('hero-body');
const whatsApp = document.getElementById('whatsapp');
const navLink = document.querySelectorAll('.nav-item');
const navlink = document.querySelectorAll('.nav-item a');
const mobileNav = document.getElementById('offcanvasNavbar')
import { appointmentBookink } from "./form.js";

const teamsImg = [
    {img: 'boss.svg'},
    {img: 'sw.svg'},
    {img: 'legal.svg'},
    {img: 'ani.svg'},
    {img: 'sm.svg'},
    {img: 'gd.svg'},
    {img: 've.svg'},
    {img: 'fsw.svg'}
];

const serviceInfo = [
    {name: 'UI/UX designer', des: 'We provide professional UI/UX design services tailored to your needs. From intuitive app interfaces to engaging website designs, we focus on creating user-friendly, visually appealing, and impactful experiences. Our goal is to turn your ideas into designs that captivate and deliver value to your audience.'},
    {name: 'WEB development', des: 'We offer professional web development services designed to meet your unique requirements. From responsive websites to robust web applications, we focus on creating functional, user-friendly, and visually appealing solutions. Our goal is to bring your ideas to life and deliver a seamless online experience for your audience.'},
    {name: 'App development', des: 'We create apps that bring your ideas to life. Whether it’s a simple tool or a complex platform, we focus on building apps that are easy to use, reliable, and tailored to your needs. Our goal is to help you connect with your audience through seamless, engaging, and impactful digital experiences.'},
    {name: 'Software quality engineer', des: 'We ensure your software works flawlessly with our professional quality engineering services. From detailed testing to performance optimization, we focus on identifying and fixing issues before they become problems. Our goal is to deliver software that’s reliable, efficient, and ready to meet the highest standards, giving you and your users peace of mind.'},
    {name: 'SEO', des: 'We help your business get noticed online with our SEO services. From optimizing your website to improving search rankings, we focus on driving organic traffic and increasing visibility. Our goal is to connect you with your audience by creating strategies that boost your online presence and help your business grow.'},
    {name: 'Graphic designing', des: 'We bring your ideas to life with our professional graphic design services. Whether it’s logos, branding, social media visuals, or marketing materials, we focus on creating designs that are eye-catching, memorable, and aligned with your vision. Our goal is to help you stand out and make a lasting impression.'},
    {name: 'Video editing', des: 'We transform your raw footage into captivating stories with our professional video editing services. From smooth transitions to engaging effects and sound design, we focus on creating videos that capture attention and convey your message effectively. Our goal is to bring your vision to life and leave a lasting impact on your audience.'},
    {name: 'SMM', des: 'We provide expert social media management, creating engaging content, maintaining consistent branding, and fostering audience interaction. Our goal is to enhance your online presence, grow your following, and drive real results for your brand.'}
];

teamsImg.forEach(item => {
    const insertImg = `
        <div class="card-con">
            <img src=img/${item.img} alt="">
        </div>
    `

    team.innerHTML += insertImg;
});

serviceInfo.forEach(con => {
    const insertSer = `
        <div class="d-flex flex-column align-items-center justify-content-center gap-1 servi px-4 py-5">
            <div class="d-flex align-items-center justify-content-center img-con">
                <img src="img/icon.svg" alt="mhm-tech-service-icon">
            </div>
            <div>
                <h1 class="text-capitalize text-center">${con.name}</h1>
            </div>
            <div>
                <p>${con.des}</p>
            </div>
        </div>
    `

    service.innerHTML += insertSer
});

const cards = document.querySelectorAll('.card-con');
let curIndexdex = 0;
const cardTotal = team.scrollWidth - team.offsetWidth;
const cardWidth = cards[0].offsetWidth;

function activeButtons () {
    if(curIndexdex === 0 || curIndexdex < cardTotal) {
        nextBut.classList.remove('disable')
        nextBut.enable = true
    } else {
        nextBut.classList.add('disable')
        nextBut.disable = true
    }

    if(curIndexdex >= cardTotal) {
        preBut.classList.remove('disable')
        preBut.enable = true
    } else {
        preBut.classList.add('disable')
        preBut.disable = true
    }
};

nextBut.addEventListener('click', () => {
    curIndexdex += cardWidth
    if(curIndexdex > cardTotal) curIndexdex = cardTotal;
    const slide = team
    slide.style.transform = `translateX(-${curIndexdex}px)`
    
    if(curIndexdex === 0 || curIndexdex < cardTotal) {
        nextBut.classList.add('active')
    } else {
        nextBut.classList.remove('active')
        nextBut.classList.add('disable')
        preBut.classList.remove('disable')
        preBut.enable = true
        nextBut.disable = true
    }
});

preBut.addEventListener('click', () => {
    curIndexdex -= cardWidth
    if(curIndexdex < 0) curIndexdex = 0;
    const slide = team
    slide.style.transform = `translateX(-${curIndexdex}px)`
    
    if(curIndexdex >= cardTotal || curIndexdex !== 0) {
        preBut.classList.add('active')
        preBut.enable = true
    } else {
        preBut.classList.remove('active')
        preBut.classList.add('disable')
        nextBut.classList.remove('disable')
        preBut.disable = true
        nextBut.enable = true
    }
});

activeButtons();

// dynamically handle the different content on the hero section
function changeContent () {

    if(window.innerWidth >= 992){
        const addHeroHeading = `
            <h6>Contact me</h6>
            <h3>Book An Appointment To Get Started</h3>
        `
        heroHeading.innerHTML = addHeroHeading // add the desktop hero header

        const addHeroBody = `
            <div class="col-lg-4 col-12 bg-white p-3 con">
                <div class="fw-bold">
                    <span>Whats-app:</span>
                    <span>+92-3004774414</span>
                </div>
                <div class="fw-bold">
                    <span>Phone:</span>
                    <span>+92-322-6933463</span>
                </div>
            </div>
            <div class="col-lg-5 col-12 p-0 con2">
                <form action="" class="col-12 d-flex flex-column gap-2" id="form-holder-con">
                    <div class="row m-0 p-0 gap-lg-5 gap-2 col-12 in-dual">
                        <div class="col-lg-5 col-12 p-0">
                            <input class="form-control" type="text" name="userName" id="userName" placeholder="Name">
                            <span class="text-danger error text-capitalize" id="warning"></span>
                        </div>
                        <div class="col-lg-5 col-12 p-0">
                            <input class="form-control" type="email" name="userEmail" id="userEmail" placeholder="Email">
                            <span class="text-danger error text-capitalize" id="warning2"></span>
                        </div>
                    </div>
                    <div>
                        <textarea class="form-control" name="message" id="message" cols="30" rows="10" placeholder="How can we help you?"></textarea>
                        <span class="text-danger error text-capitalize" id="warning3"></span>
                    </div>
                    <div>
                        <button class="button" type="submit">Send message</button>
                    </div>
                </form>
            </div>
        `
        heroBody.innerHTML = addHeroBody // add the desktop form 
        
        appointmentBookink();
    } else {
        const addHeroHeading = `
            <h4 class="h4">We <span>Provide</span> Best <span>IT</span> Solutions</h4>
        `
        heroHeading.innerHTML = addHeroHeading

        const addHeroBody = `
            <div class="d-flex flex-column align-items-center gap-4 col-12 py-3 px-3 con2">
                <div>
                    <h4>Appointment</h4>
                </div>
                <form class="col-12 d-flex flex-column align-items-center gap-3 form" id="form-holder-con">
                    <div class="row m-0 p-0 gap-lg-5 gap-3 col-12 in-dual">
                        <div class="col-lg-5 col-12 p-0">
                            <input class="form-control" type="text" name="userName" id="userName" placeholder="Name">
                            <span class="text-danger error text-capitalize" id="warning"></span>
                        </div>
                        <div class="col-lg-5 col-12 p-0">
                            <input class="form-control" type="email" name="userEmail" id="userEmail" placeholder="Email">
                            <span class="text-danger error text-capitalize" id="warning2"></span>
                        </div>
                    </div>
                    <div class="col-12">
                        <textarea class="form-control txt-area" name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                        <span class="text-danger error text-capitalize" id="warning3"></span>
                    </div>
                    <div class="mt-2">
                        <button class="button" type="submit">Send message</button>
                    </div>
                </form>
            </div>
        `
        heroBody.innerHTML = addHeroBody

        
        appointmentBookink();
    };
}

changeContent();

window.addEventListener('resize', changeContent); // pays attension for change in width

const ser = document.querySelectorAll('.servi'); // gets all the cards
const ser_pre = document.getElementById('prev-ser');
const ser_next = document.getElementById('next-ser');

let curIndex = 0;
let cardsPerSlide = 3;
const cardWidths = ser[0].offsetWidth + 23; // Get the width of one card
const totalCards = ser.length; // Total number of cards

let isDragging = false;
let startX = 0; // Starting X position of drag
let currentX = 0; // Current X position during drag
let translateX = 0; // Tracks the current translateX value

function screenSize() {
    const screen = window.innerWidth;

    if (screen < 800) {
        cardsPerSlide = 2;
    }

    if (screen < 745) {
        cardsPerSlide = 1;
    }

    updateCardPositions();
}

function serviceButtonState() {
    ser_pre.disabled = curIndex === 0;
    ser_next.disabled = curIndex >= totalCards - cardsPerSlide;
  
    ser_pre.classList.toggle('disable', ser_pre.disabled);
    ser_next.classList.toggle('disable', ser_next.disabled);
}

function updateCardPositions() {
    // Apply translateX to all cards based on curIndex
    ser.forEach((services) => {
        services.style.transform = `translateX(${-curIndex * cardWidths}px)`;
    });
}

function nextCardSlide(direction) {
    // Update curIndex based on direction
    curIndex = Math.max(0, Math.min(totalCards - cardsPerSlide, curIndex + direction));
    updateCardPositions();
    serviceButtonState()
}

// Dragging functionality
function handleDragStart(event) {
    isDragging = true;
    startX = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX;
    translateX = -curIndex * cardWidths; // Set initial translateX value
}

function handleDragMove(event) {
    if (!isDragging) return;
    const currentPos = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
    const deltaX = currentPos - startX;
    const dragTranslate = translateX + deltaX;

    ser.forEach((services) => {
        services.style.transform = `translateX(${dragTranslate}px)`;
        services.style.transition = 'none'; // Disable transition during drag
    });
}

function handleDragEnd(event) {
    if (!isDragging) return;
    const endX = event.type === 'touchend' ? event.changedTouches[0].clientX : event.clientX;
    const deltaX = endX - startX;

    if (deltaX > 50) {
        // Dragged right
        nextCardSlide(-1);
    } else if (deltaX < -50) {
        // Dragged left
        nextCardSlide(1);
    } else {
        // Return to original position if drag is too small
        updateCardPositions();
    }

    isDragging = false;
}

// Initial setup
screenSize();
updateCardPositions();
serviceButtonState()

// Event listeners for buttons
ser_next.addEventListener('click', () => {
    if (!ser_next.disabled) {
        ser_next.classList.add('active1');
        ser_next.classList.remove('disable');
        ser_pre.classList.remove('active1');
    } else {
        ser_next.classList.remove('active1');
        ser_pre.classList.add('active1');
        ser_next.classList.add('disable');
    }
    nextCardSlide(1)
});

ser_pre.addEventListener('click', () =>  {
    if (!ser_pre.disabled) {
        ser_pre.classList.add('active1');
        ser_next.classList.remove('active1');
        ser_pre.classList.remove('disable');
    } else {
        ser_pre.classList.remove('active1');
        ser_next.classList.add('active1');
        ser_pre.classList.add('disable');
    }
    nextCardSlide(-1)
});

// Drag and touch events
const cardContainer = document.querySelector('.card-container'); // Assuming the container has class 'card-container'
cardContainer.addEventListener('mousedown', handleDragStart);
cardContainer.addEventListener('mousemove', handleDragMove);
cardContainer.addEventListener('mouseup', handleDragEnd);
cardContainer.addEventListener('mouseleave', handleDragEnd); // Handle drag end if cursor leaves container
cardContainer.addEventListener('touchstart', handleDragStart);
cardContainer.addEventListener('touchmove', handleDragMove);
cardContainer.addEventListener('touchend', handleDragEnd);

window.addEventListener('resize', screenSize);

// Checking if an element is in view port
document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll('.headings');
    const slideUp = document.querySelectorAll('.fot');
    const fadeIn = document.querySelectorAll('.foi')

    // Create a function to handle visibility
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('headings')) {
                    entry.target.classList.add('headings-anima'); // Add animation class for headings
                }
                if (entry.target.classList.contains('foi')) {
                    entry.target.classList.add('why-con'); // Add animation class for why
                }
                if (entry.target.classList.contains('fot')) {
                    entry.target.classList.add('fot-con'); // Add animation class for footer
                }
            } else {
                // Remove animation classes if needed when the element leaves the viewport
                
                if (entry.target.classList.contains('headings')) {
                    entry.target.classList.remove('headings-anima');
                }
                if (entry.target.classList.contains('foi')) {
                    entry.target.classList.remove('why-con');
                }
                if (entry.target.classList.contains('fot')) {
                    entry.target.classList.remove('fot-con');
                }
                
            }
        });
    };

    // Create an IntersectionObserver instance
    const observerOptions = {
        threshold: 0 // Adjust as needed to trigger visibility (0.1 = 10% visible)
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all headings
    headings.forEach(heading => observer.observe(heading));
    fadeIn.forEach(fadeIn => observer.observe(fadeIn))
    slideUp.forEach(slide => observer.observe(slide))
});

function greetings() {
    const time = new Date()
    const hour = time.getHours()
    let message;

    if(hour >= 4 && hour <= 11){
        message = 'Good Morning'
    } else if(hour >= 12 && hour <= 15) {
        message = 'Good Afternoon'
    } else if(hour >= 16 && hour <= 21){
        message = 'Good Evening'
    } else {
        message = 'Good Night'
    }

    return message
}

whatsApp.addEventListener('click', () => {
    const phoneNumber = '+923226933463'
    const msg = greetings() + ' sir'
    const encodedMsg = encodeURIComponent(msg); 
    const url = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;

    window.open(url, '_blank')
})

const path = window.location.pathname

navLink.forEach(navL => {
    const herf = navL.querySelector('a').getAttribute('href')

    if(path === herf) {
        navL.classList.add('active')
    }

    navL.addEventListener('click', (e) => {
        navLink.forEach(link => link.classList.remove('active'))
        navL.classList.add('active')
    })
})

navlink.forEach(nav => {
    nav.addEventListener('click', () => {
        mobileNav.classList.remove('show')
        console.log(25)
    })
})