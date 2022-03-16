export default {
  mounted: (el) => {
    function loadImage() {
      if (el.classList.contains("loaded")) return;

      // Since we are loading background images and we don't have a listener for a load event. We are creating an image element in memory and loading it with the same src and watching for that load event
      //var image = new Image();
      //image.addEventListener("load", () => {
      el.classList.add("loaded");
      //});
      el.addEventListener("error", () => console.log("error"));
      el.style.backgroundImage = `url(${el.dataset.src})`;
      //image.src = el.dataset.src;
    }

    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: "0.1",
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }
    if (window["IntersectionObserver"]) {
      createObserver();
    } else {
      loadImage();
    }
  },
};
