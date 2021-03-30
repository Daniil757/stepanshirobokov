const animItems = document.querySelectorAll('._anim');

if (animItems.length) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animItemStart = 4;

            let animPoint = window.innerHeight - animItemHeight / animItemStart;

            if (animItemHeight > window.innerHeight) {
                animPoint = window.innerHeight - window.innerHeight / animItemStart;
            }

            if ((pageYOffset > animItemOffset - animPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + screenLeft };
    }
    setTimeout(() => {
        animOnScroll();
    }, 500);
}