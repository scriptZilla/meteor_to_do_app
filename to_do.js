if (Meteor.isClient) {
  // Note: This code only runs on the client... hence the above condition in the if statement
  Template.body.helpers({
    tasks: [
      { text: "This is example task 1" },
      { text: "This is example task 2" },
      { text: "This is example task 3" }
    ]
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
