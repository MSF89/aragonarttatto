/*-------------------------------------------------------------------*/
/*------BurguerMenu--------------------------------------------------*/
/*-------------------------------------------------------------------*/
const d = document;
const menuBtn = d.querySelector('nav .btn');
const menuLst = d.querySelector('nav .menu');
menuBtn.onclick = () => menuLst.classList.toggle('active')

/*-------------------------------------------------------------------*/
/*------Carrousel----------------------------------------------------*/
/*-------------------------------------------------------------------*/

const grande = d.querySelector('.grande');
const punto = d.querySelectorAll('.punto');
var mediaQuery1 = window.matchMedia("(min-width: 600px)");
var mediaQuery2 = window.matchMedia("(min-width: 900px)");


punto.forEach((cadaPunto , p) => {
    punto[p].addEventListener('click', ()=>{
        
        let posicion = p;
        let operacion;
        if (mediaQuery2.matches){
            operacion = posicion * -50;            
        }else if (mediaQuery1.matches) {  
            operacion = posicion * -25;
        } 
        
        grande.style.transform = `translateX(${operacion}%)`;
        
        punto.forEach((cadaPunto, p) => {
            punto[p].classList.remove('activo');
        })
        punto[p].classList.add('activo');   
    })
})

/*-------------------------------------------------------------------*/
/*------Galerias-----------------------------------------------------*/
/*-------------------------------------------------------------------*/
let galleryDisenios = d.querySelector('.disenios');
let galleryDibujos = d.querySelector('.dibujos');
let galleryTattoos = d.querySelector('.tattoos');
let galleryPromos = d.querySelector('.promos');
let galleryPinturas = d.querySelector('.pinturas');
let galleryTallados = d.querySelector('.tallados');

/*-------------------------------------------------------------------*/
/*------GalleryDisenios----------------------------------------------*/
/*-------------------------------------------------------------------*/

let imgDisenios = ['./Recursos/Disenios/1.jpg', './Recursos/Disenios/2.jpg', './Recursos/Disenios/3.jpg', './Recursos/Disenios/4.jpg', './Recursos/Disenios/5.jpg', './Recursos/Disenios/6.jpg', './Recursos/Disenios/7.jpg', './Recursos/Disenios/8.jpg', './Recursos/Disenios/9.jpg', './Recursos/Disenios/10.jpg', './Recursos/Disenios/11.jpg', './Recursos/Disenios/12.jpg', './Recursos/Disenios/13.jpg', './Recursos/Disenios/14.jpg', './Recursos/Disenios/15.jpg', './Recursos/Disenios/16.jpg', './Recursos/Disenios/17.jpg', './Recursos/Disenios/18.jpg', './Recursos/Disenios/19.jpg', './Recursos/Disenios/20.jpg', './Recursos/Disenios/21.jpg', './Recursos/Disenios/22.jpg', './Recursos/Disenios/23.jpg', './Recursos/Disenios/24.jpg', './Recursos/Disenios/25.jpg', './Recursos/Disenios/26.jpg', './Recursos/Disenios/27.jpg', './Recursos/Disenios/28.jpg', './Recursos/Disenios/29.jpg', './Recursos/Disenios/30.jpg', './Recursos/Disenios/31.jpg', './Recursos/Disenios/32.jpg', './Recursos/Disenios/33.jpg', './Recursos/Disenios/34.jpg', './Recursos/Disenios/35.jpg', './Recursos/Disenios/36.jpg', './Recursos/Disenios/37.jpg', './Recursos/Disenios/38.jpg', './Recursos/Disenios/39.jpg', './Recursos/Disenios/40.jpg', ]

if(galleryDisenios){
    for(i = 0; i < imgDisenios.length; i++){
        let crearImg = d.createElement('img');
        crearImg.setAttribute('src', imgDisenios[i]);
        galleryDisenios.appendChild(crearImg);
    }
}

/*-------------------------------------------------------------------*/
/*------GalleryDibujos-----------------------------------------------*/
/*-------------------------------------------------------------------*/

