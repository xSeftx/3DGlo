

//валидация
const inputForm = () => {
    const inputFormPhone = () => {
        const inputPhoneValue = document.querySelectorAll('.form-phone');
        inputPhoneValue.forEach(item => {
            item.addEventListener('input', (e) => item.value = item.value.replace(/[^0-9]/g, ''));    
            
        });

    };

    const inputFormMassege = () => {
        document.querySelectorAll('input[name="user_name"], input[name="user_message"]').forEach(item => {
            item.addEventListener('input', () => item.value = item.value.replace(/[^а-яА-Я \  ]/g, ''));
            
            
        });
    };    

    const inputCalculator = () => {
        const inputCalc = document.querySelectorAll('.calc-block input[type=text]');
        inputCalc.forEach((item) => {
            item.addEventListener('input', (e) => item.value = item.value.replace(/[^0-9]/g, ''));

        });

    }; 
    inputFormMassege(); 
    inputFormPhone(); 
    inputCalculator();   

};

export default inputForm;