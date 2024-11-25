// Validação do formulário ao enviar
document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário para evitar recarregamento da página

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const interesse = document.getElementById('interesse').value;

    if (nome && email && interesse) {
        document.getElementById('mensagem').textContent = 'Cadastro realizado com sucesso!';
        document.getElementById('mensagem').style.color = 'green';
        // Aqui você poderia enviar os dados para um servidor, caso fosse necessário.
        // Exemplo: sendFormData(nome, email, interesse);
    } else {
        document.getElementById('mensagem').textContent = 'Por favor, preencha todos os campos.';
        document.getElementById('mensagem').style.color = 'red';
    }
});
