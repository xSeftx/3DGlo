

//калькулятор
const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total');        

    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1; 
                          
        const squareValue = +calcSquare.value,
            typeValue = calcType.options[calcType.selectedIndex].value;

        if(calcCount.value > 1){
            countValue += (calcCount.value - 1) / 10;

        }

        if(calcDay.value && calcDay.value < 5){
            dayValue *= 2;
        }else if(calcDay.value && calcDay.value < 10){
            dayValue *= 1.5;
        }


        if(typeValue && squareValue){
            total = price * typeValue * squareValue * countValue * dayValue;
        }
        

        if(total){
            const interval = setInterval(function(){
                if(totalValue.innerHTML*1+50 <= total){
                    totalValue.innerHTML= totalValue.innerHTML*1+50;   
                    
                    
                } else if(totalValue.innerHTML*1-50 >= total){
                    totalValue.innerHTML = totalValue.innerHTML*1-50;
                    
                }
                else if(totalValue.innerHTML === total){
                    clearInterval(interval);
                    
                }  
                
            },1);           

        }
        
        
    };  
    calcBlock.addEventListener('change', (event) => {
        const target = event.target;
        if (target.matches('.calc-type, .calc-square, .calc-day, .calc-count')) {
            countSum();
        }

    });       
    
    

};

export default calc;