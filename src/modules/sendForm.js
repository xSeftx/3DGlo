

//send-ajax-form
const sendForm = () => {        
    const statusMessage = document.createElement('div');        
    statusMessage.style.cssText = `font-size: 2rem;
                                color: white`;
           
    
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            form.appendChild(statusMessage);    
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