    let inputE1 = document.querySelector('.input1');
    let inputE2 = document.querySelector('.input2');
    let btnE1 = document.querySelector('.btn-1');
    let btnE2 = document.querySelector('.btn-2');
    let btnE3 = document.querySelector('.btn-3');
    let btnE4 = document.querySelector('.btn-4');
    let outputE1 = document.querySelector('.Output')

    btnE1.addEventListener('click', function(){
      outputE1.textContent = Number(inputE1.value) + Number(inputE2.value);

      inputE1.value = "";
      inputE2.value = "";
    }); 

    btnE2.addEventListener('click', function(){
      outputE1.textContent = Number(inputE1.value) - Number(inputE2.value);

      inputE1.value = "";
      inputE2.value = "";
    }); 

    btnE3.addEventListener('click', function(){
      outputE1.textContent = Number(inputE1.value) * Number(inputE2.value);

      inputE1.value = "";
      inputE2.value = "";
    }); 

    btnE4.addEventListener('click', function(){
      outputE1.textContent = Number(inputE1.value) / Number(inputE2.value);

      inputE1.value = "";
      inputE2.value = "";
    }); 
