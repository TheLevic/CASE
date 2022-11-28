import speech_recognition as sr
import pyttsx3


class Spot:
    def __init__(self):
        self.text = '';

    #Method to speak back to the user
    def speak(self, text: str):
        engine = pyttsx3.init();
        engine.say(text);
        engine.runAndWait();

    def getText(self):
        with sr.Microphone() as source:
            r = sr.Recognizer();
            print("Say something!");
            audio = r.record(source, duration=5);
            self.text = r.recognize_google(audio);
            return self.text;

    def doSomethingWithText(self):
        #We want to check if we said "hey spot start recording"
        if (self.getText() == "hey spot"):
            self.speak("Yes, what do you want me to do?");
if __name__ == "__main__":
    # We want spot to recognize when someone is talking to him

    #Then we want spot to start recording

    #Once we tell spot to "Stop Recording" he will stop and send the video to the server, have a time limit of 5 minutes
    spot = Spot();
    spot.doSomethingWithText();