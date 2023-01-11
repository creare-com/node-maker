import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NodeInputsComponent } from './node-inputs/node-inputs.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { CustomModal } from './modal/modal.component';
import { PipelineEditor } from './pipeline-editor/pipeline-editor.component';
import { RouteComponent } from './route/route/route.component';
import { RouteService } from './route/route/route.service';
import { LegendComponent } from './legend/legend/legend.component';
import { BusyboxComponent } from './busybox/busybox.component';
import { BusyboxService } from './busybox/busybox.service';
import { MessageboxComponent } from './messagebox/messagebox.component';
import { SpecsService } from './node-inputs/specs.service';
import { PipelinesService } from './node-inputs/pipelines.service';
import { LeafletService } from './services/leaflet.service';
import { SetupService } from './services/setup.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LegendService } from './legend/legend/legend.service';

@NgModule({
  declarations: [
    AppComponent,
    NodeInputsComponent,
    CustomModal,
    PipelineEditor,
    RouteComponent,
    LegendComponent,
    BusyboxComponent,
    MessageboxComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'NodeMaker', component: AppComponent},
      {path: 'WIRP', component: AppComponent},
      {path: '', redirectTo: '/NodeMaker', pathMatch: 'full'}
    ]),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgJsonEditorModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    SpecsService,
    PipelinesService,
    LeafletService,
    SetupService,
    BusyboxService,
    RouteService,
    LegendService,
    MessageboxComponent,
    LegendComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
