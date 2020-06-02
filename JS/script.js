function mov()
{
    var userInfo = document.getElementById("wynik");
    
    var fromRegister = document.getElementById("select1").value;
    var toRegister = document.getElementById("select2").value;
    
    var fromValue = document.getElementById(fromRegister.toLowerCase()).value;
    
    movInfo = "";

	if(fromValue)  // Check if value "exists"
	{
		if(fromRegister != toRegister)  // Check from and to register
		{
			document.getElementById(toRegister.toLowerCase()).value = fromValue;
			var toValueAfterMov = document.getElementById(toRegister.toLowerCase()).value;
			
			if(fromValue == toValueAfterMov)  // Check if value had been moved
			{
				document.getElementById(fromRegister.toLowerCase()).value = "";  // Clear fromRegister after success 
				movInfo = "Wartość " + fromValue + " została przesłana pomyślnie z rejestru " + fromRegister + " do " + toRegister;			
			}
		} else {
			movInfo = "Blad! Operacja z rejestru " + fromRegister + " do " + toRegister;
		}
	} else {
		movInfo = "Blad! Problem pobrania wartosci z rejestru " + fromRegister;
	}
	userInfo.innerHTML = movInfo;
}