let imgDIbujos = ['./Recursos/Dibujos/1.jpg', './Recursos/Dibujos/2.jpg', './Recursos/Dibujos/3.jpg', './Recursos/Dibujos/4.jpg','./Recursos/Dibujos/5.jpg', './Recursos/Dibujos/6.jpg', './Recursos/Dibujos/7.jpg', './Recursos/Dibujos/8.jpg', './Recursos/Dibujos/9.jpg', './Recursos/Dibujos/10.jpg', './Recursos/Dibujos/11.jpg', './Recursos/Dibujos/12.jpg', './Recursos/Dibujos/13.jpg', './Recursos/Dibujos/14.jpg', './Recursos/Dibujos/15.jpg', './Recursos/Dibujos/16.jpg', './Recursos/Dibujos/17.jpg', './Recursos/Dibujos/18.jpg', './Recursos/Dibujos/19.jpg', './Recursos/Dibujos/20.jpg', './Recursos/Dibujos/21.jpg', './Recursos/Dibujos/22.jpg', './Recursos/Dibujos/23.jpg', './Recursos/Dibujos/24.jpg', './Recursos/Dibujos/25.jpg', './Recursos/Dibujos/26.jpg', './Recursos/Dibujos/27.jpg', './Recursos/Dibujos/28.jpg', './Recursos/Dibujos/29.jpg', './Recursos/Dibujos/30.jpg', './Recursos/Dibujos/31.jpg', './Recursos/Dibujos/32.jpg', './Recursos/Dibujos/33.jpg', './Recursos/Dibujos/34.jpg' ];

if(galleryDibujos){
    for(i = 0; i < imgDIbujos.length; i++){
        let crearImgDib = d.createElement('img');
        crearImgDib.setAttribute('src', imgDIbujos[i]);
        galleryDibujos.appendChild(crearImgDib);
    }
}

/*-------------------------------------------------------------------*/
/*------GalleryTattoos-----------------------------------------------*/
/*-------------------------------------------------------------------*/

let imgTattoos = ['./Recursos/Tattoos/1.jpg', './Recursos/Tattoos/2.jpg', './Recursos/Tattoos/3.jpg', './Recursos/Tattoos/4.jpg', './Recursos/Tattoos/5.jpg', './Recursos/Tattoos/6.jpg', './Recursos/Tattoos/7.jpg', './Recursos/Tattoos/8.jpg', './Recursos/Tattoos/9.jpg', './Recursos/Tattoos/10.jpg', './Recursos/Tattoos/11.jpg', './Recursos/Tattoos/12.jpg', './Recursos/Tattoos/13.jpg', './Recursos/Tattoos/14.jpg', './Recursos/Tattoos/15.jpg', './Recursos/Tattoos/16.jpg', './Recursos/Tattoos/17.jpg', './Recursos/Tattoos/18.jpg', './Recursos/Tattoos/19.jpg', './Recursos/Tattoos/20.jpg', './Recursos/Tattoos/21.jpg', './Recursos/Tattoos/22.jpg', './Recursos/Tattoos/23.jpg', './Recursos/Tattoos/24.jpg', './Recursos/Tattoos/25.jpg', './Recursos/Tattoos/26.jpg', './Recursos/Tattoos/27.jpg', './Recursos/Tattoos/28.jpg', './Recursos/Tattoos/29.jpg', './Recursos/Tattoos/30.jpg', './Recursos/Tattoos/31.jpg', './Recursos/Tattoos/32.jpg', './Recursos/Tattoos/33.jpg', './Recursos/Tattoos/34.jpg', './Recursos/Tattoos/35.jpg', './Recursos/Tattoos/36.jpg', './Recursos/Tattoos/37.jpg', './Recursos/Tattoos/38.jpg', './Recursos/Tattoos/39.jpg', './Recursos/Tattoos/40.jpg','./Recursos/Tattoos/41.jpg', './Recursos/Tattoos/42.jpg', './Recursos/Tattoos/43.jpg', './Recursos/Tattoos/44.jpg', './Recursos/Tattoos/45.jpg', './Recursos/Tattoos/46.jpg', './Recursos/Tattoos/47.jpg', './Recursos/Tattoos/48.jpg', './Recursos/Tattoos/49.jpg', './Recursos/Tattoos/50.jpg', './Recursos/Tattoos/51.jpg', './Recursos/Tattoos/52.jpg', './Recursos/Tattoos/53.jpg', './Recursos/Tattoos/54.jpg', './Recursos/Tattoos/55.jpg', './Recursos/Tattoos/56.jpg', './Recursos/Tattoos/57.jpg', './Recursos/Tattoos/58.jpg', './Recursos/Tattoos/59.jpg', './Recursos/Tattoos/60.jpg', './Recursos/Tattoos/61.jpg', './Recursos/Tattoos/62.jpg', './Recursos/Tattoos/63.jpg', './Recursos/Tattoos/64.jpg', './Recursos/Tattoos/65.jpg', './Recursos/Tattoos/66.jpg', './Recursos/Tattoos/67.jpg', './Recursos/Tattoos/68.jpg', './Recursos/Tattoos/69.jpg', './Recursos/Tattoos/70.jpg', './Recursos/Tattoos/71.jpg', './Recursos/Tattoos/72.jpg', './Recursos/Tattoos/73.jpg', './Recursos/Tattoos/74.jpg', './Recursos/Tattoos/75.jpg', './Recursos/Tattoos/76.jpg', './Recursos/Tattoos/77.jpg', './Recursos/Tattoos/78.jpg', './Recursos/Tattoos/79.jpg', './Recursos/Tattoos/80.jpg', './Recursos/Tattoos/81.jpg', './Recursos/Tattoos/82.jpg', './Recursos/Tattoos/83.jpg', './Recursos/Tattoos/84.jpg', './Recursos/Tattoos/85.jpg']

