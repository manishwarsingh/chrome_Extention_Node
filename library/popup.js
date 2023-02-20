let baseUrl="http://localhost:8080";
$(document).ready(function(){
	$(".get_all_url").click(function(){
		// alert("Hello")
		console.log($("#urls").val(),"i am url link")
			$.ajax({
			type: 'POST',
			url: baseUrl+"/geturl",
			dataType: 'json',
			data:{url:$("#urls").val()},
			success: function(response) {
				console.log(response.status,response.msg,response.data)
				const result = (response.data);
				console.log("result",result)
				$(".abc").html(result);
			}
		})
	})
})


