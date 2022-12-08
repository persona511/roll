let btn = document.getElementById('spin');
let list = document.querySelector('.container');
let chance = 0;
const cells = 1
let zero = 0;
let x = 0;
// от 0 до 100
const items = [
    {name: '0x'},
    {name: '3x'},
]

document.onkeypress = function(event){
	const list = document.querySelector('.container')

    if(event.key == '1'){
    	if(zero%1 == 0){
        	chance = 1710 + Math.random()*80;
        	list.style.transform =  "rotate(" + chance + "deg)";
        	zero++;
    	}else{
    		chance = -90 + Math.random()*80;
        	list.style.transform =  "rotate(" + chance + "deg)";
        	zero = 0;
    	}
        
    }


     if(event.key == '2'){
    	if(x%2 == 0){
        	chance = 1890 + Math.random()*80;
        	list.style.transform =  "rotate(" + chance + "deg)";
        	x++;
    	}else{
    		chance = 0 + Math.random()*80;
        	list.style.transform =  "rotate(" + chance + "deg)";
        	x = 0;
    	}
        
    }
    console.log(chance);
}
const spinertia = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;}

	// функция запуска вращения с плавной остановкой
const runArrowAnimation = () => {
	const values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
	const a = values[0];
	const b = values[1];  
	let rad = Math.atan2(b, a);
	
	if (rad < 0) rad += (2 * Math.PI);
	
	const angle = Math.round(rad * (180 / Math.PI));
	const slice = Math.floor(angle / prizeSlice);
	// запускаем анимацию
	arrowAnim = requestAnimationFrame(runArrowAnimation);
  };

  // функция запуска вращения с плавной остановкой
const runTickerAnimation = () => {
	// взяли код анимации отсюда: https://css-tricks.com/get-value-of-css-rotation-through-javascript/
	const values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
	const a = values[0];
	const b = values[1];  
	let rad = Math.atan2(b, a);
	
	if (rad < 0) rad += (2 * Math.PI);
	
	const angle = Math.round(rad * (180 / Math.PI));
	const slice = Math.floor(angle / prizeSlice);
  
	// анимация язычка, когда его задевает колесо при вращении
	// если появился новый сектор
	if (currentSlice !== slice) {
	  // убираем анимацию язычка
	  ticker.style.animation = "none";
	  // и через 10 миллисекунд отменяем это, чтобы он вернулся в первоначальное положение
	  setTimeout(() => ticker.style.animation = null, 10);
	  // после того как язычок прошёл сектор — делаем его текущим 
	  currentSlice = slice;
	}
	// запускаем анимацию
	tickerAnim = requestAnimationFrame(runTickerAnimation);
  };
