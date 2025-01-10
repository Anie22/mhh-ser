const bookingForm = document.getElementById('con-form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const heroHeading = document.getElementById('hero-heading');
const heroBody = document.getElementById('hero-body');
const message2 = document.getElementById('message2');
const error = document.getElementById('error');
const error2 = document.getElementById('error2');
const error3 = document.getElementById('error3');
const error4 = document.getElementById('error4');
const loader = document.getElementById('loader');
const body = document.getElementById('body');
const messageBox = document.getElementById('msg-box');
const msgContent = document.getElementById('api-res-msg');

function urlLink() {
    const BaseURL = 'https://mhm-tech-api.onrender.com/'

    return BaseURL
}

function renderHeroContent() {
    const isDesktop = window.innerWidth >= 992;

    if (isDesktop) {
        heroHeading.innerHTML = `
            <h6>Contact me</h6>
            <h3>Book An Appointment To Get Started</h3>
        `;
        heroBody.innerHTML = `
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

    } else {
        heroHeading.innerHTML = `
            <h4 class="h4">We <span>Provide</span> Best <span>IT</span> Solutions</h4>
        `;
        heroBody.innerHTML = `
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
    }
}


function attachFormLogic() {
    const form = document.querySelector('form');
    if (!form) return;

    // Get input elements based on the mode (desktop or mobile)
    const userName = form.querySelector('input[name="userName"]');
    const userEmail = form.querySelector('input[name="userEmail"]');
    const message = form.querySelector('textarea[name="message"]');
    const warning = form.querySelector('#warning');
    const warning2 = form.querySelector('#warning2');
    const warning3 = form.querySelector('#warning3');
    const loader = document.getElementById('loader');
    const body = document.getElementById('body');
    const messageBox = document.getElementById('msg-box');
    const msgContent = document.getElementById('api-res-msg');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let hasError = false;

        // Validate inputs
        if (userName.value.trim() === '') {
            warning.textContent = 'Name is required';
            hasError = true;
        } else {
            warning.textContent = '';
        }

        if (userEmail.value.trim() === '') {
            warning2.textContent = 'Email is required';
            hasError = true;
        } else if (!/^\S+@\S+\.\S+$/.test(userEmail.value.trim())) {
            warning2.textContent = 'Enter a valid email address';
            hasError = true;
        } else {
            warning2.textContent = '';
        }

        if (message.value.trim() === '') {
            warning3.textContent = 'Message is required';
            hasError = true;
        } else {
            warning3.textContent = '';
        }

        // If there are validation errors, stop submission
        if (hasError) return;

        // Prepare form data
        const formData = {
            userName: userName.value.trim(),
            userEmail: userEmail.value.trim(),
            message: message.value.trim(),
        };

        // Show loader and disable scrolling
        loader.style.display = 'block';
        body.style.overflow = 'hidden';

        try {
            // Send data to API
            const response = await fetch('https://mhm-tech-api.onrender.com/appoint-booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Check if response is ok
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Something went wrong');
            }

            // Parse response
            const res = await response.json();

            // Hide loader
            loader.style.display = 'none';
            body.style.overflow = 'auto';

            // Show success message
            msgContent.textContent = res.message || 'Appointment booked successfully!';
            messageBox.style.display = 'block';

            // Hide message box after 3 seconds
            setTimeout(() => {
                messageBox.style.display = 'none';
            }, 3000);

            // Reset form
            form.reset();
        } catch (err) {
            // Hide loader
            loader.style.display = 'none';
            body.style.overflow = 'auto';

            // Show error message
            msgContent.textContent = err.message || 'Failed to submit the form';
            messageBox.style.display = 'block';

            // Hide message box after 3 seconds
            setTimeout(() => {
                messageBox.style.display = 'none';
            }, 3000);

            console.error(err);
        }
    });

    // Clear warnings on input
    userName.addEventListener('input', () => {
        warning.textContent = '';
    });

    userEmail.addEventListener('input', () => {
        warning2.textContent = '';
    });

    message.addEventListener('input', () => {
        warning3.textContent = '';
    });
}

function changeContent() {
    renderHeroContent();
    attachFormLogic()
}

changeContent()

let resizeTimeout;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Check if the height change is significant (to avoid reacting to keyboard appearance)
        const isKeyboard = Math.abs(window.innerHeight - document.documentElement.clientHeight) < 100;
        if (!isKeyboard) {
            changeContent();
        }
    }, 200);
});


bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let err = false;

    if(fullName.value.trim() === ''){
        error.textContent = 'Input required'
        err = true
    }else{
        error.textContent = ''
    }

    if(email.value.trim() === ''){
        error2.textContent = 'Input required'
        err = true
    }else{
        error2.textContent = ''
    }

    if(phoneNumber.value.trim() === ''){
        error3.textContent = 'Input required'
        err = true
    }else{
        error3.textContent = ''
    }

    if(message2.value.trim() === ''){
        error4.textContent = 'Input required'
        err = true
    }else{
        error4.textContent = ''
    }

    if(!err) {

        const formData = {
            fullName: fullName.value.trim(),
            email: email.value.trim(),
            phoneNumber: phoneNumber.value.trim(),
            message: message2.value.trim()
        }

        loader.style.display = 'block'
        body.style.overflow = 'hidden'

        try {
            const response = await fetch(`${urlLink()}appoint/consult-bkg`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),

            })

            if(response){
                const res = await response.json()
                loader.style.display = 'none'
                body.style.overflow = 'auto'
                msgContent.textContent = res.message
                messageBox.style.display = 'block'
                body.style.overflow = 'auto'

                setTimeout(() => {
                    if(messageBox) {
                        messageBox.style.display = 'none'
                    }
                }, 3000);

                autoShow()
            }
        } catch (err) {
            if(err) {
                loader.style.display = 'none'
                body.style.overflow = 'auto'
                msgContent.textContent = err[0]
                messageBox.style.display = 'block'
                body.style.overflow = 'auto'

                setTimeout(() => {
                    if(messageBox) {
                        messageBox.style.display = 'none'
                    }
                }, 3000);

                autoShow()
            }
        }
    }
})

fullName.addEventListener('input', () => {
    error.textContent = ''
})

email.addEventListener('input', () => {
    error2.textContent = ''
})

phoneNumber.addEventListener('input', () => {
    error3.textContent = ''
})

message2.addEventListener('input', () => {
    error4.textContent = ''
})
