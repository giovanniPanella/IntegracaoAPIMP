//import { Payment, MercadoPagoConfig } from 'mercadopago';
const { Payment, MercadoPagoConfig } =require ('mercadopago');


const client = new MercadoPagoConfig(
  { accessToken: 'APP_USR-58066480181361-093008-996b16b98be22d4f0bd76b57b297027a-75149488', 
    options:{timeout:5000, 
      idempotencyKey:'abc'
    }
  });
const payment = new Payment(client);

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Integração API Mercado Pago!!' });
});

 const MOCK_RESULT = {
  accounts_info: null,
  acquirer_reconciliation: [],
  additional_info: {
    authentication_code: null,
    available_balance: null,
    nsu_processadora: null
  },
  authorization_code: null,
  binary_mode: false,
  brand_id: null,
  build_version: '3.71.0-rc-4',
  call_for_authorize_id: null,
  callback_url: null,
  captured: true,
  card: {},
  charges_details: [
    {
      accounts: [Object],
      amounts: [Object],
      client_id: 0,
      date_created: '2024-09-30T08:18:42.000-04:00',
      id: '89208560872-001',
      last_updated: '2024-09-30T08:18:42.000-04:00',
      metadata: [Object],
      name: 'mercadopago_fee',
      refund_charges: [],
      reserve_id: null,
      type: 'fee'
    }
  ],
  collector_id: 75149488,
  corporation_id: null,
  counter_currency: null,
  coupon_amount: 0,
  currency_id: 'BRL',
  date_approved: null,
  date_created: '2024-09-30T08:18:42.000-04:00',
  date_last_updated: '2024-09-30T08:18:46.000-04:00',
  date_of_expiration: '2024-10-01T08:18:42.000-04:00',
  deduction_schema: null,
  description: 'pagamento teste',
  differential_pricing_id: null,
  external_reference: null,
  fee_details: [],
  financing_group: null,
  id: 89208560872,
  installments: 1,
  integrator_id: null,
  issuer_id: '12501',
  live_mode: true,
  marketplace_owner: null,
  merchant_account_id: null,
  merchant_number: null,
  metadata: {},
  money_release_date: null,
  money_release_schema: null,
  money_release_status: 'released',
  notification_url: null,
  operation_type: 'regular_payment',
  order: {},
  payer: {
    email: null,
    entity_type: null,
    first_name: null,
    id: '1887572798',
    identification: { number: null, type: null },
    last_name: null,
    operator_id: null,
    phone: { area_code: null, extension: null, number: null },
    type: null
  },
  payment_method: { id: 'pix', issuer_id: '12501', type: 'bank_transfer' },
  payment_method_id: 'pix',
  payment_type_id: 'bank_transfer',
  platform_id: null,
  point_of_interaction: {
    application_data: { name: null, version: null },
    business_info: { branch: null, sub_unit: 'sdk', unit: 'online_payments' },
    location: { source: null, state_id: null },
    transaction_data: {
      bank_info: [Object],
      bank_transfer_id: null,
      e2e_id: null,
      financial_institution: null,
      infringement_notification: [Object],
      qr_code: '00020126360014br.gov.bcb.pix0114+554299964682552040000530398654041.005802BR5913GILLESPANELLA6012Ponta Grossa62240520mpqrinter892085608726304FE52',
      qr_code_base64: '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',
      ticket_url: 'https://www.mercadopago.com.br/payments/89208560872/ticket?caller_id=1887572798&hash=eaefdc34-9b05-4d29-ab80-1a533ea78315',
      transaction_id: null
    },
    type: 'OPENPLATFORM'
  },
  pos_id: null,
  processing_mode: 'aggregator',
  refunds: [],
  release_info: null,
  shipping_amount: 0,
  sponsor_id: null,
  statement_descriptor: null,
  status: 'pending',
  status_detail: 'pending_waiting_transfer',
  store_id: null,
  tags: null,
  taxes_amount: 0,
  transaction_amount: 1,
  transaction_amount_refunded: 0,
  transaction_details: {
    acquirer_reference: null,
    bank_transfer_id: null,
    external_resource_url: null,
    financial_institution: null,
    installment_amount: 0,
    net_received_amount: 0,
    overpaid_amount: 0,
    payable_deferral_period: null,
    payment_method_reference_id: null,
    total_paid_amount: 1,
    transaction_id: null
  }
  
}
router.post('/gerar-pix', function(req, res, next) {
  console.log("Request")
  console.log(req.body.body)
  const body = { 
    transaction_amount: req.body.body.transaction_amount,
    description: req.body.description,
    payment_method_id: req.body.body.paymentMethodId,
        payer: {
        email: req.body.body.email,
        identification: {
    type: req.body.body.identificationType,
    number: req.body.body.number
}}}
  const requestOptions = { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
 
   res.send(MOCK_RESULT);
});

module.exports = router;
