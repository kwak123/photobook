# photobook

> Photobook is an example morpho-vue Vue.js app the shows a list of images for a user and a detailed view of a selected image.

### Concerns:

Some of the initial tests from learning the test suite could be more robust


### Goals: All complete
* Before the web app loads show placeholders for user info
* After the web app loads begin using static user info.
* Next, request the user's photos with an API call passing the userID to the JSON provided.
* When the API returns the user's photos, the data from the API call should be loaded into a Vuex store.
* When the user's photo data in the store is empty, show a loading message message/spinner in the thumbnail and details components.
* When photo data is received, the list of thumbnails should render.
* When photo data is received, details for the first item should be rendered in the detail view.
* The detail view should represent the rating with 0-5 filled in stars. 0 indicates a photo that the user has not rated.
* The user may change the rating by clicking on any of the stars.
* The user can edit the image title and description in the detail view.
* The average photo rating should only included photos that the user has rated (rating of 1 or higher)
* The average photo rating should be a computed value that updates if the underlying ratings change
* Code coverage should be no less that 90%