// https://web.compass.lighthouselabs.ca/days/w02d2/activities/864

// Create a timer that beeps at input times in seconds

let times = process.argv.slice(2);

// Convert all non-numbers to NaN
times = times.map(time => Number(time))

// Filter all NaNs and all negative numbers
times = times.filter(time => time).filter(time => time >= 0); 

// loop through all the times
for (time of times) {
  setTimeout(() => process.stdout.write('\x07'), time * 1000);
}

// Print message to show all beeping completed
setTimeout(() => process.stdout.write('Completed\n'), Math.max(...times) * 1000);
