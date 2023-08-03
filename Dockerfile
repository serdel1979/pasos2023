FROM tomcat:9-jre11

# Copia el archivo WAR de tu aplicación en el directorio webapps de Tomcat
COPY target/12354854985.war /usr/local/tomcat/webapps/

# Exponer el puerto que utiliza Tomcat (por defecto, Tomcat utiliza el puerto 8080)
EXPOSE 8080

# Comando para iniciar el servidor Tomcat y desplegar la aplicación al iniciar el contenedor
CMD ["catalina.sh", "run"]
