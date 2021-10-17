function calculateGrade() {

    var inputValues = document.querySelectorAll('.number');
    var conca = "";
    console.log(inputValues)
    if (inputValues.length == 5){               //condicion para verificar que haya 5 inputs
        for (var i = 0; i < inputValues.length; i++) {      //ciclo para iterar y concatenar el valor de las entradas
            conca = conca + "+" + inputValues[i].value;     //se suman los valores agregados
            if (inputValues[i].value === ""){               //condicion para verificar que todos los inputs tengan un valor ingresado
                alert('Please fill all the fields!');
                break;
            }
        }
        var resultado = eval(conca);            //la funcion eval realiza la operacion de suma
        var output = resultado / 5;             //promedio de las calificaciones
        if(output >= 7){                        //condicion para emerger pantalla de resultado
            document.getElementById('prom').innerText=output;               //pantalla de aprovacion
            document.querySelector('.backgroundUp').style.display = 'flex';
            document.querySelector('.ilustracion').style.display = 'flex';
        }else{
            document.getElementById('prom').innerText=output;               //pantalla de no aprovado
            document.getElementById('prom').style.color = "rgb(241, 70, 64)";
            document.getElementById('con').innerText="Sorry, Keep Trying";
            document.querySelector('.backgroundUp').style.display = 'flex';
            document.querySelector('.ilustracion2').style.display = 'flex';
        }
    }else{
        alert("Please, fill all the fields.");
    }
}
//se agregan eventos listener a botones
var btn = document.getElementById("boton");
btn.addEventListener('click', function(){
    calculateGrade();
})

var btnReload = document.getElementById('btn-reload');
btnReload.addEventListener('click', function(){
    location.reload()
}) 