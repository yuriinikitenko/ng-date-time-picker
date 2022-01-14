import {Component, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {PickerType} from "ng-pick-datetime/date-time/date-time.class";

@Component({
  selector: 'date-time-picker',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateTimePickerComponent),
    multi: true
  }],
  templateUrl: './date-time-picker.component.html'
})

export class DateTimePickerComponent implements ControlValueAccessor {
  _value: any;
  _pickerType: PickerType = 'both';
  _stepMinute: number = 1;

  @Input('pickertype')
  set pickerType(value: PickerType) {
    this._pickerType = value;
  }

  @Input() id: string | undefined;
  @Input('stepMinute')
  set stepMinute(value: any) {
    this._stepMinute = parseInt(value);
  }

  @Input() firstDayOfWeek: number = 1;

  onChange = (value: any) => {}

  writeValue(value: any) {
    this._value = value;
    this.onChange(this._value);
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  onTouched = () => {}

  changed() {
    this.writeValue(this._value);
    this.onTouched();
  }

}
