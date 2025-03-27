// $(document).ready(() => {
//     document.addEventListener("scroll", () => {
//         let service1 = document.querySelector("#service_1");
//         let service2 = document.querySelector("#service_2");
//         let service3 = document.querySelector("#service_3");
//         let service4 = document.querySelector("#service_4");

//         let rect_s1 = service1.getBoundingClientRect();
//         let rect_s3 = service3.getBoundingClientRect();

//         let windowHeight = window.innerHeight;

//         if (rect_s1.top >= 0 && rect_s1.bottom <= windowHeight) {
//             service1.style.transform = "translateX(0)";
//             service1.style.transition = "transform 0.5s ease-out"; // Animación suave
//             service2.style.transform = "translateX(0)";
//             service2.style.transition = "transform 0.5s ease-out"; // Animación suave

//             // Removemos el eventListener para que no se ejecute más veces
//             document.removeEventListener("scroll", arguments.callee);
//         }
//         if (rect_s3.top >= 0 && rect_s3.bottom <= windowHeight) { // Animación suave
//             service3.style.transform = "translateX(0)";
//             service3.style.transition = "transform 0.5s ease-out"; // Animación suave
//             service4.style.transform = "translateX(0)";
//             service4.style.transition = "transform 0.5s ease-out"; // Animación suave

//             // Removemos el eventListener para que no se ejecute más veces
//             document.removeEventListener("scroll", arguments.callee);
//         }


//         let titulo1 = document.querySelector("#servicios h1");
//         let titulo2 = document.querySelector("#quienessomos h1");
//         let titulo3 = document.querySelector("#why h1");
//         let titulo4 = document.querySelector("#testimonios h1");
//         let titulo5 = document.querySelector("#contactos h1");
//         let rect1 = titulo1.getBoundingClientRect();
//         let rect2 = titulo2.getBoundingClientRect();
//         let rect3 = titulo3.getBoundingClientRect();
//         let rect4 = titulo4.getBoundingClientRect();
//         let rect5 = titulo4.getBoundingClientRect();
//         // let windowHeight = window.innerHeight;

//         // Se activa cuando el borde inferior del h1 toca el borde inferior de la pantalla
//         if (rect1.bottom <= windowHeight) {
//             titulo1.style.transform = "translateY(0)";
//             titulo1.style.opacity = "1";
//             titulo1.style.transition = "transform 0.6s ease-out, opacity 0.6s ease-out";
//         }

//         // Se activa cuando el borde inferior del h1 toca el borde inferior de la pantalla
//         if (rect2.bottom <= windowHeight) {
//             titulo2.style.transform = "translateY(0)";
//             titulo2.style.opacity = "1";
//             titulo2.style.transition = "transform 0.6s ease-out, opacity 0.6s ease-out";
//         }

//         if (rect3.bottom <= windowHeight) {
//             titulo3.style.transform = "translateY(0)";
//             titulo3.style.opacity = "1";
//             titulo3.style.transition = "transform 0.6s ease-out, opacity 0.6s ease-out";
//         }

//         if (rect4.bottom <= windowHeight) {
//             titulo4.style.transform = "translateY(0)";
//             titulo4.style.opacity = "1";
//             titulo4.style.transition = "transform 0.6s ease-out, opacity 0.6s ease-out";
//         }
//         if (rect5.bottom <= windowHeight) {
//             titulo5.style.transform = "translateY(0)";
//             titulo5.style.opacity = "1";
//             titulo5.style.transition = "transform 0.6s ease-out, opacity 0.6s ease-out";
//         }

//         // Si quieres reiniciar el efecto cuando el usuario vuelve arriba:
//         if (window.scrollY === 0) {
//             service1.style.transform = "translateX(-1000px)";
//             service3.style.transform = "translateX(-1000px)";
//             service2.style.transform = "translateX(1000px)";
//             service4.style.transform = "translateX(1000px)";

//             titulo1.style.transform = "translateY(-100px)";
//             titulo1.style.opacity = "0";

//             titulo2.style.transform = "translateY(-100px)";
//             titulo2.style.opacity = "0";

//             titulo3.style.transform = "translateY(-100px)";
//             titulo3.style.opacity = "0";

//             titulo4.style.transform = "translateY(-100px)";
//             titulo4.style.opacity = "0";

//             titulo5.style.transform = "translateY(-100px)";
//             titulo5.style.opacity = "0";
//         }


//     });



// })