var ready;
ready = function() {

    $('#fullpage').fullpage({
        sectionsColor: ['#5BDAE3', '#40C381', '#FFDE01', '#EC7068', '#2299DD', '#F79BC0', '#F7941D', '#5BDAE3', '#40C381', '#FFDE01', '#EC7068', '#2299DD', '#F79BC0', '#F7941D', '#5BDAE3', '#40C381', '#FFDE01', '#EC7068', '#2299DD', '#F79BC0', '#F7941D', '#5BDAE3', '#40C381', '#FFDE01', '#EC7068', '#2299DD', '#F79BC0', '#F7941D', '#5BDAE3', '#40C381', '#FFDE01', '#EC7068', '#2299DD', '#F79BC0', '#F7941D', '#5BDAE3', '#40C381', '#FFDE01', '#EC7068', '#2299DD', '#F79BC0', '#F7941D', '#5BDAE3', '#40C381', '#FFDE01', '#EC7068', '#2299DD', '#F79BC0', '#F7941D', '#5BDAE3', '#40C381', '#FFDE01', '#EC7068', '#2299DD', '#F79BC0', '#F7941D', '#5BDAE3', '#40C381', '#FFDE01', '#EC7068', '#2299DD', '#F79BC0', '#F7941D', '#5BDAE3', '#40C381', '#FFDE01', '#EC7068', '#2299DD', '#F79BC0', '#F7941D', '#5BDAE3', '#40C381', '#FFDE01', '#EC7068', '#2299DD', '#F79BC0', '#F7941D', '#5BDAE3', '#40C381', '#FFDE01', '#EC7068', '#2299DD', '#F79BC0', '#F7941D', '#5BDAE3', '#40C381', '#FFDE01', '#EC7068', '#2299DD', '#F79BC0', '#F7941D', '#5BDAE3', '#40C381', '#FFDE01', '#EC7068', '#2299DD', '#F79BC0', '#F7941D' ],
        //Navigation
        menu: true,
        navigation: false,
        navigationPosition: 'right',
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : false,
        paddingTop: '0',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsive: 1,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });



}




//$(document).ready(ready);
$(ready);