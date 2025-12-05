//  CONFIRMAÇÃO — FORMULÁRIO "ENTRE EM CONTATO"

const contatoForm = document.querySelectorAll('.form')[0]; // primeiro formulário da página

contatoForm.addEventListener('submit', (event) => {
  event.preventDefault(); // impede recarregamento da página

  alert("✔ Sua mensagem foi enviada com sucesso! Entrarei em contato em breve!");

  contatoForm.reset(); // limpa os campos
});


//  CONFIRMAÇÃO — FORMULÁRIO DE VOTAÇÃO

const votacaoForm = document.querySelectorAll('.form')[1]; // segundo formulário da página

votacaoForm.addEventListener('submit', (event) => {
  event.preventDefault(); // impede recarregamento

  const escolhido = document.getElementById("trabalho").value;

  alert("🗳 Voto confirmado! Você votou em: " + escolhido);

  votacaoForm.reset();
});
