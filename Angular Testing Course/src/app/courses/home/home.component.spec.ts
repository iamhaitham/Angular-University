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
  let coursesService: any;
  const beginnerCourses = setupCourses().filter(
    (course) => course.category == "BEGINNER"
  );
  const advancedCourses = setupCourses().filter(
    (course) => course.category == "ADVANCED"
  );

  beforeEach(
    waitForAsync(() => {
      const coursesServiceSpy = jasmine.createSpyObj("CoursesService", [
        "findAllCourses",
      ]);
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
    coursesService = TestBed.inject(CoursesService);
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should display only beginner courses", () => {
    coursesService.findAllCourses.and.returnValue(of(beginnerCourses));
    fixture.detectChanges();
    const tabs = debugElement.queryAll(By.css(".mat-tab-label")); // IMPORTANT: You might not find the class in the whole repository. However it exists when you use inspect element on the tabs elements
    expect(tabs.length).toBe(1, "Unexpected number of tabs found");
  });

  it("should display only advanced courses", () => {
    coursesService.findAllCourses.and.returnValue(of(advancedCourses));
    fixture.detectChanges();
    const tabs = debugElement.queryAll(By.css(".mat-tab-label"));
    expect(tabs.length).toBe(1, "Unexpected number of tabs found");
  });

  it("should display both tabs", () => {
    coursesService.findAllCourses.and.returnValue(of(setupCourses()));
    fixture.detectChanges();
    const tabs = debugElement.queryAll(By.css(".mat-tab-label"));
    expect(tabs.length).toBe(2, "Unexpected number of tabs found");
  });

  it("should display advanced courses when tab clicked - fakeAsync", () => {
    pending();
  });

  it("should display advanced courses when tab clicked - async", () => {
    pending();
  });
});
