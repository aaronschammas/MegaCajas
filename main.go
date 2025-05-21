package main

import (
	db "CajasControl/DB" // Ajusta la ruta de importación
	"log"
	"net/http"
)

func main() {
	// Intentar conexión a DB
	if !db.InitDB() {
		log.Fatal("🚫 La aplicación no puede continuar sin conexión a la DB")
	}
	defer db.DB.Close()

	log.Println("🚀 Servidor iniciado en :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
