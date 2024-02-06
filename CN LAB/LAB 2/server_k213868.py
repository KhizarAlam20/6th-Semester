import socket

s = socket.socket()
print("Socket Created Successfully!")

s.bind(('localhost', 9996))
s.listen(5)

print('Waiting for connection')

while True:
    c, addr = s.accept()
    print('Got connection from', addr)

    server_msg = input('Enter Server Message : ')
    c.send(server_msg.encode())

    client_msg = c.recv(1024).decode()
    print(f"Received from client: {client_msg}")

    c.close()