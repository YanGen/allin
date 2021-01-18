import _thread
import sys
msg = ''
def listen():
    global msg
    while 1:
        msg = input()
        print(msg)
listen()