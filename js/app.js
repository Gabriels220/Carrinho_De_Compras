let totalGeral = 0;
let quantidadeMaxima = 10;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$0';


function adicionar(){
    //recuperar valores nome do produto, quatidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    //adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
  </section>
</section>`
    //atualizar o total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;
    quantidade = document.getElementById('quantidade').value = 0;
    //condição para produto válido
    if ( carrinho =! produto) {
        alert(`Você excedeu a quantidade máxima do produto: Quantidade Máxima: ${quantidadeMaxima}`);
        limpar(quantidade,totalGeral,preco);
    }

}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0'
}