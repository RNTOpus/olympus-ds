# Divider

## Vertical

`attribute` `boolean` `false`

**Preview**

<Preview  is-grid="true">
 <div>
   <small>Horizontal (default):</small>
   <ods-divider style="width: 100px" />
  </div>
  <div style="display: flex">
   <small>Vertical:</small>
   <ods-divider vertical />
  </div>
</Preview>

**Code**

```html
<ods-divider />
<ods-divider vertical />
```

> React

```jsx
... // import

const App = () => (
  <>
    <OdsDivider /> // default
    <OdsDivider vertical />
  </>
)
```

## CSS Custom Properties

<Preview  is-grid="true">
  <div>
   <small>Default</small>
   <ods-divider />
  </div>
  <div>
    <small>Changed the color</small>
   <ods-divider style="--ods-divider-color: blue " />
  </div>
  <div>
    <small>Changed the Size</small>
   <ods-divider style="--ods-divider-width: 16px " />
  </div>
  <div>
    <small>Changed the distance</small>
    <ods-divider style="--ods-divider-spacing: 36px " />
    <ods-divider />
  </div>
</Preview>

```html
<ods-divider class="custom-color" />
<ods-divider class="custom-size" />
<ods-divider class="custom-spacing" />
```

```css
.custom-color {
  --ods-divider-color: blue;
}
.custom-size {
  --ods-divider-width: 16px;
}
.custom-spacing {
  --ods-divider-spacing: 36px;
}
```
