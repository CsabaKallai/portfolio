function SendEmail() {
    document.getElementById('send-btn').style.display = 'none';
    document.getElementsByClassName('spinner')[0].style.display = 'block';
}


const form = document.querySelectorAll('.contact-me-container input,textarea');

form.forEach(element => {
    element.addEventListener('focusin', (event) => {
        element.placeholder = '';
        if(element.nodeName === 'INPUT') {
            document.getElementById('label-'+element.dataset.target).classList.remove('d-none');
            document.getElementById('label-'+element.dataset.target).classList.remove('label-down');
            document.getElementById('label-'+element.dataset.target).classList.add('label-up');
        }
        else {
            document.getElementById('textarea-'+element.dataset.target).classList.remove('d-none');
            document.getElementById('textarea-'+element.dataset.target).classList.remove('textarea-down');
            document.getElementById('textarea-'+element.dataset.target).classList.add('textarea-up');
        }
      });
      
      element.addEventListener('focusout', (event) => {
        if(element.value == '') {
            element.placeholder = '';
            if(element.nodeName === 'INPUT') {
                document.getElementById('label-'+element.dataset.target).classList.remove('label-up');
                document.getElementById('label-'+element.dataset.target).classList.add('label-down');

                setTimeout(() => {
                    document.getElementById('label-'+element.dataset.target).classList.add('d-none');
                    element.placeholder = element.dataset.target;
                }, 1000);
            }
            else {
                document.getElementById('textarea-'+element.dataset.target).classList.remove('textarea-up');
                document.getElementById('textarea-'+element.dataset.target).classList.add('textarea-down');

                setTimeout(() => {
                    document.getElementById('textarea-'+element.dataset.target).classList.add('d-none');
                    element.placeholder = element.dataset.target;
                }, 1000);
            }
        }
      });
});

function ScrollToElement(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center"
    });
}

