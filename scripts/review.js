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