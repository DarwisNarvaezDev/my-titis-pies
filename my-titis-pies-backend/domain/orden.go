package domain

type Orden struct {
	NroOrden     string      `json:"nroOrden"`
	Nombre       string      `json:"nombre"`
	Apellido     string      `json:"apellido"`
	Telefono     string      `json:"telefono"`
	Email        string      `json:"email"`
	Barrio       string      `json:"barrio"`
	Calle        string      `json:"calle"`
	Altura       string      `json:"altura"`
	EntreCalles  EntreCalles `json:"entreCalles"`
	Pedidos      []Pedido    `json:"pedidos"`
	Comentarios  string      `json:"comentarios"`
	Notificacion bool        `json:"notificacion"`
}
