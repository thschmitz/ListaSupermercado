var items = [];

document.querySelector("input[type=submit]").addEventListener("click", ()=>{
    var nomeProduto = document.querySelector("input[name=nome_produto]");
    var precoProduto = document.querySelector("input[name=price]")
    if(nomeProduto.value =="" || precoProduto == ""){
        alert("Digite valores nos campos para prosseguir")
    }else{
    
        items.push({
            nome: nomeProduto.value,
            valor: precoProduto.value
        });
    
        let listaProdutos = document.querySelector(".lista-produtos");
        let soma = 0;
        listaProdutos.innerHTML = ""
        items.map(function(val){
            soma += parseFloat(val.valor);
            listaProdutos.innerHTML+=`
            <div class="lista-produtos-single">
                <h3>`+val.nome+`</h3>
                <h3 style="cursor:normal;"class="price-produto"><span>R$`+val.valor+`</span></h3>
            </div>
            `
        })
        soma = soma.toFixed(2);
    
        nomeProduto.value = "";
        precoProduto.value = "";
    
        let elementoSoma = document.querySelector(".soma-produtos h1");
        elementoSoma.innerHTML = "Total: R$"+soma
    }
    
})


document.querySelector("button[name=limpar]").addEventListener("click", () =>{
    items = [];
    document.querySelector(".lista-produtos").innerHTML = "";
    document.querySelector(".soma-produtos h1").innerHTML = "Total: R$0";
})


