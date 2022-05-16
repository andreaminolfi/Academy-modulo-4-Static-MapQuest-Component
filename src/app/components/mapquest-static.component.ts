import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mapquest-static',
  template: `
    <img
      src="https://www.mapquestapi.com/staticmap/v5/map?key=Go3ZWai1i4nd2o7kBuAUs4y7pnpjXdZn&center=Rome&size=600,400&zoom=10"
      width="100%"
    />
  `,
})
export class MapQuestStaticComponent {}
