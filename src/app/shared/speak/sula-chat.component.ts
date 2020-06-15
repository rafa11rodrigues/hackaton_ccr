import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { RecognitionService } from './recognition.service';

@Component({
  selector: 'app-sula-chat',
  templateUrl: './sula-chat.component.html',
  styleUrls: ['./sula-chat.component.scss']
})
export class SulaChatComponent implements OnDestroy {

  constructor(private recognitionService: RecognitionService,
              private changeDetector: ChangeDetectorRef) {
    this.recognitionService.clearMessages();

    this.recognitionService.result(result => {
      this.addMessage(result);
    })
    this.recognitionService.noMatch(result => {
      this.addMessage(result);
    });
    this.recognitionService.answer('Olá, como posso ajudar?');
    this.recognitionService.start();
  }

  get listening(): boolean {
    return this.recognitionService.isListening();
  }

  addMessage(message: string) {
    this.recognitionService.messages.push(message);
    setTimeout(() => {
      this.changeDetector.detectChanges();
    }, 1000);
  }

  get messages() {
    return this.recognitionService.messages;
  }

  ngOnDestroy() {
    this.recognitionService.clearMessages();
    this.recognitionService.stop();
  }
}
