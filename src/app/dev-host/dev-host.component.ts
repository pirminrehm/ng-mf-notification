import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ViewChild,
} from '@angular/core';
import { AdDirective } from './ad.directive';

interface AbstractAddAlertButtonComponent {
  location: string;
  type: 'weather' | 'civil-protection';
}

@Component({
  selector: 'ntf-dev-host',
  templateUrl: './dev-host.component.html',
  styleUrls: ['./dev-host.component.scss'],
})
export class DevHostComponent {
  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;
  location = '';
  isWeather = true;
  componentRef: ComponentRef<AbstractAddAlertButtonComponent> | undefined;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  setTypeWeather(isWeather: boolean) {
    this.isWeather = isWeather;
  }

  async createComponent() {
    const remote = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:5000/remoteEntry.js',
      exposedModule: './AddAlertButtonComponent',
    });

    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        remote.AddAlertButtonComponent
      ) as any;

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef =
      viewContainerRef.createComponent<AbstractAddAlertButtonComponent>(
        componentFactory
      );
    this.componentRef.instance.location = this.location;
    this.componentRef.instance.type = this.isWeather
      ? 'weather'
      : 'civil-protection';
  }
}
