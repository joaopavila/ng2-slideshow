# angular2-slideshow

## Usage
Install via npm:
```shell
npm install --save-dev angular2-slideshow
```

Import in your module

```ts
import { CarouselModule } from 'angular2-slideshow';

@NgModule({
  imports: [
    CarouselModule
  ]
})
```

Usage
```html
<app-ng2-carousel [slides]="arrayImages" [properties]="properties"></app-ng2-carousel>
```

`[slides]` array of images

```ts
  arrayImages = [
    {image: 'foto1.jpg'},
    {image: 'foto2.jpg'},
    {image: 'foto3.jpg'}
  ];
```

`[properties]` object with carousel features

```ts
  properties = {
    photoInterval: 3000, // Timeout of photo change
    loopSlides: false, // Carousel will be looped in images, getting false, it will stop in the last image
    bulletNavigation: true, // Enable bullets
    textInformation: false, // Text with some image information
    styleBulletNavigation: 'circle' // Bullets style, there are 3, circle, squad and big_squad
  };
```

## LIB Features
```ts
  play();
  pause();
```

Hovering the cursor above image will stop transition. Leave the cursor to enable transition again.
