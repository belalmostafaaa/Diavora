// Toggle search input box
function toggleSearch() {
    const searchBar = document.getElementById("searchBar");
    const resultsBox = document.getElementById("searchResults");
    if (searchBar.style.display === "block") {
        searchBar.style.display = "none";
        resultsBox.style.display = "none";
        searchBar.value = "";
    } else {
        searchBar.style.display = "block";
        searchBar.focus();
    }
}

// Live search suggestions
function liveSearch() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const resultsBox = document.getElementById("searchResults");
    const products = [
        { name: "Away Polo Tshirt", img: "assets/products/Diavora1.jpeg", link: "#" },
        { name: "Glitch F.C Jersey", img: "assets/products/Diavora.jpeg", link: "#" },
        { name: "Beige Jersey", img: "assets/products/Diavora2.jpeg", link: "#" },
        { name: "Home Polo Tshirt", img: "assets/products/Diavora3.jpeg", link: "#" }
    ];

    // Clear old results
    resultsBox.innerHTML = "";

    if (input === "") {
        resultsBox.style.display = "none";
        return;
    }

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(input)
    );

    if (filtered.length > 0) {
        filtered.forEach(product => {
            const item = document.createElement("div");
            item.className = "search-result-item";
            item.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <span>${product.name}</span>
            `;
            item.onclick = () => {
                window.location.href = product.link;  // Later you can change to product page
            };
            resultsBox.appendChild(item);
        });
        resultsBox.style.display = "block";
    } else {
        resultsBox.innerHTML = "<div class='search-result-item'>No results found</div>";
        resultsBox.style.display = "block";
    }
}

// Login Modal Functions
function openLogin() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById("loginModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
