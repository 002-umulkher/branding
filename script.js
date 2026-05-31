// The complete, updated stock list directly from the shop video
const products = [
    { 
        name: "Brazil National Jersey", 
        price: "2,500", 
        cat: "shirts", 
        badge: "HOT", 
        img: "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?auto=format&fit=crop&w=500&q=75" 
    },
    { 
        name: "Nike Retro Jersey", 
        price: "2,800", 
        cat: "shirts", 
        badge: "NEW", 
        img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=500&q=75" 
    },
    { 
        name: "Premium Floral Summer Shirt", 
        price: "2,200", 
        cat: "shirts", 
        badge: "", 
        img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=75" 
    },
    { 
        name: "Air Max Pulse", 
        price: "7,500", 
        cat: "sneakers", 
        badge: "TRENDING", 
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=75" 
    },
    { 
        name: "Adidas Originals Retro", 
        price: "6,800", 
        cat: "sneakers", 
        badge: "", 
        img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=500&q=75" 
    },
    { 
        name: "Leather Street Sliders", 
        price: "1,800", 
        cat: "sliders", 
        badge: "BEST SELLER", 
        img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=500&q=75" 
    },
    { 
        name: "Camo Tactical Cargo Set", 
        price: "4,500", 
        cat: "pants", 
        badge: "NEW", 
        img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=500&q=75" 
    },
    { 
        name: "Premium Linen Drawstring Pants", 
        price: "3,000", 
        cat: "pants", 
        badge: "", 
        img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=500&q=75" 
    },
    { 
        name: "Classic Embroidered Kanzu", 
        price: "3,500", 
        cat: "kanzu", 
        badge: "EXCLUSIVE", 
        img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=75" 
    },
    { 
        name: "Street Culture Snapback", 
        price: "1,200", 
        cat: "caps", 
        badge: "", 
        img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=500&q=75" 
    }
];

function displayProducts(data) {
    const grid = document.getElementById('productGrid');
    
    // Change "254700000000" to your client's real WhatsApp number before launching
    const clientNumber = "254700000000"; 
    
    grid.innerHTML = data.map(p => `
        <div class="product-card">
            ${p.badge ? `<span class="badge ${p.badge === 'SOLD OUT' ? 'sold-out' : ''}">${p.badge}</span>` : ''}
            <div class="img-container">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <p>KES ${p.price}</p>
                <a href="https://wa.me/${clientNumber}?text=I%20want%20to%20order%20the%20${encodeURIComponent(p.name)}" class="wa-btn">ORDER VIA WA</a>
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