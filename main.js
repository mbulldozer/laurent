const textarea = document.getElementById('result');
const adcSelect = document.getElementById('adc');
const timeSelect = document.getElementById('time');

let intervalID = 0;
let url = 'http://192.168.0.101/cmd.cgi?psw=Laurent&cmd=ADC,RAW,';

function startLogging(adc, time) {
    intervalID = setInterval(() => {
        fetch(url+adc).then(function(response) {
            response.text().then(function(text) {
                textarea.value+=text;
                textarea.value=textarea.value+'\r\n'
            });
          }); 
      }, 1000*time);
}

function stopLogging() {
    clearInterval(intervalID);
}

function start(){
    startLogging(adcSelect.value, +timeSelect.value);
}

function stop(){
    stopLogging();
}