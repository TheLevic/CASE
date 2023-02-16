import time
from gpiozero import Button
from picamera2.encoders import H264Encoder
from picamera2 import Picamera2

class Camera:
    def __init__(self):
        self.gpio_button_pin = 25
        self.camera = Picamera2()
        self.button = Button(self.gpio_button_pin)
        self.video_config = self.camera.create_video_configuration(main={"size": (1920,1080)})
        self.camera.configure(self.video_config)
        self.encoder = H264Encoder(bitrate=6000)
        self.num = 1;
        self.name = str(self.num) + ".h264"
        self.shouldRecord = False

    def start_recording(self):
        if self.shouldRecord:
            self.camera.start_recording(self.encoder,self.name)
            time.sleep(1)
            print("Starting to record")

    def stop_recording(self):
        self.camera.stop_recording()
        print("Recording Stopped")
        self.num += 1
        self.shouldRecord = False

    def start_recording_on_press(self):
        if self.button.is_pressed:
            print("Button was pressed")

    def stop_recording_on_press(self):
        if self.button.is_pressed:
            print("Button was pressed from stop")

if __name__ == "__main__":
    camera = Camera()
    while (True):
       camera.start_recording_on_press()  
       time.sleep(2)
       camera.stop_recording_on_press();
