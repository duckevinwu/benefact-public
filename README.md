# Benefact Link

## Installation + Usage

Add css stylesheet to HTML header

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/duckevinwu/benefact-public@v0.2-alpha/benefactlink.min.css"/>
```

Add scripts at the end of the `<body>` tags
```html
<script src="https://cdn.jsdelivr.net/gh/duckevinwu/benefact-public@v0.2-alpha/benefactlink.min.js"></script>
```

Create a button to open the drawer. This button can be styled as wanted.
```html
<button id="bl-button"></button>
```

If you want multiple buttons that open the drawer on the same page, use the following template for each button:
```html
<button id="bl-button" class="bl-button" data-multiple="true"></button
```
