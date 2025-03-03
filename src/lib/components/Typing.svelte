<script>
    document.addEventListener("DOMContentLoaded", function () {
  let lines = document.querySelectorAll('.typing-animation p');
  let delay = 0;
  lines.forEach((line) => {
    setTimeout(() => {
      line.style.width = line.scrollWidth + 'px';
      line.style.opacity = 1;
      setTimeout(() => {
        line.style.borderRight = 'none';
      }, 2000);
    }, delay);
    delay += 2500;
  });
</script>