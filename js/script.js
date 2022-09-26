// console.log("Script is laoded!!!!!!");
const menu = document.querySelector("#menu-btn");
const header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
  document.body.classList.toggle("active");
};

window.onscroll = () => {
  if (window.innerWidth < 1200) {
    menu.classList.remove("fa-times");
    header.classList.remove("active");
    document.body.classList.remove("active");
  }
};

const productPreviewContainer = document.querySelector(
  ".products-preview-container"
);
const productPreview = document.querySelectorAll(
  ".products-preview-container .product-preview"
);

document.querySelectorAll(".products .slide .btn").forEach((detailBtn) => {
  detailBtn.onclick = () => {
    let name = detailBtn.getAttribute("data-product");
    productPreviewContainer.style.display = "block";
    productPreview.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name === target) {
        preview.style.display = "flex";
      }
    });
  };
});

document
  .querySelectorAll(".products-preview-container .product-preview .fa-times")
  .forEach((close) => {
    close.onclick = () => {
      productPreviewContainer.style.display = "none";
      productPreview.forEach((closePreview) => {
        closePreview.style.display = "none";
      });
    };
  });

const productsSliderSwiper = new Swiper(".products-slider", {
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

const reviewsSliderSwiper = new Swiper(".reviews-slider", {
  autoplay: {
    delay: 1000,
  },
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
