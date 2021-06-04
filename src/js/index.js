// SLIDER
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll:1,
        prevArrow:"<div class='slider__arrow text-uppercase fw-bold d-flex justify-content-between w-25 mt-3'>&larr;<div>Пред</div></div>",
        nextArrow:"<div class='slider__arrow slider__arrow--right text-uppercase fw-bold d-flex justify-content-between w-25 mt-3'>След <div>&rarr;</div></div>"
    });
});
// FORM
const [...inputs] = document.querySelectorAll('#form input')
const textarea = document.getElementById('textarea')
const close = document.getElementById('close')
let formData ={
    name: '',
    phone: '',
    company: '',
    email: ''
}

inputs[0].oninput = function (e){
    formData.name = e.target.value
}
inputs[1].oninput = function (e){
    formData.phone = e.target.value
}
inputs[2].oninput = function (e){
    formData.company = e.target.value
}
inputs[3].oninput = function (e){
    formData.email = e.target.value
}
textarea.oninput = function(e){
    formData.message = e.target.value
}
const sendFunc = function(status){
    if(status){
        document.querySelector('.modal-custom').style.visibility = 'visible'
        close.onclick = function(){
            document.querySelector('.modal-custom').style.visibility = 'hidden'
            inputs[0].value = ''
            inputs[1].value = ''
            inputs[2].value = ''
            inputs[3].value = ''
            textarea.value = ''
        }
        setTimeout(function(){
            document.querySelector('.modal-custom').style.visibility = 'hidden'
            inputs[0].value = ''
            inputs[1].value = ''
            inputs[2].value = ''
            inputs[3].value = ''
            textarea.value = ''
        },5000)

    } else{
        console.log('status not send')
    }
}
btnSend.onclick = function(){
    let statusSend = false
    if (!formData.name){
        inputs[0].style.borderColor = 'red'
    } else {
        inputs[0].style.borderColor = '#616161'
    }
    if (formData.phone.length === 12){
        inputs[1].style.borderColor = '#616161'
    } else {
        inputs[1].style.borderColor = 'red'
    }
    if (formData.company.length >= 3 && formData.company.length < 20){
        inputs[2].style.borderColor = '#616161'
    } else {
        inputs[2].style.borderColor = 'red'
    }
    if (formData.email.length >= 5){
        inputs[3].style.borderColor = '#616161'
    } else {
        inputs[3].style.borderColor = 'red'
    }
    if (formData.message.length < 20){
        alert("Слишком мало символов!")
        textarea.style.borderColor = 'red'
    } else {
        textarea.style.borderColor = '#616161'
    }
    if (inputs[0].style.borderColor !=='red' && inputs[1].style.borderColor !=='red' && inputs[2].style.borderColor !=='red' && inputs[3].style.borderColor !=='red' && textarea.style.borderColor !=='red'){
        statusSend = true
    } else{
        statusSend = false
    }
    sendFunc(statusSend)
}
// Сделать анимацию для появления модального окна
// * На модальном окне мы можем сделать кнопку "ок" либо добавить крестик который должен 
// закрывать это окно, до таймуат