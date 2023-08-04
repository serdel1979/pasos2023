# Etapa 1: Construir la imagen de Nginx con la aplicación Angular desplegada
FROM nginx:latest

# Copiar el archivo de configuración de Nginx al contenedor
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos estáticos de Angular al directorio de recursos estáticos de Nginx
COPY angular-ngx/dist/angular-ngx /usr/share/nginx/html/12354854985/resources/static/dashboard/

# Etapa 2: Construir la imagen de Spring Boot y Tomcat
FROM adoptopenjdk:11-jre-hotspot

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo WAR de tu aplicación en el directorio webapps de Tomcat
COPY target/12354854985.war /app/app.war

# Expone el puerto 8080 para acceder a la aplicación web
EXPOSE 8080

# Comando para iniciar la aplicación de Spring Boot con Tomcat al iniciar el contenedor
CMD ["java", "-jar", "app.war"]
