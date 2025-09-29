fetch('https://dummyjson.com/products?limit=200')
    .then(res=>res.json())
    .then(res=>{
        const contenedor = document.getElementById("contenedor");
        res.products.forEach(productos => {
            const cartas = document.createElement("div");
            cartas.classList.add("cartas");
            cartas.innerHTML = `
            <img src="${productos.thumbnail}" alt="${productos.title}">
            <h3>${productos.title}</h3>
            <p><b>Categoria:</b>${productos.category}</p>
            <p><b>Precio:</b>${productos.price}</p>
            `;
            contenedor.appendChild(cartas);
        });
    })
    .catch(err=>console.error("error:",err))