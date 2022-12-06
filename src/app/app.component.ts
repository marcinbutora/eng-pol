import { Component } from '@angular/core';
import {words} from "../mock-data/words";
import {Word} from "../model/word";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EngPol Words Translate Database';
  dataWords: Word[] = words;
  wordsInDatabase: number = this.dataWords.length;

  randomWord = this.dataWords[Math.floor(Math.random() * this.dataWords.length)];
}
