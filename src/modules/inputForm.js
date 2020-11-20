

//валидация
const inputForm = () => {

    function maskPhone(selector, masked = '+7 (___) ___-__-__') {
        const elems = document.querySelectorAll(selector);

        function mask(event) {
            const keyCode = event.keyCode;
            const template = masked,
                def = template.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "");
            let i = 0,
                newValue = template.replace(/[_\d]/g, a => (i < val.length ? val.charAt(i++) || def.charAt(i) : a));
            i = newValue.indexOf("_");
            if (i !== -1) {
                newValue = newValue.slice(0, i);
            }
            let reg = template.substr(0, this.value.length).replace(/_+/g,
                a => "\\d{1," + a.length + "}").replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = newValue;
            }
            if (event.type === "blur" && this.value.length < 5) {
                this.value = "";
            }

        }

        for (const elem of elems) {
            elem.addEventListener("input", mask);
            elem.addEventListener("focus", mask);
            elem.addEventListener("blur", mask);
        }

    }

    maskPhone('input[name="user_phone"]');

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