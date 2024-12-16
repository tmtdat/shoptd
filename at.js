// JavaScript để tự động sắp xếp sản phẩm theo giá khi tải trang
window.addEventListener('DOMContentLoaded', (event) => {
    const frameContainer = document.querySelector('.frame-container');
    const products = Array.from(frameContainer.querySelectorAll('.frame-box'));

    // Hàm sắp xếp sản phẩm theo giá (data-price)
    products.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute('data-price'));
        const priceB = parseFloat(b.getAttribute('data-price'));

        return priceA - priceB; // Sắp xếp theo giá từ thấp đến cao
    });

    // Xóa tất cả sản phẩm trong container
    frameContainer.innerHTML = '';

    // Thêm các sản phẩm đã được sắp xếp vào lại container
    products.forEach(product => {
        frameContainer.appendChild(product);
    });
});

// Đảm bảo modal bị ẩn khi tải trang
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('productModal').style.display = 'none';
});

// Modal hiển thị chi tiết sản phẩm khi click vào
document.querySelectorAll('.frame-box').forEach(box => { 
    box.addEventListener('click', function() {
        const productName = this.querySelector('p').textContent;
        const productSummary = this.getAttribute('data-summary');

        // Set the modal content
        document.getElementById('modalProductName').textContent = productName;
        document.getElementById('modalProductSummary').textContent = productSummary;

        // Show the modal
        document.getElementById('productModal').style.display = 'flex'; // Dùng flex thay vì block
    });
});

// Close the modal when the user clicks on <span> (x)
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('productModal').style.display = 'none';
});

// Close the modal when the user clicks anywhere outside of the modal
window.addEventListener('click', function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});



// Buy Now button functionality
document.getElementById('buyNowBtn').addEventListener('click', function() {
    alert('Cảm ơn bạn đã mua hàng!');
});

// Navigation functionality for sliders
document.querySelectorAll('.slider-btn').forEach(button => {
    button.addEventListener('click', function() {
        const frameContainer = this.parentElement.querySelector('.frame-container');
        const scrollAmount = frameContainer.offsetWidth / 2; // Scroll by half the width of the container

        if (this.classList.contains('next')) {
            frameContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        } else {
            frameContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth',
            });
        }
    });
});
