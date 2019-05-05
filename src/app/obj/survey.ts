/**
 * This class will store the data of the survey
 */
export enum SurveyStatus
{
    deployed = "Published",
    draft = "Draft",
    archived = "Archived"
}

export class Survey {
  id: number;
  name: string;
  created: string;
  lastModified: string;
  version: number;
  parent_id: number;
  status: SurveyStatus;
}
