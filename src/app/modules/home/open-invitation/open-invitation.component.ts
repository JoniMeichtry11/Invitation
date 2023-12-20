import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Invitation } from 'src/app/models/Invitation';

@Component({
  selector: 'app-open-invitation',
  templateUrl: './open-invitation.component.html',
  styleUrls: ['./open-invitation.component.scss'],
  animations: [
    trigger('disappear', [
      state('visible', style({ opacity: 1, display: 'flex' })),
      state('hidden', style({ opacity: 0, display: 'none' })),
      transition('hidden => visible', animate('1500ms ease-out')),
      transition('visible => hidden', animate('500ms ease-out')),
    ])
  ]
})
export class OpenInvitationComponent implements AfterViewInit{
  pageTransitionState: 'visible' | 'hidden' = 'hidden';
  @Output() openInvitationValue = new EventEmitter<Invitation>();

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.pageTransitionState = 'visible';
    }, 200);
  }
  openInvitation() {
    this.pageTransitionState = 'hidden';
    this.openInvitationValue.emit(Invitation.Open);
  }
}
