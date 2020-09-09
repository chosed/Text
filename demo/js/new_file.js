var str = "adasecaaskfsajfsakmcsak";
			
			var o = {};
			for(var i=0, length = str.length; i < length; i++){
				var char = str.charAt(i);
				if(o[char]){
					o[char]++;//次数加一
				}else{
					o[char]=1;
				}
			}
			console.log(o); //输出的是完整的对象，记录着每一个字符及其出现的次数
			//遍历对象，找到出现次数最多的字符的次数
			var max = 0;
			for (var key in o) {
				if (max < o[key]) {
					max = o[key]; //max始终储存次数最大的那个
				}
			}
			for (var key in o) {
				if (o[key] == max) {
					//控制台打印
					//console.log(key);
					console.log("最多的字符是" + key);
					console.log("出现的次数是" + max);
				}
			} 