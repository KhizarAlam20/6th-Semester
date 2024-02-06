import socket

s = socket.socket()

s.connect(('localhost', 9996))
print(s.recv(1024).decode())

while True:
    msg = input('Enter message to server: ')
    s.send(msg.encode())
    server_response = s.recv(1024).decode()