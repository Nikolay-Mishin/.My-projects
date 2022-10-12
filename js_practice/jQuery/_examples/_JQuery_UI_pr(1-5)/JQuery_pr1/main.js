// JavaScript Document

$(()=>{
	
	const $out = $('#out');
	
	const firstText = $('#first').text();
	$('#out').text('firstText');
	
	
	const firstText = $('#first').html();
	$('#out').text('firstText');
	
	
	const firstText = $('#first').html();
	$('#out').text($('#out').text()+ '/n'+ firstHtml);
	
	//пункт в
	console.log($('.c1').text());
	//пункт г
	console.log($('#first>b').text());
	console.log($('#first').find('b').text());
	//пункт д для получения атрибута
	const $dataTest = $('[data-test]');
	console.log($dataTest.text());
	// console.log($dataTest.attr('align')); возвращает значение и выставит значение для атрибута если он есть можно передать набор изменений
	
	//пункт е
	const $p = $('p')
	console.log($p.length);
	
	
	// задание 3 а
	const $p = $('p');
	const el2 = $p[1];
	console.log($(el2).text());
	
	// задание 3 б доступ к DOM элементам
	
	el2.foo ='OK';
	console.log($(el2).prop('foo'));
	
	$p.css('color', 'red');
	$p.css('color', '#ff0000');
	$p.css('color', 'rgb(255,0,0)');
	$p.css('color', 'rgb(255,0,0,0.5)');
	//hsl
	$p.css({'color', 'red'});
	
	
	// задание 3 в
	$('[id]').css('text-decoration', 'underline');
	
	
	//задание 4
const f1= () => console.log('HANDLE4',$($p[0]).text());
const f2= () =>	console.log('HANDLE4',$($p[1]).text());
const f3= () =>	console.log('HANDLE4',$($p[0]).text());

	$(f1);
	$('#first>b').on('click', f2);
	$('.c2').on('click', f3);
	$($p[2]).on('click', () => console.log('HANDLE4','!!!'));
	
	
	
	
	// задание 5
	//скопировать скрипт формы в html
	
	$(()=>{
		
	$('input[type=submit]').on('click',function(){
		console.log($('input[name=fio]').val()); //val(Maxim) возвращает элемент для кот выставлен
		console.log($('input[name=gender]').val());
		console.log($('select[name=class]').val());
		console.log($('textaria[name=description]').val());
		/* или кратче
		console.log($('[name=fio]').val()); //val(Maxim) возвращает элемент для кот выставлен
		console.log($('[name=gender]').val());
		console.log($('[name=class]').val());
		console.log($('[name=description]').val());*/
	});
	});
	
	
	
	//задание 6 валидация значений
	
});
	
	
/*
document.addEventListener('DOMContentLoaded',)function () {
	const ul = document.createElement('ul');
		
	const li1 = document.createElement('li');
	li1.textContent = 'апельсин';
	const li2 = document.createElement('li');
	li2.textContent = 'яблоко';
	const li3 = document.createElement('li');
	li3.textContent = 'груша';
	
	ul.appendChild(li1);	
	ul.appendChild(li2);
	ul.appendChild(li3);
	
	const body = document.getElementsByTagName('body')[0];
	body.appendChild(ul);
	});
	

	
	
	$(function () {
	const $ul = $('<ul>');
	
	const $li1 = $('<li>');
	$li1.text('апельсин');
	const $li2 = $('<li>');
	$li1.text('яблоко');
	const $li3 = $('<li>');
	$li1.text('груша');
	
	$ul.append($li1);	
	$ul.append($li2);
	$ul.append($li3);
		
	// краткий вид цепочечный вызов $ul.append($li1).append($li2).append($li3);
	/*
	или
	$ul
	.append($li1)
	.append($li2)
	.append($li3);
	
	или еще более кратко
		$(function () {
	    $('<ul>')
	$ul
	.append($'<li1>').text('апельсин');	
	.append($'<li2>').text('яблоко');
	.append($'<li3>').text('груша');
	.appendTo($('body'));
	
	$('body').append($ul);
		
	
	*/