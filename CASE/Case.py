import time
from gpiozero import Button
from picamera2.encoders import H264Encoder
from picamera2 import Picamera2

class Camera:
    def __init__(self):
        self.gpio_button_pin = 2
        self.camera = Picamera2()
        self.button = Button(self.gpio_button_pin)
        self.video_config = self.camera.create_video_configuration(main={"size": (1920,1080)})
        self.camera.configure(self.video_config)
        self.encoder = H264Encoder(bitrate=6000)
        self.num = 1;
        self.name = str(self.num) + ".h264"
        self.shouldRecord = False

    # Method that will start recording
    def start_recording(self):
        self.camera.start_recording(self.encoder,self.name)
        time.sleep(1)
        print("Starting to record")

    # Method that will stop recording
    def stop_recording(self):
        self.camera.stop_recording()
        print("Recording Stopped")
        self.num += 1
        self.shouldRecord = False

    # Listener that waits for button to call start_recording
    def start_recording_on_press(self):
        self.button.wait_for_press()
        self.start_recording()

    # Listener that waits for button press to call stop_recording
    def stop_recording_on_press(self):
        self.button.wait_for_press()
        self.stop_recording()

if __name__ == "__main__":
    camera = Camera()
    while (True):
       camera.start_recording_on_press()  
       camera.stop_recording_on_press();
