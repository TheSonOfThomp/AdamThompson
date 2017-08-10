#Chameleon Hearing Protection

What if your ears could blink? Chameleon is a variable hearing protection device that changes its attenuation according to the environment. Chameleon is targeted towards users in periodically loud environments—environments with significant noise exposure, but with periods of quiet where communication is key, such as construction sites, factories and machine shops. 

Chameleon has won several prizes, including SYDE People's Choice, and the Norman Esch Entrepreneurship Award.

I was the product lead in this project, and played a pivotal role in all aspects of product design including defining requirements & benchmarks, designing the attenuation system, measurement circuit, and control logic, and implementing standard test procedures and analyzing the results. 

<!-- Everything in this article was done by me, with input from other group members where noted. -->


<figure class='folio_image' id='cover-image'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/chameleon/chameleon-front-render-with-logo.jpg'>
	</a>
<figcaption></figcaption>
</figure>

## Getting Started

The bulk of the first term (4 months) of this project was spent refining our problem, researching user requirements, as well as learning about acoustics physics. Though we started the Final-Year Design Project (FYDP) in September 2016, we didn't arrive at a reasonable problem area until early October. This time was spent researching music, audio and health spaces, and meeting audiologists, audio electronics engineers, and acoustics professors  to come up with a reasonable and realistic design problem statement:

> Workers in variably loud environments, where communication is key, often do not wear hearing protection in order to more easily communicate, and to avoid the tedium of constant removal and re-application. 

> We will design a hearing protection device to dynamically and effectively attenuate relevant moderate-to-loud noise as it occurs, and to not attenuate significantly at normal ambient sound levels.

## User Requirements & Benchmarks
 
To validate that we were solving a real problem, we interviewed and surveyed over a dozen potential users working in the target environments. Many users admitted openly that they didn't regularly use hearing protection—even when they knew they should—because it was inconvenient and uncomfortable. If they were wearing hearing protection and needed to talk to a coworker, they would need to take the hearing protector off. Because of this tedium, many people wouldn't put on hearing protection during the loud periods between conversation. 

Other reasons cited were because of comfort—standard hearing protectors can put a lot of pressure on the head and feel isolating, while earplugs can be hard to insert, especially when wearing work gloves. Findings from these interviews were corroborated by a number of academic sources, which study the comfort, and social aspects of hearing protection [^Hsu] [^Park] [^Stephenson&Stephenson] [^Gower] [^Acton] [^Berger].

From all our research we were able to define six major areas that the product should perform in, and user requirements in each. We took these categories and set benchmarks based on government standards, the behaviour of other devices and other research.

<table>
<thead><tr><th>Product Attribute</th><th>User Requirement</th><th>Metric</th><th>Unit</th><th>Min</th><th>Target</th><th>Max</th></tr></thead><tbody>
 <tr><td>Attenuation</td><td>Shall protect against excessively loud noise</td><td>Reaction Time</td><td>ms</td><td>0</td><td>100</td><td>1000</td></tr>
 <tr><td>&nbsp;</td><td></td><td>Closed Attenuation</td><td>NRR</td><td>11</td><td>25</td><td>32</td></tr>
 <tr><td>Communication</td><td>Shall allow communication without removal in periods when communication is possible</td><td>Open Attenuation</td><td>NRR</td><td> - </td><td>0</td><td>6</td></tr>
 <tr><td>&nbsp;</td><td></td><td>Threshold to Close</td><td>dB (SPL)</td><td>77</td><td>85</td><td>90</td></tr>
 <tr><td>&nbsp;</td><td>&nbsp;</td><td>Threshold to Open</td><td>dB (SPL)</td><td>50</td><td>55</td><td>65</td></tr>
 <tr><td>Comfort</td><td>Should be comfortable to wear for a full work day</td><td>Weight</td><td>Grams</td><td> - </td><td>245</td><td>330</td></tr>
 <tr><td>&nbsp;</td><td>&nbsp;</td><td>Head Pressure</td><td>Newtons</td><td>0</td><td>10.5</td><td>14</td></tr>
 <tr><td>&nbsp;</td><td>&nbsp;</td><td>Heat</td><td>˚C</td><td> - </td><td>30</td><td>36</td></tr>
 <tr><td>&nbsp;</td><td>Ear should not touch inner cup</td><td>Inner height</td><td>mm</td><td>63</td><td>75</td><td> - </td></tr>
 <tr><td>&nbsp;</td><td>&nbsp;</td><td>Inner width</td><td>mm</td><td>36</td><td>45</td><td> - </td></tr>
 <tr><td>&nbsp;</td><td>&nbsp;</td><td>Depth</td><td>mm</td><td>15</td><td>38</td><td> - </td></tr>
 <tr><td>Cost</td><td>Should be competitively priced relative to similar products</td><td>Cost of Device</td><td>$</td><td> - </td><td>50</td><td>300</td></tr>
 <tr><td>&nbsp;</td><td>Should function for an entire workday</td><td>Operational time</td><td>Hours</td><td>8</td><td>12</td><td> - </td></tr>
 <tr><td>&nbsp;</td><td>&nbsp;</td><td>Power Consumption</td><td>Watts</td><td>0</td><td> - </td><td>1.85</td></tr>
 <tr><td>Measurement Accuracy</td><td>Should accurately measure noise level</td><td>Measurement Error at 4kHz</td><td>dBSPL</td><td>0</td><td>-</td><td>3</td></tr>
