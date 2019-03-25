# katex-element

<custom-element> for Katex 
See [Katex website](https://www.katex.org/) for more information about Katex.
  
## Usage in browser

Load the module

```
<script src="dist/katex-element.umd.js" type="module"></script>
```

Use the `<katex-element>` where you want

```
<katex-element>\beta * 2</katex-element>
```

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="dist/katex-element.umd.js" type="module"></script>
  </head>
  <body>
    <katex-element>\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)</katex-element>
  </body>
</html>
```
