package router

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Initialize() {
	// initialize default gin router
	router := gin.Default()

	frontEndUrl := "http://localhost:3000"

	// configure cors
	corsConfig := cors.Config{
		AllowOrigins: []string{frontEndUrl},
		AllowMethods: []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders: []string{"Origin", "Content-Type", "Authorization"},
	}

	// apply the middleware CORS in router
	router.Use(cors.New(corsConfig))

	// initialize routes
	initializeRoutes(router)

	// running the server
	router.Run(":8080")
}