</tbody></table>

Durability was also an area of concern throughout the design process, given the use environment, but it was an oversight that we never explicitly defined durability benchmarks.

## Measurement Circuit

Our first prototypes were of the measurement circuit—a system to calculate the Sound Pressure Level (SPL) in A-weighted decibels (dBA) from the mic's signal. The design of this piece was based on that of a [standard noise meter](https://www.youtube.com/watch?v=Gg8po2AM8PQ). In order to have a useful dB value that represents SPL as a human ear might hear it, the incoming sound signal is put through a special band-pass filter, known as an [A-weight filter](https://en.wikipedia.org/wiki/A-weighting). 

<figure class='folio_image' id='cover-image'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/chameleon/Acoustic_weighting_curves.png'>
	</a>
<figcaption>A graph of the A-, B-, C- and D-weightings across the frequency range 10 Hz – 20 kHz (Wikipedia)</figcaption>
</figure>

I took a circuit I found online for this filter, double checked it had the right poles/zeroes, and simulated it in CircuitLab.com to verify its behaviour. The filter worked as expected, though it did have a constant negative gain of about -6dB. This is not a problem since the signal would need to be amplified before passing through the filter in the first place. 

Next, in order to find the _amplitude_ of the incoming signal, I added a peak detector to the circuit. This removed the phase information, and left us with a DC signal representing the peak volume in the environment. 


<figure class='folio_image' id='cover-image'>
	<a target='_blank' href="https://www.circuitlab.com/circuit/sq7f7bt8tg4q/fydp-signal-analysis/">
		<img src="https://www.circuitlab.com/circuit/sq7f7bt8tg4q/screenshot/540x405/"/>
	</a>
<figcaption>A Schematic or the original measurement circuit. <a href="https://www.circuitlab.com/circuit/sq7f7bt8tg4q/fydp-signal-analysis/">View on CircuitLab.com</a></figcaption>
</figure>


This DC signal was then input into an `analogRead` pin of an Arduino UNO. Since all the gains in the circuit are known, we can easily calculate the voltage at the output of the microphone. Since the sensitivity of the microphone is given, the incoming noise level in dB(A) can be calculated like so: 

```Arduino
// Microphone Calibration
const double p0 = 0.00002; // Reference Pressure (Pa)
const double sens = 1000 * pow(10,(-53/20)); // Microphone sensitivity in mV/Pa 
											// convert sensitivity from dBV/Pa to mV/Pa
const double A_filt = 0.502; // A-filter gain
const double R1 = 4658; // Amplifier Resistor (Ohms)
const double R2 = 98600; // Amplifier Resistor (Ohms)
const double G = 1 + R2/R1; // Amplifier gain
const double S_total = p0*sens*A_filt*2*G; // Overall Gain
...
double vin = getInput(micPin);
double dBSPL = 20*log10(vin/S_total);
```

This took a little tweaking since the component values and mic input voltage weren't precise. In the end we were able to get a relatively accurate measurement of the noise level reaching the microphone which we verified the SPL this using an app the CDC recommends, [NoiSee](https://itunes.apple.com/us/app/noisee/id549239949?mt=8).

