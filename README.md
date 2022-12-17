# DaVinci Resolve Beat-Marker-Script

beat-marker is a Python script that creates markers in the current timeline or on an audio clip in DaVinci Resolve accoring to a given BPM.

## Usage

### From the command line

The script can be started from the command line. To create markers in the current timeline, the following command is used:

`python beat-marker.py timeline <bpm> [<offset>]`

- `<bpm>` is the desired tempo value in beats per minute.
- `<offset>` is an optional shift in frames to move the markers.

To create markers on an audio clip, the following command is used:

`python beat-marker.py clip <audio-track> <bpm> [<offset>]`

- `<audio-track>` is the number of the audio track where the clip is located.
- `<bpm>` is the desired tempo value in beats per minute.
- `<offset>` is an optional shift in frames to move the markers.

### From the GUI

The script also includes a graphical user interface that can be started with the following command:

`python beat-marker.py`

In the GUI, markers can be created in the current timeline or on an audio clip by selecting the desired mode and filling in the required input fields.

## Installation

The script requires Python 3 and the `DaVinciResolveScript` module, which will automatically be installed with DaVinci Resolve.

## Notes

- The script was developed and tested on DaVinci Resolve 17.
- It has only been tested on Windows and MacOS. It may potentially work on Linux systems, but this has not been tested.
- Before using the script in the current timeline or on an audio clip, all existing genrated markers (in the color sand) will be deleted.
- The script will always put the markers on the first audio clip on the specified track.
