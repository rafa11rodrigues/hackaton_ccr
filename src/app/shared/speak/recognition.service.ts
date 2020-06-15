import { Injectable, NgZone } from '@angular/core';
import { SpeechService } from './speech.service';

declare const annyang: any;

@Injectable({
  providedIn: 'root'
})
export class RecognitionService {

  messages: string[] = [];

  constructor(private speechService: SpeechService) {
    annyang.setLanguage('pt-BR');

    this.addCommands({
      'Olá (Sula)': () => { this.answer('Olá, querido!'); },
      'Oi (Sula)': () => { this.answer('Oi, querido!'); },
      'Alô (Sula)': () => { this.answer('Alô, quem fala?'); },
      'Que horas são': () => { this.answer('Agora são ' + this.currentTime) },
      'Quem é você': () => { this.answer('Eu sou a Sula, sua melhor companheira nas estradas da vida'); }
    });

    this.noMatch(result => {
      this.answer('Não entendi o que você disse');
    });
    this.error(error => {
      console.log(`error: ${JSON.stringify(error)}`);
    });
    this.start();
  }

  clearMessages() {
    this.messages = [];
  }

  get currentTime() {
    const today = new Date()
    const H = today.getHours();
    const M = today.getMinutes();
    const hours = `${H} ${H >= 1 ? 'horas' : 'hora'}`;
    const minutes = M === 0 ? '' : ` e ${M} ${M > 1 ? 'minutos' : 'minuto'}`;
    return hours + minutes;
  }

  answer(text: string) {
    setTimeout(() => {
      this.messages.push(text);
      this.speechService.speak(text);
    }, 1000);
  }

  start() {
    annyang.start();
  }

  stop() {
    annyang.abort();
  }

  result(callback: (text: any) => any) {
    annyang.addCallback('resultMatch', values => {
      callback(values);
    });
  }

  noMatch(callback: (text: any) => any) {
    annyang.addCallback('resultNoMatch', values => {
      callback(values[0]);
    });
  }

  error(callback: (value) => any) {
    annyang.addCallback('error', err => {
      callback(err);
    });
  }

  addCommands(command: any) {
    annyang.addCommands(command);
  }

  trigger(text: string) {
    annyang.trigger(text);
  }

  isListening() {
    return annyang.isListening();
  }

  removeCommands(commands: string | string[]) {
    annyang.removeCommands(commands);
  }
}
