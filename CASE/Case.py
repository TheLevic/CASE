import time
import os
from gpiozero import Button
from picamera2.encoders import H264Encoder
from picamera2 import Picamera2
from gpiozero import LED

class Camera:
    def __init__(self):
        # Button and LED setup 
        self.gpio_button_pin = 2
        self.button = Button(self.gpio_button_pin)
        self.gpio_led_pin = 17
        self.led = LED(self.gpio_led_pin)
        
        #Camera set up
        self.camera = Picamera2()
        self.video_config = self.camera.create_video_configuration(main={"size": (1920,1080)})
        self.camera.configure(self.video_config)
        self.encoder = H264Encoder(bitrate=10000)
        self.num = 1
        self.name = str(self.num) + ".h264"

        #OS setup 
        self.current_directory = os.getcwd()
        self.video_directory = os.path.join(self.current_directory, "Videos") 

    #Camera Methods
    def start_recording(self):
        try:
            self.camera.start_recording(self.encoder,self.name)
            time.sleep(2)
            print("Starting to record")
        except:
            print("Error. Can't start recording.")
    
    def stop_recording(self):
        self.camera.stop_recording()
        self.turn_off_led()
        print("Recording Stopped")
        time.sleep(2)
        os.replace(self.current_directory + "/1.h264", self.video_directory + "/1.h264")
        self.num += 1

    # Listener that waits for button to call start_recording
    def start_recording_on_press(self):
        self.button.wait_for_press()
        self.start_recording()
        self.turn_on_led()

    # Listener that waits for button press to call stop_recording
    def stop_recording_on_press(self):
        self.button.wait_for_press()
        self.stop_recording()

    #LED Methods
    def turn_on_led(self):
        self.led.on()
    
    def turn_off_led(self):
        self.led.off()
        
    #OS Methods
    def create_video_directory(self):
        try:
            if (os.path.isdir(self.video_directory)):
                return True
            else:
                os.mkdir(self.video_directory)
                return True
        except:
            print("Error creating video directory")
            return False

    def onStart(self):
        if os.path.isdir(self.video_directory):
            num_files = len(os.listdir(self.video_directory));
            self.num = num_files;

if __name__ == "__main__":
    camera = Camera()
    camera.create_video_directory()
    while (True):
       camera.start_recording_on_press()  
       camera.stop_recording_on_press()
