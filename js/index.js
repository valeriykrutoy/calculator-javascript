(function() {
    let allBtns = document.querySelectorAll('.btn');
    let display = document.querySelector('.display');
    let leftOperand = null;
    let currentOperation = null;

     allBtns.forEach(function(el) {
     el.addEventListener('click', function() {
         if (Number.isInteger(+this.innerText)) {
          if (+display.innerText === 0) {
             display.innerText = this.innerText
                }
         else {
             display.innerText = display.innerText + this.innerText
                }
            }
            if (this.innerText.toLowerCase() === 'c') {
                display.innerText = 0;
                leftOperand = null;
                currentOperation = null;
            }
            if (this.innerText === '+' ||
                this.innerText === '-' ||
                this.innerText === '*' ||
                this.innerText === '/') {
                leftOperand = display.innerText;
                currentOperation = this.innerText;
                display.innerText = 0;
            }
            if (this.innerText === '=') {
                if (leftOperand) {
                    eval('letresult = function(){ return +leftOperand ' + currentOperation + ' +display.innerText }()');
                    display.innerText = letresult;
                    leftOperand = null;
                    currentOperation = null;
                }
            }
        })
    })
})();
