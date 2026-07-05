const notaMinAprobacion = 5;
let AlumnosAprobado = "";
let AlumnosReprobado = "";
alert("CALIFICACION FINAL DEL CURSO.");
let cantAlumnos = parseInt(prompt("¿Cuantos alumnos hay en el curso?"));

for(let x = 0;x < cantAlumnos;x++)
{
    let nomAlumno = prompt("Nombre del alumno : ");
    let notaAlumno = parseInt(prompt("Nota final de " + nomAlumno + " : "));
    comprobarAprobacion(nomAlumno,notaAlumno);    
}
function comprobarAprobacion(nombre,nota)
{
    if(nota >= notaMinAprobacion)
    {
        AlumnosAprobado += nombre + "\n";
    }
    else
    {
        AlumnosReprobado += nombre + "\n"
    }
}

console.log("ALUMNOS APROBADOS :\n " + AlumnosAprobado);
console.log("ALUMNOS REPOBRADOS :\n" + AlumnosReprobado);