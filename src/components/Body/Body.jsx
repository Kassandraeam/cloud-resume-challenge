import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Menu, MenuItem, Select } from "@mui/material";

const Body = () => {
  const [filmSimulation, setFilmSimulation] = useState("");
  const [grainEffect, setGrainEffect] = useState("");
  const [colorChromeEffect, setColorChromeEffect] = useState("");
  const [whiteBalance, setWhiteBalance] = useState("");
  const [dynamicRange, setDynamicRange] = useState("");
  const [toneCurve, setToneCurve] = useState("");
  const [color, setColor] = useState("");
  const [sharpness, setSharpness] = useState("");
  const [noiseReduction, setNoiseReduction] = useState("");
  const [clarity, setClarity] = useState("");

  const handleChange = (event) => {

    setFilmSimulation(event.target.value);
    setGrainEffect(event.target.value);
    setColorChromeEffect(event.target.value);
    setWhiteBalance(event.target.value);
    setDynamicRange(event.target.value);
    setToneCurve(event.target.value);
    setColor(event.target.value);
    setSharpness(event.target.value);
    setNoiseReduction(event.target.value);
    setClarity(event.target.value);


    console.log(event.target.value);

  };

  return (
    <>
      <div>
        <h2>Film Simulation</h2>
        <Select sx={{ width: 250, height: 50 }} defaultValue = "" onChange={handleChange}>
          <MenuItem value=""></MenuItem>

          <MenuItem value="Provia / Standard">
            Provia / Standard: Ideal for a wide range of subjects
          </MenuItem>

          <MenuItem value="Velvia / Vivid">
            Velvia / Vivid: Vibrant reproductions, ideal for landscape and
            nature
          </MenuItem>

          <MenuItem value="Astia / Soft">
            Astia / Soft: Softer color and contrast for a more subdued look
          </MenuItem>

          <MenuItem value="Classic Chrome">
            Classic Chrome: Soft color and enhanced shadow contrast for a calm
            look
          </MenuItem>

          <MenuItem value="PRO Negative Hi">
            PRO Negative Hi: Ideal for portrait with slightly enhanced contrast
          </MenuItem>

          <MenuItem value="PRO Negative Standard">
            PRO Negative Standard: Ideal for portrait with soft gradiations and
            skin tones
          </MenuItem>

          <MenuItem value="Classic Negative">
            Classic Negative: Enhanced color with hard tonality to increase
            image depth
          </MenuItem>

          <MenuItem value="ETERNA / Cincema">
            ETERNA / Cincema: Soft color and rich shadow tone suitable for film
            look movie
          </MenuItem>

          <MenuItem value="ACROS">
            ACROS: Shoot in Black and White in rich details with sharpness
          </MenuItem>

          <MenuItem value="Monochrome">
            Monochrome: Shoot in Black and White with softer tones and smooth
            textures
          </MenuItem>

          <MenuItem value="Sepia">
            Sepia: Shoot in sepia tone for a nostalgic feel
          </MenuItem>
        </Select>
      </div>

      {/* <div>
        <h2>Grain Effect</h2>
        <Select
          sx={{
            width: 250,
            height: 50,
          }}
          onChange={handleChange}
        >
          <MenuItem value="Off | Off "> Off | Off </MenuItem>
        </Select>
      </div> */}
{/* 
      <div>
        <h2>Color Chrome Effect and FX Blue</h2>
        <Select
          sx={{
            width: 250,
            height: 50,
          }}
        >
          <MenuItem value=""></MenuItem>
        </Select>
      </div>

      <div>
        <h2>White Balance</h2>
        <Select
          sx={{
            width: 250,
            height: 50,
          }}
        >
          <MenuItem value=""></MenuItem>
        </Select>
      </div>

      <div>
        <h2>Dynamic Range</h2>
        <Select
          sx={{
            width: 250,
            height: 50,
          }}
        >
          <MenuItem value=""></MenuItem>
        </Select>
      </div>

      <div>
        <h2>Tone Curve: Highlight and Shadow</h2>
        <Select
          sx={{
            width: 250,
            height: 50,
          }}
        >
          <MenuItem value=""></MenuItem>
        </Select>
      </div>

      <div>
        <h2>Color</h2>
        <Select
          sx={{
            width: 250,
            height: 50,
          }}
        >
          <MenuItem value=""></MenuItem>
        </Select>
      </div>

      <div>
        <h2>Sharpness</h2>
        <Select
          sx={{
            width: 250,
            height: 50,
          }}
        >
          <MenuItem value=""></MenuItem>
        </Select>
      </div>

      <div>
        <h2>Noise Reduction</h2>
        <Select
          sx={{
            width: 250,
            height: 50,
          }}
        >
          <MenuItem value=""></MenuItem>
        </Select>
      </div>

      <div>
        <h2>Clarity</h2>
        <Select
          sx={{
            width: 250,
            height: 50,
          }}
        >
          <MenuItem value=""></MenuItem>
        </Select>
      </div>
       */}
    </>
  );
};

export default Body;
