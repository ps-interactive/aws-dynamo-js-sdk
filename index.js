const store = require('./store');

async function run() {
  const result = await store.loadPayments();
  console.log(result);

  const allItems = await store.listAllPayments();
  console.log(allItems.Items);

  const order = await store.getByOrderId('444');
  console.log(order);

  const all2018 = await store.queryByYear(2018);
  console.log(all2018);
}

run();
