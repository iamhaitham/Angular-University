import { RequestLogger, RequestMock, Selector } from "testcafe";

const url = "localhost:4200/";

const logger = RequestLogger(
  { url: "/api/courses", method: "GET" },
  {
    logResponseHeaders: true,
    logResponseBody: true,
  }
);

fixture`Display List of Courses`.page(url).requestHooks(logger);

test("should display a list of courses", async (t) => {
  const cards = Selector("mat-card");
  await t.expect(cards.count).eql(9);
});

test("should display the advanced courses", async (t) => {
  const labels = Selector(".mat-tab-label");
  const advancedCoursesTab = Selector(".mat-tab-labels").child(1);
  const advancedCoursesCards = Selector("mat-card");

  await t
    .expect(labels.count)
    .eql(2)
    .click(advancedCoursesTab)
    .expect(advancedCoursesCards.count)
    .eql(3)
    .expect(Selector("mat-tab-body").child(0).child(0).child(2).child(0).child(0).innerText)
    .eql("Angular Advanced Library Laboratory: Build Your Own Library");
});
