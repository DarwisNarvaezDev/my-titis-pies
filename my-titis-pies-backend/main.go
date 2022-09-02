package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"sweet-titispies.com.ar/domain"
)

//Backend para recibir el formulario de "order.html" y procesar la información que allí nos viene.

//Constante para definir el path principal de la API:
var pathPrincipal = fmt.Sprintf("/%s", os.Getenv("PATH_PRINCIPAL"))

func main() {

	log.Println("Entrando en el service, disponibilizando el puerto 8080 para recibir peticiones...")
	log.Printf("\nEstableciendo path principal para la API de 'My titi's Pies': '%s' ", pathPrincipal)

	domain.SetupRoutes(pathPrincipal)

	log.Fatal(http.ListenAndServe(":8080", nil))
}
