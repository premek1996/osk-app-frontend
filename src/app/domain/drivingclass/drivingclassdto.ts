
export class DrivingClassDto {

  instructorId: number;
  startTime: Date;
  courseId: number;
  customerId: number;

  constructor(courseId: number, customerId: number, instructorId: number, startTime: Date) {
    this.courseId = courseId;
    this.customerId = customerId;
    this.instructorId = instructorId;
    this.startTime = startTime;
  }

}
