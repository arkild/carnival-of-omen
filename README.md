# carnival-of-omen
A full-stack web application with attractions, magic, and a guestbook

## Route Table:
| URL                 | REST Route | HTTP Verb | CRUD Action  | EJS View(s)       | View Created?| Route tested?|
|---------------------|------------|-----------|--------------|-------------------|--------------|--------------|
| /                   |            | GET       | read         | home.ejs          | **Yes**      |**Yes**       |
| /attractions        |            | GET       | read         | attractions.ejs   | **Yes**      |**Yes**       |
| /guestbook          | index      | GET       | read         | entry-index.ejs   | **Yes**      |**Yes**       |
| /guestbook/:id      | show       | GET       | read         | entry-details.ejs | **Yes**      |**Yes**       |
| /guestbook/:id      | update     | PATCH/PUT | update       |                   | *N/A*        |**Yes**       |
| /guestbook/:id      | destroy    | DELETE    | delete       |                   | *N/A*        |**Yes**       |
| /guestbook/new      | new        | GET       |              | new-entry.ejs     | **Yes**      |**Yes**       |
| /guestbook          | create     | POST      | create       |                   | *N/A*        |**Yes**       |
| /guestbook/:id/edit | edit       | GET       | read         | edit-entry.ejs    | **Yes**      |**Yes**       |
| /seed               |            | GET       | delete&create|                   | *N/A*        |**Yes**       |
| /magicshow          | index      | GET       | read         | magicshow.ejs     | **Yes**      |**Yes**       |
| /magicshow/creation | new        | GET       |              | new-creation.ejs  | **Yes**      |**Yes**       |
| /magicshow/magic    | create     | POST      | create       | hocuspocus.ejs    | **Yes**      |**Yes**       |
| /magicshow/magic    | destroy    | DELETE    | delete       | hocuspocus.ejs    | **Yes**      |**Yes**       |
| /*                  |            | GET       |              | 404.ejs           | **Yes**      |**Yes**       |

## The process
Coming up with this idea for the project took a little bit of inspiration from a previous presentation I did on my store layout that used Express. When I was making shop entries appear and disappear, I had acted as though it was being done with magic, and that stuck in my head and inspired me to make a carnival-themed application that still took two schema and used Mongo, Express, and Node.

The two schema in this app are:
- The Guestbook: Contains all RESTful routes for making, displaying, editing, and deleting guest entries and reviews
- The Magic Show: Editing is not possible on this, but creating and destroying are, for the sake of making things "appear" and "disappear" with magic.

I started off just making sure the Guestbook was ready to go, as that had all of the RESTful routes that I needed. As it was very similar to two exercises we had done in class, there wasn't much of an issue with getting things set up.

The Magic show was a little more tricky as it contained images (which I gave all equal width to ensure some form of consistency) and that I was deleting objects directly from an index rather than through the item's details. I also had both the "create" and "destroy" route redirect to an intermediary page that simulated "magic" being performed.

## The future of this project

Because of the app being carnival-themed, there are plenty of avenues that I can explore, such as adding more Javascript-interactible options like more Carnival games or other pieces of interactivity. 

(If I haven't deleted this part by the time I submit this project, it means I didn't touch up on this readme to write down the things I am still going to plan to work on, and I should be ashamed of myself for forgetting to do this.)

## Credits
All magic show images are from stickpng.com, except for the rabbit image which is from purepng.com
Carnival picture in background of websites attributed to Andres Ramos from vecteezy.com
The Wheel used is from WheelDecide.com
CSS Framework used: Bulma