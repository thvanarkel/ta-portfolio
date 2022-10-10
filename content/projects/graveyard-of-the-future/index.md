---
title: "Graveyard of the future"
date: "01 juli 2018"
draft: false
weight: 50
categories:
  - "speculative design"
timespan: "2018"

featured_image: "cover.jpg"

---
The goal of this project was to design and prototype an interactive artefact from a speculative future, which was to be featured at a public exhibition. Apart from offering a provocative, reflective and interactive experience, the artefact had to make visitors reflect on the role technology plays in our current and future worlds.

## Concept
The exhibition reimagined the graveyard of the future to be a museological experience, where people can explore the premises to learn from the deceased. At the same time the installation also encouraged visitors to reflect on what can be done with their data—and that once that data is out in the world it will likely surpass their lifetime.

{{< vimeo 297163374 >}}

By holding the data explorer against a wall with diamond shaped graves, visitors could hear stories compiled of data elements by that deceased person. By rotating the rings on the device different channels of data could be explored and listened to.

{{< gallery >}}
  {{< figure src="resources/concept01.jpg" caption="Visitors are handed the ‘data explorer’" >}}
  {{< figure src="resources/concept02.jpg" caption="After which they can start roaming around the graveyard to listen to stories of the deceased" >}}
  {{< figure src="resources/concept03.jpg" caption="Afterwards visitors were asked whether they would offer their data after they die" >}}
{{< /gallery >}}

## Process
We applied a make-first strategy throughout this design project—gradually improving the fidelity of both the concept and the interactive artefact. Very early on in the process we settled on exploring the context of data after death. We started out with the analogy of a family portrait gallery—which we enacted in order to quickly gather insights.

{{< figure src="resources/perform.jpg" caption="Acting out our first prototype—a wall of family portraits" class="single" >}}

In the later stages of the project I mainly focused on building the interactive experience through hardware and software prototyping. In consecutive iterations we explored different kinds shapes and ways to explore the data (e.g. through a text-based interface). We quickly settled for an explorative device that would be used to browse the data of people spatially.

{{< gallery >}}
  {{< figure src="resources/prototyping01.jpg" caption="Testing out different kinds of data that people would want to share" >}}
  {{< figure src="resources/prototyping02.jpg" caption="First scanner prototype" >}}
{{< /gallery >}}

We finally settled for exploring the graveyard through audio, as it offers a more personal experience. We prototyped the device first through enacting the audio feedback. Then in the next iteration I used Processing to quickly test the audio feedback using a standard speaker.

{{< gallery >}}
  {{< figure src="resources/prototyping03.jpg" caption="Acting out the audio fragments" >}}
  {{< figure src="resources/prototyping04.jpg" caption="Setup with processing for testing real audio fragments" >}}
  {{< figure src="resources/prototyping05.jpg" caption="Testing a rough prototype of the data explorer" >}}
{{< /gallery >}}

For the final prototype I used an RFID reader to identify where the data explorer was held. An Xbee radio was used to communicate the position to the LEDs in the wall to act correspondingly. An audio board on an Arduino was used to play the audio snippets—and two potentiometers in the rings were used to interact with the system.

For the DeSForM conference 2017, the prototype was redesigned to improve the interaction with the prototype. The shape of the device is more directional, and the device has to fit in a cavity for it to function. I miniaturised electronics were miniaturised to make the device easier to hold. The data channels can be browsed through with a wheel on top of the device—using a rotary encoder instead of potentiometers. Stories of the deceased are alternated with fragments of noise—this way the interaction is like tuning a radio.

{{< gallery >}}
  {{< figure src="resources/desform01.jpg" caption="The new data explorer with tuning wheel on top" >}}
  {{< figure src="resources/desform02.jpg" caption="The redesigned data explorer and wall cavities" >}}
  {{< figure src="resources/desform03.jpeg" caption="Redesigned electronics so the embodiment  is smaller and easier to hold" >}}
{{< /gallery >}}
