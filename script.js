// Add or remove items here to update the site instantly
const products = [
    { 
        name: "Jordan 4 Retro", 
        price: "7,500", 
        cat: "sneakers", 
        badge: "NEW", 
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" 
    },
    { 
        name: "Puffer Jacket", 
        price: "4,500", 
        cat: "jackets", 
        badge: "HOT", 
        img: "https://images.unsplash.com/photo-1551028719-00167b16eac5" 
    },
    { 
        name: "Tech Cargoes", 
        price: "3,200", 
        cat: "pants", 
        badge: "SOLD OUT", 
        img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246" 
    },
    { 
        name: "Oversized Tee", 
        price: "1,800", 
        cat: "shirts", 
        badge: "", 
        img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" 
    },
    { 
        name: "Nike Dunk Low", 
        price: "6,800", 
        cat: "sneakers", 
        badge: "", 
        img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519" 
    },
    {
       name: "Arsenal Jersey", 
        price: "6,800", 
        cat: "jerseys", 
        badge: "", 
        img: "" 
    }

];

function displayProducts(data) {
    const grid = document.getElementById('productGrid');
    
    // Using .map() to create the HTML for every product in the list
    grid.innerHTML = data.map(p => `
        <div class="product-card">
            ${p.badge ? `<span class="badge ${p.badge === 'SOLD OUT' ? 'sold-out' : ''}">${p.badge}</span>` : ''}
            <img src="${p.img}" alt="${p.name}">
            <div class="product-info">
                <h3>${p.name}</h3>
                <p>KES ${p.price}</p>
                <a href="https://wa.me/254700000000?text=I%20want%20to%20order%20${p.name}" class="wa-btn">ORDER VIA WHATSAPP</a>
            </div>
        </div>
    `).join('');
}

function filterData(category, btn) {
    // 1. Update Active Button UI
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // 2. Filter the Data
    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.cat === category);
    
    // 3. Re-render the Grid
    displayProducts(filtered);
}

// Show all products when the page finishes loading
window.onload = () => displayProducts(products);