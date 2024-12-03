$(function(){
	var result = 0;
	var strNum1 = strNum2 = oper = "";
	var finished = false;
	
	$("button[data-num]").on("click",function(){
		if(finished) return false;
		var num = $(this).attr("data-num");
		
		if(oper == ""){
			strNum1 += num;
			$("#result").val($("#result").val() + num);
		}
		
		if(oper != "" && strNum1 !=""){
			strNum2 += num;
			$("#result").val($("#result").val() + num);
		}
	})
	
	$("button[data-action]").on("click",function(){
		if(strNum1 != ""){
			var action = $(this).attr("data-action");
			
			if(action == "AC"){
				reset();
			}
			
			if(["+","-","*","/"].includes(action) && strNum2 == ""){
				$("#result").val($("#result").val() + action);
				oper = action;
			}
			
			if(action == '='){
				switch(oper){
					case '+':
						result = parseInt(strNum1) + parseInt(strNum2);
						break;
					case '-':
						result = parseInt(strNum1) - parseInt(strNum2);
						break;
					case '*':
						result = parseInt(strNum1) * parseInt(strNum2);
						break;
					case '/':
						if(parseInt(strNum2) == 0){
							alert("除数不能为0!");
							reset();
							return false;
						}
						result = parseInt(strNum1) / parseInt(strNum2);
						break;
				}
				$("#result").val(strNum1 + oper + strNum2 + "=" + result);
				finished = true;
			}
		}
	})
	
	function reset(){
		strNum1 = strNum2 = oper = "";
		result = 0;
		finished = false;
		$("#result").val('');
	}
})