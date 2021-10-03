import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Course } from './model/course';
import { createReducer, on } from '@ngrx/store';
import { CourseActions } from './action-type';

export interface CoursesState extends EntityState<Course> {
  // additional entities state properties
  ids: number[];
  entities: { [id: number]: Course };
}

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>();

export const initialCoursesState: EntityState<Course> = adapter.getInitialState({
  // additional entity state properties
});

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CourseActions.allCoursesLoaded, (state,action) => adapter.addMany(action.courses,state)),
);

export const {selectAll} = adapter.getSelectors();
