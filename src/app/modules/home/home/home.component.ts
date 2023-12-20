import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Invitation } from 'src/app/models/Invitation';
import { MusicService } from 'src/app/services/music.service';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('disappear', [
      state('visible', style({ opacity: 1, display: 'flex' })),
      state('hidden', style({ opacity: 0, display: 'none' })),
      transition('hidden => visible', animate('1500ms ease-in-out')),
    ])
  ]
})
export class HomeComponent {
  showInvitation: Invitation = Invitation.Open;
  showPhotos: boolean = false;
  pageTransitionState: 'visible' | 'hidden' = 'hidden';

  constructor(
    private toastr: ToastrService,
    private clipboardService: ClipboardService,
    private musicService: MusicService
  ) {
    this.registrarEventoPopState();
  }

  showInvitationMethod(invitation: Invitation){
    if(invitation === Invitation.Open){
      this.showInvitation = Invitation.Open
      setTimeout(() => {
        this.pageTransitionState = 'visible';
      }, 500);
      this.musicService.setMusicPlaying(true);
    } else {
      this.showInvitation = Invitation.Close;
      this.pageTransitionState = 'hidden';
    }
  }

  showSuccessCVU() {
    this.clipboardService.copyFromContent('0000003100068110822374');
    this.toastr.success('Copiaste el cvu con éxito', '¡Listo! 🤑');
  }
  showSuccessAlias() {
    this.clipboardService.copyFromContent('27Febrero.mp');
    this.toastr.success('Copiaste el Alias con éxito', '¡Listo! 🤑');
  }

  private registrarEventoPopState() {
    window.addEventListener('popstate', () => {
      this.showPhotos = !this.showPhotos;
      if(this.pageTransitionState === 'visible'){
        this.pageTransitionState = 'hidden';
      } else {
        this.pageTransitionState = 'visible';
      }
    });
  }
}
