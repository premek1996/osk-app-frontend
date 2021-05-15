import {Location} from "./location";

export interface DrivingClass {

  id?: number;
  startTime: Date;
  endTime: Date;
  locations: Location[];

}
