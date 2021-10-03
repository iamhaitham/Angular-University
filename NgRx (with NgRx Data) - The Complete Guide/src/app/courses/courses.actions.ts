import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Courses } from './courses.model';

export enum CoursesActionTypes {
  LoadCoursess = '[Courses] Load Coursess',
  AddCourses = '[Courses] Add Courses',
  UpsertCourses = '[Courses] Upsert Courses',
  AddCoursess = '[Courses] Add Coursess',
  UpsertCoursess = '[Courses] Upsert Coursess',
  UpdateCourses = '[Courses] Update Courses',
  UpdateCoursess = '[Courses] Update Coursess',
  DeleteCourses = '[Courses] Delete Courses',
  DeleteCoursess = '[Courses] Delete Coursess',
  ClearCoursess = '[Courses] Clear Coursess'
}

export class LoadCoursess implements Action {
  readonly type = CoursesActionTypes.LoadCoursess;

  constructor(public payload: { coursess: Courses[] }) {}
}

export class AddCourses implements Action {
  readonly type = CoursesActionTypes.AddCourses;

  constructor(public payload: { courses: Courses }) {}
}

export class UpsertCourses implements Action {
  readonly type = CoursesActionTypes.UpsertCourses;

  constructor(public payload: { courses: Courses }) {}
}

export class AddCoursess implements Action {
  readonly type = CoursesActionTypes.AddCoursess;

  constructor(public payload: { coursess: Courses[] }) {}
}

export class UpsertCoursess implements Action {
  readonly type = CoursesActionTypes.UpsertCoursess;

  constructor(public payload: { coursess: Courses[] }) {}
}

export class UpdateCourses implements Action {
  readonly type = CoursesActionTypes.UpdateCourses;

  constructor(public payload: { courses: Update<Courses> }) {}
}

export class UpdateCoursess implements Action {
  readonly type = CoursesActionTypes.UpdateCoursess;

  constructor(public payload: { coursess: Update<Courses>[] }) {}
}

export class DeleteCourses implements Action {
  readonly type = CoursesActionTypes.DeleteCourses;

  constructor(public payload: { id: string }) {}
}

export class DeleteCoursess implements Action {
  readonly type = CoursesActionTypes.DeleteCoursess;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearCoursess implements Action {
  readonly type = CoursesActionTypes.ClearCoursess;
}

export type CoursesActions =
 LoadCoursess
 | AddCourses
 | UpsertCourses
 | AddCoursess
 | UpsertCoursess
 | UpdateCourses
 | UpdateCoursess
 | DeleteCourses
 | DeleteCoursess
 | ClearCoursess;
