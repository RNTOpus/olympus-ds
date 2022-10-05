# Angular

## Configuration

::: info
Add `CUSTOM_ELEMENTS_SCHEMA` in `@NgModule.schemas`, as example below:
:::

```ts{2,10}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

```

## Usage

::: info Example
Button component
:::

```ts{1,5}
import '@olympus/button';

@Component({
  selector: 'my-component',
  template: `<ods-button />`,
  styleUrls: ['./my.component.css'],
})
export class MyComponent {}
```

## Tokens

::: warning Styles
Import **Olympus** tokens or rewrite tokens with your own values
:::

```css
@import "@olympus/tokens/index.css";
```
