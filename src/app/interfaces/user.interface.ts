export interface UserInterface {
    id: string,
    nombre: string;
    rut: string;
    email: string;
    telefono: number;
    idBanco: String;
    tipoCuenta: {
      descripcion: string
    };
    nCuenta: number;
  }