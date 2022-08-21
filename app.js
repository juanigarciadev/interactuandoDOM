let stockEnsambles = [
    {id: 1, motherboard: "Gigabyte A520M", socket: "AM4", procesador: "Ryzen 5 5600G", tipoRam: "DDR4", gbRam: "16GB", velRam: "3200mhz", grafica: false, fuenteCertificada: true, wattsFuente: 650, precio: 90000, img: './images/pc.png'},
    {id: 2, motherboard: "Gigabyte B450M", socket: "AM4", procesador: "Ryzen 5 5700G", tipoRam: "DDR4", gbRam: "32GB", velRam: "3600mhz", grafica: "RTX 3060", fuenteCertificada: true, wattsFuente: 750, precio: 200000, img: './images/pc.png'},
    {id: 3, motherboard: "Asus Prime A320m-k", socket: "AM4", procesador: "Athlon 3000G", tipoRam: "DDR4", gbRam: "8GB", velRam: "2666mhz", grafica: false, fuenteCertificada: false, wattsFuente: 500, precio: 70000, img: './images/pc.png'}
]

const contenedorCards = document.getElementById('contenedorCards')

stockEnsambles.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h3>${producto.procesador}</h3>
    <p>${producto.socket}</p>
    <p>${producto.motherboard}</p>
    <p>${producto.gbRam}</p>
    <p>${producto.velRam}</p>
    <button class="botonAgregarCarrito" id="agregarCarrito">Agregar al carrito</button>
    `
    contenedorCards.appendChild(div)
})