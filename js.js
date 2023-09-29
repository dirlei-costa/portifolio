document.querySelector('.hamburguer').addEventListener('click',() =>
  document.querySelector('.container').classList.toggle('show-menu')
);

document.querySelector('#qty').addEventListener('change', newPrice)
document.querySelector('#js').addEventListener('change', newPrice)
document.querySelector('#layout-ok').addEventListener('change', newPrice)
document.querySelector('#layout-no').addEventListener('change', newPrice)
document.querySelector('#time').addEventListener('change', function (){
  const time = document.querySelector('#time').value
  document.querySelector('label[for=time]').innerHTML = `Prazo: ${time} semanas`
  newPrice()
})

function newPrice(){
  const qty = document.querySelector('#qty').value
  const yesJS = document.querySelector('#js').checked
  const yesLayout = document.querySelector('#layout-ok').checked
  const time = document.querySelector('#time').value

  let price = qty * 100
  if(yesJS) price *=  1.1
  // price = price + (price * 10/100)
  //price = price * 1.1
  if(yesLayout) price = price + 500
  let taxaUrgente = 1 - time * 0.1;
  price *= 1 + taxaUrgente


  document.querySelector('#price').innerHTML = `R$ ${price.toFixed(2)}`;
}