---

I often got questions when demo-ing the prototype about why the filtering was implemented in analog circuitry as opposed to digitally. The answer for the first prototype is that the Arduino Uno was the only microcontroller we had access to at this point, and that I was more familiar with analog filters vs. digital filters. Once we had decided to implement the final prototype using a Teensy 3.2, which has enough processing power to do this kind of filtering (and I had become more familiar with digital filtering) I decided to keep this section of the design the same so I could spend more time working on parts of the prototype that didn't work yet. So once the measurement circuit was designed, not much changed (other than the specific op-amps to deal with new power requirements). 

## First Full Prototype 
<!-- — Mechanical Design & Control Logic -->

Our first prototype used a standard issue ear-muff, retro-fitted with two aluminum disks. Our goal early on was to make a device which could attenuate at _all_ values between maximum an minimum attenuation. This could hypothetically be achieved by rotating the disks, and aligning them to allow enough sound to pass through. Using a mic placed inside the ear-cup, we measured the SPL reaching the ear, and used the Arduino to control a motor and rotate the top disk.

The first iteration of the control logic attempted to create a pseudo-PID controller using the target SPL as the reference signal, and would rotate the disks until the incoming SPL matched the reference. Due to the placement of the motor though, the noise of the motor could be heard inside the ear-cup, and made it so the device would never find an equilibrium point. 

The second controller iteration did away with continuously variable attenuation, and focused on trying to either attenuate, or not attenuate. This worked better, but the noise of the motor still influenced the sound inside the cup. Because of this, we had to write a line in the controller to ignore inputs immediately after opening for the device to work properly. Also, since reaction time was a priority, this design had too much inertia to close in a reasonable time frame.

<figure class='folio_image video' id='first-proto-video'>
	<iframe src="https://www.youtube.com/embed/yUvlpVK7ays" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	<figcaption>The first, rotating disk prototype</figcaption>
</figure>

Although this prototype was noisy and slow, it did afford some attenuation in the closed position—albeit with some slit leaks—validating our hypothesis of variable attenuation by opening and closing a hole. Our second prototype focused on designing a better attenuator/actuation method, and refining the circuit and controller code. We also spent some time validating different attenuation methods, and testing the device.

## Solenoid-Piston Prototype

Our second concept was an evolution of the first, with a new actuation method. Since the first prototype was slow to react, I decided to replace the motor with a solenoid. I found out that using a solenoid to get a disk to rotate is harder than it sounds. 

<figure class='folio_image images-2' id='piston'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/chameleon/piston-math.jpg'>
		<img src='../includes/portfolio_images/chameleon/piston-render.png'>
	</a>
</figure>

After a bunch of math and searching for a solenoid with a long enough stroke length, I finally designed a device that did what we wanted. When the solenoid turned on, the disk would rotate to open. When released, a counterweight would close it—satisfying the need to fail safely. The idea was that using PWM control of the solenoid, we could have a partly open device.

The problem with this design though was that it could not achieve both requirements of response time, and _fail safely_ simultaneously. By setting the default position of the disk, we could achieve fast response, but would sacrifice the fail safe. The solenoid here was also very heavy, and would very quickly put us over our weight restriction. We had to come up with a better design. 
 
 <figure class='folio_image video' id='solenoid-video'>
	<iframe src="https://www.youtube.com/embed/GW6wDcbiR3k?list=PLnUG-U16QXpsAc74SRDsiHT3LXUmkgTNe" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	<figcaption>Solenoid-actuated Piston Design</figcaption>
</figure>


## A Fork in the Road
<!-- Acoustic Tests -->

Around the same time as we were evaluating the solenoid-piston actuator, we prepared an experiment to determine what attenuator was actually the best. We had taken all our design ideas, and evaluated them based on our criteria using a decision matrix. We took the top three, and ran them through a rough a qualitative acoustic test. We retrofitted these designs into an ear-muff, and played loud (but not harmful) noise. We then and asked participants to evaluate the attenuation heard for each design. While this method was not entirely scientific, it was a quick process that provided interesting data. 


<figure class='folio_image' id='three-attenuators'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/chameleon/3-attenuators.png'>
	</a>
	<figcaption>Renders of the 3 Attenuator designs tested</figcaption>
</figure>

<!-- Table of Attenuator Test results -->

