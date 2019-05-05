import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Survey } from '../obj/survey';
import { SurveyStatus } from '../obj/survey';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const survey = [
      { id: 11, name: 'Patient Post Radio', created: '01/01/2019', lastModified: '01/01/2019', status: SurveyStatus.deployed },
      { id: 12, name: 'Patient Pre Radio', created: '01/02/2019' , lastModified: '01/01/2019', status: SurveyStatus.archived },
      { id: 13, name: 'Feedback', created: '01/05/2018' , lastModified: '01/01/2019', status: SurveyStatus.draft },
      { id: 14, name: 'Patient Post C', created: '06/12/2019' , lastModified: '01/01/2019', status: SurveyStatus.draft },
      { id: 15, name: 'Doctor Feedback', created: '01/12/2019' , lastModified: '01/01/2019', status: SurveyStatus.draft },
      { id: 16, name: 'Hospital Feedback', created: '09/08/2019' , lastModified: '01/01/2019', status: SurveyStatus.draft },
      { id: 17, name: 'Services', created: '01/01/2019' , lastModified: '01/01/2019', status: SurveyStatus.draft },
      { id: 18, name: 'Dr IQ', created: '01/01/2019' , lastModified: '01/01/2019', status: SurveyStatus.draft },
      { id: 19, name: 'Radiation', created: '01/01/2019' , lastModified: '01/01/2019', status: SurveyStatus.draft },
      { id: 20, name: 'Cancer Clinic', created: '01/01/2019' , lastModified: '01/01/2019', status: SurveyStatus.draft }
    ];
    return {surveys: survey};
  }

  genId(surveys: Survey[]): number {
    return surveys.length > 0 ? Math.max(...surveys.map(survey => survey.id)) + 1 : 11;
  }
}
