# Usa una imagen base de Tomcat
FROM tomcat:latest

# Copia el archivo WAR desde el directorio "target" del proyecto al directorio webapps de Tomcat
COPY target/12354854985.war /usr/local/tomcat/webapps/

# Expone el puerto 8080 para acceder a la aplicación web
EXPOSE 8080