function mov()
{
    var wynik1 = document.getElementById("wynik");
    var rejestrpoczatkowy = document.getElementById("select1").value;
    var rejestrdocelowy = document.getElementById("select2").value;

    if(rejestrpoczatkowy == "AX" && rejestrdocelowy == "BX")
    {
        var ax = document.getElementById("ax").value;
        var bx = document.getElementById("bx").value;
        bx=ax;
        wynik1.innerHTML = " Wartość " +ax+ " została przesłana pomyślnie z rejestru "+rejestrpoczatkowy+ " do "+rejestrdocelowy;
        document.form.BX.value=bx;
    }
    else
    {
        if(rejestrpoczatkowy == "AX" && rejestrdocelowy == "CX")
        {
            var ax = document.getElementById("ax").value;
            var cx = document.getElementById("cx").value;
            cx=ax;
            wynik1.innerHTML = " Wartość " +ax+ " została przesłana pomyślnie z rejestru "+rejestrpoczatkowy+ " do "+rejestrdocelowy;
            document.form.CX.value=cx;
        }
        else
        {
            if(rejestrpoczatkowy == "AX" && rejestrdocelowy == "DX")
            {
                var ax = document.getElementById("ax").value;
                var dx = document.getElementById("dx").value;
                dx=ax;
                wynik1.innerHTML = " Wartość " +ax+ " została przesłana pomyślnie z rejestru "+rejestrpoczatkowy+ " do "+rejestrdocelowy;
                document.form.DX.value=dx;
            }
        }

    if(rejestrpoczatkowy == "BX" && rejestrdocelowy == "AX")
    {
        var bx = document.getElementById("bx").value;
        var ax = document.getElementById("ax").value;
        ax=bx;
        wynik1.innerHTML = " Wartość " +bx+ " została przesłana pomyślnie z rejestru "+rejestrpoczatkowy+ " do "+rejestrdocelowy;
        document.form.AX.value=ax;
    }
    else
    {
        if(rejestrpoczatkowy == "BX" && rejestrdocelowy == "CX")
        {
            var bx = document.getElementById("bx").value;
            var cx = document.getElementById("cx").value;
            cx=bx;
            wynik1.innerHTML = " Wartość " +bx+ " została przesłana pomyślnie z rejestru "+rejestrpoczatkowy+ " do "+rejestrdocelowy;
            document.form.CX.value=cx;
        }
        else
        {
            if(rejestrpoczatkowy == "BX" && rejestrdocelowy == "DX")
            {
                var bx = document.getElementById("bx").value;
                var dx = document.getElementById("dx").value;
                dx=bx;
                wynik1.innerHTML = " Wartość " +bx+ " została przesłana pomyślnie z rejestru "+rejestrpoczatkowy+ " do "+rejestrdocelowy;
                document.form.DX.value=dx;
            }
        }

    }

    if(rejestrpoczatkowy == "CX" && rejestrdocelowy == "AX")
    {
        var cx = document.getElementById("cx").value;
        var ax = document.getElementById("ax").value;
        ax=cx;
        wynik1.innerHTML = " Wartość " +cx+ " została przesłana pomyślnie z rejestru "+rejestrpoczatkowy+" do "+rejestrdocelowy;
        document.form.AX.value=ax;
    }
    else
    {
        if(rejestrpoczatkowy == "CX" && rejestrdocelowy == "BX")
        {
            var cx = document.getElementById("cx").value;
            var bx = document.getElementById("bx").value;
            bx=cx;
            wynik1.innerHTML = " Wartość " +cx+ " została przesłana pomyślnie z rejestru "+rejestrpoczatkowy+" do "+rejestrdocelowy;
            document.form.BX.value=bx;
        }
        else
        {
            if(rejestrpoczatkowy == "CX" && rejestrdocelowy == "DX")
            {
                var cx = document.getElementById("cx").value;
                var dx = document.getElementById("dx").value;
                dx=cx;
                wynik1.innerHTML = " Wartość " +cx+ " została przesłana pomyślnie z rejestru "+rejestrpoczatkowy+" do "+rejestrdocelowy;
                document.form.DX.value=dx;
            }
        }
    }

    if(rejestrpoczatkowy == "DX" && rejestrdocelowy == "AX")
    {
        var dx = document.getElementById("dx").value;
        var ax = document.getElementById("ax").value;
        ax=dx;
        wynik1.innerHTML = " Wartość " +dx+ " została przesłana pomyślnie z rejestru "+rejestrpoczatkowy+" do "+rejestrdocelowy;
        document.form.AX.value=ax;
    }
    else
    {
        if(rejestrpoczatkowy == "DX" && rejestrdocelowy == "BX")
        {
            var dx = document.getElementById("dx").value;
            var bx = document.getElementById("bx").value;
            bx=dx;
            wynik1.innerHTML = " Wartość " +dx+ " została przesłana pomyślnie z rejestru "+rejestrpoczatkowy+" do "+rejestrdocelowy;
            document.form.BX.value=bx;
        }
        else
        {
            if(rejestrpoczatkowy == "DX" && rejestrdocelowy == "CX")
            {
                var cx = document.getElementById("cx").value;
                var dx = document.getElementById("dx").value;
                cx=dx;
                wynik1.innerHTML = " Wartość " +dx+ " została przesłana pomyślnie z rejestru "+rejestrpoczatkowy+" do "+rejestrdocelowy;
                document.form.CX.value=cx;
            }
        }
    }
    }
}