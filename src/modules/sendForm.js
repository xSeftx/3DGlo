

//send-ajax-form
const sendForm = () => {        
    const statusMessage = document.createElement('div');            
    statusMessage.style.cssText = `font-size: 2rem;
                                color: white`;
    const loader = document.createElement('img');
    loader.src = '/images/Spinner.gif';
    
           
    
    document.querySelectorAll('form').forEach(form => {
        const inputEmail = document.querySelector('#form1-email'),   
                inputEmailPopup = document.querySelector('#form2-email'),
                inputEmailTop = document.querySelector('#form3-email');     
            form.addEventListener('submit', e => {
            e.preventDefault();                
            form.appendChild(statusMessage);             
            if(inputEmail.value === ''&& inputEmailPopup.value === '' && inputEmailTop.value === ''){
                statusMessage.textContent = 'Заполните поле E-mail!'; 
                statusMessage.style.color = 'red';                  
                return ; 
            }
            statusMessage.textContent = '';
            statusMessage.style.color = 'white';     
            const formData = new FormData(form);
            const body = {};
            formData.forEach((val, key) => body[key] = val); 
            form.appendChild(loader);                             
            
            postData(body)
                .then(response => {
                    if (response.status !== 200) {
                        statusMessage.textContent = 'Что-то пошло не так!';
                        throw new Error('status network not 200.');
                        
                }
                setTimeout(() => {
                    statusMessage.textContent = '';
                    
                }, 5000);
                form.removeChild(loader);
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