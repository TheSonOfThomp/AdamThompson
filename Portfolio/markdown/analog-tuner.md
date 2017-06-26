As a summative project for our circuits and measurement class, I convinced my lab-mates to do a project involving music. After some consideration, we decided to make an analog guitar tuner. The project scope was narrowed from a six-string tuner to a filter tuned to a single note. Because of the tolerances of the components we had to use, and the 2x3 hour time limit, we decided to target the high-E sring, which allowed us a higher bandwidth bewteen semitones. Using a tuned second-order of band-pass filter, rectifier, and envelope filter, we designed a tuner to light an LED when the high-E string was played. 

Unfortunately on construction, the filter still had too high a bandwidth, and would respond "in tune" for notes almost a whole-tone away from high-E. To fix this within the time limit, we quickly calculated the components required to calibrate to the highest note on my guitar (C). After finding these components in the lab, we had a functional single-note guitar tuner. 

<figure class='folio_image' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/tuner-diagram.jpg'>
	</a>
<figcaption>The circuit diagram for the tuner</figcaption>
</figure>



<figure class='folio_image' id='img2'>
	<a target='_blank'>
		<img src='../includes/portfolio_images/tuner-scope.jpg'>
	</a>
<figcaption>Oscilloscope output of the high-E string being played (after transient)</figcaption>
</figure>