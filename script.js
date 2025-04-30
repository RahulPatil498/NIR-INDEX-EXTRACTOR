function extractIndexes() {
    const inputA = document.getElementById('inputA').value;
    const inputIndexes = document.getElementById('inputIndexes').value;
    const outputDiv = document.getElementById('output');
  
    try {
      const a = inputA.split(',').map(v => parseFloat(v.trim()));
      const indexes = inputIndexes.split(',').map(i => parseInt(i.trim()));
      const extracted = indexes.map(i => {
        if (i >= 0 && i < a.length) return a[i];
        else return `Index ${i} out of range`;
      });
      outputDiv.textContent = extracted.join(', ');
    } catch (err) {
      outputDiv.textContent = 'Error: Invalid input.';
    }
  }
  
  function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    document.getElementById('themeText').textContent = newTheme === 'dark' ? 'Dark Mode' : 'Light Mode';
  }
  