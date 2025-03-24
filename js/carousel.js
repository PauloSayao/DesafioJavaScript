

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    constructor(imagem, texto, link) {
        this.imagem = imagem;
        this.texto = texto;
        this.link = link;
    }

 

    static Start(arr) {
        if (arr) {

            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.addDiv()
                Carousel.Next(); //start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 2000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }    
    static Next(){
        document.querySelectorAll('#carousel a').forEach(element => {
            element.style.display = 'none'
        });
        document.querySelectorAll('#carousel-title a').forEach(element => {
            element.style.display = 'none'
        });
        
    }
    static addDiv() {
        for (let i = 0; i < Carousel._size; i++) {
            const carouselAtual = carouselArr[i];
            const carouselImg = carouselAtual.imagem;
            const carouselTexto = carouselAtual.texto;
            const carouselLink = carouselAtual.link;
            
            document.querySelector('#carousel').innerHTML += `<a href="${carouselLink}"><img src="img/${carouselImg}" alt="${carouselTexto}"></a>`;
            document.querySelector('#carousel-title').innerHTML +=`<a href="${carouselLink}>${carouselTexto}</a>`;
        }
    }
}
