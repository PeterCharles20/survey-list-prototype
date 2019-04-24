import { Component, OnInit } from '@angular/core';

import { Survey } from '../survey';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-forms-list',
  templateUrl: './surveys-list.component.html',
  styleUrls: ['./surveys-list.component.css']
})
export class SurveysListComponent implements OnInit {

  surveys: Survey [];
  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    this.getSurveys();
  }
  getSurveys(): void {
    this.surveyService.getSurveys()
      .subscribe(surveys => this.surveys = surveys);
  }
}
