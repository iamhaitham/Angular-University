import { Observable } from "rxjs";
import { Course } from "./model/course";

export function createHttpObservable(url: string): Observable<Course[]> {
  return new Observable((observer) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return observer.error(
            `Request failed with status code: ${response.status}`
          );
        }
      })
      .then((receivedJSON) => {
        observer.next(receivedJSON);
        observer.complete();
      })
      .catch((err) => observer.error(err));
  });
}
