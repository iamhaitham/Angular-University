import { Component, OnInit } from "@angular/core";
import { Course } from "../model/course";
import { interval, Observable, of, throwError, timer } from "rxjs";
import {
  catchError,
  delayWhen,
  finalize,
  map,
  retryWhen,
  shareReplay,
  tap,
} from "rxjs/operators";
import { createHttpObservable } from "../util";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  constructor() {}

  ngOnInit() {
    const http$: Observable<Course[]> = createHttpObservable("/api/courses");

    const courses$ = http$.pipe(
      tap(() => console.log("HTTP Request executed")),
      map((coursesInJSON: Course[]) => Object.values(coursesInJSON["payload"])),
      catchError((err) => {
        console.log("Error occurred",err);
        return throwError(err)
      }),
      finalize(()=>console.log("Finalize executed..")),
      shareReplay(),
    );

    this.beginnerCourses$ = courses$.pipe(
      map((courses: Course[]) =>
        courses.filter((course: Course) => course.category == "BEGINNER")
      )
    );

    this.advancedCourses$ = courses$.pipe(
      map((courses: Course[]) =>
        courses.filter((course) => course.category == "ADVANCED")
      )
    );
  }
}
