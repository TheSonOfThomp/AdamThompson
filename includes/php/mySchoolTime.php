<?php	
/* 	Copyright (c) 2013 Adam Thompson (http://adam-thompson.ca)
	License below 
	-Defaults set to 4 stream, starting in 2012 with no terms missed.
		To change these settings, simply modify the desired value in the __construct() function (lines ~30-40)
*/

	date_default_timezone_set('America/Toronto');
	
	$mySchoolTime = new mySchoolTime;
	
	$term = $mySchoolTime->get_term();
	$season = $mySchoolTime->get_season();
	$year = $mySchoolTime->get_year();
?>
<?php

class mySchoolTime{
	
//Protect all the variables
	protected $stream;
	protected $year;
	protected $month;
	protected $year_start;
	protected $terms_lost;
	protected $year_grad;
	protected $term_grad;

//Set the variables
	public function __construct(){
	//Set your program's stream. Valid streams are: 4, 8, 8S or nano, soft, & 4S. (Note: No support for 'architecture')
		$this->stream = '4';
	// Get the current year and month
		$this->year = date('Y');
		$this->month = date('m');
	// Set the year you started school
		$this->year_start = 2012;
	// Set the number of terms lost since the start of school
		$this->terms_lost = 0;
	//Calculate when you're graduating	
		$this->year_grad = ($this->year_start + 5) + floor($this->terms_lost/3);
	}
	
	public function get_year() {
		return $this->year;
	}
	
	// returns the season (winter, spring or fall) //
	public function get_season(){
		if($this->month <= 4){
			$season = 'winter';
		}
		else if($this->month <= 8){
			$season = 'spring';
		}
		else if($this->month <= 12){
			$season = 'fall';
		}
		return $season;	
	}
	
	// returns the year and letter (eg: 2A) //
	public function get_term(){
	
		$season = $this->get_season();
	
	/* Calculate total completed terms since 1A */
		$term_num = ($this->year - $this->year_start)*3;
		if ($season == 'winter') {
			$term_num --;
		}
		else if ($season == 'fall') {
			$term_num ++;
		}
		// subtract the number of terms failed/skipped/lost
		$term_num -= $this->terms_lost;
		$term = $this->makeExceptions($term_num);
		if ($term !== 0) {
			return $term;
		}
	/* Check if term number associates with Coop */
		$coop = $this->Coop($term_num);
	
	/* Calculate the current/most-recent school term (neglecting coops) */	
		/* Rounded up */
		$school_term = ceil($term_num/2);

	/* Calculate the year number of current/most-recent school term */
		$term = ceil($school_term/2);
	/* Append the letter of the term */
		if ($school_term % 2 == 0){
			$term .= 'B';
		}
		else {
			$term .= 'A';
		}
		
	/* Append ' Co-op' if applicable */
		if ($coop){
			$term .= ' Co-op';
		}	
		return $term;
	}
	
	// This function checks whether the curent term is an exception to the 1-on 1-off co-op rule
	protected function makeExceptions(&$term_num) {
	$stream = $this->stream;
		switch ($stream) {
			case '4':
				/* Check for the 4B+ term coop exception */
					if ($this->year >= $this->year_grad && $term_num >=14){
						if ($this->year == $this->year_grad &&  $term_num == 14){
							return '4B';	
						}
						else {
							return 'real life';
						}
					}
					else {
						return 0;
					}
				break;	
			case '8':
			case 'soft':
				/* Check for the 1B term coop exception */
					if ($this->year == $this->year_start+1 && $term_num == 2) {
						$term_num += 1;
						return '1B';
					}
					elseif ($this->year >= $this->year_grad) {
						return 'real life';
					}
					else {
						return 0;
					}
				break;
			
			case '8S':
			case 'nano': 
				/* Check for all nano eng exceptions */
					if ($this->year == $this->year_start+1 && $term_num == 2) {
						$term_num += 1;
						return '1B';
					}
					else if ($term_num == 10) {
						return '3B';
					}
					elseif ($term_num == 11 || $term_num == 12) {
						return '3B Co-op';
					}
					elseif ($this->year == $this->year_grad &&  $term_num == 14){
						return '4B';	
					}
					elseif ($this->year >= $this->year_grad) {
						return 'real life';
					}
					else {
						$term_num += 1;
						return 0;
						}
				break;

			case '4S':
					if ($this->year >= $this->year_grad && $term_num >=14){
						if ($this->year == $this->year_grad &&  $term_num == 14){
							return '4B';	
						}
						else {
							return 'real life';
						}
					}
					elseif ($term_num == 12) {
						$term_num += 1;
						return '4A';
					}
					elseif ($term_num == 13) {
						$term_num += 1;
						return '4A Co-op';
					}
					else {
						return 0;
					}
				break;
				
			default:
				return 0;
		}
		
	}
	
	// This function returns Co-op on: true or false
	protected function Coop($term_num) {
		$stream = $this->stream;
		switch ($stream) {
			case '4S':
			case '4':
				if ($term_num % 2 == 0){
					return true;
				}
				else /* $term_num is odd */ {
					return false;
				}
				break;
				
			case '8':
			case '8S':
			case 'nano':
			case 'soft': 
				if ($term_num % 2 == 1){
					return true;
				}
				else /* $term_num is odd */ {
					return false;
				}
				break;
			default:
				return false;
				break;

		}
	}
}

/*
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, and/or publish	
copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:
 
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
?>