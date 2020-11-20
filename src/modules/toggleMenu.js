
//Menu
const toggleMenu = () =>{
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu');            
    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };  
    
    btnMenu.addEventListener('click', (event) => handlerMenu());
        
    menu.addEventListener('click', (event) => {
        if (!event.target.classList.contains('active-menu')) handlerMenu();
    });

    const scrollTo = () => {
        const anchors = document.querySelectorAll('a')       

        for (let anchor of anchors) {
            anchor.addEventListener('click', e => {
              e.preventDefault()              
              const blockID = anchor.getAttribute('href')              
              document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              })
            })
          }


    };
    scrollTo();
        
}; 

export default toggleMenu;