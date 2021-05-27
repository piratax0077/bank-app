export interface TransferInterface{
    destinatario_id: String;
    rut: String;
    bank_id: String;
    telefono: Number;
    tipo_cuenta: {
        descripcion: String;
      };
    monto: Number;
}