import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {

  viewRef: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }

  setViewRef(viewRef: ViewContainerRef) {
    this.viewRef = viewRef;
  }

  addComponent(compToAdd: any): any {
    //accessing component factory
    const factory = this.resolver.resolveComponentFactory(compToAdd);
    //creating component using factory and passing it to an injector
    const compRef = factory.create(this.viewRef.injector);
    //inserting view of the component
    this.viewRef.insert(compRef.hostView);
    return compRef.instance;

  }

  removeComponent() {

    this.viewRef.detach();

 }
}
