
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
        
}; 

export default toggleMenu;