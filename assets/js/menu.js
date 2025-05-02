document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".btn-menu"),t=document.getElementById("menu"),s=t.querySelector(".btn-menu i");e?.addEventListener("click",function(){t.classList.toggle("hide"),s.classList.toggle("fa-bars"),s.classList.toggle("fa-times")}),document.addEventListener("click",function(e){let a=!e.target.closest("#menu"),l=!e.target.closest(".btn-menu"),c=e.target.closest("#menu a");a&&l&&!t.classList.contains("hide")?(t.classList.add("hide"),s.classList.remove("fa-times"),s.classList.add("fa-bars")):c&&(t.classList.add("hide"),s.classList.remove("fa-times"),s.classList.add("fa-bars"))}),setTimeout(()=>{let e=document.querySelector(".ButtonBase__Ellipsis-sc-11c179a3-5.haApKJ");e&&(e.textContent="Agregar rese\xf1a",e.style.color="#ffffff"),document.querySelectorAll(".EkQXg").forEach(e=>{e.style.background="#fff",e.style.boxShadow="0 0 5px #0003",e.style.margin="5px"}),document.querySelectorAll(".dIBzjh").forEach(e=>{e.style.setProperty("background","#fff","important")});let t=document.querySelector(".elfsight-app-c258c807-c999-48fa-acb4-990dd3b6d0b5.eapps-widget.eapps-widget-show-toolbar > a");t&&(t.style.setProperty("display","none","important"),t.style.setProperty("opacity","0","important"))},4e3);let a=document.getElementById("location");if(a){let l=a.getAttribute("data-src"),c=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(console.log("Mapa en viewport, cargando..."),a.src=l,t.disconnect())})},{threshold:.1});c.observe(a),setTimeout(()=>{a.src||(console.log("Fallback activado, cargando mapa..."),a.src=l)},5e3)}let o=document.getElementById("testimonios-placeholder");if(o){let r=new IntersectionObserver((e,t)=>{e.forEach(e=>{if(e.isIntersecting){let s=document.createElement("div");s.className="elfsight-app-c258c807-c999-48fa-acb4-990dd3b6d0b5",s.style.zIndex="-1",s.id="testimonios",o.replaceWith(s);let a=document.createElement("script");a.src="https://static.elfsight.com/platform/platform.js",a.defer=!0,a.async=!0,a.crossOrigin="anonymous",document.body.appendChild(a),t.disconnect()}})},{threshold:.1});r.observe(o)}
}); document.addEventListener('DOMContentLoaded', () => {
    const header      = document.getElementById('header');
    const portada     = document.getElementById('portada');

    // Altura sobre la que calculamos el porcentaje
    const maxScroll = portada.offsetHeight - header.offsetHeight;

    window.addEventListener('scroll', () => {
      // Scroll actual, acotado entre 0 y maxScroll
      const scrollY = Math.min(window.scrollY, maxScroll);
      // Porcentaje (0–100)
      const pct = (scrollY / maxScroll) * 100;
      // Calculamos alpha en [0, 1]
      let alpha = pct / 100;
      // Si llega a 100%, forzamos alpha = 1
      if (pct >= 100) alpha = 1;
      // Convertir alpha a hexadecimal de 2 dígitos
      const hex = Math.round(alpha * 255)
                         .toString(16)
                         .padStart(2, '0');
      // Aplicar color con la parte alfa variable
      header.style.backgroundColor = `#1f80cf${hex}`;
    });
  });