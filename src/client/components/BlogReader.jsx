import { PauseCircle, PlayArrow, StopCircle } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { IconButton } from "ui-neumorphism";
import { toast } from "react-toastify";
import { Stack } from "@mui/material";
import { ThreeDots } from "react-loader-spinner";

const BlogReader = ({ text }) => {
  const [voices, setVoices] = useState([]);
  const [voiceText, setVoiceText] = useState("");
  const [utterance, setUtterance] = useState(null);
  const [isReading, setIsReading] = useState(false);
  const [loader, setLoader] = useState(false);
  const cleanText = (text) => {
    setLoader(true);
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = text;
    let textContent = tempDiv.textContent || tempDiv.innerText || "";
    textContent = textContent.replace(
      /data:[a-zA-Z]+\/[a-zA-Z]+;base64,[a-zA-Z0-9+\/=]+/g,
      ""
    );
    textContent = textContent.replace(/#/g, "");
    textContent = textContent.trim();
    setTimeout(() => {
      setLoader(false);
    }, 3000);
    return textContent;
  };

  useEffect(() => {
    const synth = window.speechSynthesis;
    const populateVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
    };

    populateVoices();
    synth.onvoiceschanged = populateVoices;
  }, []);

  useEffect(() => {
    if (text) {
      setVoiceText(cleanText(text));
    }
  }, [text]);

  const handleReadText = () => {
    if (voiceText.trim() !== "") {
      setIsReading(true);
      if (utterance) {
        // If there's an existing utterance, stop it first
        window.speechSynthesis.cancel();
      }
      setIsReading(false);
      const newUtterance = new SpeechSynthesisUtterance(voiceText);
      const voice = voices.find(
        (voice) => voice.name === "Microsoft Zira - English (United States)"
      );

      if (voice) {
        newUtterance.voice = voice;
      }

      newUtterance.rate = 0.7;
      newUtterance.pitch = 1.1;
      newUtterance.volume = 1;
      newUtterance.onend = () => {
        toast.success("Thanks for Reading😊😊");
        setIsReading(false);
      };

      window.speechSynthesis.speak(newUtterance);
      setUtterance(newUtterance);
      setIsReading(true);
    }
  };

  const handleStopReading = () => {
    if (window.speechSynthesis.speaking || window.speechSynthesis.paused) {
      window.speechSynthesis.cancel();
      setUtterance(null);
      setIsReading(false);
    }
  };

  const handlePlayPause = () => {
    if (isReading) {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
      } else if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      setIsReading(false);
    } else {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      } else {
        handleReadText();
      }
      setIsReading(true);
    }
  };

  return (
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
      {loader ? (
        <ThreeDots
          visible={loader}
          height="20"
          width="40"
          color="orangered"
          radius="1"
          ariaLabel="three-dots-loading"
        />
      ) : (
        <>
          <IconButton
            rounded={true}
            active={isReading}
            size="small"
            onClick={handlePlayPause}
          >
            {isReading === false ? (
              <PlayArrow htmlColor="orangered" titleAccess="Play Reading" />
            ) : (
              <PauseCircle htmlColor="green" titleAccess="Pause Reading" />
            )}
          </IconButton>
          <IconButton rounded={true} size="small" onClick={handleStopReading}>
            <StopCircle htmlColor="orangered" titleAccess="Stop Reading" />
          </IconButton>
        </>
      )}
    </Stack>
  );
};

export default BlogReader;
