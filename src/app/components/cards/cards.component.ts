import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  template: `
    <div class="container">
      <div class="card mt-5" style="width: 18rem;" >
        <img src="" class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class CardsComponent {}
