package router

import "github.com/gin-gonic/gin"

func Initialize() {
	// inicializando o router com a configuração padrão do gin
	router := gin.Default()
	//definindo uma rota
	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	router.Run(":8080")
}
