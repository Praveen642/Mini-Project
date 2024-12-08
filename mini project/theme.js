function toggleRows() {
const hiddenRows = document.querySelectorAll('.hidden-row');
hiddenRows.forEach(row => {
  row.style.display = row.style.display === 'table-row' ? 'none' : 'table-row';
});

const btn = document.querySelector('.see-more-btn');
btn.textContent = btn.textContent === 'See More' ? 'See Less' : 'See More';
}