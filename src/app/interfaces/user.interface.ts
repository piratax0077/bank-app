export interface UserInterface {
    id: string,
    nombre: string;
    rut: string;
    email: string;
    telefono: number;
    banco: string;
    tipoCuenta: {
      descripcion: string
    };
    nCuenta: number;
  }