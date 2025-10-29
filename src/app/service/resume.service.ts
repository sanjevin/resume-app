import { Injectable } from '@angular/core';
import resumeData from 'src/assets/data/resumeV2.json';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }

  getResumeData() {
    return resumeData;
  }

}
