

//наща команда
const dataImg = () => {
    const getImg = document.querySelectorAll('.command__photo');
    getImg.forEach((item) => {  
        const photoSrc = item.src;       
        item.addEventListener('mouseover', () => {
            item.src = item.dataset.img;                
        });
        item.addEventListener('mouseout', () => { 
            item.src = photoSrc;
         });
         
    });
};

export default dataImg;