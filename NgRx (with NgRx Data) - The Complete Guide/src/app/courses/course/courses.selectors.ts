import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "../courses.reducer";
import * as fromCourses from "../courses.reducer";

export const featureKey = "courses";
export const selectCoursesState =
  createFeatureSelector<CoursesState>(featureKey);

export const selectAllCourses = createSelector(
  selectCoursesState,
  fromCourses.selectAll
);

export const selectBeginnerCourses = createSelector(
  selectAllCourses,
  (courses) => courses.filter((course) => course.category == "BEGINNER")
);

export const selectAdvancedCourses = createSelector(
  selectAllCourses,
  (courses) => courses.filter((course) => course.category == "ADVANCED")
);

export const selectPromoTotal = createSelector(
  selectAllCourses,
  (courses) => courses.filter((course) => course.promo).length
);

export const areCoursesLoaded = createSelector(
  selectCoursesState,
  (state) => state.allcoursesLoaded
);
