import {Location} from "./location";
import {Instructor} from "../instructor/instructor";
import {Customer} from "../customer/customer";
import {Course} from "../course/course";

export interface DrivingClass {

  id?: number;
  startTime: Date;
  course: Course;
  customer: Customer;
  instructor: Instructor;
  locations?: Location[];

}