| ATTENUATOR | NOTES |
| --- | --- |
| Only Aperture (control) | Not much noticeable attenuation, some slight muffling |
| Solid Plug | Good Attenuation. Comparable to real HPD |
| Shutter (closed) | Good Attenuation. Similar to plug |
| Shutter (open) | No noticeable attenuation. Similar to control |
| Shutter (partly closed) | No Noticeable attenuation until aperture size was less than a millimetre. Some muffling as aperture got smaller. Reflects research by N. Trompette |
| Pie-Slices (closed) | Some Attenuation. Seal wasn’t perfectly formed (sizes were misaligned) |
| Pie-Slices (open) | No Noticeable attenuation. Similar to control |
| Pie-slices (partly closed) | No Noticeable attenuation until aperture size was less than a millimetre. Similar to partly-closed shutter. |


From only a few of these tests, it became clear that the "Pie slices" design (used in the solenoid prototype) was not the greatest performer, nor did the "Shutter" design succeed in achieving variable attenuation.

### Backed by real science

While looking at the results of these tests, I came across research that was able to quantify the trends we were seeing. It suggested that the majority of attenuation variability essentially comes from closing small slit leaks, and variability decays exponentially as the aperture size increases [^Trompette]. 

That makes sense intuitively—take the analogy of closing a window to block noise from a party outside. There is no noticeable difference in noise level until the window is nearly completely closed. In order to achieve useful continuously variable attenuation, we would need incredibly accurate control of an actuator in the first few degrees of rotation. 

<figure class='folio_image' id='trompette-graph'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/chameleon/trompette-graph.png'>
	</a>
	<figcaption>Graph showing the relationship between aperture size, and transmission loss. (Trompette et. al.)</figcaption>
</figure>

Since continuously variable attenuation was not absolutely necessary to the success of the device (and deadlines were approaching), we decided to abandon continuously variable attenuation for a simpler "binary attenuation" design—the best of which was a plug-type design.


## Magnets (A New Prototype)

<!-- We needed to come up with a new form of actuation since the solenoid was too heavy, and a new form of attenuation since the rotating disks were not entirely viable according to the acoustic tests. 
 -->
One of the reservations I had with a plug design was the difficulty we would have actuating it—that is, getting the plug to open and close. Getting linear motion would likely require a solenoid, and it's not entirely space-efficient to put a solenoid on its side, perpendicular to the head just to get a plug to move in and out. 

