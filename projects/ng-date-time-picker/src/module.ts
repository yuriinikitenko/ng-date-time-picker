import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {DateTimePickerComponent} from './date-time-picker.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule, DateTimeAdapter, OwlDateTimeIntl} from 'ng-pick-datetime';

export function OwlDateTimeIntlFactory(translate: TranslateService) {
  const owlDateTimeIntl = new OwlDateTimeIntl;
  owlDateTimeIntl.cancelBtnLabel = translate.instant('Cancel');
  owlDateTimeIntl.setBtnLabel = translate.instant('Set');
  return owlDateTimeIntl;
}

@NgModule({
  declarations: [
    DateTimePickerComponent
  ],
  imports: [
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule
  ],
  providers: [
    {
      provide: OwlDateTimeIntl,
      useFactory: OwlDateTimeIntlFactory,
      deps: [TranslateService]
    },
  ],
  exports: [DateTimePickerComponent]
})

export class DateTimePickerModule {

  constructor(private dateTimeAdapter: DateTimeAdapter<any>) {
    var languageMatches = window.location.pathname.match(/\/([a-z]{2})\/|\/([a-z]{2})$/);
    this.dateTimeAdapter.setLocale(languageMatches && languageMatches[1] ? languageMatches[1] : 'en');
  }

}
