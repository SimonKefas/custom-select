# Custom Select Dropdowns for Webflow

This JavaScript solution dynamically populates `<select>` dropdowns in Webflow based on predefined arrays, a dynamic year range, and manually defined data.

## Features
- **Dynamic Year Selection**: Define a range using `custom-year="start-end"`, supporting `current` as the latest year.
- **Predefined Language Selection**: Auto-populates languages based on ISO 639-1.
- **Custom Arrays**: Load predefined lists (e.g., fruits, colors, countries) using `custom-select="key"`.
- **External Configuration Support**: Define your options before loading the script using `window.customSelectData`.
- **CDN Compatible**: Load the script from a CDN like jsDelivr for a clean setup.

## Installation
### 1. Define Your Custom Data (Optional)
If you want to override default values, define `window.customSelectData` **before** loading the script.

```html
<script>
  window.customSelectData = {
    languages: [
      { code: 'en', name: 'English' },
      { code: 'es', name: 'Spanish' },
      { code: 'fr', name: 'French' }
    ],
    fruits: ["Mango", "Papaya", "Pineapple"],
    colors: ["Cyan", "Magenta", "Lime"]
  };
</script>
```

### 2. Load the Script before body tag

```html
<script src="https://cdn.jsdelivr.net/gh/SimonKefas/custom-select@latest/script.js"></script>
```

### 3. Add Select Elements in Webflow
```html
<select custom-year="2000-current">
  <option value="">Select a Year</option>
</select>

<select custom-select="languages">
  <option value="">Select a Language</option>
</select>

<select custom-select="fruits">
  <option value="">Select a Fruit</option>
</select>
```

## Usage Guide
### **Dynamic Year Dropdown**
```html
<select custom-year="2010-current"></select>  <!-- Generates 2010 to current year -->
<select custom-year="current-1990"></select>  <!-- Generates current year to 1990 -->
```

### **Predefined Language Dropdown**
```html
<select custom-select="languages"></select>  <!-- Uses predefined languages -->
```

### **Custom Arrays Dropdown**
```html
<select custom-select="fruits"></select>  <!-- Uses "fruits" array from global data -->
<select custom-select="colors"></select>  <!-- Uses "colors" array from global data -->
```

## How It Works
- **Year Handling**: The script reads the `custom-year` attribute, processes `current`, and generates the range.
- **Custom Arrays**: Reads predefined lists from `window.customSelectData` if available, otherwise defaults are used.
- **Appending Instead of Replacing**: If manual `<option>` elements exist, they remain in the dropdown.

## Default Fallback Values
If `window.customSelectData` is not defined, the script uses these defaults:
```javascript
const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' }
];

const customArrays = {
  fruits: ["Apple", "Banana", "Cherry"],
  colors: ["Red", "Green", "Blue"],
  countries: ["USA", "Canada", "UK"]
};
```

## Benefits
✔ **Separation of Data & Logic** – Define your data externally and load the script separately.  
✔ **Modular & Scalable** – Easily add new dropdowns without modifying the script.  
✔ **Keeps Existing Options** – Doesn’t overwrite manually added `<option>` values.  
✔ **Dynamic Current Year Support** – Automatically updates year dropdowns.  
✔ **CDN Ready** – Works with jsDelivr, Cloudflare, etc.  

## Future Enhancements
- API support for fetching real-time language lists.
- Integration with Webflow CMS for dynamic data population.

## Need Help?
For any questions or issues, open an issue on GitHub or contact the script maintainer.