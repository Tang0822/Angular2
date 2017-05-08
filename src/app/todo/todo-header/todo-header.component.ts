import {Component, OnInit, Output, EventEmitter, ElementRef} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged'

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})

export class TodoHeaderComponent implements OnInit {

  ngOnInit(): void {
  }

  inputValue: string = '';
  placeholder: string = 'What needs to be done?';
  delay: number = 300;

  @Output() onTextChanges = new EventEmitter<string>();
  @Output() onEnterUp = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) {
    const event$ = Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .map(() => this.inputValue)
      .debounceTime(this.delay)
      .distinctUntilChanged();
    event$.subscribe(input => this.onTextChanges.emit(input));
  }

  enterUp() {
    this.onEnterUp.emit(true);
    this.inputValue = '';
  }

}
