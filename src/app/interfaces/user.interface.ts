export interface UserInterface {
    id: string,
    nombre: string;
    rut: string;
    correo: string;
    telefono: number;
    banco: string;
    tipo_cuenta: {
      descripcion: string
    };
    n_cuenta: number;
  }