const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  //Complete a função customerInfo() para que seu retorno seja similar a “Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701”.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const names = order.name;
  const numero = order.phoneNumber;
  const rua = order.address.street;
  const casaNum = order.address.number;
  const ap = order.address.apartment;
  console.log(`Olá ${deliveryPerson}, entrega para: ${names}, Telefone ${numero}, ${rua}, Nº: ${casaNum}, AP: ${ap}`); 
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  //Complete a função orderModifier() para que seu retorno seja similar a “Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.”
  //Modifique o nome da pessoa compradora.
  //Modifique o valor total da compra para R$ 50,00.
  const nomes = order.name = 'Luiz Silva';
  const valor = order.payment.total = '50';
  console.log(`Olá ${nomes}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${valor},00`);
};

orderModifier(order);