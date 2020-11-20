

//send-ajax-form
const sendForm = () => {        
    const statusMessage = document.createElement('div');        
    statusMessage.style.cssText = `font-size: 2rem;
                                color: white`;
           
    
    document.querySelectorAll('form').forEach(form => {
        const inputEmail = document.querySelector('#form1-email'),   
                inputEmailPopup = document.querySelector('#form2-email'),
                inputEmailTop = document.querySelector('#form3-email');     
        console.log(inputEmail);     
        form.addEventListener('submit', e => {
            e.preventDefault();                
            form.appendChild(statusMessage); 
            console.log(inputEmail.value);
            if(inputEmail.value === ''&& inputEmailPopup.value === '' && inputEmailTop.value === ''){
                statusMessage.textContent = 'Заполните поле E-mail!'; 
                statusMessage.style.color = 'red';                  
                return ; 
            }
            statusMessage.style.color = 'white';     
            const formData = new FormData(form);
            const body = {};
            formData.forEach((val, key) => body[key] = val);                
            statusMessage.textContent = 'Загрузка...';                  
            
            postData(body)
                .then(response => {
                    if (response.status !== 200) {
                        statusMessage.textContent = 'Что-то пошло не так!';
                        throw new Error('status network not 200.');
                        
                }
                setTimeout(() => {
                    statusMessage.textContent = '';
                }, 5000);
                statusMessage.textContent = 'Спасибо! Мы скоро с вами свяжемся!'; 
                
            })
            .catch(error => console.error(error));  
            
            setTimeout(() => {
                form.querySelectorAll('input').forEach(item => {
                    item.value = '';
                });
            }, 3000);
            
            setTimeout(() => {
                statusMessage.textContent = '';
            }, 7000);
            
            
        });            
    
    });

    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
};

export default sendForm;