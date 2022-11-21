import speech_recognition as sr
import pyttsx3


class Case:
    def __init__(self):
        self.text = '';
        self.name = "case";

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
            print(self.text);
            return self.text;

    def doSomethingWithText(self):
        options = {};
        #We want to check if we said "hey Case start recording"
        try:
            if (self.getText() == "hey " + self.name or "hey " + self.name.capitalize()):
                self.speak("Yes, what do you want me to do?");
            else:
                self.speak("Sorry, I didn't get that. Please try again.");
        except:
            self.speak("Sorry, there was an error. Please try again.");        
    

if __name__ == "__main__":
    # We want Case to recognize when someone is talking to him

    #Then we want Case to start recording

    #Once we tell Case to "Stop Recording" he will stop and send the video to the server, have a time limit of 5 minutes
    Case = Case();
    Case.doSomethingWithText();