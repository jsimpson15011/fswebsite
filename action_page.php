<!DOCTYPE html>
<html>
	<head>
		<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
		<title>Fountain Springs Golf Course</title>
		<div id=logocontainer>
			<a href="index.html">
				<img id="logo" src="images/logo.png">
				<h1> Fountain Springs Golf Club</h1>
			</a>

			<div class="whitelinesoverflow">
				<img id="whitelines" src="images/whitelines.png">
			</div>
		</div>
				<div class="nav">
			<ul class="buttons">
				<tr>
					<li class="buttons centerbuttons"><a href="index.html">
						<img src="images/home.png" onmouseover="this.src='images/homehover.png';" onmouseout="this.src='images/home.png';"/>
					</a></li>

					<li class="buttons centerbuttons" id="golf"><a href="info.html">
							<img src="images/teetimeshover.png" onmouseover="this.src='images/teetimes.png';" onmouseout="this.src='images/teetimeshover.png';"/>
						</a>
						<div id="golf-dropdown">
							<a href="info.html">
								<p class="dropdown-button">Course Information</p>
							</a>

							<a href="teetimes.html">
								<p class="dropdown-button-current">Tee Times</p>
							</a>
							
							<a href="membership.html">
								<p class="dropdown-button">Membership</p>
							</a>
						</div>
					</li>

					<li class="buttons centerbuttons"><a href="calendar.html">
						<img src="images/Eventcalendar.png" onmouseover="this.src='images/Eventcalendarhover.png';" onmouseout="this.src='images/Eventcalendar.png';"/>
					</a></li>

					<li class="buttons" id="weddings"><a href="bookevent.html">
						<img src="images/bookevent.png" onmouseover="this.src='images/bookeventhover.png';" onmouseout="this.src='images/bookevent.png';"/>
					</a>
						<div id="weddings-dropdown">
							<a href="eventphotos.html">
								<p class="dropdown-button">Photos</p>
							</a>

							<a href="bookevent.html">
								<p class="dropdown-button">Book Your Event</p>
							</a>

							<a href="lodging.html">
								<p class="dropdown-button">Lodging</p>
							</a>
						</div>
					</li>

				</tr>
			</ul>

		</div>

		<div id="greenbox">
		<img id="bannergrass" src="images/bannergrass.png">
		</div>
	<title></title>
</head>
<body>
<div id="booking-box">
	<p>
		<?php 
		echo 'welcome' .' ' htmlspecialchars($_GET["fname"]); 
		?>
	</p>
</div>
</body>
		<link href="CSS/styles.css" type="text/css"
		rel="stylesheet" />
</html>