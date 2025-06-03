let total = 0;
    const lista = [];

    function atualizarTela() {
      const tela = document.getElementById("tela");
      const papel = document.getElementById("papel");

      tela.innerHTML = "<strong>Produtos</strong><br>----------------<br>";
      papel.innerHTML = "ㅤCupom Fiscal<br>----------------<br>";

      lista.forEach(item => {
        tela.innerHTML += `${item.produto}<br>R$ ${item.valor} x ${item.quantidade}<br>`;
        papel.innerHTML += `${item.produto}<br>R$ ${item.valor} x ${item.quantidade} = R$${item.subtotal}<br>`;
      });

      tela.innerHTML += `<br><strong>Total: R$ ${total.toFixed(2)}</strong>`;
      papel.innerHTML += `<br><strong>Total: R$ ${total.toFixed(2)}</strong>`;
    }

    function adicionarItem() {
      const produto = document.getElementById("produto").value;
      const valor = parseFloat(document.getElementById("valor").value);
      const quantidade = parseInt(document.getElementById("quantidade").value);

      if (!produto || isNaN(valor) || isNaN(quantidade)) {
        alert("Preencha todos os campos.");
        return;
      }

      const subtotal = (valor * quantidade).toFixed(2);
      total += parseFloat(subtotal);

      lista.push({ produto, valor: valor.toFixed(2), quantidade, subtotal });

      atualizarTela();

      document.getElementById("produto").value = "";
      document.getElementById("valor").value = "";
      document.getElementById("quantidade").value = "";
      document.getElementById("total").textContent = total.toFixed(2);
    }

    function limparTudo() {
      lista.length = 0;
      total = 0;
      atualizarTela();
      document.getElementById("total").textContent = "0.00";
    }