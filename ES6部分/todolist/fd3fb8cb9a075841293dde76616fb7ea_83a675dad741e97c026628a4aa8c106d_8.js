(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!


	function setData(arr){
		localStorage.setItem('todolist',JSON.stringify(arr)); 
	}
	
	function getData(){
		var data = localStorage.getItem('todolist'); 
		if(data){
			return JSON.parse(data); 
		}else{
			
			return [];
		}
	}
    
	function show(){
		var data = getData();
		var todoArr = [];
		var classname = '' ,chk = '',status = null;
		var count = 0;
		$.each(data,function(i,ele){
			if(ele['done']) status = true;
			if(!ele['done']) count++;
			classname = ele['done']?'completed':'view';
			chk = ele['done']?'checked':'';
			todoArr.push('<li class="'+classname+'" data-index='+i+'><div class="view"><input class="toggle" type="checkbox" '+chk+'><label>'+ele['title']+'</label><button class="destroy"></button></div></li>')
		})
		
		$('.todo-count').find('strong').text(count);
		$('.todo-list').empty();
		$('.todo-list').append(todoArr.join(''));

		
		if(status) {
		$('.clear-completed').show();
		}else{
		$('.clear-completed').hide();
		}
		$('.filters a').removeClass('selected'); 
		$('#all').addClass('selected') 
		 
	}
	show();
	
	$('.new-todo').on('keydown',function(e){
		if(e.keyCode == 13){
			var val = $(this).val().trim();
			if(val.length == 0){
				return false;
			}
		
			var data = getData();
			
			var obj = {title:$(this).val().trim(),done:false}
		
			data.unshift(obj);
		
			setData(data);
			
			$(this).val('');
		
			show();
		}
	});

	
	$('.todo-list').on('click','.destroy',function(){
		
		var data = getData();
		
		var index = $(this).parents('tr').attr('data-index');
		data.splice(index,1);
		
		$(this).parent().remove();
		
		setData(data);
		show();	
	})
	
	$('.todo-list').on('click','.toggle',function(){
		var status = $(this).prop('checked');
		
		if(status){
			$('.clear-completed').show();
		}
		
		var data = getData();
	
		var index = $(this).parents('li').attr('data-index');
		
		data[index]['done'] = status;
		
		setData(data);
		
		show();
		
		console.log($('.completed').length);
		if($('.completed').length == $('.todo-list li').length){
			$('.toggle-all').prop('checked',true)
		}else{
			$('.toggle-all').prop('checked',false)
		}
		// if($('.completed').length == 0) ;
	})

	$('.clear-completed').on('click',function(){
		
		if( $('.completed').length == 0) return false;
		
		if(confirm('是否删除已完成的任务?')){
			
			 var data = getData();
			 
			 var n = 0;
			 $('.completed').each(function(i,ele){
				 var index =  $(ele).attr('data-index');
				
				 data.splice(index-n,1);
				 n++;
			 });
			  
			  setData(data);
			  show();
		}
		  
	})
	
	$('#toggle-all').on('click',function(){
		
		var status = $('#toggle-all').prop('checked');
		$('.toggle').prop('checked',status);
		
		
		var data = getData();
		$.each(data,function(i,ele){
			ele['done'] = status;
		})
		
		setData(data);
		
		if(status){
			$('.todo-list li').removeClass('view').addClass('completed')
			$('.clear-completed').show();
		}else{
			$('.todo-list li').removeClass('completed').addClass('view')
			$('.clear-completed').hide();
		}
		
	})

	
	$('#completed').on('click',function(){
		
		$('.filters a').removeClass('selected');
		$(this).addClass('selected');
		$('.completed').show();
		$('li.view').hide();
		
	})
	
	$('#active').on('click',function(){
		$('.filters a').removeClass('selected'); 
		$(this).addClass('selected') 
		
		$('.completed').hide();
		$('li.view').show().addClass('selected');
	})
	
	$('#all').on('click',function(){
		$('.filters a').removeClass('selected'); 
		$(this).addClass('selected') 
		$('li.view').show();	
		$('.completed').show();
	})
})(window);