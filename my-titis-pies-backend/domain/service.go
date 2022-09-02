package domain

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"sweet-titispies.com.ar/cors"
)

var apiFormularioPath = "enviarFormulario"

func handleFormulario(w http.ResponseWriter, r *http.Request) {

	switch r.Method {
	case http.MethodGet:

		log.Println("Recibí peticiones!")
		w.Write([]byte("Ping!"))

	case http.MethodPost:

		log.Println("Recibiendo información del cliente...")

		var orden Orden

		// orden.Nombre = "Darwis"
		// orden.Apellido = "Narvaez"
		// orden.Telefono = "1127719227"
		// orden.Email = "darwis@gmail.com"
		// orden.Calle = "Jose Hernandez"
		// orden.Altura = "2768"
		// var entrecalles EntreCalles
		// entrecalles.Calle1 = "Moldes"
		// entrecalles.Calle2 = "La pampa"
		// orden.EntreCalles = entrecalles
		// var pedidos Pedido
		// pedidos.SerialPedido = "MTP000"
		// pedidos.Pie = "Pie"
		// pedidos.Cantidad = "2"
		// var pedidosArray []Pedido
		// pedidosArray = append(pedidosArray, pedidos)
		// orden.Pedidos = pedidosArray
		// orden.Comentarios = "Papel de regalo"
		// orden.Notificacion = true

		err := json.NewDecoder(r.Body).Decode(&orden)
		if err != nil {
			log.Print(err)
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		data, _ := json.Marshal(orden)
		toStringOrden := string(data)

		log.Printf("Datos recibidos del cliente: %s", toStringOrden)

		log.Println("Llamando al servicio de entrega de mails...")

		SendEmailCliente(orden)

		SendEmailEmpresa(orden)

		w.Write([]byte("Datos recibidos!"))
		w.WriteHeader(http.StatusOK)

	case http.MethodOptions:
		return
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

}

func SetupRoutes(apiBasePath string) {

	formularioHandler := http.HandlerFunc(handleFormulario)

	http.Handle(fmt.Sprintf("%s/%s", apiBasePath, apiFormularioPath), cors.Middleware(formularioHandler))

	log.Printf("\nEstableciendo URL para el manejo del formulario: http://localhost:8080/%s/%s", apiBasePath, apiFormularioPath)
}
