import {
  ComponentFixture,
  fakeAsync,
  flush,
  flushMicrotasks,
  TestBed,
  tick,
  waitForAsync,
} from "@angular/core/testing";
import { CoursesModule } from "../courses.module";
import { DebugElement } from "@angular/core";

import { HomeComponent } from "./home.component";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { CoursesService } from "../services/courses.service";
import { HttpClient } from "@angular/common/http";
import { COURSES } from "../../../../server/db-data";
import { setupCourses } from "../common/setup-test-data";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { click } from "../common/test-utils";

fdescribe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;
  let hTMLElement: HTMLElement;
  const coursesServiceSpy = jasmine.createSpyObj("CoursesService", [
    "findAllCourses",
  ]);

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CoursesModule, NoopAnimationsModule],
        providers: [{ provide: CoursesService, useValue: coursesServiceSpy }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should display only beginner courses", () => {
    pending();
  });

  it("should display only advanced courses", () => {
    pending();
  });

  it("should display both tabs", () => {
    pending();
  });

  it("should display advanced courses when tab clicked - fakeAsync", () => {
    pending();
  });

  it("should display advanced courses when tab clicked - async", () => {
    pending();
  });
});
