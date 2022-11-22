# Button

## CSS Custom Properties

<Preview>
  <ods-button 
  style="
  --ods-button-bg-color: pink; 
  --ods-button-text-color: deeppink
">
    Custom Fill
</ods-button>
  <ods-button outline style="--ods-button-border-color: blue; --ods-button-text-color: cornflowerblue">Custom outline</ods-button>
</Preview>

```html
<ods-button class="my-button">
  Custom fill
</ods-button>
<ods-button outline class="my-outline-button">
  Custom outline
</ods-button>
```

```css
.my-button {
  --ods-button-bg-color: pink; 
  --ods-button-text-color: deeppink
}
.my-outline-button {
  --ods-button-border-color: blue; 
  --ods-button-text-color: cornflowerblue;
}
```

## CSS Parts

```html
<ods-button class="my-button">
  Custom button size
</ods-button>
```

```css
.my-button::part(button) {
  font-size: 32px; 
}
```

