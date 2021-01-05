import React, { useState } from "react";
// import axios from "axios";
// import fs from "browserify-fs";
// import subscriberData from '../seed/subscribers.json'
// import emailjs, { init } from "emailjs-com";
// init("user_1GjKAL68bZKM7Dx2yvNea");

// This code will only work after the Analytics config has been
// completed in a higher level component
//
// Analytics.updateEndpoint({
//     attributes: {
//         interests: ['science', 'politics', 'travel'],
//         //..
//     },
//     userId: 'UserIdValue',
//     userAttributes: {
//         username: 'ilovethecloud'
//     }
// });

const subscribe = (e, setSubscribeSuccess) => {
	e.preventDefault();

	emailjs
		.sendForm(
			"service_tpex1uc",
			"template_zc1ta9l",
			e.target,
			"user_1GjKAL68bZKM7Dx2yvNea"
		)
		.then(
			(result) => {
				console.log(result);
				setSubscribeSuccess(true);
			},
			(error) => {
				console.log(error.text);
				setSubscribeSuccess(false);
			}
		);
};

// const newSubscriberData = subscriberData;
// newSubscriberData.push(e.target["email-input"].value);

// fs.mkdir('/subscribers', function() {
// 	fs.writeFile('/subscribers/subscribers.json', JSON.stringify(newSubscriberData), function() {
// 		fs.readFile('/subscribers/subscribers.json', 'utf-8', function(err, data) {
// 			if (!err) {
// 				console.log(`${newSubscriberData[newSubscriberData.length -1]} has successfully been subscribed!`)

// 			} else {
// 				console.log(`${newSubscriberData[newSubscriberData.length -1]} has NOT been subscribed! The following error has occured: ${err}`)

// 			}
// 		});
// 	});
// });

// axios
// 	.post("/api/subscribe", { email: e.target["email-input"].value })
// 	.then((res) => console.log(res.data));
// };

export default function Subscribe() {
	const [subscribeSuccess, setSubscribeSuccess] = useState(false);
	return (
		<form onSubmit={(e) => subscribe(e, setSubscribeSuccess)}>
			<input type='email' name='email-input' id='email-input' />
			<button type='submit'>Start Growing</button>
			{subscribeSuccess && <span>Subscribed!</span>}
		</form>
	);
}