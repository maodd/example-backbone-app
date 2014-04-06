
$(function() {

  Parse.$ = jQuery;

  // Initialize Parse with your Parse application javascript keys
Parse.initialize("V0FBvCUYUE6A6o12ULHGfzUzcvtVfq48Ua4AF6Bt", "YqlH9C7nPMPjaVZ1bzs33bbwAgztpJELyUEHUTaI");
    var router = new APP.NoteRouter({
      notes: new APP.NoteCollection()
    });

	/*
    // we manually pass in the initial data, but this would be called with a collection.fetch() normally
    router.notes.reset([
      {
        "title": "Example Note 1",
        "objectId": "45",
        "author": "David Morrow",
        "description": "Pinterest biodiesel excepteur, ad etsy gluten-free semiotics ennui before they sold out irony ut deserunt jean shorts."
      },
      {
        "title": "Example Note 2",
        "objectId": "48",
        "author": "David Morrow",
        "description": "Fixie synth quinoa umami single-origin coffee master cleanse sartorial typewriter bushwick ennui readymade, lomo trust fund. Shoreditch direct trade fap cray high life swag, viral cred lo-fi locavore fingerstache wayfarers freegan."
      },
      {
        "title": "Example Note 3",
        "objectId": "52",
        "author": "David Morrow",
        "description": "You probably haven't heard of them keffiyeh lo-fi, yr bespoke selvage cray polaroid beard. Tofu messenger bag sustainable gastropub, gentrify lomo godard PBR echo park fap yr. Small batch truffaut swag forage tofu shoreditch street art helvetica. Hella helvetica fixie godard forage art party lo-fi."
      }
    ]);
    */
	var query = new Parse.Query(APP.NoteModel);
//query.equalTo("user", Parse.User.current());
router.notes.query = query;
router.notes.fetch();

    // now that everyting is setup we tell backbone to watch the urls
    Parse.history.start();
});