if(galleryTattoos){
    for(i = imgTattoos.length -1; i >=0  ; i--){
        let crearImg = d.createElement('img');
        crearImg.setAttribute('src', imgTattoos[i]);
        galleryTattoos.appendChild(crearImg);
    }
}
/*-------------------------------------------------------------------*/
/*------GalleryPromos------------------------------------------------*/
/*-------------------------------------------------------------------*/

let imgPromos = [];

if(galleryPromos){
    for(i = 0; i < imgPromos.length; i++){
        let crearImg = d.createElement('img');
        crearImg.setAttribute('src', imgPromos[i]);
        galleryPromos.appendChild(crearImg);
    }
}
/*-------------------------------------------------------------------*/
/*------GalleryPinturas----------------------------------------------*/
/*-------------------------------------------------------------------*/

let imgPinturas = ['./Recursos/Pinturas/1.jpg', './Recursos/Pinturas/2.jpg', './Recursos/Pinturas/3.jpg', './Recursos/Pinturas/4.jpg','./Recursos/Pinturas/5.jpg', './Recursos/Pinturas/6.jpg', './Recursos/Pinturas/7.jpg', './Recursos/Pinturas/8.jpg', './Recursos/Pinturas/9.jpg', './Recursos/Pinturas/10.jpg', './Recursos/Pinturas/11.jpg', './Recursos/Pinturas/12.jpg']

if(galleryPinturas){
    for(i = 0; i < imgPinturas.length; i++){
        let crearImg = d.createElement('img');
        crearImg.setAttribute('src', imgPinturas[i]);
        galleryPinturas.appendChild(crearImg);
    }
}

/*-------------------------------------------------------------------*/
/*------GalleryTallados----------------------------------------------*/
/*-------------------------------------------------------------------*/

let imgTallados = ['./Recursos/Tallados/dragonGrande.jpg', './Recursos/Tallados/dragonShiryu.jpg',]

if(galleryTallados){
    for(i = 0; i< imgTallados.length; i++){
        let crearImg = d.createElement('img');
        crearImg.setAttribute('src', imgTallados[i],);
        galleryTallados.appendChild(crearImg);
    }
}

/*-------------------------------------------------------------------*/
/*------GalleryImgOpenClose------------------------------------------*/
/*-------------------------------------------------------------------*/

const btnClose = d.querySelector('#btnClose');
const btnPrev = d.querySelector('#btnPrev');
const btnNext = d.querySelector('#btnNext');
const imagenes = d.querySelectorAll('#gridGallery img');
const lightbox = d.querySelector('#contPrincipal');
const imagenActiva = d.querySelector('#img-activa');
let indiceImg = 0;

// Abrir el lightbox
const abreLightbox = (e) => {
    imagenActiva.src = e.target.src;
    lightbox.style.display = 'flex';
    if(imgDisenios){
        indiceImg = imgDisenios.indexOf(e.target);
    }
    if(imgDIbujos){
        indiceImg = imgDIbujos.indexOf(e.target);
    }
    if(imgPinturas){
        indiceImg = imgPinturas.indexOf(e.target);
    }
    if(imgPromos){
        indiceImg = imgPromos.indexOf(e.target);
    }
    if(imgTattoos){
        indiceImg = imgTattoos.indexOf(e.target);
    }
    if(imgTallados){
        indiceImg = imgTallados.indexOf(e.target);
    }
}

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abreLightbox);
})

// Cerrar imagen
btnClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
})

// Adelantar imagen
const adelantaImagen = () => {
    if(indiceImg === imagenes.length -1) {
        indiceImg = -1;
    }
    imagenActiva.src = imagenes[indiceImg + 1].src;
    indiceImg++;
}
btnNext.addEventListener('click', adelantaImagen);

// Retroceder imagen
const retrocedeImagen = () =>{
    if (indiceImg === 0){
        indiceImg = imagenes.length;
    }
    imagenActiva.src = imagenes[indiceImg - 1].src;
    indiceImg--;
}
btnPrev.addEventListener('click', retrocedeImagen);