import {Course} from '../course/course';
import {TheoreticalClass} from '../theoreticalclass/theoreticalclass';

export interface TheoreticalCourse {

  id?: number;
  startDate: Date;
  course: Course;
  theoreticalClasses: TheoreticalClass;

}
