

//popup
const togglePopUp = () => {
    const popUp = document.querySelector('.popup'),
    popUpBtn = document.querySelectorAll('.popup-btn');        
    const showAnim = () => {
        const popUpAnimation = popUp.animate([
          { opacity: 0 },
          { opacity: 1 },
        ], 700);
        popUpAnimation.removeEventListener('finish', () => {
          popUp.style.opacity = 1;
        });
        popUpAnimation.addEventListener('finish', () => {
          popUp.style.opacity = 1;
        });
    };

    popUpBtn.forEach((elem)  => {
        elem.addEventListener('click', () => {
            if (document.documentElement.offsetWidth >= 768) showAnim(); popUp.style.display = 'block';
        });
    });

    popUp.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('popup-close')){
            popUp.style.display = 'none';
        } else {
            target = target.closest('.popup-content');

            if(!target){
                popUp.style.display = 'none';                
            }
        }
        
    });
    
    
};

export default togglePopUp;