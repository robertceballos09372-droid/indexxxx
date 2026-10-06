// ==========================================
// FUNCIONES DE PIZZA
// ==========================================


// MENSAJE DEL INICIO

function mostrarMensaje() {

    alert(
        "🍕 ¡Bienvenido a Pizza! " +
        "Disfruta de nuestras deliciosas pizzas."
    );

}


// ==========================================
// EJEMPLO DE JAVASCRIPT
// ==========================================

const boton = document.getElementById("boton");

if (boton) {

    boton.addEventListener("click", function() {

        alert("¡JavaScript está funcionando correctamente! 🍕");

    });

}


// ==========================================
// JQUERY
// ==========================================

$(document).ready(function() {

    $("#mostrarPizza").click(function() {

        $("#pizzaAnimada").fadeIn(1000);

    });


    $("#ocultarPizza").click(function() {

        $("#pizzaAnimada").fadeOut(1000);

    });

});


// ==========================================
// CUESTIONARIO
// ==========================================

function calificarQuiz() {

    let respuestasCorrectas = {
        p1: "c",
        p2: "a",
        p3: "b",
        p4: "a",
        p5: "b",
        p6: "a",
        p7: "a",
        p8: "a",
        p9: "a",
        p10: "b"
    };

    let puntuacion = 0;

    let total = 10;

    for (let pregunta in respuestasCorrectas) {

        let respuesta =
            document.querySelector(
                'input[name="' + pregunta + '"]:checked'
            );

        if (respuesta) {

            if (respuesta.value === respuestasCorrectas[pregunta]) {

                puntuacion++;

            }

        }

    }

    let resultado = document.getElementById("resultado");

    let porcentaje = (puntuacion / total) * 100;

    resultado.innerHTML =
        "🍕 Tu resultado es: " +
        puntuacion +
        " de " +
        total +
        "<br>" +
        "Puntuación: " +
        porcentaje +
        "%";

    if (puntuacion >= 8) {

        resultado.style.backgroundColor = "#2ECC71";
        resultado.style.color = "white";

        resultado.innerHTML +=
            "<br>🎉 ¡Excelente trabajo!";

    } else if (puntuacion >= 5) {

        resultado.style.backgroundColor = "#F1C40F";
        resultado.style.color = "#222";

        resultado.innerHTML +=
            "<br>👍 Buen trabajo, pero puedes seguir estudiando.";

    } else {

        resultado.style.backgroundColor = "#C0392B";
        resultado.style.color = "white";

        resultado.innerHTML +=
            "<br>📚 Te recomendamos repasar las páginas.";

    }

}