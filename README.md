
Angular Lab 2
Instructions
Create a new property in your class component to model a list of athletes. Each athlete should have the following properties:

Name: this is the full name of the athlete, e.g. "Bill Russell"
Sport: this is the sport that the athlete plays (or played), e.g. "NBA Basketball"
Active: this is a flag that indicates whether the athlete is active
Populate your athlete list with at least 3 athletes from 3 different sports and update your view to display the list of athletes from your model. Your output should look similar to this:

* Bill Russell (NBA Basketball) is not active * Gabriela Sabatini (WTA Tennis)
is not active * Simone Biles (Olympic Gymnast) is active
Hint: You will need to use the *ngIf directive alongside the active property to display either the "is active" or the "is not active" text for each athlete. *ngIf can be used in the following way: <span *ngIf="boolean expression">conditional text</span>

Angular Lab 3
Instructions
In the last lab, you put together a page that displayed a list of Athletes that tracked the following athlete properties:

Name
What sport they played
Whether they were currently active
Extend that page to give the user the ability to not only see your initial list, but also to add to it and see the new values they have added on the existing list.

Hint: use the same breakdown steps as we used in the previous section and adjust your data structure to reflect the specific information you're dealing with in this lab.
