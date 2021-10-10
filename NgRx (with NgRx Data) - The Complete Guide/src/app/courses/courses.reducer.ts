import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { compareCourses, Course } from './model/course';
import { createReducer, on } from '@ngrx/store';
import { CourseActions } from './action-type';

export interface CoursesState extends EntityState<Course> {
  // additional entities state properties
  ids: number[];
  entities: { [id: number]: Course };
  allcoursesLoaded:boolean;
}

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>({
  sortComparer: compareCourses,
});

export const initialCoursesState: EntityState<Course> = adapter.getInitialState({
  // additional entity state properties
  allcoursesLoaded:false,
});

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CourseActions.allCoursesLoaded, (state,action) => adapter.addMany(action.courses,{...state,allcoursesLoaded:true})),
);

export const {selectAll} = adapter.getSelectors();
