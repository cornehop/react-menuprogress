This is a little project I created that shows the read progress of the user in the menu.
For the project I'm working on I needed to show the current position in the text based on the menu on the left.
The code was designed after the original project to be able shift the code over as simple as possible.
However it might be interesting for others to see how I implemented this.

The biggest challenge was that the Body and the Menu had no idea of each others existence.
Most of the solutions I found online were using component references to do this, they were not usable for me.

To start the project simply run:

### `npm start`
