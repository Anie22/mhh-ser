const team = document.getElementById('team');
const preBut = document.getElementById('prev');
const nextBut = document.getElementById('next');
const service = document.getElementById('services');
const heroHeading = document.getElementById('hero-heading');
const heroBody = document.getElementById('hero-body')

const teamsImg = [
    {img: 'boss.svg'},
    {img: 'sw.svg'},
    {img: 'ani.svg'},
    {img: 'sm.svg'},
    {img: 'gd.svg'},
    {img: 've.svg'},
    {img: 'fsw.svg'}
]

const serviceInfo = [
    {name: 'UI/UX designer', des: 'We provide professional UI/UX design services tailored to your needs. From intuitive app interfaces to engaging website designs, we focus on creating user-friendly, visually appealing, and impactful experiences. Our goal is to turn your ideas into designs that captivate and deliver value to your audience.'},
    {name: 'WEB development', des: 'We offer professional web development services designed to meet your unique requirements. From responsive websites to robust web applications, we focus on creating functional, user-friendly, and visually appealing solutions. Our goal is to bring your ideas to life and deliver a seamless online experience for your audience.'},
    {name: 'App development', des: 'We create apps that bring your ideas to life. Whether it’s a simple tool or a complex platform, we focus on building apps that are easy to use, reliable, and tailored to your needs. Our goal is to help you connect with your audience through seamless, engaging, and impactful digital experiences.'},
    {name: 'Software quality engineer', des: 'We ensure your software works flawlessly with our professional quality engineering services. From detailed testing to performance optimization, we focus on identifying and fixing issues before they become problems. Our goal is to deliver software that’s reliable, efficient, and ready to meet the highest standards, giving you and your users peace of mind.'},
    {name: 'SEO', des: 'We help your business get noticed online with our SEO services. From optimizing your website to improving search rankings, we focus on driving organic traffic and increasing visibility. Our goal is to connect you with your audience by creating strategies that boost your online presence and help your business grow.'},
    {name: 'Graphic designing', des: 'We bring your ideas to life with our professional graphic design services. Whether it’s logos, branding, social media visuals, or marketing materials, we focus on creating designs that are eye-catching, memorable, and aligned with your vision. Our goal is to help you stand out and make a lasting impression.'},
    {name: 'Video editing', des: 'We transform your raw footage into captivating stories with our professional video editing services. From smooth transitions to engaging effects and sound design, we focus on creating videos that capture attention and convey your message effectively. Our goal is to bring your vision to life and leave a lasting impact on your audience.'},
    {name: 'SMM', des: 'We provide expert social media management, creating engaging content, maintaining consistent branding, and fostering audience interaction. Our goal is to enhance your online presence, grow your following, and drive real results for your brand.'}
]

teamsImg.forEach(item => {
    const insertImg = `
        <div class="card-con">
            <img src=${item.img} alt="">
        </div>
    `

    team.innerHTML += insertImg;
})

serviceInfo.forEach(con => {
    const insertSer = `
        <div class="d-flex flex-column align-items-center justify-content-center gap-2 servi px-4 py-5">
            <div class="d-flex align-items-center justify-content-center">
                <img src="icon.svg" alt="">
            </div>
            <div>
                <h2 class="text-capitalize text-center">${con.name}</h2>
            </div>
            <div>
                <span>${con.des}</span>
            </div>
        </div>
    `

    service.innerHTML += insertSer
})


const cards = document.querySelectorAll('.card-con');
let currentIndex = 0;
const cardTotal = team.scrollWidth - team.offsetWidth;
const cardWidth = cards[0].offsetWidth;

function activeButtons () {
    if(currentIndex === 0 || currentIndex < cardTotal) {
        nextBut.classList.add('active')
        nextBut.enable = true
    } else {
        nextBut.classList.remove('active')
        nextBut.disable = true
    }

    if(currentIndex >= cardTotal) {
        preBut.classList.add('active')
        preBut.enable = true
    } else {
        preBut.classList.remove('active')
        preBut.disable = true
    }
};

nextBut.addEventListener('click', () => {
    currentIndex += cardWidth
    if(currentIndex > cardTotal) currentIndex = cardTotal;
    const slide = team
    slide.style.transform = `translateX(-${currentIndex}px)`
    activeButtons()
});

preBut.addEventListener('click', () => {
    currentIndex -= cardWidth
    if(currentIndex < cardTotal) currentIndex = 0;
    const slide = team
    slide.style.transform = `translateX(-${currentIndex}px)`
    activeButtons()
});

activeButtons()

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
                <form action="" class="col-12 d-flex flex-column gap-2">
                    <div class="row m-0 p-0 gap-lg-5 gap-2 col-12 in-dual">
                        <div class="col-lg-5 col-12 p-0">
                            <input class="form-control" type="text" name="name" id="name" placeholder="Name*">
                        </div>
                        <div class="col-lg-5 col-12 p-0">
                            <input class="form-control" type="email" name="email" id="email" placeholder="Email*">
                        </div>
                    </div>
                    <div>
                        <input class="form-control" type="text" name="help" id="help" placeholder="How can we help you?">
                    </div>
                    <div>
                        <textarea class="form-control" name="" id="" cols="30" rows="10" placeholder="How can we help you?"></textarea>
                    </div>
                    <div>
                        <button class="button" type="submit">Send message</button>
                    </div>
                </form>
            </div>
        `
        heroBody.innerHTML = addHeroBody // add the desktop form 
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
                <form action="" class="col-12 d-flex flex-column align-items-center gap-3 form">
                    <div class="row m-0 p-0 gap-lg-5 gap-3 col-12 in-dual">
                        <div class="col-lg-5 col-12 p-0">
                            <input class="form-control" type="text" name="name" id="name" placeholder="Name">
                        </div>
                        <div class="col-lg-5 col-12 p-0">
                            <input class="form-control" type="email" name="email" id="email" placeholder="Email">
                        </div>
                    </div>
                    <div class="col-12">
                        <input class="form-control" type="text" name="help" id="help" placeholder="Message">
                    </div>
                    <div class="mt-2">
                        <button class="button" type="submit">Send message</button>
                    </div>
                </form>
            </div>
        `
        heroBody.innerHTML = addHeroBody
    };
}

changeContent()

window.addEventListener('resize', changeContent); // pays attension for change in width