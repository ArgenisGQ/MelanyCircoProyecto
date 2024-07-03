
/* var Resp = prompt("Desea Ingresar Espectador (s/n)?:");  */
var precio=15;
var Vpromedio = 0;
var ninnos =0;
var adolescentes=0;
var adultos=0;
var Tespectadores=0;
var TventasA=0;
var TventasN=0;
var Tventas=0;
var mayor=0;
var Pninnos=0;
var n = 0;

while (n < 4){  
    n = n+1;  
    var nombre = prompt("Ingrese su Nombre: "); 
    var edad = prompt("Ingrese su Edad: ");
    var sexo = prompt("Ingrese su Sexo: ");

    if (edad <= 12 ) { 
        Pagar=precio-1.5;
        Tespectadores= Tespectadores+1;
        ninnos=ninnos+1;
        TventasN=TventasN+Pagar;
        
    }else if (edad > 12 && edad <= 18 ){
        Pagar=precio-1.5;
        adolescentes=adolescentes+1;
        Tespectadores= Tespectadores+1;
        TventasA=TventasA+Pagar;
    }else 
        if (edad > 18) {
            Pagar=precio;
            adultos=adultos+1; 
            Tespectadores= Tespectadores+1;
            Tventas=Tventas+Pagar;      
        }

    if (ninnos > adolescentes ) { 
        mayor="Niños";       
       }else{ 
        mayor="Adolescentes";       
        }
    document.write("El Espectador:  " +nombre+"  debe cancelar  :" + Pagar + "$" + "<br>");
    
} 

    VpromedioAdo=TventasA/adolescentes;
    Pninnos=(ninnos/Tespectadores)*100

    document.write("El Promedio de ventas hechas a espectadores adolescentes :" + VpromedioAdo + "<br>");
    document.write("Entre niños y adolescentes el espectador que mas asistio al Circo :" + mayor + "<br>");
    document.write("Porcentaje que representa la cantidad de niños que asistieron al Circo :" + Pninnos + "%"+ "<br>");
    document.write("Realizado por Melany Ferrer :" + "<br>");
