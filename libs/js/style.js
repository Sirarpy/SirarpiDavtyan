import animateScrollTo from 'animated-scroll-to';
// const options = {
//     // duration of the scroll per 1000px, default 500
//     speed: 500,
//
//     // minimum duration of the scroll
//     minDuration: 250,
//
//     // maximum duration of the scroll
//     maxDuration: 1500,
//
//     // DOM element to scroll, default window
//     // Pass a reference to a DOM object
//     // Example: document.querySelector('#element-to-scroll'),
//     element: window,
//
//     // should animated scroll be canceled on user scroll/keypress
//     // if set to "false" user input will be disabled until animated scroll is complete
//     cancelOnUserAction: true
// };
//
// const desiredOffset = 1000;
//
// animateScrollTo(desiredOffset, options);

window.scrollTo( 0, 1000 );

// этот код меняет поведение прокрутки на "smooth"
window.scrollTo({
    top: 200,
    behavior: "smooth"
});