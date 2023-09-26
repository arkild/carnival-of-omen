# carnival-of-omen
A full-stack web application with attractions, magic, and a guestbook

## Route Table:
| URL                 | REST Route | HTTP Verb | CRUD Action  | EJS View(s)       | View Created?| Route tested?|
|---------------------|------------|-----------|--------------|-------------------|--------------|--------------|
| /                   |            | GET       | read         | home.ejs          | No           |**Yes**       |
| /attractions        |            | GET       | read         | attractions.ejs   | No           |**Yes**       |
| /guestbook          | index      | GET       | read         | entry-index.ejs   | No           |**Yes**       |
| /guestbook/:id      | show       | GET       | read         | entry-details.ejs | No           |**Yes**       |
| /guestbook/:id      | update     | PATCH/PUT | update       |                   | *N/A*        |**Yes**       |
| /guestbook/:id      | destroy    | DELETE    | delete       |                   | *N/A*        |**Yes**       |
| /guestbook/new      | new        | GET       |              | new-entry.ejs     | No           |**Yes**       |
| /guestbook          | create     | POST      | create       |                   | *N/A*        |**Yes**       |
| /guestbook/:id/edit | edit       | GET       | read         | edit-entry.ejs    | No           |**Yes**       |
| /seed               |            | GET       | delete&create|                   | *N/A*        |**Yes**       |
| /magicshow          | index      | GET       | read         | magicshow.ejs     | No           |**Yes**       |
| /magicshow/creation | new        | GET       |              | new-creation.ejs  | No           |**Yes**       |
| /magicshow/magic    | create     | POST      | create       | hocuspocus.ejs    | No           |**Yes**       |
| /magicshow/magic    | destroy    | DELETE    | delete       | hocuspocus.ejs    | No           |***TABLED***  |
| /*                  |            | GET       |              | 404.ejs           | No           |**Yes**       |

## Credits
All magic show images are from stickpng.com, except for the rabbit image which is from purepng.com