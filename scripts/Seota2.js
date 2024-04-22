let isActive = false;
function toggle() {
    if (isActive) {
        document.querySelector('.hamburger').className = 'hamburger'
        document.querySelector('.shadow').className = 'shadow'
        document.querySelector('.mobile').className = 'mobile'
        isActive = false;
        //disable
    } 
    else {
        document.querySelector('.hamburger').className = 'hamburger active'
        document.querySelector('.shadow').className = 'shadow active'
        document.querySelector('.mobile').className = 'mobile active'
        isActive = true;
    }

    
}