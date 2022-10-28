# Angular

## Configuration

::: tip
Add `CUSTOM_ELEMENTS_SCHEMA` in `@NgModule.schemas`, as example below:
:::

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core'; // [!code ++]
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // [!code ++]
})
export class AppModule { }

```

## Usage

::: info Example
Button component
:::

```ts
import '@olympus/components/button'; // [!code ++]

@Component({
  selector: 'my-component',
  template: `<ods-button />`, // [!code ++]
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
