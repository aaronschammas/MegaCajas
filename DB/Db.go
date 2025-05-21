package db

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

// Intenta conectar a la DB y retorna éxito/fallo
func InitDB() bool {
	user := "root"
	password := ""
	host := "localhost:3306"
	dbName := "megacajas"

	cfg := fmt.Sprintf("%s:%s@tcp(%s)/%s?parseTime=true",
		user, password, host, dbName)

	var err error
	DB, err = sql.Open("mysql", cfg)
	if err != nil {
		log.Printf("❌ Error al abrir conexión: %v", err)
		return false
	}

	// Verificar conexión
	if err = DB.Ping(); err != nil {
		log.Printf("❌ No se pudo establecer conexión: %v", err)
		DB.Close()
		return false
	}

	log.Println("✅ Conectado a megacajas")
	return true
}
