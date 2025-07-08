$(document).ready(function() {
    const slider1 = $('#slider1');
    const slider2 = $('#slider2');
    const slider3 = $('#slider3');
    
    let scrollAmount1 = 0;
    let scrollAmount2 = 0;
    let scrollAmount3 = 0;
    
    const speed = 1; // Adjust speed as needed
    const interval = 20; // Interval in milliseconds

    function scrollSlider(slider, direction, scrollAmount) {
        let scrollWidth = slider[0].scrollWidth;
        let clientWidth = slider[0].clientWidth;

        if (direction === 'right') {
            scrollAmount += speed;
            if (scrollAmount >= scrollWidth - clientWidth) {
                scrollAmount = 0;
            }
        } else {
            scrollAmount -= speed;
            if (scrollAmount <= 0) {
                scrollAmount = scrollWidth - clientWidth;
            }
        }
        slider.scrollLeft(scrollAmount);
        return scrollAmount;
    }

    setInterval(() => {
        scrollAmount1 = scrollSlider(slider1, 'right', scrollAmount1);
        scrollAmount2 = scrollSlider(slider2, 'left', scrollAmount2);
        scrollAmount3 = scrollSlider(slider3, 'right', scrollAmount3);
    }, interval);
});
