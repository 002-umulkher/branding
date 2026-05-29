const products = [
    { 
        name: "Jordan 4 Retro", 
        price: "7,500", 
        cat: "sneakers", 
        badge: "NEW", 
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=75" 
    },
    { 
        name: "Puffer Jacket", 
        price: "4,500", 
        cat: "jackets", 
        badge: "HOT", 
        img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=75" 
    },
    { 
        name: "Tech Cargoes", 
        price: "3,200", 
        cat: "pants", 
        badge: "SOLD OUT", 
        img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=75" 
    },
    { 
        name: "Oversized Tee", 
        price: "1,800", 
        cat: "shirts", 
        badge: "", 
        img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=75" 
    },
    { 
        name: "Nike Dunk Low", 
        price: "6,800", 
        cat: "sneakers", 
        badge: "", 
        img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=75" 
    }
];

function displayProducts(data) {
    const grid = document.getElementById('productGrid');
    
    grid.innerHTML = data.map(p => `
        <div class="product-card">
            ${p.badge ? `<span class="badge ${p.badge === 'SOLD OUT' ? 'sold-out' : ''}">${p.badge}</span>` : ''}
            <div class="img-container">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <p>KES ${p.price}</p>
                <a href="https://wa.me/254700000000?text=I%20want%20to%20order%20${encodeURIComponent(p.name)}" class="wa-btn">ORDER VIA WA</a>
            </div>
        </div>
    `).join('');
}

function filterData(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.cat === category);
    
    displayProducts(filtered);
}

window.onload = () => displayProducts(products);