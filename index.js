setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    let hrotation = 30 * htime + mtime / 2; // Hour hand movement
    let mrotation = 6 * mtime;             // Minute hand movement
    let srotation = 6 * stime;             // Second hand movement

    console.log(`Hours: ${hrotation}, Minutes: ${mrotation}, Seconds: ${srotation}`);

    document.querySelector('#hour').style.transform = `rotate(${hrotation}deg)`;
    document.querySelector('#minutes').style.transform = `rotate(${mrotation}deg)`;
    document.querySelector('#seconds').style.transform = `rotate(${srotation}deg)`;
}, 1000);
