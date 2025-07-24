const firebaseConfig = {
  apiKey: "AIzaSyDiSqTKBajqHTV2ZooeooTKdWeyoiuYj_g",
  authDomain: "future-map-a48c0.firebaseapp.com",
  databaseURL: "https://future-map-a48c0-default-rtdb.firebaseio.com",
  projectId: "future-map-a48c0",
  storageBucket: "future-map-a48c0.firebasestorage.app",
  messagingSenderId: "200395928769",
  appId: "1:200395928769:web:5d0222bbc96db81a2bd040"
};


firebase.initializeApp(firebaseConfig);


const contactFormDB = firebase.database().ref("ContactForm");


document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();


  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

 
  contactFormDB.push({
    firstName,
    lastName,
    email,
    message
  });

 
  alert("Form submitted successfully!");


  document.getElementById("contactForm").reset();
}
