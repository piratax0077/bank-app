export interface TransferInterface{
    destinatario_id: String;
    nombreUsuario:String;
    rut: String;
    bank_id: String;
    telefono: Number;
    tipo_cuenta: {
        descripcion: String;
      };
    monto: Number;
}