function displayInfo() {
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('Telefone').value;
    const birthDate = document.getElementById('nasc').value;
    const gender = document.getElementById('genero').value;
  
    if (!gender) {
      alert("Por favor, selecione o gênero.");
      return;
    }
  
    document.getElementById('result').innerHTML = `
      <h3>Informações Coletadas</h3>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      <p><strong>Data de Nascimento:</strong> ${birthDate}</p>
      <p><strong>Gênero:</strong> ${gender}</p>
    `;
  }
  