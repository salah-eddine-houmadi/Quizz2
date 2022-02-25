const questions = [
	{
		question:'What is 1 + 1',
		answers : [
			{text:'2',correct:true},
			{text:'4',correct:false}
		]
	},
	{
		question:'What is 2 + 1',
		answers : [
			{text:'5',correct:false},
			{text:'3',correct:true}
		]
	},
	{
		question:'How many days are there in a normal year?',
		answers : [
			{text:'265 days',correct:false},
			{text:'300 days',correct:false},
			{text:'365 days',correct:true}
		]
	},
	{
		question:'How many days do we have in a week?',
		answers : [
			{text:'5 days',correct:false},
			{text:'8 days',correct:false},
			{text:'7 days',correct:true},
			{text:'10 days',correct:false}
		]
	}
]
for(let i=0;i<questions.length;i++){
	var box = document.createElement('div');
	box.classList.add('box');
	box.innerHTML = '<h2>'+questions[i]['question']+'</h2>';
	for(let j=0;j<questions[i]['answers'].length;j++){
		box.innerHTML += '<label for="_'+questions[i]['answers'][j]['text']+'"><input type="radio" name="_'+i+'" value="'+questions[i]['answers'][j]['text']+'" id="_'+questions[i]['answers'][j]['text']+'">'+questions[i]['answers'][j]['text']+'</label>';
	}
	document.querySelector('.container').appendChild(box);
}
/*Create button Corrige*/
var note = 0;
var btn = document.createElement('button');
var result = document.createElement('button');
result.classList.add('result-btn');
result.innerHTML = 'Result';
btn.classList.add('corrige');
btn.innerHTML = 'Corriger';
document.querySelector('.container').appendChild(btn);
document.querySelector('.container').appendChild(result);
		/*Event*/
function confirmReponse(boxes,i,j){
	/*console.log(boxes[i].querySelectorAll('label')[j].querySelector('input').value);*/
	/*if (boxes[i].querySelectorAll('label')[j].querySelector('input').value == ) {}*/
	for(let z=0;z<questions[i]['answers'].length;z++){
		boxes[i].querySelectorAll('label')[z].style.border='1px solid red';
			if (questions[i]['answers'][z]['correct']) {
				boxes[i].querySelectorAll('label')[z].style.border='1px solid green';
				var rep = questions[i]['answers'][z]['text'];
			if (rep == boxes[i].querySelectorAll('label')[j].querySelector('input').value) {
				boxes[i].querySelector('h2').classList.remove('questionFaux');
				boxes[i].querySelector('h2').classList.add('questionCorrect');
				note++;
			}else{
				boxes[i].querySelector('h2').classList.remove('questionCorrect');
				boxes[i].querySelector('h2').classList.add('questionFaux');
			}
			/*if (questions[i]['answers'][z]['correct'] == true && boxes[i].querySelectorAll('label')[j].querySelector('input').value == questions[i]['answers'][z]['text']){
					console.log(questions[i]['answers'][z]['text']);

			}*/
		}	
	}
}
btn.addEventListener('click',function(){
	boxes = document.querySelectorAll('.box');
	for(var i=0;i<boxes.length;i++){
		boxes[i].querySelector('h2').style.color = 'orange';
		for(let j=0;j<boxes[i].querySelectorAll('label').length;j++){

			/*console.log(boxes[i].querySelectorAll('label')[j].querySelector('input').value);*/
			if (boxes[i].querySelectorAll('label')[j].querySelector('input').checked) {
				/*console.log(boxes[i].querySelectorAll('label')[j].querySelector('input').value);*/
				confirmReponse(boxes,i,j);
			}
		}
	}
});
result.addEventListener('click',function(){
 	alert(note);
});