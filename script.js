document.addEventListener('DOMContentLoaded', function() {
  // 1) Get predefined data or fallback to default
  const globalData = window.customSelectData || {};
  
  const languages = globalData.languages || [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'zh', name: 'Chinese' }
  ];

  const customArrays = globalData || {  // Merge globalData if available
    fruits: ["Apple", "Banana", "Cherry", "Date"],
    colors: ["Red", "Green", "Blue", "Yellow"],
    countries: ["USA", "Canada", "UK", "Germany"]
  };

  const currentYear = new Date().getFullYear(); // Get current year

  // 2) Select elements
  const yearSelects = document.querySelectorAll('select[custom-year]');
  const languageSelects = document.querySelectorAll('select[custom-select="languages"]');
  const customSelects = document.querySelectorAll('select[custom-select]');

  // 3) Populate Year Dropdowns
  yearSelects.forEach(select => {
    let range = select.getAttribute('custom-year');
    if (!range) return;

    // Replace "current" with actual year
    range = range.replace("current", currentYear);
    let [start, end] = range.split('-').map(Number);

    if (isNaN(start) || isNaN(end)) return;
    if (start > end) [start, end] = [end, start];  // Ensure correct order

    for (let year = end; year >= start; year--) {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      select.appendChild(option);
    }
  });

  // 4) Populate Language Dropdowns
  languageSelects.forEach(select => {
    languages.forEach(lang => {
      const option = document.createElement('option');
      option.value = lang.code;
      option.textContent = lang.name;
      select.appendChild(option);
    });
  });

  // 5) Populate Custom Arrays
  customSelects.forEach(select => {
    const key = select.getAttribute('custom-select');

    if (customArrays[key]) {
      customArrays[key].forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        select.appendChild(option);
      });
    }
  });
});
