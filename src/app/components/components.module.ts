import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { IonicModule } from '@ionic/angular';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';

@NgModule({
  declarations: [RoomsComponent,EmptyScreenComponent],
  imports: [CommonModule, IonicModule],
  exports: [RoomsComponent, EmptyScreenComponent],
  entryComponents: [RoomsComponent],
})
export class ComponentsModule {}
