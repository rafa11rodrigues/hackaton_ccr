import { Injectable } from '@angular/core';
import Speech from 'speak-tts';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  speech: Speech;

  constructor() {
    this.speech = new Speech();
    this.speech.init({ rate: 1 })
      .then(data => { console.log(data); })
      .catch(error => { console.log(error); });
  }

  speak(text: string) {
    this.speech.speak({ text });
  }
}
