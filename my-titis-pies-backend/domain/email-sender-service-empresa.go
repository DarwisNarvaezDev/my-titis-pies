package domain

import (
	"bytes"
	"fmt"
	"html/template"
	"log"
	"net/smtp"
)

func SendEmailEmpresa(orden Orden) {

	log.Println("Enviando mail a la empresa...")

	// Sender data.
	from := mailSenderAccount
	password := mailSenderAccountPassword

	// Receiver email address.
	to := []string{
		//Cambiar esta dirección con la dirección de la empresa
		"darwisnarvaezp@gmail.com",
	}

	// smtp server configuration.
	smtpHost := "smtp.gmail.com"
	smtpPort := "587"

	// Authentication.
	auth := smtp.PlainAuth("no-reply", from, password, smtpHost)

	t, _ := template.ParseFiles("templateEmpresa.html")

	var body bytes.Buffer

	mimeHeaders := "MIME-version: 1.0;\nContent-Type: text/html; charset=\"UTF-8\";\n\n"
	body.Write([]byte(fmt.Sprintf("Subject: Gracias por tu compra \n%s\n\n", mimeHeaders)))

	var Pie1 string
	var Cantidad1 string
	var Pie2 string
	var Cantidad2 string
	var Pie3 string
	var Cantidad3 string
	var Pie4 string
	var Cantidad4 string

	for _, v := range orden.Pedidos {

		if v.SerialPedido == 1 {
			Pie1 = v.Pie
			Cantidad1 = v.Cantidad

		}
		if v.SerialPedido == 2 {
			Pie2 = v.Pie
			Cantidad2 = v.Cantidad

		}
		if v.SerialPedido == 3 {
			Pie3 = v.Pie
			Cantidad3 = v.Cantidad

		}
		if v.SerialPedido == 4 {
			Pie4 = v.Pie
			Cantidad4 = v.Cantidad

		}

	}

	t.Execute(&body, struct {
		NombreCliente   string
		ApellidoCliente string
		NumeroTelefono  string
		Email           string
		Barrio          string
		Direccion       string
		Altura          string
		EC1             string
		EC2             string
		Comentario      string
		Pie1            string
		Cantidad1       string
		Pie2            string
		Cantidad2       string
		Pie3            string
		Cantidad3       string
		Pie4            string
		Cantidad4       string
	}{
		NombreCliente:   orden.Nombre,
		ApellidoCliente: orden.Apellido,
		NumeroTelefono:  orden.Telefono,
		Email:           orden.Email,
		Barrio:          orden.Barrio,
		Direccion:       orden.Calle,
		Altura:          orden.Altura,
		EC1:             orden.EntreCalles.Calle1,
		EC2:             orden.EntreCalles.Calle2,
		Comentario:      orden.Comentarios,
		Pie1:            Pie1,
		Cantidad1:       Cantidad1,
		Pie2:            Pie2,
		Cantidad2:       Cantidad2,
		Pie3:            Pie3,
		Cantidad3:       Cantidad3,
		Pie4:            Pie4,
		Cantidad4:       Cantidad4,
	})

	// Sending email.
	error := smtp.SendMail(smtpHost+":"+smtpPort, auth, from, to, body.Bytes())
	if error != nil {
		fmt.Println(error)
		return
	}

	log.Println("Email enviado a la empresa!")

}
