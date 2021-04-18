import firebase from "firebase";

class Fire {
  constructor() {
    if (firebase.apps.length === 0) {
      this.init();
    }
    this.observeAuth();
  }

  init = () =>
    firebase.initializeApp({
      apiKey: "AIzaSyAwWy-UfGf_IUstwX1x8V64lLW1AgfLai8",
      authDomain: "treehugger-e8c37.firebaseapp.com",
      databaseURL: "https://treehugger-e8c37-default-rtdb.firebaseio.com",
      projectId: "treehugger-e8c37",
      storageBucket: "treehugger-e8c37.appspot.com",
      messagingSenderId: "467428435573",
      appId: "1:467428435573:web:42c9877057d1b7effafa3c",
    });

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = (user) => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref("messages");
  }

  parse = (snapshot) => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  on = (callback) =>
    this.ref.on("child_added", (snapshot) => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  // send the message to the Backend
  send = (messages) => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  append = (message) => this.ref.push(message);

  // close the connection to the Backend
  off() {
    this.ref.off();
  }
}

Fire.shared = new Fire();
export default Fire;
