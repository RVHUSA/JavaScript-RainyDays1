export default {
  show: function() {
      const loaderElement = document.getElementById('loader');
      if (loaderElement) {
          loaderElement.style.display = 'block';
      }
  },
  hide: function() {
      const loaderElement = document.getElementById('loader');
      if (loaderElement) {
          loaderElement.style.display = 'none';
      }
  }
}