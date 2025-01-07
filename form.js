const bookingForm = document.getElementById('con-form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
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

export function appointmentBookink () {
    
    const mobile = window.innerWidth < 992;

    const form = document.getElementById('Mform-holder-con');
    const userName = document.getElementById('MuserName');
    const userEmail = document.getElementById('MuserEmail');
    const message = document.getElementById('Mmessage');
    const warning = document.getElementById('Mwarning');
    const warning2 = document.getElementById('Mwarning2');
    const warning3 = document.getElementById('Mwarning3');
    const loader = document.getElementById('loader');
    const body = document.getElementById('body');
    const messageBox = document.getElementById('msg-box');
    const msgContent = document.getElementById('api-res-msg');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        console.log('boss')
    
        let Error = false;
    
        if(userName.value.trim() == ''){
            warning.textContent = 'This field is required'
            Error = true
        } else {
            warning.textContent = ''
        }
    
        if(userEmail.value.trim() == ''){
            warning2.textContent = 'This field is required'
            Error = true
        } else {
            warning2.textContent = ''
        }
    
        if(message.value.trim() == ''){
            warning3.textContent = 'This field is required'
            Error = true
        } else {
            warning3.textContent = ''
        }
    
        if(!Error) {
    
            const formData = {
                userName: userName.value.trim(),
                userEmail: userEmail.value.trim(),
                message: message.value.trim()
            }
    
            loader.style.display = 'block'
            body.style.overflow = 'hidden'
    
            try {
                const response = await fetch('https://mhm-tech-api.onrender.com/appoint-booking', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
    
                })

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Server error:', errorData); // Log the server's response
                }
    
                if(response){
                    const res = await response.json()
                    loader.style.display = 'none'
                    msgContent.textContent = res.message
                    messageBox.style.display = 'block'
                    body.style.overflow = 'auto'
    
                    setTimeout(() => {
                        if(messageBox) {
                            messageBox.style.display = 'none'
                        }
                    }, 3000);
                }
            } catch (err) {
                if(err) {
                    loader.style.display = 'none'
                    body.style.overflow = 'auto'
                    msgContent.textContent = err
                    messageBox.style.display = 'block'

                    console.log(err)
                    
                    setTimeout(() => {
                        if(messageBox) {
                            messageBox.style.display = 'none'
                        }
                    }, 3000);
                }

                console.log(err)
            }
        }
    });
    
    userName.addEventListener('input', () => {
        warning.textContent = ''
    });
    
    userEmail.addEventListener('input', () => {
        warning2.textContent = '';
    });
    
    message.addEventListener('input', () => {
        warning3.textContent = '';
    });
}

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
