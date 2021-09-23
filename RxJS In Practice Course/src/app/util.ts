import { Observable } from "rxjs";
import { Course } from "./model/course";

export function createHttpObservable(url: string): Observable<Course[]> {
  return new Observable((observer) => {
    fetch(url)
      .then((response) => response.json())
      .then((receivedJSON) => {
        observer.next(receivedJSON);
        observer.complete();
      })
      .catch((err) => observer.error(err));
  });
}
