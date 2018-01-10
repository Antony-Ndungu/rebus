import paymentController from "./paymentController";
import customerController from "./customerController";
import merchantController from "./merchantController";
import socketController from "./socketController";

export default {
    payments: paymentController,
    customers: customerController,
    merchants: merchantController,
    sockets: socketController
}