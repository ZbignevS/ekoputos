import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../models/weather.model';
import { Observable } from 'rxjs';


export interface Doctags {
  doctags: [{
    Id: number;
    Tag: string;
    Title: string;
    CreationDate: string;
    HelloWorldDocTopicId: number;
    TopicCount: string;
  }];
}

export interface Topics {
  res: [{
    Id: number;
    DoctagId: number;
    IsHelloWorldTopic: boolean;
    Title: string;
    CreationDate: string;
    ViewCount: number;
    LastEditDate: string;
    LastEditUserId: number;
    ContributorCount: number;
    ExampleCount: number;
    ExampleScore: number;
    SyntaxHtml: string;
    ParametersHtml: string;
    RemarksHtml: string;
    IntroductionMarkdown: string;
    SyntaxMarkdown: string;
    ParametersMarkdown: string;
    RemarksMarkdown: string;
    HelloWorldVersionHtml: string;
    VersionJson: string;
  }];
}

export interface Examples {
  res: [{
    Id: number;
    DocTopicId: number;
    Title: string;
    CreationDate: string;
    LastEditDate: string;
    Score: number;
    ContributorCount: number;
    BodyHtml: string;
    BodyMarkdown: string;
    IsPinned: boolean;
  }];
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  docTags: Doctags;
  topics: Topics;
  examples: Examples;
  selectedTopic;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
    this.getDoctags()
      .then(data => {
        this.docTags = data;
      });
  }

  private getDoctags(): Promise<Doctags> {
    const url = 'http://localhost:1337/Doctags';
    return this._http.get<Doctags>(url).toPromise();
  }

  private getTopics(id: string): Promise<Topics> {
    const url = 'http://localhost:1337/Topics?q=id=' + id;
    return this._http.get<Topics>(url).toPromise();
  }

  private getExamples(id: string): Promise<Examples> {
    const url = 'http://localhost:1337/Examples?q=id=' + id;
    return this._http.get<Examples>(url).toPromise();
  }

  public showTopic(event: any) {
    this.getTopics(event)
      .then(data => {
        this.topics = data;
      });
    console.log(event);
  }

  public showExamples(id: string) {
    this.getExamples(id)
      .then(data => {
        this.examples = data;
        console.log(data);
      });
  }

  toHumanDate(date: string): Date {
    const partOne = date.split('(')[1];
    const partTwo = Number(partOne.split('-')[0]);
    const dateObj = new Date(partTwo);
    return dateObj;
  }

  // getConfig(city: string): Promise<any> {
  //   const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3e430d76f0074ce63575d48b7fd38db7';
  //   return this._http.get(url).toPromise();
  // }

  // showWeather(event: string) {
  //   console.log(event);
  //   this.getConfig(event)
  //   .then(data => {
  //     console.log(data);
  //     this.weather = data.weather[0].main;
  //   });
  // }

}
