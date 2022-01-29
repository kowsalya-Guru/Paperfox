export interface Data {
  draw: number,
  recordsTotal: number,
  recordsFiltered: number,
  data: TableDetails[],
  stats: Stats,
}

export interface TableDetails {
  tracking_no: string,
  ip_trackingId: string,
  name: string,
  id_user: string,
  contact: string,
  weight: string,
  invoice_price: string,
  converstion_invoice_price: string,
  shipping_cost: string,
  shipping_cost_manat: string,
  status: string,
  create_date: string,
  storename: string,
  country: string,
  payment_status: string,
  custom_status: string,
  package_status: string,
  declaration_statu: number,
  payment_status_1: number,
  shipping_payment_status: string
}

export interface Stats {
  count: number,
  shipping_cost_total: string,
  shipping_cost_paid: string,
  count_declared: number,
  count_not_declared: number
}