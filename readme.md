## Jekyll to PDF

A quick and dirty script to convert a folder full of jekyll blog posts into a single PDF document.

Example usage:

```
node index.js input_folder > prepped.md
pandoc -s prepped.md -o result.pdf --pdf-engine=xelatex -V mainfont="Linux Libertine O" --include-in-header titlesec.tex
```