Before we did away with the "Pie-slices" design I had been working on a more efficient way of actuating that attenuator. Inspired by [this article](http://makezine.com/2015/08/18/3d-print-stepper-motor/), I entertained the idea of building a custom stepper that would be embedded into the ear-cup, and allow a disk to rotate in increments up to a certain angle. For this, I had to refresh my memory of electromagnetism. 

The next actuator idea combined the electromagnetism research I had been doing, with problems we had with the plug design. The design had small permanent magnets embedded into a plug, and electromagnets into the outer shell. By changing the polarity of the electromagnets, we should be able to get the plug to move linearly in and out. I made a small electromagnet, and was able to get a small magnet to move back and forth. 

 <figure class='folio_image video' id='knex'>
	<iframe src="https://www.youtube.com/embed/P_6gGJK-_j8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	<figcaption></figcaption>
</figure>

On paper, 4 small electromagnets should be able to successfully push & pull the plug. After designing and printing a test cup however, we had a significant amount of trouble actually making the electromagnets even close to the designed size. 

<figure class='folio_image images-2' id='trompette-graph'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/chameleon/pull-plug-cad1.png'>
		<img src='../includes/portfolio_images/chameleon/pull-plug-cad2.png'>
	</a>
	<figcaption>CAD model of the 4-magnet plug design</figcaption>
</figure>

<!-- Our first try was to freely wrap the wire around a nail. This didn’t really work since there were no bounds and the coil would end up too long. Next we put a washer/nut on the nail, and spaced them correctly. The coil was wound between the barriers, then we sanded away the head of the nail, cut the other end to get the washer off, and cut it to size. This did not work great since the heat from sanding caused the enamel coating to melt, creating a short on the core. We then tried winding in the same way, but then slipping it onto a pre-cut nail as a core. This works in theory, but there were burrs on the cut nail, which scratched the enamel coating, again causing a short. If we had to make 4 of these, we would be in for a rough time. And we hadn’t even proven the concept yet. -->

One of our supervisors suggested late that afternoon that instead of using 4 small electromagnets we should use _one_, with a magnet in the middle since the magnetic field is stronger within the coil. I made a short coil and tested it out. Unfortunately, I had to push over 3 amps through the coil to get it to apply any force to the magnet.

<figure class='folio_image' id='major-hack'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/chameleon/full-coil-emag.jpg'>
	</a>
	<figcaption>Major Hack Alert! An entire spool of electromagnet wire strapped to our prototype</figcaption>
</figure>

About to give up for the day, I gave it one more shot and taped the whole roll of magnet wire to the ear-cup. That worked really well, and attracted the plug with the magnet on it.

 <figure class='folio_image video' id='major-hack-video'>
	<iframe src="https://www.youtube.com/embed/0WVfceDRWGI" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	<figcaption></figcaption>
</figure>

## More magnets! 


Inspiration came later that night for the next actuator idea while listening to music. The drivers in my headphones provided the same kind of motion I was trying to get—linear motion of a disk. I found an old speaker in the workshop and took it apart to observe how it worked. I was under the impression that it was the permanent magnet that moved in a loudspeaker, but I saw that it was actually the coil. This makes sense since the coil should have significantly less inertia, and would be easier to move at high frequencies.

<figure class='folio_image' id='disassembled-speaker'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/chameleon/disassembled-speaker.jpg'>
	</a>
	<figcaption>A disassembled speaker</figcaption>
</figure>

After taking apart the speaker and understanding its operation, I attached our 3D printed pug to the end of the driver. The plug doesn’t have too much inertia and the driver can still push the plug. I hacked together a system to hold the speaker in the cup, and showed the plug creating a seal against the cup and pulling back.

 <figure class='folio_image video images-2' id='speaker-video'>
	<iframe src="https://www.youtube.com/embed/BedHsQAP5lA" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	<iframe src="https://www.youtube.com/embed/3MwTPf00DdE" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	<figcaption></figcaption>
</figure>

## Some Electronics

Now that we have a proof-of-concept attenuator/actuator design, we'll change the subject a little, and look at the electronics, and controller design.
 

#### Signal Measurement & Control Logic

We had bought a Teensy as a faster, more powerful replacement to the Arduino UNO. The first step was to make sure the Teensy could read the incoming signal from the microphone. Powering the Teensy from a laptop, the mic from the bench supply, we successfully got an `analogRead` again. 

The initial measurement circuit used an analog envelope filter to measure the peak noise level. This resulted in an exponential decay effect, and could result in the device behaving incorrectly. It would be better to use a sample-and-hold algorithm on the microcontroller itself.  The new algorithm would continuously sample the audio, and hold the peak value. If the peak value ever exceeded the noise threshold, we would send a `close` command to the driver. If the peak level dropped below the threshold after a given safe window, the device would `open` again. As a heuristic, we selected a 5-second window as a slow-enough noise rate to avoid frequent opening and closing of the device—though this could be changed to suit a given scenario. Controller code can be found on [GitHub](https://github.com/dsschwarz/madd.audio/blob/master/ChameleonController/ChameleonController.ino)


#### Driver Circuit

Back when the plan was to use a DC motor, I had found some optical relay ICs in the workshop, and put together an [H-bridge](https://en.wikipedia.org/wiki/H_bridge). The new design was similar, and could make use of the same circuit to change the polarity. So, by sending 2 bits (`digitalWrite`) from the Teensy, we could quite easily change the polarity of the electromagnet. We discussed using a proper H-bridge IC, but these were physically too large, and were overkill for the task at hand.

I spent some time in the lab testing this circuit, and making sure it would work with our speaker driver. The only real issue with the relay circuit design was the potential to draw too much current since they were only rated to 500mA. I placed an 8Ω current-limiting resistor in the circuit to prevent this.

#### Power Supply

We now had to figure out how we were to provide power to two microphones, two speaker drivers, and microcontroller all at once. Not wanting to deal with power supply noise, we decided to use two 3.7V Li-Po batteries—one to power the Teensy and microphones, and the other to power the drivers. 

A bug showed up in the measurement circuit once we made the switch to the new batteries, and the Teensy was no longer reading the signal from the microphone. I tested each part of that circuit, and realized that the op-amps we were using (LM833) didn’t have a very high output swing, and could not operate at lower than 5V differential. Luckily, we had low power amps (MCP6004) in the workshop, whose data sheets signified that they would do the job well with 3.7 V. With a lower voltage now the -6dB gain of the filter dropped the signal again by quite a fair amount, so I put in a second amplifier to bring the signal up again. This seems to have solved the issue, and the Teensy is now reading the signal fine.

<figure class='folio_image' id='full-circuit-test'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/chameleon/full-circuit-test.jpg'>
	</a>
	<figcaption>A prototype of the full circuit, including measurement, control logic, and drivers</figcaption>
</figure>

The full circuit diagram can be found on [CircuitLab.com](https://www.circuitlab.com/circuit/55bkhx9ncr24/chameleon-full-v2/).

## Speaker-driver Prototype

Unfortunately, we discovered that the wires were very thin on most speakers, and it was incredibly hard to attach any leads to the coils. There was one model OK to work with, so we decided we would use that model for our prototype once we got the driver working. Thanks to Mike's skill in the machine shop, we were able to get a "standard" form of the speaker driver.

Now that we knew what we were dealing with, I tweaked the CAD design, and also designed a brace to hold the speaker in place. Once I was satisfied with this design, I sent it to the printer.

<figure class='folio_image images-2' id='speaker-driver-print1'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/chameleon/machined-driver.jpg'>
		<img src='../includes/portfolio_images/chameleon/speaker-driver-print1.jpg'>
	</a>
	<figcaption>We had to cut the brace to make it fit. I changed the CAD specs for the next print</figcaption>
</figure>

Taking inspiration from one of our previous concepts, we put some small permanent magnets in the plug and ear-cup to make sure the device would be closed by default.

We now had a design that we were happy with, and were sure would work. We were also pretty tight on time before we had to get test data, and sent two ear-cups to the printer. 

Sadly, the model was placed too close to the edge of the print bed, and ended up fusing to the support material! We contacted a [professional machine shop in town](http://www.vdzmade.ca), and got a rush job. 

<figure class='folio_image images-2' id='dumb-printer'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/chameleon/dumb-printer.jpg'>
		<img src='../includes/portfolio_images/chameleon/good-printer.jpg'>
	</a>
	<figcaption>The print fused with the support material! We had to go to a professional print shop.</figcaption>
</figure>

--- 
More details coming soon

<!-- 

## Mechanical Design

## Comfort and Ergonomics -->

<!-- https://docs.google.com/document/d/1XtTZvYhVj5v4aW86qTLLmxoaYj2D98W86wKhhCvCnVU/pub -->

[^Hsu]: Hsu, Yeh-Liang et al. "Comfort Evaluation Of Hearing Protection", International Journal of Industrial Ergonomics, vol.33, pp. 543-551 (2004)

[^Park]: Park, Min-Yong et. al. "An Empirical Study of Comfort Afforded by Various Hearing Protection Devices: Laboratory versus Field Results", Applied Acoustics, vol. 34, pp. 151-179 (1991)

[^Stephenson&Stephenson]: C. Stephenson and M. Stephenson, "Hearing loss prevention for carpenters: Part 1 - Using health communication and health promotion models to develop training that works", Noise and Health, vol. 13, no. 51, p. 113, 2011.

[^Gower]:  D. Gower and J. Casalvi, "Speech Intelligibility and Protective Effectiveness of Selected Active Noise Reduction and Conventional Communications Headsets", Human Factors: The Journal of the Human Factors and Ergonomics Society, vol. 36, no. 2, 2016.

[^Acton]: Acton, W. J., "Effects of Ear Protection on Communication", The Annals Occupational Hygeine, vol. 10, pp. 423-429 (1967)

[^Berger]: E. H. Berger, "The Effects of Hearing Protectors on Auditory Communications", Aearo Company (1979)

[^Trompette]: Trompette, N., Barbry, J.L., Sgard, F., Nelisse, H., "Sound transmission loss of rectangular and slit-shaped apertures: Experimental results and correlation with a modal model".  The Journal of the Acoustical Society of America, vol. 125, no. 31 (2009) Available: http://asa.scitation.org/doi/full/10.1121/1.3003084