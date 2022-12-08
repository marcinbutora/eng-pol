import {Component, OnInit} from '@angular/core';
import {words} from "../mock-data/words";
import {Word} from "../model/word";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EngPol Words Translate Database';
  dataWords: Word[] = words;
  wordsInDatabase: number = this.dataWords.length;
  filteredByName: Word[] = [];
  isFormSubmitted: boolean = false;
  isCorrectAnswer: boolean = false;
  isDisabled: boolean = true;
  answersMessage: string = "";
  randomWord = this.dataWords[Math.floor(Math.random() * this.dataWords.length)];

  translateForm = new FormGroup({
    engWord: new FormControl(""),
    polWord: new FormControl("",Validators.required)
  })

  ngOnInit() {
    this.loadFilteredDataByRandomWord(this.randomWord.eng);
  }

  loadFilteredDataByRandomWord = (randomWord: string) => {
    this.filteredByName = this.dataWords.filter(t => t.eng == randomWord);
  }

  checkAnswer = () => {
    this.isFormSubmitted = true;
    for (const answer of this.filteredByName) {
      this.isCorrectAnswer = answer.pol.includes(this.translateForm.controls["polWord"].value as string);
      this.showMessage(answer);
    }
  }

  private showMessage(answer: Word) {
    if (answer.pol.length == 1) {
      this.answersMessage = `Correct answer is: ${answer.pol}`;
    } else {
      this.answersMessage = `Correct answers are: ${answer.pol.join(", ")}`;
    }
  }

  getRandomWord = () => {
    this.randomWord = this.dataWords[Math.floor(Math.random() * this.dataWords.length)];
    this.loadFilteredDataByRandomWord(this.randomWord.eng);
    this.translateForm.reset();
  }


}
