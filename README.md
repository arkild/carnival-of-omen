# carnival-of-omen
A full-stack web application with attractions, magic, and a guestbook

## Route Table:
| URL                 | REST Route | HTTP Verb | CRUD Action  | EJS View(s)       | Created Yet? |
|---------------------|------------|-----------|--------------|-------------------|--------------|
| /                   |            | GET       | read         | home.ejs          | No           |
| /directory          |            | GET       | read         | attractions.ejs   | No           |
| /guestbook          | index      | GET       | read         | entry-index.ejs   | No           |
| /guestbook/:id      | show       | GET       | read         | entry-details.ejs | No           |
| /guestbook/:id      | update     | PATCH/PUT | update       |                   | No           |
| /guestbook/:id      | destroy    | DELETE    | delete       |                   | No           |
| /guestbook/new      | new        | GET       |              | new-entry.ejs     | No           |
| /guestbook          | create     | POST      | create       |                   | No           |
| /guestbook/:id/edit | edit       | GET       | read         | edit-entry.ejs    | No           |
| /seed               |            | GET       | delete&create|                   | No           |
| /magicshow          | index      | GET       | read         | magicshow.ejs     | No           |
| /magicshow/creation | new        | GET       |              | new-creation.ejs  | No           |
| /magicshow/magic    | create     | POST      | create       | hocuspocus.ejs    | No           |
| /magicshow/magic    | destroy    | DELETE    | delete       | hocuspocus.ejs    | No           |
| /*                  |            | GET       |              | 404.ejs           | No           |

## Credits
All magic show images are from stickpng.com, except for the rabbit image which is from purepng.com