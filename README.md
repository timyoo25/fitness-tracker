# Project Overview

## Project Name

Fitness Tracker

## Project Description

The user can input and record their workout/exercises information for tracking their progress.

## Wireframes

- Homepage: https://wireframe.cc/hgKi14
- Weight Training page: https://wireframe.cc/XzXGNn
- Cardio Training page: https://wireframe.cc/KOb5sq

## Component Hierarchy

https://wireframe.cc/3ITP9y

## API and Data Sample

Weight Lifting Table

```json
{
  "records": [
    {
      "id": "recf7TwzUF9PacZe0",
      "fields": {
        "name": "Weight Lifting",
        "exercise": "Bench Press",
        "weight": "225",
        "sets": "3",
        "reps": "5",
        "notes": ""
      },
      "createdTime": "2021-06-06T19:29:53.000Z"
    }
  ],
  "offset": "recdcj8tl47qZZepG"
}
```

Cardio Training Table

```json
{
  "records": [
    {
      "id": "recHLlJRoOCFOXB5Z",
      "fields": {
        "name": "Cardio",
        "exercise": "Brisk Walk",
        "calories": "150",
        "duration": "10",
        "distance": ".7",
        "heartrate": "150 "
      },
      "createdTime": "2021-06-07T01:50:32.000Z"
    }
  ],
  "offset": "rectJuXRLT3daDUbx"
}
```

#### MVP

- Make GET and POST request to customized Airtable API
- Allow user to input custom forms containing workout data and tracking
- Home page with clickable images that will route to targeted page
- User can submit forms to display on pages

#### PostMVP

- Use local storage so user can have saved inputs and look at previous entries
- Add a calendar so that a user can select which date the exercises were performed on
- Add calorie tracker page
- Render mobile version
- Add delete button for any mistakes/typos

## Project Schedule

| Day        | Deliverable                                        | Status   |
| ---------- | -------------------------------------------------- | -------- |
| June 4-6   | Prompt / Wireframes / Priority Matrix / Timeframes | Complete |
| June 7     | Project Approval                                   | Complete |
| June 8     | Core Application Structure (HTML, CSS, etc.)       | Complete |
| June 9     | Pseudocode / actual code                           | Complete |
| June 10    | Initial Clickable Model                            | Complete |
| June 11    | MVP                                                | Complete |
| June 12-13 | CSS Frameworks                                     | Complete |
| June 14    | Presentations                                      | Complete |

## Timeframes

| Component                                       | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Project Approval                                |    H     |      2hrs      |     2hrs      |    2hrs     |
| Airtable Setup                                  |    H     |      2hrs      |     3hrs      |    3hrs     |
| Psuedocode                                      |    H     |      2hrs      |     2hrs      |    2hrs     |
| Components setup                                |    H     |      1hrs      |     2hrs      |    2hrs     |
| Code for Home page                              |    H     |      3hrs      |     3hrs      |    3hrs     |
| Clickable Images on Home page                   |    H     |      2hrs      |     2hrs      |    2hrs     |
| Code for Weight page                            |    H     |      4hrs      |     4hrs      |    4hrs     |
| Adding multiple forms to Weight Page            |    H     |      4hrs      |     4hrs      |    4hrs     |
| Creating individual submit buttons to each form |    H     |      4hrs      |     2hrs      |    2hrs     |
| Code for Cardio page                            |    H     |      4hrs      |     4hrs      |    4hrs     |
| Merge Cardio/Weight array into one              |    H     |      4hrs      |     5hrs      |    5hrs     |
| Import components with React                    |    H     |      3hrs      |     4hrs      |    4hrs     |
| Route/Link pages                                |    H     |      3hrs      |     4hrs      |    4hrs     |
| Create delete functionality                     |    H     |      4hrs      |     4hrs      |    4hrs     |
| CSS for Home page                               |    H     |      3hrs      |     2hrs      |    2hrs     |
| CSS for Weight page                             |    H     |      3hrs      |     4hrs      |    4hrs     |
| CSS for Cardio page                             |    H     |      3hrs      |     4hrs      |    4hrs     |
| Total                                           |    H     |     49hrs      |     53hrs     |    53hrs    |

## SWOT Analysis

### Strengths:

I have a good idea of what I want to produce and render and giving freedom to the user input. I think that I can reference most labs/homeworks for additional guidance.

### Weaknesses:

I think I will need further guidance with piecing everything together and knowing which syntax to use in specific situations (eg Route vs Link)

### Opportunities:

This project will allow me to really understand how to use React effectively with UseState and UseEffect. I am nervous but also excited to see how much understanding I can apply to the project. I am most interested in functionality first and creating a good user experience with navigation. This will be a good opportunity to allow myself to struggle through any problems rather than looking for a quick exit/answer.

### Threats:

If I get stuck, I tend to panic a little bit and immediately jump to the conclusion that I don't know anything. I need to get better at practicing debugging and googling effectively (or using my resources). I will try my best to do everything as independent as I can and asking for help when really needed.
