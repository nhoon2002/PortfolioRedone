
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCo__HY6NhjHii1PEuSR7NX_1YNe-Q5dE8",
    authDomain: "portfolio-98101.firebaseapp.com",
    databaseURL: "https://portfolio-98101.firebaseio.com",
    projectId: "portfolio-98101",
    storageBucket: "portfolio-98101.appspot.com",
    messagingSenderId: "615457070246"
  };
  firebase.initializeApp(config);


  // var visitCount=0;
  // var lasCount =
  // firebase.database().ref().set({
  //   count: visitCount,
  //   lastCount: visitCount
  // firebase.database().ref().on('value', function(snapshot) {
  //   console.log(snapshot.val().visits.count);
  //   visitCount = snapshot.val().visits.count;
  //   console.log(visitCount);
    function registerVisit() {
      firebase.database().ref().once('value', function(snapshot) {

      console.log('running visit function, snapshot');
      var updates = {};
      console.log(snapshot.val().visits);
      updates['/visits/count'] = snapshot.val().visits.count + 1;

      firebase.database().ref().update(updates);
      })
    }

    registerVisit();
