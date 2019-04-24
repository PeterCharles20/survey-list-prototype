import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Survey } from '../survey';
import {SurveyService} from '../survey.service';



@Component({
  selector: 'app-form-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})
export class SurveyDetailsComponent implements OnInit {

  @Input() survey: Survey;

  constructor(
    private route: ActivatedRoute,
    private formService: SurveyService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getSurvey();
  }

  getSurvey(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.formService.getSurvey(id)
      .subscribe(survey => this.survey = survey);
  }
  goBack(): void {
    this.location.back();
  }
}
