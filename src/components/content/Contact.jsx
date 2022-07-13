import { useState, useRef } from "react";

import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [msg, setMsg] = useState("");
	const contactData = [name, lastName, email, number, msg];

	const [sentForm, setSentForm] = useState(false);
	const [sentFormError, setSentFormError] = useState(false);
	const [showRecaptcha, setShowRecaptcha] = useState(false);

	const emailRegExp =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const form = useRef();

	const sentIcons = {
		sent: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				fill="none"
				viewBox="0 0 48 48"
			>
				<g fill="#F6F6F6" clipPath="url(#clip0_228_151)">
					<path d="M47.892 2.058a1.5 1.5 0 00-1.95-1.95L2.301 17.565h-.003l-1.356.54a1.5 1.5 0 00-.246 2.661l1.23.78.003.006 14.985 9.534 4.77 7.494C24 42 24 39 24 37.5a13.499 13.499 0 0115.078-13.41l8.814-22.032zm-5.499 5.67L19.911 30.21l-.645-1.014a1.502 1.502 0 00-.462-.462l-1.014-.645L40.272 5.607l3.534-1.413-1.41 3.534h-.003z"></path>
					<path d="M48 37.5a10.5 10.5 0 11-21 0 10.5 10.5 0 0121 0zm-5.979-5.037a1.5 1.5 0 00-2.058.516l-3.51 5.85-1.641-1.641a1.502 1.502 0 10-2.124 2.124l2.322 2.319a2.25 2.25 0 003.522-.432l4.005-6.678a1.5 1.5 0 00-.516-2.058z"></path>
				</g>
				<defs>
					<clipPath id="clip0_228_151">
						<path fill="#fff" d="M0 0H48V48H0z"></path>
					</clipPath>
				</defs>
			</svg>
		),
		notSent: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				fill="none"
				viewBox="0 0 48 48"
			>
				<g fill="#F6F6F6" clipPath="url(#clip0_228_147)">
					<path d="M47.892 2.058a1.5 1.5 0 00-1.95-1.95L2.301 17.565h-.003l-1.356.54a1.5 1.5 0 00-.246 2.661l1.23.78.003.006 14.985 9.534 4.77 7.494C24 42 24 39 24 37.5a13.499 13.499 0 0115.078-13.41l8.814-22.032zm-5.499 5.67L19.911 30.21l-.645-1.014a1.502 1.502 0 00-.462-.462l-1.014-.645L40.272 5.607l3.534-1.413-1.41 3.534h-.003z"></path>
					<path d="M44.925 30.075a10.5 10.5 0 10-14.85 14.85 10.5 10.5 0 0014.85-14.85zm-12.729 2.121a7.504 7.504 0 019.441-.954L31.242 41.637a7.503 7.503 0 01.954-9.441zm1.17 11.562l10.392-10.395a7.502 7.502 0 01-10.395 10.395h.003z"></path>
				</g>
				<defs>
					<clipPath id="clip0_228_147">
						<path fill="#fff" d="M0 0H48V48H0z"></path>
					</clipPath>
				</defs>
			</svg>
		),
	};

	const sentFormAnimation = (icon, color) => (
		<div
			className={`sentFormAnimation absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-green-400 ${color}`}
		>
			{sentIcons[icon]}
		</div>
	);

	const resetForm = () => {
		setName("");
		setLastName("");
		setEmail("");
		setNumber("");
		setMsg("");

		setTimeout(() => {
			setSentForm(false);
			setSentFormError(false);
			setShowRecaptcha(false);
		}, 5000);
	};

	const createFormInput = (
		dataType,
		inputName,
		inputValue,
		setValue,
		inputContent
	) => (
		<div
			className={`inputBox relative w-full sm:w-[40%] ${
				sentForm || sentFormError ? "opacity-0" : "opacity-100"
			}`}
		>
			<input
				type={dataType}
				name={inputName}
				value={inputValue}
				placeholder=" "
				className={`w-full border-b-[1px] border-portfolio-wt bg-transparent py-1 pl-1 text-portfolio-wt outline-none ${
					inputValue !== "" && dataType !== "email"
						? inputValue.match(/^ *$/) !== null
							? "border-red-400"
							: "border-green-400"
						: null
				} ${
					inputValue !== "" && dataType === "email"
						? !String(inputValue).toLowerCase().match(emailRegExp)
							? "border-red-400"
							: "border-green-400"
						: null
				}`}
				required
				onChange={(e) => setValue(e.target.value)}
			/>
			<span className="pointer-events-none absolute left-1 translate-y-1 text-base tracking-wider text-portfolio-wt text-opacity-50 transition-all duration-300 ease-out">
				{inputContent}
			</span>
		</div>
	);

	// Form submission process

	const checkInputValues = () => {
		let invalidValues = [];

		// Null and Blank Spaces
		for (let i = 0; i < contactData.length; i++) {
			if (contactData[i] === null || contactData[i].match(/^ *$/) !== null) {
				invalidValues[i] = true;
			}
		}

		// Email address validation
		if (!String(contactData[2]).toLowerCase().match(emailRegExp)) {
			invalidValues.push(true);
		}

		// Disabled or not, the submit button
		if (invalidValues.length > 0) {
			return true;
		} else {
			return false;
		}
	};

	const checkRobots = (e) => {
		e.preventDefault();
		setShowRecaptcha(true);
	};

	const verifyRecaptcha = (value) => {
		if (value !== "") {
			submitForm();
		} else {
			setSentFormError(true);
			resetForm();
		}
	};

	const submitForm = () => {
		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					setSentForm(true);
				},
				(error) => {
					setSentFormError(true);
				}
			);

		resetForm();
	};

	return (
		<form
			className="contactAnimation flex h-full w-full flex-col flex-wrap items-center justify-between py-2 px-10 text-lg font-extralight tracking-widest text-portfolio-wt sm:flex-row md:px-16 lg:py-16 lg:px-32 xl:px-48"
			ref={form}
			onSubmit={checkRobots}
		>
			{/* Inputs: Name, Lastname, Email, Number/t.me */}
			{/* createFormInput(dataType, inputName, inputValue, setValue, inputContent) */}
			{createFormInput("text", "name", name, setName, "Name")}
			{createFormInput("text", "lastname", lastName, setLastName, "Lastname")}
			{createFormInput("email", "email", email, setEmail, "Email")}
			{createFormInput("text", "number", number, setNumber, "Number/t.me")}

			{/* Textarea: Message | Input: Submit */}
			<div
				className={`inputBox relative w-full ${
					sentForm || sentFormError ? "opacity-0" : "opacity-100"
				}`}
			>
				<textarea
					type="text"
					value={msg}
					placeholder=" "
					name="message"
					className={`h-full w-full resize-none border-b-[1px] border-portfolio-wt bg-transparent py-1 pl-1 text-portfolio-wt outline-none sm:h-32 ${
						msg !== ""
							? msg === null || msg.match(/^ *$/) !== null
								? "border-red-400"
								: "border-green-400"
							: ""
					} ${!contactData.includes("") ? "h-16" : null}`}
					required
					onChange={(e) => setMsg(e.target.value)}
				></textarea>
				<span className="pointer-events-none absolute left-1 translate-y-1 text-base tracking-wider text-portfolio-wt text-opacity-50 transition-all duration-300 ease-out">
					Message
				</span>

				{/* Submit */}
				<div className="absoulte flex w-full -translate-y-[6px] justify-end">
					<input
						type="submit"
						className="w-20 cursor-pointer rounded-b-md border-[1px] border-t-0 border-green-400 bg-green-400 py-1 font-bold tracking-widest text-portfolio-wt transition-all duration-300 ease-out hover:shadow-md hover:shadow-portfolio-wt disabled:cursor-default disabled:opacity-0 lg:w-24"
						value="Send"
						disabled={checkInputValues()}
					/>
				</div>
			</div>

			{/* reCAPTCHA */}
			{showRecaptcha ? (
				<div
					className={`absolute top-1/2 left-1/2 z-10 flex h-screen w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-5 bg-black bg-opacity-75 ${
						sentForm || sentFormError ? "opacity-0" : "opacity-100"
					}`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="80"
						height="72"
						fill="none"
						viewBox="0 0 80 72"
						className="animate-bounce"
					>
						<path
							fill="#d5d5d5"
							d="M69.09 7.2h-7.272V3.6h9.091c1.018 0 1.818.792 1.818 1.8v7.2c0 1.008-.8 1.8-1.818 1.8h-1.818V18h-3.636v-7.2h3.636V7.2zm-3.636 18h3.637v-3.6h-3.636v3.6zM58.182 3.6h-3.637V18h3.637V3.6zM80 46.8v10.8c0 1.98-1.636 3.6-3.636 3.6h-3.637v3.6c0 3.996-3.236 7.2-7.273 7.2H14.546a7.31 7.31 0 01-5.143-2.109 7.164 7.164 0 01-2.13-5.091v-3.6H3.636c-2 0-3.636-1.62-3.636-3.6V46.8c0-1.98 1.636-3.6 3.636-3.6h3.637c0-13.932 11.381-25.2 25.454-25.2h3.637v-4.572A7.13 7.13 0 0132.727 7.2C32.727 3.24 36 0 40 0c4 0 7.273 3.24 7.273 7.2a7.13 7.13 0 01-3.637 6.228V18h3.637c1.236 0 2.436.108 3.636.288V28.8h17.236a24.812 24.812 0 014.582 14.4h3.637c2 0 3.636 1.62 3.636 3.6zm-47.273 1.8a8.955 8.955 0 00-2.662-6.364 9.138 9.138 0 00-6.429-2.636 9.138 9.138 0 00-6.428 2.636 8.955 8.955 0 00-2.662 6.364c0 2.387.957 4.676 2.662 6.364a9.138 9.138 0 006.428 2.636 9.138 9.138 0 006.429-2.636 8.955 8.955 0 002.662-6.364zm32.727 0a8.955 8.955 0 00-2.662-6.364 9.138 9.138 0 00-6.428-2.636 9.138 9.138 0 00-6.429 2.636 8.955 8.955 0 00-2.662 6.364c0 2.387.957 4.676 2.662 6.364a9.138 9.138 0 006.429 2.636 9.138 9.138 0 006.428-2.636 8.955 8.955 0 002.662-6.364zm-7.272-27h-3.637v3.6h3.637v-3.6z"
						></path>
					</svg>
					<ReCAPTCHA
						sitekey={import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY}
						onChange={verifyRecaptcha}
						theme="dark"
					/>
				</div>
			) : null}

			{/* Form sent/notSent Animation */}
			{sentForm
				? sentFormAnimation("sent", "bg-green-400")
				: sentFormError
				? sentFormAnimation("notSent", "bg-red-400")
				: null}
		</form>
	);
};

export default Contact;
