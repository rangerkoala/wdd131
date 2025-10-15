const productSelect = document.getElementById('productName');

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

products.forEach(product => {
    const productsOption = document.createElement('option');
    productsOption.textContent = product.name;
    productsOption.value = product.id;
    productSelect.append(productsOption);
});

const btnSubmit = document.getElementById('btnSubmit');

// review counter

const reviewCountElement = document.getElementById("reviewCount")
if (reviewCountElement) {
  let reviewCount = localStorage.getItem("reviewCount")
  if (!reviewCount) {
    reviewCount = 0
  }
  reviewCount = Number.parseInt(reviewCount) + 1
  localStorage.setItem("reviewCount", reviewCount)
  reviewCountElement.textContent = reviewCount
}