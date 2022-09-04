// new Swiper('.swiper', {
//     direction: 'horizontal',
//     speed: 500,
//     autoplay: {
//       delay: 5000
//     },
//     pagination: {
//       el: '.swiper-pagination'
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev'
//     }
// });

// AOS.init({
//   delay: 500, // values from 0 to 3000, with step 50ms
//   duration: 400
// });


// const welcomeTextWrapper = document.getElementsByClassName('welcome-text')[0];
// const welcomeTextSubtitleWrapper = document.getElementsByClassName('welcome-text-subtitle')[0];

// const welcomeTextData = "";
// const welcomeTextSubtitleData = "";

// document.addEventListener("DOMContentLoaded", function(event) { 
//     let length = 0;
//     while (welcomeTextData.length != length) {
//         setTimeout(() => {
//             welcomeTextWrapper.insertAdjacentText('beforeend',welcomeTextData[0]);
//         }, 500);
//         length++;
//     }
// });

function SendEmail() {
    document.getElementById('send-btn').style.display = 'none';
    document.getElementsByClassName('spinner')[0].style.display = 'block';
}


const form = document.querySelectorAll('.contact-me-container input,textarea');

form.forEach(element => {
    element.addEventListener('focusin', (event) => {
        if(element.nodeName === 'INPUT') {
            document.getElementById('label-'+element.dataset.target).classList.remove('label-down');
            document.getElementById('label-'+element.dataset.target).classList.add('label-up');
        }
        else {
            document.getElementById('textarea-'+element.dataset.target).classList.remove('textarea-down');
            document.getElementById('textarea-'+element.dataset.target).classList.add('textarea-up');
        }
      });
      
      element.addEventListener('focusout', (event) => {
        if(element.value == '') {
            if(element.nodeName === 'INPUT') {
                document.getElementById('label-'+element.dataset.target).classList.remove('label-up');
                document.getElementById('label-'+element.dataset.target).classList.add('label-down');
            }
            else {
                document.getElementById('textarea-'+element.dataset.target).classList.remove('textarea-up');
                document.getElementById('textarea-'+element.dataset.target).classList.add('textarea-down');
            }
        }
      });
});

