const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' });

const payments = require('./payments');

const paymentItems = {
  RequestItems: {
    payments: payments.map((r) => buildItem(r)),
  },
  ReturnConsumedCapacity: 'TOTAL',
};

function buildItem(r) {
  return {
    PutRequest: {
      Item: {
        orderId: r.order,
        paidAt: r.date,
        totalAmount: r.total,
      },
    },
  };
}

