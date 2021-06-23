export interface Usuario {
    id: number;
    nombre: string;
    apellidos: string;
    direccion: string;
    sexo: string;
    fecha_nacimiento: Date;
    email: string;
    imagen: string;
    password: string;
    repite_password: string;
}