document.getElementById("confirm").onclick = function() {
			var promptedNumber = document.getElementById("prompt").value;
			var resultNumber = document.getElementById("resultNumber");

			document.getElementById("drawResultNumber").innerHTML = promptedNumber;

			resultNumber.onclick = function() 
			{
					drawRandomNumber();
			}

			function drawRandomNumber()
			{
					var randomNumber = Math.floor(Math.random() * promptedNumber) + 1;

							resultNumber.style.fontSize = "8em";
							resultNumber.innerHTML = randomNumber;
							document.getElementById('historic-numbers').innerHTML += randomNumber + ', ';

					return randomNumber;
			}
	}