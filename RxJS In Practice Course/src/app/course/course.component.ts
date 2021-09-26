import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../model/course";
import { concat, fromEvent, observable, Observable } from "rxjs";
import { Lesson } from "../model/lesson";
import { createHttpObservable } from "../util";
import {
  concatMap,
  debounceTime,
  distinctUntilChanged,
  exhaustMap,
  map,
  mergeMap,
  switchMap,
} from "rxjs/operators";
import { mixinInitialized } from "@angular/material/core";

@Component({
  selector: "course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"],
})
export class CourseComponent implements OnInit, AfterViewInit {
  course$: Observable<Course[]>;
  lessons$: Observable<Lesson[]>;

  @ViewChild("searchInput", { static: true }) mySearchInput: ElementRef;
  courseId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.params["id"];

    this.course$ = createHttpObservable(`/api/courses/${this.courseId}`);
  }

  ngAfterViewInit() {
    const searchLesson$ = fromEvent<any>(
      this.mySearchInput.nativeElement,
      "keyup"
    ).pipe(
      map((event) => event.target.value),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((searchTerm) => this.loadLessons(searchTerm))
    );
    const initialLesson$ = this.loadLessons();
    this.lessons$ = concat(initialLesson$, searchLesson$);
  }

  loadLessons(someSearchTerm: string = ""): Observable<Lesson[]> {
    return createHttpObservable(
      `/api/lessons?courseId=${this.courseId}&pageSize=100&filter=${someSearchTerm}`
    ).pipe(map((res) => res["payload"]));
  }
}