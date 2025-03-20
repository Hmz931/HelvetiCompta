
# Assets Directory

This directory contains various assets used throughout the application:

## Structure

- `/documents/` - Document files (PDFs, Excel, etc.)
  - `/tax/` - Tax-related documents (TVA forms, tax guides)
  - `/excel/` - Excel templates and examples
  - `/pdf/` - PDF resources and guides
- `/images/` - Image assets (logos, illustrations, etc.)

## Usage Guidelines

1. **File Naming**: Use lowercase with underscores for spaces (e.g., `vat_form_example.png`)
2. **Organization**: Place files in appropriate subdirectories based on type and purpose
3. **Formats**:
   - Use PNG for images requiring transparency
   - Use JPG for photographs
   - Use SVG for icons and logos when possible
   - Use PDF for printable documents
   - Use XLSX for Excel spreadsheets

## Adding New Assets

When adding new assets, ensure they are:
- Properly optimized (compressed images, reduced file sizes)
- Named descriptively
- Placed in the correct subdirectory

## Referencing Assets

In the application code, reference assets using the path starting from `/assets/`:

```jsx
// Example
<img src="/assets/images/logo.png" alt="Company Logo" />
```

```jsx
// For documents
<a href="/assets/documents/pdf/guide.pdf">Download Guide</a>
```
