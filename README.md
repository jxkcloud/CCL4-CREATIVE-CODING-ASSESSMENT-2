## p5.js Creative Coding: Assessment 2
Compilation of 10 Interactive Activities
Welcome to my Assessment 2 work compilation! This repository contains 10 distinct "Acts" created using p5.js. These projects explore the intersection of art and logic—ranging from simple generative patterns to a fully functional rhythm game.



Open any index.html file in your browser (preferably using a local server like VS Code's "Live Server").
Ensure you have the p5.js library linked.

# Project Breakdown



# Act 1 The City Drive
A side-scrolling animation featuring a procedural city skyline and a moving car.
Key Features: Procedural building heights (stored in an array to prevent flickering) and scaled car graphics.
Technical Focus: Translation, scaling, and basic game loops.


# Act 2 The Alien
An interactive space scene with an alien that reacts to your mouse.
Key Features: Planets with glowing effects and an alien whose eyes follow the cursor.
Interaction: Click the mouse to toggle the alien's expression between happy and sad.


# Act 3 Working with images
A creative take on image manipulation where a source image is "rebuilt" using falling triangular droplets.
Key Features: Uses createGraphics as a buffer to sample colors from a source image (stonks.png).
Technical Focus: Pixel sampling and off-screen buffers.

# Act 4 Simple pattern
A generative wallpaper maker that produces unique geometric designs every time it runs.
Key Features: Randomly selects from a list of color palettes and applies random rotations to grid elements.
Technical Focus: Nested loops, array randomization, and coordinate system rotation.


# Act 5 Typography
A two-stage text experience. First, you type your own message; then, it animates onto the screen.
Key Features: Custom font support (Lugoj Demo) and smooth "easing" animation.
Interaction: Keyboard input for typing and ENTER to trigger the animation.


# Act 6 Mouse Trails
A vibrant, HSL-based trail that follows the mouse.
Key Features: The size of the circles is mapped to the speed of your mouse movement.
Technical Focus: Distance calculation (dist), HSL color mode, and array-based object management.


# Act 7 Interactive art
A web / hair like design i meant for it to look more like roots tho hahaha
Key Features: Particles follow Perlin noise by default but are "attracted" to the cursor when it gets close.
Technical Focus: Vectors, Perlin Noise, and trigonometry (atan2, cos, sin).


# Act 8 Audio Visualization: Spike Wave
A real-time visualizer that reacts to your microphone input.
Key Features: A jagged, high-density wave that grows based on volume.
Technical Focus: p5.AudioIn, microphone mapping, and noise-driven vertex shapes.


# Act 9 Data Visualization
A bar chart visualizing viewership data over 12 months.
Key Features: Dynamic bar scaling using map() and rotated axis labels for readability.
Technical Focus: Data mapping and static visualization layouts.


# Act 10 The Melodist (Rhythm Game)
The capstone project: a 4-lane rhythm game with music synchronization and a ranking system.
Key Features: Keybinds (QWOP), combo counters, scoring system, and an "S/A/B/C" rank end screen.
Technical Focus: State management (menu, playing, end), synthesis (p5.Oscillator), and precise timing logic.




# Built With
p5.js - A JavaScript library for creative coding.
Lugoj Demo Font - Used for the typography exercise.



# About the Author
I am a student at the Metaverse Age Training Institute.
This collection represents my journey in learning how to manipulate pixels, sounds, and data through code
