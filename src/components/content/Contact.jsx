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
			className={`w-16 h-16 bg-green-400 flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute rounded-xl sentFormAnimation ${color}`}
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
			className={`w-full sm:w-[40%] relative inputBox ${
				sentForm || sentFormError ? "opacity-0" : "opacity-100"
			}`}
		>
			<input
				type={dataType}
				name={inputName}
				value={inputValue}
				placeholder=" "
				className={`w-full pl-1 py-1 bg-transparent text-portfolio-wt border-b-[1px] border-portfolio-wt outline-none ${
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
			<span className="text-base text-portfolio-wt text-opacity-50 tracking-wider absolute left-1 translate-y-1 ease-out duration-300 transition-all pointer-events-none">
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
			className="w-full h-full py-2 lg:py-16 px-10 md:px-16 lg:px-32 xl:px-48 text-lg text-portfolio-wt font-extralight tracking-widest flex flex-wrap flex-col sm:flex-row justify-between items-center contactAnimation"
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
				className={`w-full relative inputBox ${
					sentForm || sentFormError ? "opacity-0" : "opacity-100"
				}`}
			>
				<textarea
					type="text"
					value={msg}
					placeholder=" "
					name="message"
					className={`w-full h-full sm:h-32 pl-1 py-1 bg-transparent text-portfolio-wt border-b-[1px] border-portfolio-wt resize-none outline-none ${
						msg !== ""
							? msg === null || msg.match(/^ *$/) !== null
								? "border-red-400"
								: "border-green-400"
							: ""
					} ${!contactData.includes("") ? "h-16" : null}`}
					required
					onChange={(e) => setMsg(e.target.value)}
				></textarea>
				<span className="text-base text-portfolio-wt text-opacity-50 tracking-wider absolute left-1 translate-y-1 ease-out duration-300 transition-all pointer-events-none">
					Message
				</span>

				{/* Submit */}
				<div className="w-full -translate-y-[6px] flex justify-end absoulte">
					<input
						type="submit"
						className="w-20 lg:w-24 py-1 bg-green-400 disabled:opacity-0 hover:shadow-md hover:shadow-portfolio-wt text-portfolio-wt font-bold tracking-widest border-[1px] border-t-0 border-green-400 rounded-b-md ease-out duration-300 transition-all cursor-pointer disabled:cursor-default"
						value="Send"
						disabled={checkInputValues()}
					/>
				</div>
			</div>

			{/* reCAPTCHA */}
			{showRecaptcha ? (
				<div
					className={`w-full h-screen bg-black bg-opacity-75 flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-10 ${
						sentForm || sentFormError ? "opacity-0" : "opacity-100"
					}`}
				>
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
