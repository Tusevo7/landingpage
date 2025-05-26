// CONFIG FIREBASE - Substitua pelos seus dados reais
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  databaseURL: "https://SEU_DOMINIO.firebaseio.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_BUCKET.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const form = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  database.ref('usuarios').push({
    nome,
    email,
    timestamp: new Date().toISOString()
  });

  mensagem.style.display = 'block';
  form.reset();

  setTimeout(() => mensagem.style.display = 'none', 4000);
});
